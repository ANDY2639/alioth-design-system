"use client";

import { useColorTheme } from "@/presentation/contexts/Color/useColorTheme";
import { COLOR_PALETTES } from "@/presentation/data/colorPalettes";

export default function DemoButton() {
  const { colorTheme } = useColorTheme();
  const palette = COLOR_PALETTES[colorTheme];

  if (!palette) return null;

  const baseColor = palette.colors[7].hex; // shade 700
  const hoverColor = palette.colors[8].hex; // shade 800

  return (
    <button
      className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-95"
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
