"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function PortalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useI18n();

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
          ? "bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#E8E0D2] py-3.5 shadow-sm text-[#241812]"
          : "bg-gradient-to-b from-black/75 via-black/40 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className={`font-serif text-2xl sm:text-3xl font-bold tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-[#241812]" : "text-white drop-shadow-sm"
            }`}
          >
            VỊ{" "}
            <span
              className={`font-script text-2xl sm:text-3xl italic font-normal transition-colors duration-300 ${
                isScrolled ? "text-[#BF4227]" : "text-[#E88656] drop-shadow-sm"
              }`}
            >
              Paris
            </span>
          </span>
          <span
            className={`hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase border-l pl-2.5 transition-colors duration-300 ${
              isScrolled ? "text-[#7A695F] border-[#DFD5BF]" : "text-white/80 border-white/30"
            }`}
          >
            Paris 15<sup>e</sup>
          </span>
        </Link>

        {/* Navigation & Language */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Quick links to 2 sites */}
          <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase font-medium">
            <Link
              href="/vi-hanoi"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-[#6D5A50] hover:text-[#C06129]"
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              {t.nav.viHanoi}
            </Link>
            <span className={`transition-colors duration-300 ${isScrolled ? "text-[#DFD5BF]" : "text-white/40"}`}>
              ·
            </span>
            <Link
              href="/maison-de-vi"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-[#6D5A50] hover:text-[#BF4227]"
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              {t.nav.maisonDeVi}
            </Link>
          </div>

          {/* Language Switcher - Dynamic adaptive contrast */}
          <div
            className={`flex items-center rounded-md p-0.5 text-[11px] font-medium transition-all duration-300 ${
              isScrolled
                ? "bg-[#F3ECE0] border border-[#DFD5BF]"
                : "bg-black/40 border border-white/20 backdrop-blur-md"
            }`}
          >
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
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
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
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
              onClick={() => setLanguage("vi")}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
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

          {/* Hotline - Dynamic adaptive contrast */}
          <a
            href="tel:+33189324907"
            className={`hidden sm:inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-md border transition-all font-medium duration-300 ${
              isScrolled
                ? "border-[#4B5031]/30 bg-[#4B5031]/5 text-[#4B5031] hover:bg-[#4B5031] hover:text-white"
                : "border-white/30 bg-black/40 text-white hover:bg-white hover:text-[#241812] backdrop-blur-md drop-shadow-sm"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono tracking-wider">+33 1 89 32 49 07</span>
          </a>
        </div>
      </div>
    </header>
  );
}
