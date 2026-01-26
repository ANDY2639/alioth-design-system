#!/usr/bin/env node

/**
 * HEX to HSL Color Converter
 * Convierte colores HEX a HSL para usar con variables CSS
 *
 * Uso: node convert-colors.js
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ============================================
// FUNCIONES DE CONVERSIÓN
// ============================================

/**
 * Convierte HEX a RGB
 * @param {string} hex - Color en formato hexadecimal (#RRGGBB)
 * @returns {object} { r, g, b } en rango 0-255
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error(`Invalid hex color: ${hex}`);

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

/**
 * Convierte RGB a HSL
 * @param {number} r - Rojo (0-255)
 * @param {number} g - Verde (0-255)
 * @param {number} b - Azul (0-255)
 * @returns {object} { h, s, l } - h: 0-360, s: 0-100, l: 0-100
 */
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}

/**
 * Convierte HEX directamente a HSL
 * @param {string} hex - Color en formato #RRGGBB
 * @returns {string} Formato: "h s% l%"
 */
function hexToHsl(hex) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  return `${h} ${s}% ${l}%`;
}

// ============================================
// LÓGICA PRINCIPAL
// ============================================

function main() {
  const cssPath = join(__dirname, "../src/app/globals.css");

  console.log("\n📖 Leyendo archivo CSS...\n");
  let cssContent = readFileSync(cssPath, "utf-8");

  // Extraer colores HEX del formato --color-name: #value;
  const hexPattern = /--color-(\w+-\d+):\s*(#[0-9A-Fa-f]{6});/g;
  const conversions = {};
  const colorsByGroup = {};
  let match;

  console.log("🔍 Extrayendo colores HEX...\n");

  while ((match = hexPattern.exec(cssContent)) !== null) {
    const colorName = match[1];
    const hexValue = match[2];
    const hslValue = hexToHsl(hexValue);

    conversions[colorName] = {
      hex: hexValue,
      hsl: hslValue,
      cssVariable: `--heroui-${colorName}`,
    };

    // Agrupar por tipo de color
    const colorType = colorName.split("-")[0];
    if (!colorsByGroup[colorType]) {
      colorsByGroup[colorType] = [];
    }
    colorsByGroup[colorType].push({
      name: colorName,
      hex: hexValue,
      hsl: hslValue,
    });
  }

  // ============================================
  // MOSTRAR RESULTADOS
  // ============================================

  console.log("✅ Conversiones encontradas:\n");
  console.log(`Total de colores: ${Object.keys(conversions).length}\n`);

  Object.entries(colorsByGroup).forEach(([group, colors]) => {
    console.log(`📦 ${group.toUpperCase()} (${colors.length} variantes):`);
    colors.forEach(color => {
      console.log(`   ${color.name}: ${color.hex} → ${color.hsl}`);
    });
    console.log("");
  });

  // ============================================
  // GENERAR SALIDA
  // ============================================

  // Generar variables HeroUI para :root
  let heroUIVariables = "\n  /* ===========================\n     HEROUI Color Variables (Converted from HEX)\n     =========================== */\n";

  Object.entries(colorsByGroup).forEach(([group, colors]) => {
    heroUIVariables += `\n  /* ${group.charAt(0).toUpperCase() + group.slice(1)} */\n`;
    colors.forEach(color => {
      heroUIVariables += `  --heroui-${color.name}: ${color.hsl};\n`;
    });
  });

  // ============================================
  // ACTUALIZAR CSS
  // ============================================

  // 1. Agregar variables HeroUI en :root
  const rootMatch = cssContent.match(/:root\s*\{([^}]+)\}/s);
  if (rootMatch) {
    const rootContent = rootMatch[1];
    const newRootContent = rootContent + heroUIVariables;
    cssContent = cssContent.replace(/:root\s*\{[^}]+\}/s, `:root {${newRootContent}\n}`);
  }

  // 2. Reemplazar colores en @theme - Buscar y reemplazar línea por línea
  Object.entries(conversions).forEach(([colorName, data]) => {
    // Buscar la línea exacta: --color-name: #hex;
    const oldLine = `--color-${colorName}: ${data.hex};`;
    const newLine = `--color-${colorName}: hsl(var(--heroui-${colorName}));`;

    cssContent = cssContent.replace(oldLine, newLine);
  });

  // Guardar archivo actualizado
  const cssOutputPath = join(__dirname, "../src/app/globals.css.updated");
  writeFileSync(cssOutputPath, cssContent);
  console.log(`📄 Archivo CSS actualizado guardado en: src/app/globals.css.updated\n`);

  // ============================================
  // GUARDAR ARCHIVO DE CONVERSIONES
  // ============================================

  const outputJson = {
    timestamp: new Date().toISOString(),
    totalColors: Object.keys(conversions).length,
    conversions: conversions,
    groupsByType: colorsByGroup,
  };

  const jsonPath = join(__dirname, "../color-conversions.json");
  writeFileSync(jsonPath, JSON.stringify(outputJson, null, 2));
  console.log(`💾 Conversiones guardadas en: color-conversions.json\n`);

  // ============================================
  // MOSTRAR VISTA PREVIA
  // ============================================

  console.log("\n📋 VISTA PREVIA - Variables para :root:\n");
  console.log(heroUIVariables);

  let previewTheme = "\n  /* Color Palette - Using HeroUI Variables */\n";
  Object.entries(colorsByGroup).forEach(([group, colors]) => {
    previewTheme += `\n  /* Color ${group.charAt(0).toUpperCase() + group.slice(1)} */\n`;
    colors.forEach(color => {
      previewTheme += `  --color-${color.name}: hsl(var(--heroui-${color.name}));\n`;
    });
  });

  console.log("\n📋 VISTA PREVIA - Reemplazos para @theme:\n");
  console.log(previewTheme);

  console.log("\n" + "=".repeat(60));
  console.log("✨ ¡Conversión completada exitosamente!");
  console.log("=".repeat(60) + "\n");
  console.log("📌 PRÓXIMOS PASOS:");
  console.log("  1. Revisa: color-conversions.json");
  console.log("  2. Revisa: src/app/globals.css.updated");
  console.log("  3. Si todo está bien, copia el contenido a globals.css");
  console.log("  4. Elimina los archivos temporales\n");
}

// ============================================
// EJECUTAR
// ============================================

try {
  main();
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
