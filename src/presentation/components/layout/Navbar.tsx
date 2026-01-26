"use client";

import ColorSelector from "@/presentation/components/ColorSelector";
import ThemeToggle from "@/presentation/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-primary-950 dark:text-primary-100">🎨 Alioth Design System</h1>
        </div>
        <div className="flex items-center gap-4">
          <ColorSelector />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
