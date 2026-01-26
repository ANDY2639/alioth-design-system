"use client";

import { Heading } from "@/presentation/components/Typography";
import { TYPOGRAPHY_CONFIG, TYPOGRAPHY_USE_CASES, TYPOGRAPHY_GUIDELINES } from "@/presentation/data/typography";

/**
 * Typography - Documentación visual del sistema tipográfico Alioth
 *
 * Muestra todos los estilos tipográficos con:
 * - Estilos base (H1-H6, Body1-2, Caption)
 * - Variantes funcionales
 * - Ejemplos de uso real
 * - Guías de cuándo usar cada estilo
 */
export default function Typography() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 transition-colors duration-300 space-y-12">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-700 pb-6">
        <Heading level={1} className="text-neutral-900 dark:text-neutral-100 mb-2">
          🅰️ Tipografía
        </Heading>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">Fuente Principal: Poppins - Sistema tipográfico Alioth Design System</p>
      </header>

      {/* Sección 1: Headings - Estilos Base */}
      <section>
        <Heading level={2} className="text-neutral-900 dark:text-neutral-100 mb-6">
          Headings - Estilos Base
        </Heading>
        <div className="space-y-6">
          {Object.entries(TYPOGRAPHY_CONFIG.headings).map(([key, style]) => (
            <div key={key} className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
              {/* Ejemplo del estilo */}
              <div className="mb-4">
                <p
                  style={{
                    fontSize: `${style.fontSize}px`,
                    lineHeight: style.lineHeight,
                    fontWeight: style.fontWeight,
                  }}
                  className="text-neutral-900 dark:text-neutral-100"
                >
                  {style.example}
                </p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Estilo:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{key.toUpperCase()}</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Tamaño:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{style.fontSize}px</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Line-height:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{Math.round(style.lineHeight * 100)}%</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Weight:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{style.fontWeight}</p>
                </div>
              </div>

              <div className="mt-4 text-sm">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">Uso recomendado:</span>
                <p className="text-neutral-600 dark:text-neutral-400">{style.use}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 2: Body - Estilos Base */}
      <section>
        <Heading level={2} className="text-neutral-900 dark:text-neutral-100 mb-6">
          Body - Estilos Base
        </Heading>
        <div className="space-y-6">
          {Object.entries(TYPOGRAPHY_CONFIG.body).map(([key, style]) => (
            <div key={key} className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
              {/* Ejemplo del estilo */}
              <div className="mb-4">
                <p
                  style={{
                    fontSize: `${style.fontSize}px`,
                    lineHeight: style.lineHeight,
                    fontWeight: style.fontWeight,
                  }}
                  className="text-neutral-900 dark:text-neutral-100"
                >
                  {style.example}
                </p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Estilo:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Tamaño:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{style.fontSize}px</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Line-height:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{Math.round(style.lineHeight * 100)}%</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Weight:</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{style.fontWeight}</p>
                </div>
              </div>

              <div className="mt-4 text-sm">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">Uso:</span>
                <p className="text-neutral-600 dark:text-neutral-400">{style.use}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 3: Variantes Funcionales */}
      <section>
        <Heading level={2} className="text-neutral-900 dark:text-neutral-100 mb-4">
          Variantes Funcionales
        </Heading>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">Usamos para apoyar jerarquías o adaptarnos a casos especiales.</p>

        {/* Headings Variants */}
        <div className="mb-8">
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Headings - Variantes
          </Heading>
          <div className="space-y-4">
            {Object.entries(TYPOGRAPHY_CONFIG.headings).map(([key, style]) =>
              style.variants?.map((variant, index) => (
                <div
                  key={`${key}-variant-${index}`}
                  className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex justify-between items-start font-bold">
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">{variant.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{variant.use}</p>
                    </div>
                    <span className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">
                      Weight: {variant.fontWeight}
                    </span>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>

        {/* Body Variants */}
        <div>
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Body - Variantes
          </Heading>
          <div className="space-y-4">
            {Object.entries(TYPOGRAPHY_CONFIG.body).map(([key, style]) =>
              style.variants?.map((variant, index) => (
                <div
                  key={`${key}-variant-${index}`}
                  className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">{variant.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{variant.use}</p>
                    </div>
                    <span className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">
                      Weight: {variant.fontWeight}
                    </span>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      {/* Sección 4: Ejemplos de Uso Real */}
      <section>
        <Heading level={2} className="text-neutral-900 dark:text-neutral-100 mb-6">
          🖋 Ejemplos de Uso Tipográfico
        </Heading>

        {/* Encabezados */}
        <div className="mb-8">
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Encabezados
          </Heading>
          <div className="space-y-6">
            {TYPOGRAPHY_USE_CASES.headings.map((item, index) => (
              <div key={index} className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{item.level}</span>
                </div>
                <p
                  style={{
                    fontSize: `${TYPOGRAPHY_CONFIG.headings[item.level.toLowerCase() as keyof typeof TYPOGRAPHY_CONFIG.headings].fontSize}px`,
                    lineHeight: TYPOGRAPHY_CONFIG.headings[item.level.toLowerCase() as keyof typeof TYPOGRAPHY_CONFIG.headings].lineHeight,
                    fontWeight: TYPOGRAPHY_CONFIG.headings[item.level.toLowerCase() as keyof typeof TYPOGRAPHY_CONFIG.headings].fontWeight,
                  }}
                  className="text-neutral-900 dark:text-neutral-100 mb-3"
                >
                  {item.example}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold">Contexto:</span> {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Párrafos */}
        <div className="mb-8">
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Párrafos
          </Heading>
          <div className="space-y-6">
            {TYPOGRAPHY_USE_CASES.paragraphs.map((item, index) => (
              <div key={index} className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{item.type}</span>
                </div>
                <p
                  className="text-neutral-900 dark:text-neutral-100 mb-3"
                  style={{
                    fontSize: item.type === "Caption" ? "12px" : "14px",
                    lineHeight: 1.5,
                    fontWeight: item.type === "Body 1" ? 500 : 400,
                  }}
                >
                  {item.example}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold">Contexto:</span> {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Listas */}
        <div className="mb-8">
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Listas
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Lista Ordenada */}
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
              <Heading level={4} className="text-neutral-900 dark:text-neutral-100 mb-2">
                {TYPOGRAPHY_USE_CASES.lists.ordered.title}
              </Heading>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{TYPOGRAPHY_USE_CASES.lists.ordered.context}</p>
              <ol className="list-decimal list-inside space-y-2 text-neutral-900 dark:text-neutral-100">
                {TYPOGRAPHY_USE_CASES.lists.ordered.items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Lista No Ordenada */}
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
              <Heading level={4} className="text-neutral-900 dark:text-neutral-100 mb-2">
                {TYPOGRAPHY_USE_CASES.lists.unordered.title}
              </Heading>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{TYPOGRAPHY_USE_CASES.lists.unordered.context}</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-900 dark:text-neutral-100">
                {TYPOGRAPHY_USE_CASES.lists.unordered.items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enlaces */}
        <div className="mb-8">
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Enlaces
          </Heading>
          <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
            <p className="text-sm text-neutral-900 dark:text-neutral-100 mb-4">{TYPOGRAPHY_USE_CASES.links.example}</p>
            <div className="text-sm space-y-2">
              <p className="font-semibold text-neutral-700 dark:text-neutral-300">Propiedades:</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
                {TYPOGRAPHY_USE_CASES.links.properties.map((prop, index) => (
                  <li key={index}>{prop}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Notas / Informativos */}
        <div>
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            Notas / Informativos
          </Heading>
          <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Uso: {TYPOGRAPHY_USE_CASES.notes.context}</p>
            <p className="text-sm text-neutral-900 dark:text-neutral-100 mb-4">{TYPOGRAPHY_USE_CASES.notes.example}</p>
            <div className="text-sm space-y-2">
              <p className="font-semibold text-neutral-700 dark:text-neutral-300">Propiedades:</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
                {TYPOGRAPHY_USE_CASES.notes.properties.map((prop, index) => (
                  <li key={index}>{prop}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Condiciones de Uso */}
      <section>
        <Heading level={2} className="text-neutral-900 dark:text-neutral-100 mb-6">
          Condiciones de Uso Correcto
        </Heading>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Cuándo SÍ usarlo */}
          <div className="p-6 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
            <Heading level={3} className="text-green-900 dark:text-green-100 mb-4">
              ✔️ Cuándo SÍ usarlo
            </Heading>
            <ul className="list-disc list-inside space-y-2 text-sm text-green-800 dark:text-green-200">
              {TYPOGRAPHY_GUIDELINES.when_to_use.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cuándo NO usarlo */}
          <div className="p-6 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
            <Heading level={3} className="text-red-900 dark:text-red-100 mb-4">
              ❌ Cuándo NO usarlo
            </Heading>
            <ul className="list-disc list-inside space-y-2 text-sm text-red-800 dark:text-red-200">
              {TYPOGRAPHY_GUIDELINES.when_not_to_use.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Principios */}
        <div className="mt-6 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
          <Heading level={3} className="text-neutral-900 dark:text-neutral-100 mb-4">
            🧪 Principios de Font-Size y Line-Height
          </Heading>
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Font Size:</span> {TYPOGRAPHY_GUIDELINES.principles.fontSize}
            </p>
            <p>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Line Height:</span> {TYPOGRAPHY_GUIDELINES.principles.lineHeight}
            </p>
            <p>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">En Alioth:</span> {TYPOGRAPHY_GUIDELINES.principles.range}
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Conclusión */}
      <footer className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
        <div className="p-6 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
          <Heading level={3} className="text-primary-900 dark:text-primary-100 mb-2">
            👉 Conclusión
          </Heading>
          <p className="text-sm text-primary-800 dark:text-primary-200">
            La tipografía establece la estructura visual del producto, guiando la lectura y garantizando claridad, consistencia y accesibilidad en
            todas las interfaces.
          </p>
        </div>
      </footer>
    </div>
  );
}
