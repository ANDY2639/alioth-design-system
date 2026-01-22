"use client";

import { useColorTheme } from "@/context/ColorContext";
import { COLOR_PALETTES, ColorTheme } from "@/lib/colorPalettes";

export default function DemoButton() {
  const { colorTheme } = useColorTheme();
  const palette = COLOR_PALETTES[colorTheme as ColorTheme];

  if (!palette) return null;

  const baseColor = palette.colors[7].hex; // shade 700
  const hoverColor = palette.colors[8].hex; // shade 800

  return (
    <button
      className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-95"
      style={{
        backgroundColor: baseColor,
        borderColor: baseColor,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverColor;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = baseColor;
      }}
    >
      Botón {palette.name}
    </button>
  );
}
