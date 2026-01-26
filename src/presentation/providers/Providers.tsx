"use client";

import { ColorProvider } from "@/presentation/context/ColorContext";
import { HeroUIProvider } from "@heroui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ColorProvider>{children}</ColorProvider>
    </HeroUIProvider>
  );
};

export default Providers;
