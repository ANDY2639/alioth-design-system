'use client';

import { useColorTheme } from '@/context/ColorContext';
import { COLOR_PALETTES, ColorTheme } from '@/lib/colorPalettes';

const fontWeights = [
  { weight: 300, label: 'Light' },
  { weight: 400, label: 'Regular' },
  { weight: 500, label: 'Medium' },
  { weight: 600, label: 'Semibold' },
  { weight: 700, label: 'Bold' },
  { weight: 800, label: 'Extrabold' },
];

const fontSizes = [
  { size: 12, label: 'xs' },
  { size: 14, label: 'sm' },
  { size: 16, label: 'base' },
  { size: 18, label: 'lg' },
  { size: 20, label: 'xl' },
  { size: 24, label: '2xl' },
  { size: 30, label: '3xl' },
  { size: 36, label: '4xl' },
];

export default function FontShowcase() {
  const { colorTheme } = useColorTheme();
  const palette = COLOR_PALETTES[colorTheme as ColorTheme];

  if (!palette) return null;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          ✍️ Tipografía
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Fuente Poppins - Paleta: {palette.name}
        </p>
      </div>

      {/* Pesos de fuente */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          Pesos de fuente
        </h3>
        <div className="space-y-4">
          {fontWeights.map(({ weight, label }) => (
            <div key={weight} className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-700/50">
              <p
                style={{ fontWeight: weight, color: palette.baseColor }}
                className="text-2xl mb-2"
              >
                El rápido zorro marrón salta sobre el perro perezoso ({label})
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Font Weight: {weight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tamaños de fuente */}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          Tamaños de fuente
        </h3>
        <div className="space-y-4">
          {fontSizes.map(({ size, label }) => (
            <div key={size} className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-700/50">
              <p
                style={{
                  fontSize: `${size}px`,
                  color: palette.baseColor,
                  fontWeight: 500,
                }}
                className="mb-2"
              >
                Alioth Design System
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {label} ({size}px)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
