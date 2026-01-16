'use client';

import { useColorTheme } from '@/context/ColorContext';
import { AVAILABLE_THEMES, ColorTheme } from '@/lib/colorPalettes';

export default function ColorPalettePicker() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
        Selecciona la paleta de colores:
      </label>
      <div className="flex flex-wrap gap-3">
        {AVAILABLE_THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setColorTheme(theme.id as ColorTheme)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              colorTheme === theme.id
                ? 'ring-2 ring-offset-2 dark:ring-offset-neutral-900 ring-primary-500 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
            }`}
          >
            <span className="mr-2">{theme.emoji}</span>
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
