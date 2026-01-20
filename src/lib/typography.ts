/**
 * TIPOGRAFÍA - Alioth Design System
 *
 * Configuración centralizada del sistema tipográfico.
 * Define estilos base, variantes funcionales y casos de uso.
 */

export interface TypographyVariant {
  name: string;
  fontWeight: number;
  use: string;
}

export interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  description: string;
  use: string;
  example: string;
  variants?: TypographyVariant[];
}

export interface TypographyConfig {
  headings: {
    h1: TypographyStyle;
    h2: TypographyStyle;
    h3: TypographyStyle;
    h4: TypographyStyle;
    h5: TypographyStyle;
    h6: TypographyStyle;
  };
  body: {
    body1: TypographyStyle;
    body2: TypographyStyle;
    caption: TypographyStyle;
  };
}

/**
 * Configuración completa del sistema tipográfico
 * Basado en el Design System de Alioth
 */
export const TYPOGRAPHY_CONFIG: TypographyConfig = {
  headings: {
    h1: {
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 700,
      description: 'Títulos principales',
      use: 'Títulos principales de páginas',
      example: 'Dashboard general de proyectos',
      variants: [
        {
          name: 'H1 Light',
          fontWeight: 300,
          use: 'Hero suaves, layouts aireados',
        },
      ],
    },
    h2: {
      fontSize: 32,
      lineHeight: 1.2,
      fontWeight: 700,
      description: 'Secciones principales',
      use: 'Títulos de sección',
      example: 'Resumen de actividades',
      variants: [
        {
          name: 'H2 Light',
          fontWeight: 300,
          use: 'Portales, dashboards limpios',
        },
      ],
    },
    h3: {
      fontSize: 28,
      lineHeight: 1.3,
      fontWeight: 600,
      description: 'Subtítulos o encabezados secundarios',
      use: 'Encabezados destacados',
      example: 'Proyectos activos',
      variants: [
        {
          name: 'H3 Regular',
          fontWeight: 400,
          use: 'Subtítulos discretos',
        },
      ],
    },
    h4: {
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 600,
      description: 'Titulares funcionales',
      use: 'Divisiones internas',
      example: 'Información del proveedor',
      variants: [
        {
          name: 'H4 Regular',
          fontWeight: 400,
          use: 'Secciones secundarias',
        },
      ],
    },
    h5: {
      fontSize: 20,
      lineHeight: 1.4,
      fontWeight: 500,
      description: 'Estructura interna o labels destacados',
      use: 'Subtítulos, bloques informativos',
      example: 'Datos de contacto',
    },
    h6: {
      fontSize: 16,
      lineHeight: 1.4,
      fontWeight: 500,
      description: 'Mínimos encabezados',
      use: 'Labels importantes, encabezados pequeños',
      example: 'Estado del proceso',
      variants: [
        {
          name: 'H6 Regular',
          fontWeight: 400,
          use: 'Labels suaves, tarjetas, metadatos',
        },
        {
          name: 'H6 Light',
          fontWeight: 300,
          use: 'Métricas, datos, visualizaciones',
        },
        {
          name: 'H6 Bold',
          fontWeight: 700,
          use: 'Énfasis en títulos pequeños',
        },
      ],
    },
  },
  body: {
    body1: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 500,
      description: 'Texto principal',
      use: 'Texto largo, descripciones',
      example: 'Este módulo permite gestionar proveedores, revisar documentos y controlar el avance del PPM.',
      variants: [
        {
          name: 'Body Semibold',
          fontWeight: 600,
          use: 'Para destacar palabras sin usar color',
        },
        {
          name: 'Body Light',
          fontWeight: 300,
          use: 'Para textos complementarios muy suaves',
        },
      ],
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
      description: 'Texto estándar',
      use: 'Texto corto con énfasis, inputs, tablas',
      example: 'Para continuar, selecciona un proveedor o carga un nuevo documento.',
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 400,
      description: 'Texto secundario',
      use: 'Notas, información secundaria',
      example: 'Última actualización hace 5 minutos.',
    },
  },
};

/**
 * Casos de uso específicos según la Parte 4 del Design System
 */
export const TYPOGRAPHY_USE_CASES = {
  headings: [
    {
      level: 'H1',
      example: 'Dashboard general de proyectos',
      context: 'Páginas principales, vistas raíz, headers destacados',
    },
    {
      level: 'H2',
      example: 'Resumen de actividades',
      context: 'Bloques clave dentro de una página',
    },
    {
      level: 'H3',
      example: 'Proyectos activos',
      context: 'Subsecciones dentro de un módulo',
    },
    {
      level: 'H4',
      example: 'Información del proveedor',
      context: 'Etiquetas grandes, módulos internos, tarjetas',
    },
    {
      level: 'H5',
      example: 'Datos de contacto',
      context: 'Estructura interna o labels destacados',
    },
    {
      level: 'H6',
      example: 'Estado del proceso',
      context: 'Mínimos encabezados en tablas o UI compacta',
    },
  ],
  paragraphs: [
    {
      type: 'Body 1',
      example: 'Este módulo permite gestionar proveedores, revisar documentos y controlar el avance del PPM.',
      context: 'Textos principales, descripciones',
    },
    {
      type: 'Body 2',
      example: 'Para continuar, selecciona un proveedor o carga un nuevo documento.',
      context: 'Textos estándar, instrucciones generales',
    },
    {
      type: 'Caption',
      example: 'Última actualización hace 5 minutos.',
      context: 'Notas, textos secundarios',
    },
  ],
  lists: {
    ordered: {
      title: 'Lista ordenada',
      context: 'Para pasos secuenciales',
      items: ['Selecciona un proveedor', 'Revisa los documentos', 'Aprueba o rechaza el proceso'],
    },
    unordered: {
      title: 'Lista no ordenada',
      context: 'Para elementos sin orden',
      items: ['Documentos pendientes', 'Información incompleta', 'Registro actualizado'],
    },
  },
  links: {
    properties: [
      'Color primario (según módulo)',
      'Siempre subrayado en hover',
      'No usar para acciones principales (esas son botones)',
    ],
    example: 'Para más información revisa la guía del proveedor.',
  },
  notes: {
    context: 'Avisos, aclaraciones, disclaimers',
    properties: [
      'Line-height debe ser generoso para que el texto se lea fácil.',
      'Contraste alto entre 800 - 950 según el contexto del fondo y otros elementos',
    ],
    example: 'Nota: Algunos campos solo pueden ser editados por el administrador del PPM.',
  },
};

/**
 * Condiciones de uso correcto del sistema tipográfico
 */
export const TYPOGRAPHY_GUIDELINES = {
  when_to_use: [
    'Se necesita mantener una jerarquía clara y consistente',
    'Se construyen layouts de producto (dashboards, formularios, listados)',
    'Se requiere equilibrio entre densidad de contenido y legibilidad',
    'Los headings deben guiar la lectura visual rápidamente',
  ],
  when_not_to_use: [
    'Se necesiten estilos decorativos (no existen en el sistema)',
    'Se intente usar headings como texto regular para ahorrar espacio',
    'Se mezclen demasiados pesos generando ruido visual',
    'Se use Light como texto base (reduce accesibilidad)',
  ],
  principles: {
    fontSize: 'El tamaño del texto. Construye la jerarquía visual.',
    lineHeight: 'El espacio vertical entre líneas. Define la legibilidad.',
    range: 'En Alioth usamos line-height entre 120% y 150% según la densidad del contenido.',
  },
};
