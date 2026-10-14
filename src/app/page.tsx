"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { HeroSection } from "@/components/portal/HeroSection";
import { RestaurantCard } from "@/components/portal/RestaurantCard";
import { BrandHeritageSection } from "@/components/portal/BrandHeritageSection";
import { QuickReservationDrawer } from "@/components/portal/QuickReservationDrawer";
import { VI_HANOI_DATA, MAISON_DE_VI_DATA, RestaurantData } from "@/lib/restaurant-data";
import {
  GoldDivider,
  MaisonBrandDivider,
  MaisonDeViLogo,
  ViHanoiLogo,
  BrandPatternBand,
} from "@/components/common/BrandLogos";
import { Utensils, Award, Clock, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const restaurantsSectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const handleOpenDrawer = (restaurant: RestaurantData) => {
    setSelectedRestaurant(restaurant);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const scrollToRestaurants = () => {
    restaurantsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#241812] relative">
      {/* Top Header */}
      <PortalHeader />

      {/* Hero Banner */}
      <HeroSection onScrollToRestaurants={scrollToRestaurants} />

      {/* Decorative Ribbon Separator with Maison de Vị Brand Pattern */}
      <BrandPatternBand height="h-9 sm:h-12" variant="clean" className="shadow-2xs" />

      {/* Main Section: 2 Restaurants with Subtle Brand Pattern Background */}
      <section
        id="restaurants"
        ref={restaurantsSectionRef}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative bg-maison-pattern-subtle rounded-2xl my-6 border border-[#DFD5BF]/60 shadow-xs"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#4B5031] font-semibold block">
            {t.portal.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#241812] tracking-wide">
            {t.portal.title}
          </h2>
          <MaisonBrandDivider className="my-2" />
          <p className="text-sm sm:text-base text-[#6D5A50] font-light leading-relaxed">
            {t.portal.description}
          </p>
        </div>

        {/* 2 Restaurant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <RestaurantCard
            restaurant={VI_HANOI_DATA}
            onSelectRestaurant={handleOpenDrawer}
          />
          <RestaurantCard
            restaurant={MAISON_DE_VI_DATA}
            onSelectRestaurant={handleOpenDrawer}
          />
        </div>

        {/* Feature Badges below cards - Elegant ceramic cards */}
        <div className="mt-20 pt-16 border-t border-[#DFD5BF] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-md bg-white border border-[#DFD5BF] space-y-2 shadow-xs hover:border-[#4B5031] transition-colors">
            <Utensils className="w-5 h-5 mx-auto text-[#4B5031]" />
            <h4 className="font-serif text-sm font-semibold text-[#241812]">{t.portal.featureAuthenticTitle}</h4>
            <p className="text-xs text-[#7A695F] leading-relaxed">{t.portal.featureAuthenticDesc}</p>
          </div>
          <div className="p-5 rounded-md bg-white border border-[#DFD5BF] space-y-2 shadow-xs hover:border-[#BF4227] transition-colors">
            <Clock className="w-5 h-5 mx-auto text-[#BF4227]" />
            <h4 className="font-serif text-sm font-semibold text-[#241812]">{t.portal.featureBookingTitle}</h4>
            <p className="text-xs text-[#7A695F] leading-relaxed">{t.portal.featureBookingDesc}</p>
          </div>
          <div className="p-5 rounded-md bg-white border border-[#DFD5BF] space-y-2 shadow-xs hover:border-[#C06129] transition-colors">
            <Award className="w-5 h-5 mx-auto text-[#C06129]" />
            <h4 className="font-serif text-sm font-semibold text-[#241812]">{t.portal.featurePressTitle}</h4>
            <p className="text-xs text-[#7A695F] leading-relaxed">{t.portal.featurePressDesc}</p>
          </div>
          <div className="p-5 rounded-md bg-white border border-[#DFD5BF] space-y-2 shadow-xs hover:border-[#4B5031] transition-colors">
            <Heart className="w-5 h-5 mx-auto text-[#4B5031]" />
            <h4 className="font-serif text-sm font-semibold text-[#241812]">{t.portal.featureAmbianceTitle}</h4>
            <p className="text-xs text-[#7A695F] leading-relaxed">{t.portal.featureAmbianceDesc}</p>
          </div>
        </div>
      </section>

      {/* Brand Identity & Heritage Section (3 Cultural Elements: Nón Quai Thao, Trái Ớt, Hoa Hồi) */}
      <BrandHeritageSection />

      {/* Footer - Elegant warm cream finish with full separate addresses */}
      <footer className="mt-auto border-t border-[#DFD5BF] bg-[#F3ECE0] py-14 px-4 sm:px-6 lg:px-8 text-xs text-[#7A695F] relative">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Official Logos Header in Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#DFD5BF]/80">
            <div className="flex items-center gap-6">
              <ViHanoiLogo className="h-10 sm:h-12 w-auto" />
              <div className="h-8 w-[1px] bg-[#DFD5BF]" />
              <MaisonDeViLogo variant="badge" className="h-12 sm:h-14 w-auto" />
            </div>
            <div className="text-center sm:text-right">
              <span className="font-serif text-lg font-bold text-[#241812] tracking-wider block">
                GROUP MAISON DE VI
              </span>
              <span className="text-[11px] text-[#7A695F] uppercase tracking-widest font-mono">
                {t.portal.footerGastronomy}
              </span>
            </div>
          </div>

          {/* 2 Restaurants Addresses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-[#DFD5BF]/80 text-center md:text-left">
            {/* Vị Hanoi */}
            <div className="p-5 rounded-lg bg-white/70 border border-[#DFD5BF] space-y-2 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-serif text-base font-bold text-[#241812]">{VI_HANOI_DATA.name}</h4>
                <button
                  onClick={() => handleOpenDrawer(VI_HANOI_DATA)}
                  className="text-[11px] uppercase tracking-wider text-[#BF4227] hover:underline font-semibold cursor-pointer"
                >
                  {t.nav.bookTable} →
                </button>
              </div>
              <p className="text-xs text-[#5C4B42] font-medium">{VI_HANOI_DATA.address}, {VI_HANOI_DATA.city}</p>
              <p className="text-[11px] text-[#7A695F]">{t.portal.metroLabel}: {VI_HANOI_DATA.metro}</p>
              <p className="text-[11px] text-[#7A695F]">
                {t.portal.phoneLabel}{" "}
                <a href={`tel:${VI_HANOI_DATA.phone.replace(/\s+/g, "")}`} className="font-mono text-[#BF4227] hover:underline">
                  {VI_HANOI_DATA.phone}
                </a>
              </p>
            </div>

            {/* Maison de Vị */}
            <div className="p-5 rounded-lg bg-white/70 border border-[#DFD5BF] space-y-2 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-serif text-base font-bold text-[#241812]">{MAISON_DE_VI_DATA.name}</h4>
                <span className="text-[10px] uppercase tracking-widest text-[#833422] font-semibold px-2 py-0.5 rounded-sm bg-[#833422]/10 border border-[#833422]/20">
                  {t.portal.comingSoon}
                </span>
              </div>
              <p className="text-xs text-[#5C4B42] font-medium">{MAISON_DE_VI_DATA.address}, {MAISON_DE_VI_DATA.city}</p>
              <p className="text-[11px] text-[#7A695F]">{t.portal.metroLabel}: {MAISON_DE_VI_DATA.metro}</p>
              <p className="text-[11px] text-[#7A695F]">
                {t.portal.phoneLabel}{" "}
                <a href={`tel:${MAISON_DE_VI_DATA.phone.replace(/\s+/g, "")}`} className="font-mono text-[#BF4227] hover:underline">
                  {MAISON_DE_VI_DATA.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Group Copyright & Tagline */}
          <div className="text-center space-y-2">
            <p className="font-serif text-sm font-semibold text-[#241812] tracking-wider uppercase">
              Group Maison de Vi
            </p>
            <p className="text-[#5C4B42]">© 2026 {t.portal.footerCopyright}</p>
            <p className="text-[11px] text-[#8F7D73]">{t.portal.footerTagline}</p>
          </div>
        </div>
      </footer>

      {/* Slide-over Right Drawer */}
      <QuickReservationDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        restaurant={selectedRestaurant}
      />
    </div>
  );
}
