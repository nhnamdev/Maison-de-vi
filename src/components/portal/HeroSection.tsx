"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Utensils, Sparkles } from "lucide-react";
import { GoldDivider } from "@/components/common/BrandLogos";
import { useI18n } from "@/lib/i18n/context";

export function HeroSection({ onScrollToRestaurants }: { onScrollToRestaurants: () => void }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useI18n();

  const heroImages = [
    "/images/hero-3.webp",
    "/images/hero-4.webp",
    "/images/maison-de-vi/entrance.png",
  ];

  // Auto rotate hero slides every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transition: "opacity 1.5s ease-in-out, transform 8s ease-out" }}
        >
          <Image
            src={src}
            alt="Vị Paris Atmosphere"
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Warm Ambient Film & Smooth Transition into Cream Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#241812]/75 via-[#241812]/55 to-[#FAF6EF]" />
      <div className="absolute inset-0 pattern-indochine opacity-30 pointer-events-none" />

      {/* Floating Corner Ornaments with brand moss green and terracotta */}
      <div className="absolute top-24 left-8 hidden lg:block opacity-40">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M2 2H24" stroke="#4B5031" strokeWidth="0.8" />
          <path d="M2 2V24" stroke="#4B5031" strokeWidth="0.8" />
          <circle cx="2" cy="2" r="2" fill="#BF4227" />
        </svg>
      </div>
      <div className="absolute top-24 right-8 hidden lg:block opacity-40">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M46 2H24" stroke="#4B5031" strokeWidth="0.8" />
          <path d="M46 2V24" stroke="#4B5031" strokeWidth="0.8" />
          <circle cx="46" cy="2" r="2" fill="#BF4227" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#DFD5BF] bg-[#FAF6EF]/95 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#4B5031]" />
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#4B5031] font-medium">
            {t.hero.subtitle}
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal italic text-white tracking-tight leading-none drop-shadow-lg">
          Vị Paris
        </h1>

        <GoldDivider className="my-3 opacity-90" />

        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#F4D3B0] leading-snug drop-shadow-md">
          {t.hero.titleLine1}
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#FAF6EF]/90 font-light leading-relaxed drop-shadow-sm">
          {t.hero.description}
        </p>

        {/* Call to action - Crisp architectural button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToRestaurants}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#BF4227] hover:bg-[#A4351D] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-lg active:scale-[0.99]"
          >
            <Utensils className="w-4 h-4" />
            <span>{t.hero.exploreBtn}</span>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 pt-6">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1 transition-all duration-300 rounded-sm cursor-pointer ${
                i === activeSlide ? "w-8 bg-[#BF4227]" : "w-3 bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <button
        onClick={onScrollToRestaurants}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#241812]/60 hover:text-[#241812] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">{t.hero.scrollDown}</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#BF4227]" />
      </button>
    </section>
  );
}
