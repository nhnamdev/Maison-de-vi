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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#140D0A]/95 backdrop-blur-md border-b border-[#2C1810] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-wider text-white">
            VỊ <span className="font-script text-2xl italic text-[#DF9F4F] font-normal">Paris</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase text-[#FAF5EC]/50 border-l border-white/20 pl-2">
            Paris 15<sup>e</sup>
          </span>
        </Link>

        {/* Navigation & Language */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Quick links to 2 sites */}
          <div className="hidden md:flex items-center gap-5 text-xs tracking-wider uppercase">
            <Link
              href="/vi-hanoi"
              className="text-[#FAF5EC]/70 hover:text-[#DF9F4F] transition-colors"
            >
              {t.nav.viHanoi}
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/maison-de-vi"
              className="text-[#FAF5EC]/70 hover:text-[#C2692C] transition-colors"
            >
              {t.nav.maisonDeVi}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-0.5 text-[11px] font-medium">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                language === "en" ? "bg-[#C9873A] text-white" : "text-[#FAF5EC]/60 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                language === "fr" ? "bg-[#C9873A] text-white" : "text-[#FAF5EC]/60 hover:text-white"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                language === "vi" ? "bg-[#C9873A] text-white" : "text-[#FAF5EC]/60 hover:text-white"
              }`}
            >
              VI
            </button>
          </div>

          {/* Hotline */}
          <a
            href="tel:+33189324907"
            className="hidden sm:inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border border-[#C9873A]/40 text-[#DF9F4F] hover:bg-[#C9873A]/10 transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span className="font-mono">+33 1 89 32 49 07</span>
          </a>
        </div>
      </div>
    </header>
  );
}
