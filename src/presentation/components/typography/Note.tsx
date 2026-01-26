import { ReactNode } from "react";

/**
 * Note Component - Sistema tipográfico Alioth
 *
 * Componente reutilizable para notas y mensajes informativos.
 *
 * Propiedades según Design System:
 * - Line-height generoso para legibilidad
 * - Contraste alto (800-950) según contexto
 *
 * Casos de uso: Avisos, aclaraciones, disclaimers
 *
 * @example
 * <Note>Nota: Algunos campos solo pueden ser editados por el administrador.</Note>
 * <Note variant="warning">Advertencia: Esta acción no se puede deshacer.</Note>
 * <Note variant="error">Error: No se pudo cargar la información.</Note>
 */

export interface NoteProps {
  /** Contenido de la nota */
  children: ReactNode;
  /** Variante de color según el contexto */
  variant?: "info" | "success" | "warning" | "error" | "neutral";
  /** Clases adicionales */
  className?: string;
}

const variantColors = {
  info: "text-info-900 dark:text-info-100 bg-info-50 dark:bg-info-900/20 border-info-200 dark:border-info-800",
  success: "text-success-900 dark:text-success-100 bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800",
  warning: "text-warning-900 dark:text-warning-100 bg-warning-50 dark:bg-warning-900/20 border-warning-200 dark:border-warning-800",
  error: "text-error-900 dark:text-error-100 bg-error-50 dark:bg-error-900/20 border-error-200 dark:border-error-800",
  neutral: "text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900/20 border-neutral-200 dark:border-neutral-700",
};

export const Note = ({ children, variant = "neutral", className = "" }: NoteProps) => {
  const classes = [
    "text-sm",
    "leading-relaxed", // line-height generoso
    "p-4",
    "rounded-lg",
    "border",
    variantColors[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};

export default Note;
