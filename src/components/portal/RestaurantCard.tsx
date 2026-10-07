"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, UtensilsCrossed, Sparkles } from "lucide-react";
import { RestaurantData } from "@/lib/restaurant-data";

interface RestaurantCardProps {
  restaurant: RestaurantData;
  onSelectRestaurant: (restaurant: RestaurantData) => void;
}

export function RestaurantCard({
  restaurant,
  onSelectRestaurant,
}: RestaurantCardProps) {
  const isMaison = restaurant.id === "maison-de-vi";
  const accentColor = isMaison ? "#C2692C" : "#C9873A";
  const badgeBg = isMaison ? "rgba(194, 105, 44, 0.15)" : "rgba(201, 135, 58, 0.15)";
  const borderColor = isMaison ? "rgba(194, 105, 44, 0.3)" : "rgba(201, 135, 58, 0.3)";

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-[#1B120E] border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col"
      style={{
        borderColor: borderColor,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
      }}
    >
      {/* Image Banner */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden">
        <Image
          src={restaurant.heroImage}
          alt={restaurant.name}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120E] via-[#1B120E]/40 to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span
            className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] px-3 py-1 rounded-full backdrop-blur-md border text-white"
            style={{
              backgroundColor: badgeBg,
              borderColor: `${accentColor}50`,
            }}
          >
            {restaurant.badges[0]}
          </span>
          <span className="text-[11px] text-[#FAF5EC]/80 font-mono backdrop-blur-md bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
            {restaurant.city}
          </span>
        </div>

        {/* Floating Brand Badge */}
        <div className="absolute bottom-4 left-5 flex items-center gap-3">
          <div
            className="w-14 h-14 rounded-xl p-1 bg-[#140D0A]/90 backdrop-blur-md border flex items-center justify-center shadow-lg"
            style={{ borderColor: `${accentColor}60` }}
          >
            <Image
              src={isMaison ? "/images/maison-de-vi/logo-badge.png" : "/images/vi-hanoi-logo.png"}
              alt={restaurant.name}
              width={52}
              height={52}
              className="object-contain max-h-full w-auto"
            />
          </div>
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.25em] font-semibold block drop-shadow-md"
              style={{ color: accentColor }}
            >
              {restaurant.subtitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide drop-shadow-lg">
              {restaurant.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Address & Metro */}
          <div className="space-y-1.5 text-xs text-[#FAF5EC]/75">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
              <span className="font-medium text-white">{restaurant.address}, {restaurant.city}</span>
            </div>
            <div className="pl-6 text-[11px] text-[#FAF5EC]/50 font-light">
              Métro: {restaurant.metro}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#FAF5EC]/70 leading-relaxed font-light">
            {restaurant.descriptionVi}
          </p>

          {/* Highlights / Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {restaurant.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded bg-[#251914] text-[#FAF5EC]/60 border border-white/5"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#2C1C15] flex flex-col sm:flex-row gap-3">
          {/* Primary Action: Open Quick Drawer */}
          <button
            onClick={() => onSelectRestaurant(restaurant)}
            className="flex-1 py-3.5 px-4 rounded-xl font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md text-white flex items-center justify-center gap-2 group cursor-pointer hover:brightness-110 active:scale-[0.99]"
            style={{ backgroundColor: accentColor }}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Đặt bàn ngay</span>
          </button>

          {/* Secondary Action: More info directly or link */}
          <Link
            href={restaurant.route}
            className="py-3.5 px-4 rounded-xl font-medium text-xs tracking-widest uppercase border border-[#3D291F] hover:border-white/30 text-[#FAF5EC]/80 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 text-center bg-[#170E0B]"
          >
            <span>Chi tiết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
