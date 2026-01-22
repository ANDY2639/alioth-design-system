"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ColorTheme } from "@/lib/colorPalettes";

interface ColorContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

// Valor por defecto para evitar el error de contexto undefined
const defaultValue: ColorContextType = {
  colorTheme: "primary",
  setColorTheme: () => {},
};

const ColorContext = createContext<ColorContextType>(defaultValue);

const STORAGE_KEY = "alioth-color-theme";

export function ColorProviderWrapper({ children }: { children: React.ReactNode }) {
  // Initialize color theme with lazy initial state
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window === "undefined") return "primary";

    const savedTheme = localStorage.getItem(STORAGE_KEY) as ColorTheme | null;
    return savedTheme || "primary";
  });

  // Escuchar cambios de tema desde otros componentes
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<ColorTheme>) => {
      setColorThemeState(event.detail);
    };

    window.addEventListener("color-theme-change", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener("color-theme-change", handleThemeChange as EventListener);
    };
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  // SIEMPRE envolver con el Provider
  return <ColorContext.Provider value={{ colorTheme, setColorTheme }}>{children}</ColorContext.Provider>;
}

export function useColorTheme() {
  return useContext(ColorContext);
}
