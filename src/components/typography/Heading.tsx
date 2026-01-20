import { ReactNode, createElement } from 'react';

/**
 * Heading Component - Sistema tipográfico Alioth
 *
 * Componente reutilizable para encabezados (H1-H6).
 * Soporta variantes de peso: light, regular, semibold, bold.
 *
 * @example
 * <Heading level={1}>Dashboard general de proyectos</Heading>
 * <Heading level={2} variant="light">Portales, dashboards limpios</Heading>
 * <Heading level={6} variant="bold">Énfasis en títulos pequeños</Heading>
 */

export interface HeadingProps {
  /** Nivel del encabezado (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Variante de peso de fuente */
  variant?: 'light' | 'regular' | 'semibold' | 'bold';
  /** Contenido del encabezado */
  children: ReactNode;
  /** Clases adicionales */
  className?: string;
}

const headingStyles = {
  1: 'text-[40px] leading-[1.2]',
  2: 'text-[32px] leading-[1.2]',
  3: 'text-[28px] leading-[1.3]',
  4: 'text-[24px] leading-[1.3]',
  5: 'text-[20px] leading-[1.4]',
  6: 'text-[16px] leading-[1.4]',
};

const headingWeights = {
  1: 'font-bold', // 700
  2: 'font-bold', // 700
  3: 'font-semibold', // 600
  4: 'font-semibold', // 600
  5: 'font-medium', // 500
  6: 'font-medium', // 500
};

const variantWeights = {
  light: 'font-light', // 300
  regular: 'font-normal', // 400
  semibold: 'font-semibold', // 600
  bold: 'font-bold', // 700
};

export const Heading = ({ level, variant, children, className = '' }: HeadingProps) => {
  const tag = `h${level}`;
  const baseClasses = headingStyles[level];
  const weightClass = variant ? variantWeights[variant] : headingWeights[level];

  const classes = [
    baseClasses,
    weightClass,
    'text-neutral-900 dark:text-neutral-100',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return createElement(tag, { className: classes }, children);
};

export default Heading;
