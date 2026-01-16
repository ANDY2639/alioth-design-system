'use client';

import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex-1 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300 overflow-auto">
      <div className="p-8">
        {children}
      </div>
    </main>
  );
}
