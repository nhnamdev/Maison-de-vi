"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Calendar, Clock, Users, Phone, MapPin, CheckCircle, ArrowRight, Utensils } from "lucide-react";
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

  // Form State
  const [selectedDate, setSelectedDate] = useState<string>("today");
  const [customDate, setCustomDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("19:30");
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsSuccess(false);
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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert(t.drawer.alertNamePhone);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const lunchSlots = ["11:30", "12:00", "12:30", "13:00", "13:30"];
  const dinnerSlots = ["19:00", "19:30", "20:00", "20:30", "21:00"];

  const dateDisplay =
    selectedDate === "today"
      ? t.drawer.today
      : selectedDate === "tomorrow"
      ? t.drawer.tomorrow
      : customDate || t.drawer.otherDate;

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
                src={isMaison ? "/images/maison-de-vi/logo-badge.png" : "/images/vi-hanoi-logo.png"}
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

            {isSuccess ? (
              <div className="p-6 rounded-md border border-[#4B5031]/30 bg-[#4B5031]/10 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#4B5031] mx-auto" />
                <h4 className="font-serif text-xl text-[#241812] font-semibold">{t.drawer.successTitle}</h4>
                <p className="text-sm text-[#4B5031] leading-relaxed">
                  {t.drawer.successMessage
                    .replace("{name}", name)
                    .replace("{guests}", String(guests))
                    .replace("{restaurant}", restaurant.name)
                    .replace("{date}", dateDisplay)
                    .replace("{time}", selectedTime)
                    .replace("{phone}", phone)}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-3 text-xs uppercase tracking-wider underline hover:text-[#241812] transition-colors cursor-pointer text-[#BF4227] font-medium"
                >
                  {t.drawer.bookAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* 1. Select Date */}
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#BF4227]" />
                    {t.drawer.step1}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDate("today")}
                      className={`py-2 px-3 text-xs font-medium rounded-md border transition-all text-center cursor-pointer ${
                        selectedDate === "today"
                          ? "border-[#BF4227] bg-[#BF4227] text-white shadow-xs font-semibold"
                          : "border-[#DFD5BF] bg-white text-[#5C4B42] hover:border-[#BF4227]/50"
                      }`}
                    >
                      {t.drawer.today}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate("tomorrow")}
                      className={`py-2 px-3 text-xs font-medium rounded-md border transition-all text-center cursor-pointer ${
                        selectedDate === "tomorrow"
                          ? "border-[#BF4227] bg-[#BF4227] text-white shadow-xs font-semibold"
                          : "border-[#DFD5BF] bg-white text-[#5C4B42] hover:border-[#BF4227]/50"
                      }`}
                    >
                      {t.drawer.tomorrow}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate("custom")}
                      className={`py-2 px-3 text-xs font-medium rounded-md border transition-all text-center cursor-pointer ${
                        selectedDate === "custom"
                          ? "border-[#BF4227] bg-[#BF4227] text-white shadow-xs font-semibold"
                          : "border-[#DFD5BF] bg-white text-[#5C4B42] hover:border-[#BF4227]/50"
                      }`}
                    >
                      {t.drawer.otherDate}
                    </button>
                  </div>
                  {selectedDate === "custom" && (
                    <input
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="mt-2 w-full px-3 py-2 text-xs rounded-md bg-white border border-[#DFD5BF] text-[#241812] focus:outline-none focus:border-[#BF4227]"
                      required
                    />
                  )}
                </div>

                {/* 2. Select Guests */}
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#4B5031]" />
                    {t.drawer.step3}
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white border border-[#DFD5BF] rounded-md p-1 shadow-xs">
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded text-lg font-bold text-[#5C4B42] hover:text-[#241812] hover:bg-[#FAF6EF] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-serif text-base font-semibold text-[#241812]">
                        {guests}
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                        className="w-8 h-8 flex items-center justify-center rounded text-lg font-bold text-[#5C4B42] hover:text-[#241812] hover:bg-[#FAF6EF] cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs text-[#7A695F] italic">
                      {guests} {t.drawer.guestUnit}
                    </span>
                  </div>
                </div>

                {/* 3. Select Time */}
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C06129]" />
                    {t.drawer.step2}
                  </label>
                  <div className="space-y-2">
                    <div className="text-[11px] text-[#6D5A50] font-medium">{t.drawer.lunchService}:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {lunchSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-1.5 rounded-md text-xs transition-colors font-medium cursor-pointer ${
                            selectedTime === time
                              ? "bg-[#BF4227] text-white font-semibold shadow-xs"
                              : "bg-white border border-[#DFD5BF] text-[#5C4B42] hover:border-[#BF4227]/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#6D5A50] font-medium pt-1">{t.drawer.dinnerService}:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {dinnerSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-1.5 rounded-md text-xs transition-colors font-medium cursor-pointer ${
                            selectedTime === time
                              ? "bg-[#BF4227] text-white font-semibold shadow-xs"
                              : "bg-white border border-[#DFD5BF] text-[#5C4B42] hover:border-[#BF4227]/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Customer Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-medium text-[#5C4B42] mb-1">
                      {t.restaurant.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.drawer.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-md bg-white border border-[#DFD5BF] text-[#241812] focus:outline-none focus:border-[#BF4227]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#5C4B42] mb-1">
                      {t.restaurant.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.drawer.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-md bg-white border border-[#DFD5BF] text-[#241812] focus:outline-none focus:border-[#BF4227]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#5C4B42] mb-1">
                    {t.drawer.notesLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.drawer.notesPlaceholder}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md bg-white border border-[#DFD5BF] text-[#241812] focus:outline-none focus:border-[#BF4227]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-md font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-sm text-white flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 bg-[#BF4227] hover:bg-[#A4351D] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>{t.drawer.submitting}</span>
                  ) : (
                    <>
                      <span>{t.drawer.confirmBtn}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
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
