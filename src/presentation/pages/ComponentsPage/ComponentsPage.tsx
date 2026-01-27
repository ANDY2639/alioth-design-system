import DemoBadge from "./components/DemoBadge/DemoBadge";
import DemoButton from "./components/DemoButton/DemoButton";
import DemoCard from "./components/DemoCard/DemoCard";

export default function ComponentsPage() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">🧩 Componentes de Ejemplo</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">Componentes que reaccionan dinámicamente al cambio de paleta</p>
      </div>

      {/* Botón */}
      <div className="mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Botón</h3>
        <DemoButton />
      </div>

      {/* Badge */}
      <div className="mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Badge</h3>
        <DemoBadge />
      </div>

      {/* Tarjeta */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Tarjeta</h3>
        <DemoCard />
      </div>

      {/* Grid de ejemplos */}
      <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Componentes en acción</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <DemoCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
