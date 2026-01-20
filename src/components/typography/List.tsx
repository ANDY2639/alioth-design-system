import { ReactNode } from 'react';

/**
 * List Component - Sistema tipográfico Alioth
 *
 * Componente reutilizable para listas ordenadas y no ordenadas.
 *
 * Casos de uso según Design System:
 * - Ordenada: Para pasos secuenciales
 * - No ordenada: Para elementos sin orden
 *
 * @example
 * <List type="ordered" items={['Paso 1', 'Paso 2', 'Paso 3']} />
 * <List type="unordered" items={['Item A', 'Item B', 'Item C']} />
 */

export interface ListProps {
  /** Tipo de lista */
  type: 'ordered' | 'unordered';
  /** Items de la lista */
  items: ReactNode[];
  /** Clases adicionales */
  className?: string;
  /** Clases adicionales para cada item */
  itemClassName?: string;
}

export const List = ({
  type,
  items,
  className = '',
  itemClassName = ''
}: ListProps) => {
  const Tag = type === 'ordered' ? 'ol' : 'ul';
  const listTypeClass = type === 'ordered' ? 'list-decimal' : 'list-disc';

  const classes = [
    listTypeClass,
    'list-inside',
    'space-y-2',
    'text-neutral-900 dark:text-neutral-100',
    'text-sm',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const itemClasses = [
    itemClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes}>
      {items.map((item, index) => (
        <li key={index} className={itemClasses}>
          {item}
        </li>
      ))}
    </Tag>
  );
};

export default List;
