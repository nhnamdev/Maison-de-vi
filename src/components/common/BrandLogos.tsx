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
  variant?: "badge" | "badge-white" | "full" | "full-dark" | "transparent" | "text";
}) {
  if (variant === "text") {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <span className="text-[10px] tracking-[0.35em] uppercase text-[#BF4227] font-semibold">
          RESTAURANT VIETNAMIEN
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#241812] flex items-center gap-1.5">
          <span>MAISON</span>
          <span className="font-script text-3xl md:text-4xl italic text-[#BF4227] -mt-1 font-normal">de Vị</span>
        </h2>
      </div>
    );
  }

  let src = "/images/maison-de-vi/logo-official-badge.png";
  let width = 120;
  let height = 110;

  if (variant === "full" || variant === "transparent") {
    src = "/images/maison-de-vi/logo-official-full.png";
    width = 240;
    height = 170;
  } else if (variant === "full-dark") {
    src = "/images/maison-de-vi/logo-official-full-dark.png";
    width = 240;
    height = 170;
  } else if (variant === "badge-white") {
    src = "/images/maison-de-vi/logo-official-badge-white.png";
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt="Maison de Vị Logo"
        width={width}
        height={height}
        className="object-contain max-h-full w-auto drop-shadow-xs"
        priority
      />
    </div>
  );
}

export function GoldDivider({ className = "my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="170" height="14" viewBox="0 0 170 14" fill="none" aria-hidden="true">
        <line x1="0" y1="7" x2="69" y2="7" stroke="#DFD5BF" strokeWidth="1" />
        <circle cx="75" cy="7" r="1.5" fill="#4B5031" />
        <path d="M85 2L90 7L85 12L80 7Z" fill="#C06129" />
        <circle cx="95" cy="7" r="1.5" fill="#4B5031" />
        <line x1="101" y1="7" x2="170" y2="7" stroke="#DFD5BF" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function TerracottaDivider({ className = "my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="170" height="14" viewBox="0 0 170 14" fill="none" aria-hidden="true">
        <line x1="0" y1="7" x2="69" y2="7" stroke="#DFD5BF" strokeWidth="1" />
        <circle cx="75" cy="7" r="1.5" fill="#4B5031" />
        <path d="M85 2L90 7L85 12L80 7Z" fill="#BF4227" />
        <circle cx="95" cy="7" r="1.5" fill="#4B5031" />
        <line x1="101" y1="7" x2="170" y2="7" stroke="#DFD5BF" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* Official Brand Divider featuring Anise Star & Hat curves */
export function MaisonBrandDivider({ className = "my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#DFD5BF] to-[#C06129]" />
      <div className="flex items-center gap-1.5 text-[#BF4227]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          {/* Anise 8-pointed star */}
          <path
            d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5Z"
            fill="#BF4227"
          />
          <circle cx="12" cy="12" r="2.5" fill="#FAF6EF" />
        </svg>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#DFD5BF] to-[#C06129]" />
    </div>
  );
}

/* Decorative Brand Pattern Ribbon Band */
export function BrandPatternBand({
  className = "",
  variant = "clean",
  height = "h-8 sm:h-12",
}: {
  className?: string;
  variant?: "clean" | "full";
  height?: string;
}) {
  const bgClass = variant === "full" ? "bg-maison-banner-band" : "bg-maison-clean-band";
  return (
    <div className={`w-full overflow-hidden border-y border-[#DFD5BF]/80 relative ${height} ${bgClass} ${className}`}>
      <div className="absolute inset-0 bg-[#FAF6EF]/10 pointer-events-none" />
    </div>
  );
}
