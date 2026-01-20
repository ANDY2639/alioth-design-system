'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ColorTheme } from '@/lib/colorPalettes';

interface ColorContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

// Valor por defecto para evitar el error de contexto undefined
const defaultValue: ColorContextType = {
  colorTheme: 'primary',
  setColorTheme: () => {},
};

const ColorContext = createContext<ColorContextType>(defaultValue);

const STORAGE_KEY = 'alioth-color-theme';

export function ColorProviderWrapper({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('primary');

  // Cargar tema del localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ColorTheme | null;
    if (savedTheme) {
      setColorThemeState(savedTheme);
    }

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

  // SIEMPRE envolver con el Provider
  return (
    <ColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColorTheme() {
  return useContext(ColorContext);
}
