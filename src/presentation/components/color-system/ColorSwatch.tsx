"use client";

import { useState } from "react";

interface ColorSwatchProps {
  hex: string;
  label: string;
}

export default function ColorSwatch({ hex, label }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group cursor-pointer" onClick={handleCopy}>
      <div
        className="h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-neutral-200 dark:border-neutral-700"
        style={{ backgroundColor: hex }}
        title={`Click para copiar: ${hex}`}
      />
      <div className="mt-2">
        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{label}</p>
        <p className="text-xs font-mono text-neutral-500 dark:text-neutral-500">{hex}</p>
        {copied && <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-1">✓ Copiado</p>}
      </div>
    </div>
  );
}
