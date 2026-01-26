import { Suspense } from "react";
import ColorCard from "@/presentation/pages/ColorSystem/ColorCard";
import ColorPalettePicker from "@/presentation/pages/ColorSystem/ColorPalettePicker";

export default function ColorsPage() {
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
}
