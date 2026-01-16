'use client';

import { useColorTheme } from '@/context/ColorContext';
import { COLOR_PALETTES, ColorTheme } from '@/lib/colorPalettes';

export default function DemoBadge() {
  const { colorTheme } = useColorTheme();
  const palette = COLOR_PALETTES[colorTheme as ColorTheme];

  if (!palette) return null;

  const bgColor = palette.colors[0].hex; // shade 50
  const borderColor = palette.colors[4].hex; // shade 400
  const textColor = palette.colors[7].hex; // shade 700

  return (
    <div
      className="px-4 py-2 rounded-full border-2 font-medium inline-block transition-all duration-200"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
    >
      Badge {palette.name}
    </div>
  );
}
