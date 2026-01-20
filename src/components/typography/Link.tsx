import { ReactNode, AnchorHTMLAttributes } from 'react';

/**
 * Link Component - Sistema tipográfico Alioth
 *
 * Componente reutilizable para enlaces con estilos del Design System.
 *
 * Propiedades según Design System:
 * - Color primario (según módulo)
 * - Siempre subrayado en hover
 * - No usar para acciones principales (esas son botones)
 *
 * @example
 * <Link href="/guia">Para más información revisa la guía del proveedor.</Link>
 * <Link href="/docs" external>Documentación</Link>
 */

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Contenido del enlace */
  children: ReactNode;
  /** URL del enlace */
  href: string;
  /** Si el enlace es externo (abre en nueva pestaña) */
  external?: boolean;
  /** Clases adicionales */
  className?: string;
}

export const Link = ({
  children,
  href,
  external = false,
  className = '',
  ...props
}: LinkProps) => {
  const classes = [
    'text-primary-500',
    'dark:text-primary-400',
    'hover:underline',
    'transition-all',
    'duration-200',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={href}
      className={classes}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
