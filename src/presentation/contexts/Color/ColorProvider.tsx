"use client";

import { ReactNode, useEffect, useState } from "react";
import { ColorTheme } from "@/presentation/data/colorPalettes";
import ColorContext from "./ColorContext";

const STORAGE_KEY = "alioth-color-theme";

export default function ColorProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window === "undefined") return "primary";

    const savedTheme = localStorage.getItem(STORAGE_KEY) as ColorTheme | null;
    return savedTheme || "primary";
  });

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

  return <ColorContext value={{ colorTheme, setColorTheme }}>{children}</ColorContext>;
}
