import { createContext } from "react";
import { ColorTheme } from "@/presentation/data/colorPalettes";

export interface ColorContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

export const defaultValue: ColorContextType = {
  colorTheme: "primary",
  setColorTheme: () => {},
};

export const ColorContext = createContext<ColorContextType>(defaultValue);

export default ColorContext;
