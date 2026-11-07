import React from "react";

interface RowProps {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}

export default function Row({ label, value, mono = false }: RowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 border-b border-slate-200 gap-1 sm:gap-4 hover:bg-slate-50 px-2 transition-colors duration-150">
      <dt className="font-mono text-xs uppercase tracking-wider text-slate-500 shrink-0 font-medium">
        {label}
      </dt>
      <dd
        className={`text-sm sm:text-base text-slate-800 sm:text-right font-medium ${
          mono ? "font-mono tabular" : "font-sans"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
