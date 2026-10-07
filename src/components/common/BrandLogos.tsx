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
