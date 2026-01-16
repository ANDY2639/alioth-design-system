'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorTheme } from '@/lib/colorPalettes';

interface ColorContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const STORAGE_KEY = 'alioth-color-theme';

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('primary');
  const [mounted, setMounted] = useState(false);

  // Cargar tema del localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ColorTheme | null;
    if (savedTheme) {
      setColorThemeState(savedTheme);
    }
    setMounted(true);

    // Escuchar cambios de tema desde otros componentes
    const handleThemeChange = (event: CustomEvent<ColorTheme>) => {
      setColorThemeState(event.detail);
    };
    
    window.addEventListener('color-theme-change', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('color-theme-change', handleThemeChange as EventListener);
    };
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  // Evitar flash de contenido sin hidratación
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorTheme debe ser usado dentro de un ColorProvider');
  }
  return context;
}
