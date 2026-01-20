import { ReactNode, createElement } from 'react';

/**
 * Body Component - Sistema tipográfico Alioth
 *
 * Componente reutilizable para texto body (Body1, Body2).
 * Soporta variantes de peso: light, regular, medium, semibold.
 *
 * @example
 * <Body type="body1">Este módulo permite gestionar proveedores...</Body>
 * <Body type="body2">Para continuar, selecciona un proveedor...</Body>
 * <Body type="body1" variant="semibold">Texto destacado</Body>
 */

export interface BodyProps {
  /** Tipo de body text */
  type?: 'body1' | 'body2';
  /** Variante de peso de fuente */
  variant?: 'light' | 'regular' | 'medium' | 'semibold';
  /** Contenido del texto */
  children: ReactNode;
  /** Clases adicionales */
  className?: string;
  /** Elemento HTML a renderizar (default: 'p') */
  as?: 'p' | 'span' | 'div';
}

const bodyStyles = {
  body1: 'text-[14px] leading-[1.5]',
  body2: 'text-[14px] leading-[1.5]',
};

const bodyWeights = {
  body1: 'font-medium', // 500
  body2: 'font-normal', // 400
};

const variantWeights = {
  light: 'font-light', // 300
  regular: 'font-normal', // 400
  medium: 'font-medium', // 500
  semibold: 'font-semibold', // 600
};

export const Body = ({
  type = 'body1',
  variant,
  children,
  className = '',
  as = 'p'
}: BodyProps) => {
  const baseClasses = bodyStyles[type];
  const weightClass = variant ? variantWeights[variant] : bodyWeights[type];

  const classes = [
    baseClasses,
    weightClass,
    'text-neutral-900 dark:text-neutral-100',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return createElement(as, { className: classes }, children);
};

export default Body;
