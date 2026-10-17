"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Phone, MapPin, ArrowRight, Utensils } from "lucide-react";
import { ZeltyBookingWidget } from "@/components/booking/ZeltyBookingWidget";
import { RestaurantData, getLocalizedRestaurant } from "@/lib/restaurant-data";
import { useI18n } from "@/lib/i18n/context";

interface QuickReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  restaurant: RestaurantData | null;
}

export function QuickReservationDrawer({
  isOpen,
  onClose,
  restaurant,
}: QuickReservationDrawerProps) {
  const { language, t } = useI18n();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!restaurant) return null;

  const localized = getLocalizedRestaurant(restaurant, language);
  const isMaison = restaurant.id === "maison-de-vi";
  const brandAccent = isMaison ? "#BF4227" : "#C06129";



  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#241812]/50 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Slide-Over Panel - Elegant Cream & Ceramic */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[500px] md:w-[540px] bg-[#FAF6EF] text-[#241812] shadow-2xl border-l border-[#DFD5BF] flex flex-col transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`${t.drawer.title} - ${restaurant.name}`}
      >
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-[#DFD5BF] bg-[#F4EFE6] flex items-start justify-between">
          <div className="flex items-center gap-3.5 pr-8">
            <div className="w-12 h-12 rounded-md flex items-center justify-center border border-[#DFD5BF] bg-white shadow-xs flex-shrink-0 overflow-hidden p-1">
              <Image
                src={isMaison ? "/images/maison-de-vi/logo-official-badge.png" : "/images/vi-hanoi-logo.png"}
                alt={restaurant.name}
                width={48}
                height={48}
                className="object-contain w-10 h-10"
              />
            </div>
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-semibold block"
                style={{ color: brandAccent }}
              >
                {localized.subtitle}
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#241812] tracking-wide">
                {restaurant.name}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-[#6D5A50] mt-0.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#4B5031]" />
                <span>{restaurant.address}, {restaurant.city}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-md text-[#6D5A50] hover:text-[#241812] hover:bg-[#DFD5BF]/30 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 divide-y divide-[#EAE2D5]">
          {/* SECTION 1: QUICK RESERVATION */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#4B5031]">
                  {t.drawer.subtitle}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#241812] flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#BF4227]" />
                  {t.drawer.title}
                </h3>
              </div>
              <a
                href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-[#4B5031]/30 bg-[#4B5031]/5 text-[#4B5031] hover:bg-[#4B5031] hover:text-white transition-all font-medium"
                title={t.drawer.directCall}
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">{t.drawer.directCall}</span>
              </a>
            </div>

            <ZeltyBookingWidget
              restaurantName={restaurant.name}
              primaryColor={isMaison ? "b74120" : "c06129"}
            />
          </div>

          {/* SECTION 2: MORE INFORMATION ABOUT US */}
          <div className="pt-6 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#4B5031]">
                {t.restaurant.menuBadge}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#241812]">
                {t.drawer.viewDetails}
              </h3>
              <p className="text-xs text-[#6D5A50] mt-1 leading-relaxed">
                {localized.description}
              </p>
            </div>

            {/* Visual Preview Box */}
            <div className="relative rounded-md overflow-hidden border border-[#DFD5BF] group shadow-xs">
              <div className="relative h-36 w-full">
                <Image
                  src={restaurant.heroImage}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/90 via-[#241812]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/80 block">
                      {localized.badges.join(" · ")}
                    </span>
                    <span className="font-serif text-base text-white font-medium">
                      {restaurant.name}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#F4D3B0] underline">
                    {t.portal.detailsBtn}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <Link
              href={restaurant.route}
              onClick={handleClose}
              className="w-full py-3 px-4 rounded-md font-medium text-xs tracking-widest uppercase border border-[#DFD5BF] bg-white text-[#241812] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#F3ECE0] text-center group"
            >
              <span>{t.drawer.viewDetails}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#BF4227]" />
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 border-t border-[#DFD5BF] bg-[#F4EFE6] flex items-center justify-between text-[11px] text-[#7A695F]">
          <span>{localized.hours.split("&")[0]}</span>
          <span className="font-mono text-[#241812] font-medium">{restaurant.phone}</span>
        </div>
      </aside>
    </>
  );
}
