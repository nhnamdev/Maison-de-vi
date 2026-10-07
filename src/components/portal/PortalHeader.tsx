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
          ? "bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#E8E0D2] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#241812]">
            VỊ <span className="font-script text-2xl sm:text-3xl italic text-[#BF4227] font-normal">Paris</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-[#7A695F] border-l border-[#DFD5BF] pl-2.5">
            Paris 15<sup>e</sup>
          </span>
        </Link>

        {/* Navigation & Language */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Quick links to 2 sites */}
          <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase font-medium">
            <Link
              href="/vi-hanoi"
              className="text-[#6D5A50] hover:text-[#C06129] transition-colors"
            >
              {t.nav.viHanoi}
            </Link>
            <span className="text-[#DFD5BF]">·</span>
            <Link
              href="/maison-de-vi"
              className="text-[#6D5A50] hover:text-[#BF4227] transition-colors"
            >
              {t.nav.maisonDeVi}
            </Link>
          </div>

          {/* Language Switcher - Architectural refined tabs, no rounded bubble */}
          <div className="flex items-center bg-[#F3ECE0] border border-[#DFD5BF] rounded-md p-0.5 text-[11px] font-medium">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                language === "en"
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : "text-[#6D5A50] hover:text-[#241812]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                language === "fr"
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : "text-[#6D5A50] hover:text-[#241812]"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                language === "vi"
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : "text-[#6D5A50] hover:text-[#241812]"
              }`}
            >
              VI
            </button>
          </div>

          {/* Hotline with Moss Green brand accent */}
          <a
            href="tel:+33189324907"
            className="hidden sm:inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-md border border-[#4B5031]/30 bg-[#4B5031]/5 text-[#4B5031] hover:bg-[#4B5031] hover:text-white transition-all font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono tracking-wider">+33 1 89 32 49 07</span>
          </a>
        </div>
      </div>
    </header>
  );
}
