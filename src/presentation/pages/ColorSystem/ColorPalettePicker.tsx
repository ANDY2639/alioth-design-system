import { AVAILABLE_THEMES } from "@/presentation/data/colorPalettes";

export default function ColorPalettePicker() {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Selecciona la paleta de colores:</label>
      <div className="flex flex-wrap gap-3">
        {AVAILABLE_THEMES.map(theme => (
          <button key={theme.id} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200`}>
            <span className="mr-2">{theme.emoji}</span>
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
