"use client";

import { HeroUIProvider } from "@heroui/react";
import { ColorProvider } from "@/context/ColorContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ColorProvider>{children}</ColorProvider>
    </HeroUIProvider>
  );
};

export default Providers;
