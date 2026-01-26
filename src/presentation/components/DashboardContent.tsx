"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import MainLayout from "@/presentation/components/layout/MainLayout";
import Sidebar from "@/presentation/components/layout/Sidebar";

// Dynamic imports with ssr: false to prevent hydration mismatches
const ColorPalettePicker = dynamic(() => import("@/presentation/components/color-system/ColorPalettePicker"), {
  ssr: false,
  loading: () => <div className="h-12 bg-neutral-200 rounded animate-pulse" />,
});

const ColorCard = dynamic(() => import("@/presentation/components/color-system/ColorCard"), {
  ssr: false,
  loading: () => <div className="h-64 bg-neutral-200 rounded animate-pulse" />,
});

const FontShowcase = dynamic(() => import("@/presentation/components/typography/FontShowcase"), {
  ssr: false,
  loading: () => <div className="h-96 bg-neutral-200 rounded animate-pulse" />,
});

const ComponentShowcase = dynamic(() => import("@/presentation/components/examples/ComponentShowcase"), {
  ssr: false,
  loading: () => <div className="h-80 bg-neutral-200 rounded animate-pulse" />,
});

export default function DashboardContent() {
  const [activeSection, setActiveSection] = useState("colors");

  const renderSection = () => {
    switch (activeSection) {
      case "colors":
        return (
          <div className="space-y-6">
            <Suspense fallback={<div className="h-12 bg-neutral-200 rounded animate-pulse" />}>
              <ColorPalettePicker />
            </Suspense>
            <Suspense fallback={<div className="h-64 bg-neutral-200 rounded animate-pulse" />}>
              <ColorCard />
            </Suspense>
          </div>
        );
      case "typography":
        return (
          <Suspense fallback={<div className="h-96 bg-neutral-200 rounded animate-pulse" />}>
            <FontShowcase />
          </Suspense>
        );
      case "components":
        return (
          <Suspense fallback={<div className="h-80 bg-neutral-200 rounded animate-pulse" />}>
            <ComponentShowcase />
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Layout */}
      <MainLayout>{renderSection()}</MainLayout>
    </div>
  );
}
