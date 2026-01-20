'use client';

import { useColorTheme } from '@/context/ColorContext';
import { AVAILABLE_THEMES, COLOR_PALETTES, ColorTheme } from '@/lib/colorPalettes';
import { useEffect, useRef, useState } from 'react';

export default function ColorSelector() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar tema del localStorage al montar
    const savedTheme = localStorage.getItem('alioth-color-theme') as ColorTheme | null;
    if (savedTheme) {
      setColorTheme(savedTheme);
    }
    setMounted(true);
  }, [setColorTheme]);

  useEffect(() => {
    // Cerrar el dropdown al hacer click fuera
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const setColorThemeState = (theme: ColorTheme) => {
    setColorTheme(theme);
    localStorage.setItem('alioth-color-theme', theme);
    window.dispatchEvent(new CustomEvent('color-theme-change', { detail: theme }));
    setIsOpen(false);
  };

  const currentTheme = AVAILABLE_THEMES.find((t) => t.id === colorTheme);
  const currentPalette = COLOR_PALETTES[colorTheme];

  // Evitar hidratación mismatch
  if (!mounted) {
    return (
      <div className="w-48 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
    );
  }

  return (
    <div className="relative w-48" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 rounded-lg flex items-center justify-between
          bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600
          border border-neutral-200 dark:border-neutral-600
          transition-all duration-200
          text-neutral-700 dark:text-neutral-300 text-sm font-medium"
        style={{
          backgroundColor: isOpen ? currentPalette.baseColor : undefined,
          color: isOpen ? '#fff' : undefined,
          borderColor: isOpen ? currentPalette.baseColor : undefined,
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <span className="text-lg">{currentTheme?.emoji}</span>
          <span>{currentTheme?.name}</span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-white dark:bg-neutral-800
            border border-neutral-200 dark:border-neutral-700 shadow-lg z-50
            overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200"
          role="listbox"
        >
          {AVAILABLE_THEMES.map((theme) => {
            const palette = COLOR_PALETTES[theme.id];
            const isSelected = colorTheme === theme.id;

            return (
              <button
                key={theme.id}
                onClick={() => setColorThemeState(theme.id)}
                className={`w-full px-4 py-3 flex items-center gap-2 text-left
                  transition-all duration-150
                  ${
                    isSelected
                      ? 'text-white'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                  }
                `}
                style={{
                  backgroundColor: isSelected ? palette.baseColor : undefined,
                }}
                role="option"
                aria-selected={isSelected}
              >
                <span className="text-lg">{theme.emoji}</span>
                <span className="font-medium">{theme.name}</span>
                {isSelected && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
