"use client";

import ColorProvider from "@/presentation/contexts/Color/ColorProvider";
import { HeroUIProvider } from "@heroui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ColorProvider>{children}</ColorProvider>
    </HeroUIProvider>
  );
};

export default Providers;
