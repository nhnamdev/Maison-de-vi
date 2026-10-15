"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Compass, Flame, Flower2, PenTool } from "lucide-react";
import { MaisonBrandDivider, BrandPatternBand, BrandWatermark } from "@/components/common/BrandLogos";
import { useI18n } from "@/lib/i18n/context";

export function BrandHeritageSection() {
  const { t } = useI18n();

  const heritageItems = [
    {
      icon: Compass,
      title: t.heritage.hatTitle,
      desc: t.heritage.hatDesc,
      tag: t.heritage.hatTag,
      color: "#4B5031", // Moss green
      accentBg: "bg-[#4B5031]/10",
      accentBorder: "border-[#4B5031]/20",
      motif: "/images/maison-de-vi/motifs/motif-hat-outline.svg",
    },
    {
      icon: Flame,
      title: t.heritage.chiliTitle,
      desc: t.heritage.chiliDesc,
      tag: t.heritage.chiliTag,
      color: "#BF4227", // Chili red
      accentBg: "bg-[#BF4227]/10",
      accentBorder: "border-[#BF4227]/20",
      motif: "/images/maison-de-vi/motifs/motif-anise-artisan.svg",
    },
    {
      icon: Flower2,
      title: t.heritage.aniseTitle,
      desc: t.heritage.aniseDesc,
      tag: t.heritage.aniseTag,
      color: "#C06129", // Terracotta
      accentBg: "bg-[#C06129]/10",
      accentBorder: "border-[#C06129]/20",
      motif: "/images/maison-de-vi/motifs/motif-anise-outline.svg",
    },
    {
      icon: PenTool,
      title: t.heritage.viTitle,
      desc: t.heritage.viDesc,
      tag: t.heritage.viTag,
      color: "#833422", // Umber
      accentBg: "bg-[#833422]/10",
      accentBorder: "border-[#833422]/20",
      motif: "/images/maison-de-vi/motifs/motif-knot-outline.svg",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EF]">
      {/* Decorative Top Pattern Ribbon */}
      <BrandPatternBand height="h-10 sm:h-14" variant="clean" className="mb-16 opacity-90 shadow-xs" />

      {/* Background subtle watermarked brand pattern */}
      <div className="absolute inset-0 bg-maison-pattern-subtle opacity-70 pointer-events-none" />

      {/* Authentic Brand Motifs Floating Watermarks */}
      <BrandWatermark
        src="/images/maison-de-vi/motifs/motif-heritage-emblem.svg"
        size="w-48 h-48 sm:w-80 sm:h-80"
        className="-top-8 -left-12 opacity-[0.20] sm:opacity-[0.24] -rotate-6"
      />
      <BrandWatermark
        src="/images/maison-de-vi/motifs/motif-stack-outline.svg"
        size="w-40 h-64 sm:w-56 sm:h-96"
        className="top-12 -right-8 opacity-[0.18] sm:opacity-[0.22] rotate-3 hidden md:block"
      />
      <BrandWatermark
        src="/images/maison-de-vi/motifs/motif-hat-outline.svg"
        size="w-[320px] sm:w-[520px] h-28 sm:h-44"
        className="top-28 left-1/2 -translate-x-1/2 opacity-[0.16] sm:opacity-[0.20]"
      />
      <BrandWatermark
        src="/images/maison-de-vi/motifs/motif-tassel-knot.svg"
        size="w-24 h-60 sm:w-32 sm:h-72"
        className="bottom-12 left-4 sm:left-12 opacity-[0.22] sm:opacity-[0.26] hidden lg:block"
      />
      <BrandWatermark
        src="/images/maison-de-vi/motifs/motif-anise-outline.svg"
        size="w-40 h-40 sm:w-60 sm:h-60"
        className="-bottom-10 -right-8 opacity-[0.20] sm:opacity-[0.24] rotate-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Official Logo */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#DFD5BF] bg-white/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BF4227]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#BF4227] font-semibold">
              {t.heritage.badge}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#241812] tracking-wide leading-tight">
            {t.heritage.title}
          </h2>

          <MaisonBrandDivider className="my-3" />

          <p className="text-sm sm:text-base text-[#6D5A50] font-light leading-relaxed max-w-2xl mx-auto">
            {t.heritage.subtitle}
          </p>

          {/* Center Official Brand Logo Showcase */}
          <div className="pt-4 flex justify-center">
            <div className="relative w-56 sm:w-72 h-28 sm:h-36 drop-shadow-md transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/maison-de-vi/logo-official-full.png"
                alt="Logo Maison de Vị"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 4 Cultural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {heritageItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-xl bg-white/85 backdrop-blur-xs border border-[#DFD5BF] hover:border-[#BF4227]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 overflow-hidden"
              >
                {/* Background corner authentic motif watermark */}
                <div className="absolute -top-3 -right-3 w-20 h-20 opacity-[0.20] group-hover:opacity-[0.45] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none">
                  <Image
                    src={item.motif}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center ${item.accentBg} ${item.accentBorder} border shadow-2xs`}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="text-[10px] tracking-wider uppercase font-mono px-2.5 py-0.5 rounded-sm bg-[#FAF6EF] text-[#7A695F] border border-[#DFD5BF]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#241812] tracking-wide group-hover:text-[#BF4227] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4B42] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="pt-2 relative z-10">
                  <div
                    className="h-0.5 w-10 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Bottom Pattern Ribbon */}
      <BrandPatternBand height="h-10 sm:h-14" variant="clean" className="mt-20 opacity-90 shadow-xs" />
    </section>
  );
}
