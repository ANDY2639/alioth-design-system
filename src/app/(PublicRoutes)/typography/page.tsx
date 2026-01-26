import { Suspense } from "react";
import Typography from "@/presentation/pages/Typography";

export default function TypographyPage() {
  return (
    <Suspense fallback={<div className="h-96 bg-neutral-200 rounded animate-pulse" />}>
      <Typography />
    </Suspense>
  );
}
