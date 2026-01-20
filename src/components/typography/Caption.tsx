import { ReactNode, createElement } from 'react';

/**
 * Caption Component - Alioth Typographic System
 *
 * Reusable component for caption text (notes, secondary information).
 * Fixed size of 12px with 150% line-height.
 *
 * @example
 * <Caption>Última actualización hace 5 minutos.</Caption>
 * <Caption as="span">Nota: Campo obligatorio</Caption>
 */

export interface CaptionProps {
  /** Caption content */
  children: ReactNode;
  /** Additional classes */
  className?: string;
  /** HTML element to render (default: 'p') */
  as?: 'p' | 'span' | 'div';
}

export const Caption = ({ children, className = '', as = 'p' }: CaptionProps) => {
  const classes = [
    'text-caption',
    'font-normal',
    'text-neutral-600 dark:text-neutral-400',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return createElement(as, { className: classes }, children);
};

export default Caption;
