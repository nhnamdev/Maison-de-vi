"use client";

import React, { useState, useRef } from "react";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { HeroSection } from "@/components/portal/HeroSection";
import { RestaurantCard } from "@/components/portal/RestaurantCard";
import { QuickReservationDrawer } from "@/components/portal/QuickReservationDrawer";
import { VI_HANOI_DATA, MAISON_DE_VI_DATA, RestaurantData } from "@/lib/restaurant-data";
import { GoldDivider } from "@/components/common/BrandLogos";
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

      {/* Main Section: 2 Restaurants */}
      <section
        id="restaurants"
        ref={restaurantsSectionRef}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#4B5031] font-semibold block">
            {t.portal.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#241812] tracking-wide">
            {t.portal.title}
          </h2>
          <GoldDivider className="my-2" />
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

      {/* Footer - Elegant warm cream finish */}
      <footer className="mt-auto border-t border-[#DFD5BF] bg-[#F3ECE0] py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#7A695F] space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#241812] font-medium uppercase tracking-wider text-xs">
          <button
            onClick={() => handleOpenDrawer(VI_HANOI_DATA)}
            className="hover:text-[#BF4227] transition-colors cursor-pointer"
          >
            {t.nav.bookTable} {VI_HANOI_DATA.name}
          </button>
          <span className="text-[#DFD5BF]">·</span>
          <button
            onClick={() => handleOpenDrawer(MAISON_DE_VI_DATA)}
            className="hover:text-[#BF4227] transition-colors cursor-pointer"
          >
            {t.nav.bookTable} {MAISON_DE_VI_DATA.name}
          </button>
        </div>
        <p className="text-[#5C4B42]">© 2026 {t.portal.footerCopyright}</p>
        <p className="text-[11px] text-[#8F7D73]">
          {t.portal.footerTagline}
        </p>
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
