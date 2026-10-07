"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Utensils, Sparkles } from "lucide-react";
import { GoldDivider } from "@/components/common/BrandLogos";

export function HeroSection({ onScrollToRestaurants }: { onScrollToRestaurants: () => void }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroImages = [
    "/images/hero-3.webp",
    "/images/hero-4.webp",
    "/images/maison-de-vi/entrance.png",
  ];

  // Auto rotate hero slides every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
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

      {/* Dark Film & Texture Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#140D0A]" />
      <div className="absolute inset-0 pattern-motif opacity-30 pointer-events-none" />

      {/* Floating Corner Ornaments */}
      <div className="absolute top-24 left-8 hidden lg:block opacity-40">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M2 2H24" stroke="#C9873A" strokeWidth="0.8" />
          <path d="M2 2V24" stroke="#C9873A" strokeWidth="0.8" />
          <circle cx="2" cy="2" r="2" fill="#C9873A" />
        </svg>
      </div>
      <div className="absolute top-24 right-8 hidden lg:block opacity-40">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M46 2H24" stroke="#C9873A" strokeWidth="0.8" />
          <path d="M46 2V24" stroke="#C9873A" strokeWidth="0.8" />
          <circle cx="46" cy="2" r="2" fill="#C9873A" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9873A]/40 bg-black/40 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#DF9F4F]" />
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#FAF5EC]/90 font-medium">
            Paris 15<sup>e</sup> · Hai Cơ Sở Ẩm Thực Việt
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal italic text-white tracking-tight leading-none drop-shadow-2xl">
          Vị Paris
        </h1>

        <GoldDivider className="my-3 opacity-80" />

        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#DF9F4F] leading-snug drop-shadow-md">
          L’Âme Culinaire du Vietnam au Cœur de Paris
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#FAF5EC]/80 font-light leading-relaxed">
          Chào mừng quý khách đến với hệ thống nhà hàng của chúng tôi. Lựa chọn cơ sở bên dưới để đặt bàn nhanh nhất hoặc khám phá câu chuyện và thực đơn trọn vẹn.
        </p>

        {/* Call to action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToRestaurants}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C2692C] to-[#C9873A] hover:brightness-110 text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            <span>Chọn Nhà Hàng Để Đặt Bàn</span>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 pt-6">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1 transition-all duration-300 rounded-full ${
                i === activeSlide ? "w-8 bg-[#DF9F4F]" : "w-2 bg-white/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <button
        onClick={onScrollToRestaurants}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Kéo xuống xem nhà hàng"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Kéo xuống</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
