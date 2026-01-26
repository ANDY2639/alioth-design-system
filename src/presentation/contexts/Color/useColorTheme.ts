import { useContext } from "react";
import ColorContext from "./ColorContext";

export function useColorTheme() {
  return useContext(ColorContext);
}
