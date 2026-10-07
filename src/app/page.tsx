"use client";

import React, { useState, useRef } from "react";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { HeroSection } from "@/components/portal/HeroSection";
import { RestaurantCard } from "@/components/portal/RestaurantCard";
import { QuickReservationDrawer } from "@/components/portal/QuickReservationDrawer";
import { VI_HANOI_DATA, MAISON_DE_VI_DATA, RestaurantData } from "@/lib/restaurant-data";
import { GoldDivider } from "@/components/common/BrandLogos";
import { Utensils, Award, Clock, Heart } from "lucide-react";

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const restaurantsSectionRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen flex flex-col bg-[#140D0A] text-[#FAF5EC] relative">
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
          <span className="text-xs tracking-[0.3em] uppercase text-[#DF9F4F] font-medium block">
            Paris 15<sup>e</sup> · Destination Gastronomique
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-white tracking-wide">
            Hai Cơ Sở Của Chúng Tôi
          </h2>
          <GoldDivider className="my-2" />
          <p className="text-sm sm:text-base text-[#FAF5EC]/70 font-light leading-relaxed">
            Chọn một trong hai nhà hàng bên dưới để mở mục đặt chỗ nhanh dành cho khách quen hoặc khám phá đầy đủ thực đơn và không gian kiến trúc.
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

        {/* Feature Badges below cards */}
        <div className="mt-20 pt-16 border-t border-[#291A13] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-[#1C120D]/60 border border-[#2D1C15] space-y-2">
            <Utensils className="w-5 h-5 mx-auto text-[#DF9F4F]" />
            <h4 className="font-serif text-sm font-medium text-white">Vị Nguyên Bản</h4>
            <p className="text-xs text-[#FAF5EC]/60">Nước dùng hầm 48h & gia vị tươi từ Việt Nam</p>
          </div>
          <div className="p-4 rounded-xl bg-[#1C120D]/60 border border-[#2D1C15] space-y-2">
            <Clock className="w-5 h-5 mx-auto text-[#DF9F4F]" />
            <h4 className="font-serif text-sm font-medium text-white">Đặt Bàn Tiện Lợi</h4>
            <p className="text-xs text-[#FAF5EC]/60">Hỗ trợ khách quen đặt bàn nhanh chỉ 1 chạm</p>
          </div>
          <div className="p-4 rounded-xl bg-[#1C120D]/60 border border-[#2D1C15] space-y-2">
            <Award className="w-5 h-5 mx-auto text-[#DF9F4F]" />
            <h4 className="font-serif text-sm font-medium text-white">Báo Chí Vinh Danh</h4>
            <p className="text-xs text-[#FAF5EC]/60">Télérama, Gilles Pudlowski đánh giá xuất sắc</p>
          </div>
          <div className="p-4 rounded-xl bg-[#1C120D]/60 border border-[#2D1C15] space-y-2">
            <Heart className="w-5 h-5 mx-auto text-[#DF9F4F]" />
            <h4 className="font-serif text-sm font-medium text-white">Không Gian Sang Trọng</h4>
            <p className="text-xs text-[#FAF5EC]/60">Kiến trúc Indochine ấm cúng và đầy chất thơ</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#251711] bg-[#0E0907] py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#FAF5EC]/50 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#FAF5EC]/80 font-medium">
          <button
            onClick={() => handleOpenDrawer(VI_HANOI_DATA)}
            className="hover:text-[#DF9F4F] transition-colors cursor-pointer"
          >
            Đặt bàn Vị Hanoi
          </button>
          <span>·</span>
          <button
            onClick={() => handleOpenDrawer(MAISON_DE_VI_DATA)}
            className="hover:text-[#C2692C] transition-colors cursor-pointer"
          >
            Đặt bàn Maison de Vị
          </button>
        </div>
        <p>© 2026 Groupe Vị Paris — Vị Hanoi (282 Rue Lecourbe) & Maison de Vị (142 Rue de Vaugirard), 75015 Paris.</p>
        <p className="text-[11px] text-[#FAF5EC]/30">
          Meilleur Restaurant Vietnamien Paris 15e · Phở & Bún Chả Traditionnels
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
