import React from "react";
import Image from "next/image";

export function ViHanoiLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Image
        src="/images/vi-hanoi-logo.png"
        alt="Vị Hanoi Logo"
        width={180}
        height={80}
        className="object-contain max-h-full w-auto"
        priority
      />
    </div>
  );
}

export function MaisonDeViLogo({
  className = "h-16 w-auto",
  variant = "badge",
}: {
  className?: string;
  variant?: "badge" | "transparent" | "text";
}) {
  if (variant === "text") {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <span className="text-[10px] tracking-[0.35em] uppercase text-[#C2692C] font-semibold">
          RESTAURANT VIETNAMIEN
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#833422] flex items-center gap-1.5">
          <span>MAIS❄N</span>
          <span className="font-script text-3xl md:text-4xl italic text-[#C2692C] -mt-1 font-normal">de Vị</span>
        </h2>
      </div>
    );
  }

  const src =
    variant === "transparent"
      ? "/images/maison-de-vi/logo-transparent.png"
      : "/images/maison-de-vi/logo-badge.png";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-md ${className}`}>
      <Image
        src={src}
        alt="Maison de Vị Logo"
        width={180}
        height={180}
        className="object-contain max-h-full w-auto"
        priority
      />
    </div>
  );
}

export function GoldDivider({ className = "my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="170" height="14" viewBox="0 0 170 14" fill="none" aria-hidden="true">
        <line x1="0" y1="7" x2="69" y2="7" stroke="#C9873A" strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="75" cy="7" r="1.5" fill="#C9873A" fillOpacity="0.7" />
        <path d="M85 2L90 7L85 12L80 7Z" fill="#C9873A" fillOpacity="0.85" />
        <circle cx="95" cy="7" r="1.5" fill="#C9873A" fillOpacity="0.7" />
        <line x1="101" y1="7" x2="170" y2="7" stroke="#C9873A" strokeWidth="0.8" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}

export function TerracottaDivider({ className = "my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="170" height="14" viewBox="0 0 170 14" fill="none" aria-hidden="true">
        <line x1="0" y1="7" x2="69" y2="7" stroke="#C2692C" strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="75" cy="7" r="1.5" fill="#C2692C" fillOpacity="0.7" />
        <path d="M85 2L90 7L85 12L80 7Z" fill="#833422" fillOpacity="0.9" />
        <circle cx="95" cy="7" r="1.5" fill="#C2692C" fillOpacity="0.7" />
        <line x1="101" y1="7" x2="170" y2="7" stroke="#C2692C" strokeWidth="0.8" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}
