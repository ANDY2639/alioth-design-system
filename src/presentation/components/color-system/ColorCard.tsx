"use client";

import { useColorTheme } from "@/presentation/context/ColorContext";
import { COLOR_PALETTES, ColorTheme } from "@/presentation/lib/colorPalettes";
import ColorSwatch from "./ColorSwatch";

export default function ColorCard() {
  const { colorTheme } = useColorTheme();
  const palette = COLOR_PALETTES[colorTheme as ColorTheme];

  if (!palette) return null;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {palette.emoji} {palette.name}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">{palette.description}</p>
      </div>

      {/* Color Swatches Grid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Paleta Completa (11 tonos)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
          {palette.colors.map(color => (
            <ColorSwatch key={color.shade} hex={color.hex} label={`${palette.id}-${color.shade}`} />
          ))}
        </div>
      </div>

      {/* Detalles de cada color */}
      <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Descripción de cada tono</h3>
        <div className="space-y-4">
          {palette.colors.map(color => (
            <div
              key={color.shade}
              className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
            >
              <div
                className="w-12 h-12 rounded-lg shrink-0 shadow border border-neutral-200 dark:border-neutral-600"
                style={{ backgroundColor: color.hex }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4 mb-1">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {palette.id}-{color.shade}
                  </p>
                  <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400">{color.hex}</p>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  <strong>Uso:</strong> {color.usage}
                </p>
                {color.example && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    <strong>Ejemplo:</strong> {color.example}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ejemplos de uso */}
      <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Ejemplos de uso</h3>
        <div className="flex flex-wrap gap-3">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-white`}
            style={{ backgroundColor: palette.baseColor }}
          >
            Botón {palette.name}
          </button>

          <div
            className={`px-6 py-3 rounded-lg border-2 font-medium transition-colors duration-200`}
            style={{
              borderColor: palette.baseColor,
              backgroundColor: palette.colors[0].hex,
              color: palette.colors[8].hex,
            }}
          >
            Badge {palette.name}
          </div>

          <div
            className={`px-6 py-3 rounded-lg font-mono text-sm`}
            style={{
              backgroundColor: palette.colors[1].hex,
              color: palette.colors[8].hex,
            }}
          >
            {palette.id}-500
          </div>
        </div>
      </div>
    </div>
  );
}
