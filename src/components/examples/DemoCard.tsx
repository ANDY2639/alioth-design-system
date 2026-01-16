'use client';

import { useColorTheme } from '@/context/ColorContext';
import { COLOR_PALETTES, ColorTheme } from '@/lib/colorPalettes';

export default function DemoCard() {
  const { colorTheme } = useColorTheme();
  const palette = COLOR_PALETTES[colorTheme as ColorTheme];

  if (!palette) return null;

  const bgColor = palette.colors[0].hex; // shade 50
  const borderColor = palette.colors[3].hex; // shade 300
  const titleColor = palette.colors[8].hex; // shade 800
  const textColor = palette.colors[6].hex; // shade 600
  const baseColor = palette.colors[5].hex; // shade 500

  return (
    <div
      className="p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
          style={{ backgroundColor: baseColor }}
        />
        <h3
          className="text-lg font-semibold"
          style={{ color: titleColor }}
        >
          Tarjeta {palette.name}
        </h3>
      </div>
      <p
        className="text-sm"
        style={{ color: textColor }}
      >
        Esta es una tarjeta de demostración que cambia de color según la paleta seleccionada.
      </p>
    </div>
  );
}
