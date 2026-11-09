import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function LogoNgeposari({ className = "", size = 48 }: LogoProps) {
  return (
    <img
      src="/images/logo-gunungkidul.png"
      alt="Lambang Dhaksinarga Bhumikarta Kabupaten Gunungkidul"
      width={size}
      height={Math.round((size * 120) / 100)}
      className={`inline-block object-contain drop-shadow-sm ${className}`}
      style={{
        width: `${size}px`,
        height: "auto",
        maxHeight: `${Math.round((size * 125) / 100)}px`,
      }}
    />
  );
}
