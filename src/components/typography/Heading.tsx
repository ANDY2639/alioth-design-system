import { ReactNode, createElement } from 'react';

/**
 * Heading Component - Alioth Typography System
 *
 * Reusable component for headings (H1-H6).
 * Supports weight variants: light, regular, semibold, bold.
 *
 * @example
 * <Heading level={1}>Dashboard general de proyectos</Heading>
 * <Heading level={2} variant="light">Portales, dashboards limpios</Heading>
 * <Heading level={6} variant="bold">Énfasis en títulos pequeños</Heading>
 */

export interface HeadingProps {
  /** Heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Font weight variant */
  variant?: 'light' | 'regular' | 'semibold' | 'bold';
  /** Heading content */
  children: ReactNode;
  /** Additional classes */
  className?: string;
}

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
  const textHeading = `text-heading${level}`;
  const weightClass = variant ? variantWeights[variant] : headingWeights[level];

  const classes = [
    textHeading,
    weightClass,
    'text-neutral-900 dark:text-neutral-100',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return createElement(tag, { className: classes }, children);
};

export default Heading;
