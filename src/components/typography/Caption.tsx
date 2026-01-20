import { ReactNode, createElement } from 'react';

/**
 * Caption Component - Sistema tipográfico Alioth
 *
 * Componente reutilizable para texto caption (notas, información secundaria).
 * Tamaño fijo de 12px con line-height de 150%.
 *
 * @example
 * <Caption>Última actualización hace 5 minutos.</Caption>
 * <Caption as="span">Nota: Campo obligatorio</Caption>
 */

export interface CaptionProps {
  /** Contenido del caption */
  children: ReactNode;
  /** Clases adicionales */
  className?: string;
  /** Elemento HTML a renderizar (default: 'p') */
  as?: 'p' | 'span' | 'div';
}

export const Caption = ({ children, className = '', as = 'p' }: CaptionProps) => {
  const classes = [
    'text-[12px]',
    'leading-[1.5]',
    'font-normal',
    'text-neutral-600 dark:text-neutral-400',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return createElement(as, { className: classes }, children);
};

export default Caption;
