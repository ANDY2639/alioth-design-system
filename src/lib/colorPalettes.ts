export type ColorTheme = "primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral";

export interface ColorShade {
  shade: number;
  hex: string;
  usage: string;
  example?: string;
}

export interface ColorPalette {
  id: ColorTheme;
  name: string;
  emoji: string;
  description: string;
  baseColor: string;
  colors: ColorShade[];
}

export const COLOR_PALETTES: Record<ColorTheme, ColorPalette> = {
  primary: {
    id: "primary",
    name: "Primary",
    emoji: "🔵",
    description: "Color principal de marca - Azul",
    baseColor: "#5B92D6",
    colors: [
      {
        shade: 50,
        hex: "#F2F7FC",
        usage: "Fondos ultra suaves",
        example: "Backgrounds de tarjetas",
      },
      {
        shade: 100,
        hex: "#E1EDF8",
        usage: "Fondos suaves",
        example: "Table rows hover",
      },
      {
        shade: 200,
        hex: "#CADFF3",
        usage: "Fondos destacados",
        example: "Banners informativos suaves",
      },
      {
        shade: 300,
        hex: "#A5CBEB",
        usage: "Acentos ligeros",
        example: "Iconos, badges suaves",
      },
      {
        shade: 400,
        hex: "#7BAFDF",
        usage: "Líneas, bordes activos",
        example: "Borde de inputs activos",
      },
      {
        shade: 500,
        hex: "#5B92D6",
        usage: "Acciones secundarias",
        example: "Botones secundarios, links",
      },
      {
        shade: 600,
        hex: "#4779C9",
        usage: "Hover botón primario",
        example: "Botón primario hover",
      },
      {
        shade: 700,
        hex: "#3D65B8",
        usage: "Estados activos",
        example: "Botón principal por defecto",
      },
      {
        shade: 800,
        hex: "#375396",
        usage: "Color de botón principal",
        example: "Botón primario presionado",
      },
      {
        shade: 900,
        hex: "#314877",
        usage: "Títulos oscuros",
        example: "Headings, subtítulos",
      },
      {
        shade: 950,
        hex: "#1F2A44",
        usage: "Color principal de marca",
        example: "Brand core, navbar",
      },
    ],
  },
  secondary: {
    id: "secondary",
    name: "Secondary",
    emoji: "💜",
    description: "Color secundario - Violeta",
    baseColor: "#6B5BFF",
    colors: [
      {
        shade: 50,
        hex: "#ECEFFF",
        usage: "Fondos ultra suaves",
        example: "Tarjetas claras",
      },
      {
        shade: 100,
        hex: "#DDE1FF",
        usage: "Fondos suaves",
        example: "Hover ligero en chips",
      },
      {
        shade: 200,
        hex: "#C2C8FF",
        usage: "Acentos suaves",
        example: "Etiquetas, íconos suaves",
      },
      {
        shade: 300,
        hex: "#9CA2FF",
        usage: "Acentos notorios",
        example: "Badges informativos",
      },
      {
        shade: 400,
        hex: "#7875FF",
        usage: "Líneas/accent borders",
        example: "Dividers, outline buttons",
      },
      {
        shade: 500,
        hex: "#6B5BFF",
        usage: "Color secundario base",
        example: "Botón secundario default",
      },
      {
        shade: 600,
        hex: "#5836F5",
        usage: "Hover",
        example: "Hover de botón secundario",
      },
      {
        shade: 700,
        hex: "#4C2AD8",
        usage: "Estado activo",
        example: "Botón secundario activo",
      },
      {
        shade: 800,
        hex: "#3D25AE",
        usage: "Acento oscuro",
        example: "Acentos fuertes",
      },
      {
        shade: 900,
        hex: "#352689",
        usage: "Profundidad alta",
        example: "Títulos secundarios",
      },
      {
        shade: 950,
        hex: "#211650",
        usage: "Profundidad extrema",
        example: "Fondos oscuros",
      },
    ],
  },
  success: {
    id: "success",
    name: "Success",
    emoji: "✅",
    description: "Estados de éxito - Verde",
    baseColor: "#22C55E",
    colors: [
      {
        shade: 50,
        hex: "#F0FDF4",
        usage: "Fondos de éxito suaves",
        example: "Notificaciones exitosas",
      },
      {
        shade: 100,
        hex: "#DCFCE7",
        usage: "Fondos de éxito",
        example: "Cards de confirmación",
      },
      {
        shade: 200,
        hex: "#BBF7D0",
        usage: "Banners de éxito",
        example: "Alerts positivos",
      },
      {
        shade: 300,
        hex: "#86EFAC",
        usage: "Iconos de éxito",
        example: "Check marks",
      },
      {
        shade: 400,
        hex: "#4ADE80",
        usage: "Bordes de éxito",
        example: "Separadores",
      },
      {
        shade: 500,
        hex: "#22C55E",
        usage: "Acciones exitosas",
        example: "Botones de confirmación",
      },
      {
        shade: 600,
        hex: "#16A34A",
        usage: "Botones de éxito",
        example: "Botones de envío",
      },
      {
        shade: 700,
        hex: "#15803D",
        usage: "Estados activos",
        example: "Estados confirmados",
      },
      {
        shade: 800,
        hex: "#166534",
        usage: "Elementos destacados",
        example: "Backgrounds oscuros",
      },
      {
        shade: 900,
        hex: "#14532D",
        usage: "Textos de éxito",
        example: "Mensajes de éxito",
      },
      {
        shade: 950,
        hex: "#052E16",
        usage: "Elementos oscuros",
        example: "Fondos muy oscuros",
      },
    ],
  },
  warning: {
    id: "warning",
    name: "Warning",
    emoji: "⚠️",
    description: "Advertencias - Amarillo",
    baseColor: "#F59E0B",
    colors: [
      {
        shade: 50,
        hex: "#FFFBEB",
        usage: "Fondos ultra suaves",
        example: "Alertas informativas leves",
      },
      {
        shade: 100,
        hex: "#FEF3C7",
        usage: "Fondos suaves",
        example: "Fondos de banners",
      },
      {
        shade: 200,
        hex: "#FDE68A",
        usage: "Bordes suaves",
        example: "Dividers de advertencia",
      },
      {
        shade: 300,
        hex: "#FCD34D",
        usage: "Acentos ligeros",
        example: "Iconos warning",
      },
      {
        shade: 400,
        hex: "#FBBF24",
        usage: "Acento medio",
        example: "Chips amarillos",
      },
      {
        shade: 500,
        hex: "#F59E0B",
        usage: "Color base",
        example: "Estado warning",
      },
      {
        shade: 600,
        hex: "#D97706",
        usage: "Hover",
        example: "Botones warning hover",
      },
      {
        shade: 700,
        hex: "#B45309",
        usage: "Estado activo",
        example: "Badges de riesgo",
      },
      {
        shade: 800,
        hex: "#92400E",
        usage: "Profundidad alta",
        example: "Secciones fuertes",
      },
      {
        shade: 900,
        hex: "#78350F",
        usage: "Profundidad extrema",
        example: "Fondos intensos",
      },
      {
        shade: 950,
        hex: "#451A03",
        usage: "Depth UI",
        example: "Alto contraste",
      },
    ],
  },
  error: {
    id: "error",
    name: "Error",
    emoji: "❌",
    description: "Errores y alertas - Rojo",
    baseColor: "#EF4444",
    colors: [
      {
        shade: 50,
        hex: "#FEF2F2",
        usage: "Fondos ultra suaves",
        example: "Alertas de error suaves",
      },
      {
        shade: 100,
        hex: "#FEE2E2",
        usage: "Fondos suaves",
        example: "Background de error leve",
      },
      {
        shade: 200,
        hex: "#FECACA",
        usage: "Bordes suaves",
        example: "Dividers de error",
      },
      {
        shade: 300,
        hex: "#FCA5A5",
        usage: "Acentos ligeros",
        example: "Iconos",
      },
      {
        shade: 400,
        hex: "#F87171",
        usage: "Acento marcado",
        example: "Chips, etiquetas error",
      },
      {
        shade: 500,
        hex: "#EF4444",
        usage: "Color base",
        example: "Estado error",
      },
      {
        shade: 600,
        hex: "#DC2626",
        usage: "Hover",
        example: "Botón error hover",
      },
      {
        shade: 700,
        hex: "#B91C1C",
        usage: "Estado activo",
        example: "Botones y alerts fuertes",
      },
      {
        shade: 800,
        hex: "#991B1B",
        usage: "Profundidad alta",
        example: "Fondos profundos",
      },
      {
        shade: 900,
        hex: "#7F1D1D",
        usage: "Profundidad extrema",
        example: "Banners críticos",
      },
      {
        shade: 950,
        hex: "#450A0A",
        usage: "Depth UI",
        example: "Fondos oscuros",
      },
    ],
  },
  info: {
    id: "info",
    name: "Info",
    emoji: "ℹ️",
    description: "Información y notificaciones - Cyan",
    baseColor: "#06B6D4",
    colors: [
      {
        shade: 50,
        hex: "#ECFEFF",
        usage: "Fondos ultra suaves",
        example: "Notificaciones informativas",
      },
      {
        shade: 100,
        hex: "#CFFAFE",
        usage: "Fondos suaves",
        example: "Cards informativas",
      },
      {
        shade: 200,
        hex: "#A5F3FC",
        usage: "Bordes suaves",
        example: "Dividers info",
      },
      {
        shade: 300,
        hex: "#67E8F9",
        usage: "Acentos ligeros",
        example: "Iconos",
      },
      {
        shade: 400,
        hex: "#22D3EE",
        usage: "Acento visible",
        example: "Tags, badges informativos",
      },
      {
        shade: 500,
        hex: "#06B6D4",
        usage: "Color base",
        example: "Estado informativo",
      },
      {
        shade: 600,
        hex: "#0891B2",
        usage: "Hover",
        example: "Botón info hover",
      },
      {
        shade: 700,
        hex: "#0E7490",
        usage: "Activo",
        example: "Estado info fuerte",
      },
      {
        shade: 800,
        hex: "#155E75",
        usage: "Profundidad alta",
        example: "Fondos info profundos",
      },
      {
        shade: 900,
        hex: "#164E63",
        usage: "Profundidad extrema",
        example: "Alertas intensas",
      },
      {
        shade: 950,
        hex: "#083344",
        usage: "Depth UI",
        example: "Fondos oscuros informativos",
      },
    ],
  },
  neutral: {
    id: "neutral",
    name: "Neutral",
    emoji: "⚪",
    description: "Colores neutrales - Grises",
    baseColor: "#7F858C",
    colors: [
      {
        shade: 50,
        hex: "#F7F9FA",
        usage: "Fondo base global",
        example: "Layouts claros, surfaces nivel 1",
      },
      {
        shade: 100,
        hex: "#EDF0F2",
        usage: "Fondos suaves",
        example: "Inputs sin foco, tarjetas ligeras",
      },
      {
        shade: 200,
        hex: "#DDE1E4",
        usage: "Bordes suaves",
        example: "Dividers sutiles, fondos secundarios",
      },
      {
        shade: 300,
        hex: "#C2C7CB",
        usage: "Bordes visibles",
        example: "Contenedores neutrales",
      },
      {
        shade: 400,
        hex: "#A5ABB1",
        usage: "Iconografía deshabilitada",
        example: "Labels secundarios",
      },
      {
        shade: 500,
        hex: "#7F858C",
        usage: "Texto secundario",
        example: "Supporting text",
      },
      {
        shade: 600,
        hex: "#5E636A",
        usage: "Texto primario suave",
        example: "Elementos neutrales activos",
      },
      {
        shade: 700,
        hex: "#44484E",
        usage: "Texto primario estándar",
        example: "Encabezados leves",
      },
      {
        shade: 800,
        hex: "#2E3237",
        usage: "Encabezados fuertes",
        example: "Secciones de alto contraste",
      },
      {
        shade: 900,
        hex: "#222529",
        usage: "Fondos oscuros",
        example: "Contenedores destacados",
      },
      {
        shade: 950,
        hex: "#1E1E1E",
        usage: "Alto contraste",
        example: "Dark surfaces, modo oscuro",
      },
    ],
  },
};

export const AVAILABLE_THEMES: Array<{
  id: ColorTheme;
  name: string;
  emoji: string;
}> = [
  { id: "primary", name: "Primary", emoji: "🔵" },
  { id: "secondary", name: "Secondary", emoji: "💜" },
  { id: "success", name: "Success", emoji: "✅" },
  { id: "warning", name: "Warning", emoji: "⚠️" },
  { id: "error", name: "Error", emoji: "❌" },
  { id: "info", name: "Info", emoji: "ℹ️" },
  { id: "neutral", name: "Neutral", emoji: "⚪" },
];
