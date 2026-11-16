"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function PortalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#E8E0D2] py-2.5 sm:py-3 shadow-sm text-[#241812]"
          : "bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3 sm:py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-[#241812]" : "text-white drop-shadow-sm"
              }`}
            >
              Group{" "}
              <span
                className={`font-script text-2xl sm:text-3xl italic font-normal transition-colors duration-300 ${
                  isScrolled ? "text-[#BF4227]" : "text-[#F4D3B0] drop-shadow-sm"
                }`}
              >
                Maison de Vi
              </span>
            </span>
            <span
              className={`hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase border-l pl-2.5 transition-colors duration-300 ${
                isScrolled ? "text-[#7A695F] border-[#DFD5BF]" : "text-white/80 border-white/30"
              }`}
            >
              Paris
            </span>
          </div>
        </Link>

        {/* Right side: Language Switcher first, then Vị Hanoi + tel, separator, Maison de Vị + tel */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 flex-shrink-0">
          {/* 1. Language Switcher (lùi sang trái) */}
          <div
            className={`flex items-center rounded-md p-0.5 text-[10px] sm:text-[11px] font-medium transition-all duration-300 ${
              isScrolled
                ? "bg-[#F3ECE0] border border-[#DFD5BF]"
                : "bg-black/40 border border-white/20 backdrop-blur-md"
            }`}
          >
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 sm:px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                language === "fr"
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : isScrolled
                  ? "text-[#6D5A50] hover:text-[#241812]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 sm:px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                language === "en"
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : isScrolled
                  ? "text-[#6D5A50] hover:text-[#241812]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2 sm:px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                language === "vi"
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : isScrolled
                  ? "text-[#6D5A50] hover:text-[#241812]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              VI
            </button>
          </div>

          {/* 2. Cơ sở 1: Vị Hanoi + Tel 01 89 32 49 07 */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/vi-hanoi"
              className="relative h-6 sm:h-7 flex items-center transition-transform duration-300 hover:scale-105"
              title="Vị Hanoi"
              aria-label="Vị Hanoi"
            >
              <Image
                src={isScrolled ? "/images/vihanoi-logo-dark.png" : "/images/vihanoi-logo-white.png"}
                alt="Vị Hanoi"
                width={65}
                height={28}
                className="object-contain h-5 sm:h-6 w-auto"
              />
            </Link>
            <a
              href="tel:+33189324907"
              className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-medium px-2 py-1 rounded transition-colors ${
                isScrolled
                  ? "text-[#4B5031] hover:text-[#BF4227] hover:bg-[#4B5031]/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              title="Tel: 01 89 32 49 07"
            >
              <Phone className="w-3 h-3 text-[#C06129]" />
              <span className="hidden md:inline">01 89 32 49 07</span>
            </a>
          </div>

          {/* 3. Dấu phân cách */}
          <span className={`text-xs select-none ${isScrolled ? "text-[#DFD5BF]" : "text-white/30"}`}>
            |
          </span>

          {/* 4. Cơ sở 2: Maison de Vị + Tel 09 62 19 45 73 */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/maison-de-vi"
              className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 transition-transform duration-300 hover:scale-105 inline-block"
              title="Maison de Vị"
              aria-label="Maison de Vị"
            >
              <Image
                src={isScrolled ? "/images/maison-de-vi/logo-official-badge.png" : "/images/maison-de-vi/logo-official-badge-white.png"}
                alt="Maison de Vị"
                width={28}
                height={28}
                className="object-contain w-full h-full"
              />
            </Link>
            <a
              href="tel:+33962194573"
              className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-medium px-2 py-1 rounded transition-colors ${
                isScrolled
                  ? "text-[#833422] hover:text-[#BF4227] hover:bg-[#833422]/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              title="Tel: 09 62 19 45 73"
            >
              <Phone className="w-3 h-3 text-[#BF4227]" />
              <span className="hidden md:inline">09 62 19 45 73</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
