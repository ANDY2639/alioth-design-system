'use client';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

const items: SidebarItem[] = [
  { id: 'colors', label: 'Colores', icon: '🎨' },
  { id: 'typography', label: 'Tipografía', icon: '✍️' },
  { id: 'components', label: 'Componentes', icon: '🧩' },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 h-screen sticky top-16 transition-colors duration-300">
      <nav className="p-6 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-3 ${
              activeSection === item.id
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
