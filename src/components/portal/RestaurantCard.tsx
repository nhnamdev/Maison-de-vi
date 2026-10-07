"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, UtensilsCrossed } from "lucide-react";
import { RestaurantData, getLocalizedRestaurant } from "@/lib/restaurant-data";
import { useI18n } from "@/lib/i18n/context";

interface RestaurantCardProps {
  restaurant: RestaurantData;
  onSelectRestaurant: (restaurant: RestaurantData) => void;
}

export function RestaurantCard({
  restaurant,
  onSelectRestaurant,
}: RestaurantCardProps) {
  const { language, t } = useI18n();
  const localized = getLocalizedRestaurant(restaurant, language);

  const isMaison = restaurant.id === "maison-de-vi";

  return (
    <div className="group relative rounded-lg overflow-hidden bg-white border border-[#DFD5BF] transition-all duration-400 hover:-translate-y-1 hover:shadow-xl flex flex-col shadow-sm">
      {/* Image Banner */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#FAF6EF]">
        <Image
          src={restaurant.heroImage}
          alt={restaurant.name}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/90 via-[#241812]/30 to-black/20" />

        {/* Top Badges - Architectural subtle tags */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] px-3 py-1 rounded-sm backdrop-blur-md border border-white/20 bg-black/40 text-white">
            {localized.badges[0]}
          </span>
          <span className="text-[11px] text-[#241812] font-mono backdrop-blur-md bg-[#FAF6EF]/90 px-2.5 py-1 rounded-sm border border-[#DFD5BF] shadow-xs">
            {restaurant.city}
          </span>
        </div>

        {/* Floating Brand Badge */}
        <div className="absolute bottom-4 left-5 flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-md p-1.5 bg-[#FAF6EF] border border-[#DFD5BF] flex items-center justify-center shadow-md flex-shrink-0">
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
              className="text-[10px] uppercase tracking-[0.25em] font-semibold block drop-shadow-sm"
              style={{ color: "#F4D3B0" }}
            >
              {localized.subtitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide drop-shadow-md">
              {restaurant.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Content Area - Warm cream and elegant typography */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 bg-white">
        <div className="space-y-4">
          {/* Address & Metro */}
          <div className="space-y-1 text-xs text-[#6D5A50]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0 text-[#4B5031]" />
              <span className="font-medium text-[#241812]">{restaurant.address}, {restaurant.city}</span>
            </div>
            <div className="pl-6 text-[11px] text-[#7A695F] font-light">
              {t.portal.metroLabel}: {restaurant.metro}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#5C4B42] leading-relaxed font-light">
            {localized.description}
          </p>

          {/* Highlights / Badges - Olive moss & Terracotta tints */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {localized.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-sm bg-[#F4EFE6] text-[#4B5031] border border-[#DFD5BF] font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Actions - Crisp refined buttons without bloated bubbles */}
        <div className="pt-5 border-t border-[#EAE2D5] flex flex-col sm:flex-row gap-3">
          {/* Primary Action: Open Quick Drawer */}
          <button
            onClick={() => onSelectRestaurant(restaurant)}
            className="flex-1 py-3 px-4 rounded-md font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-sm text-white flex items-center justify-center gap-2 group cursor-pointer bg-[#BF4227] hover:bg-[#A4351D] active:scale-[0.99]"
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>{t.portal.bookTableBtn}</span>
          </button>

          {/* Secondary Action: More info directly or link */}
          <Link
            href={restaurant.route}
            className="py-3 px-4 rounded-md font-medium text-xs tracking-widest uppercase border border-[#DFD5BF] bg-[#F7F2E8] hover:bg-[#EFE6D6] text-[#241812] transition-all duration-300 flex items-center justify-center gap-1.5 text-center"
          >
            <span>{t.portal.detailsBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C06129]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
