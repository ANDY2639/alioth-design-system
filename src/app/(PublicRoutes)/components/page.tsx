import { Suspense } from "react";
import ComponentsPage from "@/presentation/pages/ComponentsPage/ComponentsPage";

export default function ComponentPage() {
  return (
    <Suspense fallback={<div className="h-96 bg-neutral-200 rounded animate-pulse" />}>
      <ComponentsPage />
    </Suspense>
  );
}
