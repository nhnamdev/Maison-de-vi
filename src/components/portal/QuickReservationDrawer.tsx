"use client";

import React, { useState, useEffect } from "react";
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

  const handleClose = React.useCallback(() => {
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
  const accentColor = isMaison ? "#C2692C" : "#C9873A";
  const primaryBgColor = isMaison ? "#833422" : "#2C1810";

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
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Slide-Over Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[500px] md:w-[540px] bg-[#18110E] text-[#FAF5EC] shadow-2xl border-l border-[#332117] flex flex-col transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`${t.drawer.title} - ${restaurant.name}`}
      >
        {/* Header */}
        <div
          className="relative px-6 py-5 border-b border-[#332117] flex items-start justify-between"
          style={{
            background: isMaison
              ? "linear-gradient(135deg, rgba(131,52,34,0.35) 0%, rgba(20,13,10,0.9) 100%)"
              : "linear-gradient(135deg, rgba(201,135,58,0.2) 0%, rgba(20,13,10,0.9) 100%)",
          }}
        >
          <div className="flex items-center gap-3.5 pr-8">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center border shadow-inner flex-shrink-0 overflow-hidden"
              style={{
                borderColor: `${accentColor}40`,
                backgroundColor: primaryBgColor,
              }}
            >
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
                style={{ color: accentColor }}
              >
                {localized.subtitle}
              </span>
              <h2 className="font-serif text-2xl font-bold text-white tracking-wide">
                {restaurant.name}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-[#FAF5EC]/70 mt-0.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accentColor }} />
                <span>{restaurant.address}, {restaurant.city}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full text-[#FAF5EC]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 divide-y divide-[#2B1B14]">
          {/* SECTION 1: QUICK RESERVATION */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: accentColor }}>
                  {t.drawer.subtitle}
                </span>
                <h3 className="font-serif text-xl font-medium text-white flex items-center gap-2">
                  <Utensils className="w-4 h-4" style={{ color: accentColor }} />
                  {t.drawer.title}
                </h3>
              </div>
              <a
                href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border border-[#C9873A]/40 text-[#DF9F4F] hover:bg-[#C9873A]/10 transition-colors"
                title={t.drawer.directCall}
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">{t.drawer.directCall}</span>
              </a>
            </div>

            {isSuccess ? (
              <div className="p-6 rounded-xl border border-green-500/40 bg-green-950/20 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
                <h4 className="font-serif text-xl text-white font-medium">{t.drawer.successTitle}</h4>
                <p className="text-sm text-green-200/90 leading-relaxed">
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
                  className="mt-3 text-xs uppercase tracking-wider underline hover:text-white transition-colors cursor-pointer"
                  style={{ color: accentColor }}
                >
                  {t.drawer.bookAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* 1. Select Date */}
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/80 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" style={{ color: accentColor }} />
                    {t.drawer.step1}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDate("today")}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                        selectedDate === "today"
                          ? "border-[#DF9F4F] bg-[#C9873A]/20 text-white shadow"
                          : "border-[#332117] bg-[#221612] text-[#FAF5EC]/70 hover:border-[#4B3023]"
                      }`}
                    >
                      {t.drawer.today}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate("tomorrow")}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                        selectedDate === "tomorrow"
                          ? "border-[#DF9F4F] bg-[#C9873A]/20 text-white shadow"
                          : "border-[#332117] bg-[#221612] text-[#FAF5EC]/70 hover:border-[#4B3023]"
                      }`}
                    >
                      {t.drawer.tomorrow}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate("custom")}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                        selectedDate === "custom"
                          ? "border-[#DF9F4F] bg-[#C9873A]/20 text-white shadow"
                          : "border-[#332117] bg-[#221612] text-[#FAF5EC]/70 hover:border-[#4B3023]"
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
                      className="mt-2 w-full px-3 py-2 text-xs rounded-lg bg-[#221612] border border-[#332117] text-white focus:outline-none focus:border-[#DF9F4F]"
                      required
                    />
                  )}
                </div>

                {/* 2. Select Guests */}
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/80 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" style={{ color: accentColor }} />
                    {t.drawer.step3}
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#221612] border border-[#332117] rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded text-lg font-bold text-[#FAF5EC]/70 hover:text-white hover:bg-white/10 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-serif text-base font-semibold text-white">
                        {guests}
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                        className="w-8 h-8 flex items-center justify-center rounded text-lg font-bold text-[#FAF5EC]/70 hover:text-white hover:bg-white/10 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs text-[#FAF5EC]/60 italic">
                      {guests} {t.drawer.guestUnit}
                    </span>
                  </div>
                </div>

                {/* 3. Select Time */}
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/80 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" style={{ color: accentColor }} />
                    {t.drawer.step2}
                  </label>
                  <div className="space-y-2">
                    <div className="text-[11px] text-[#FAF5EC]/60 font-medium">{t.drawer.lunchService}:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {lunchSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-2.5 py-1.5 rounded text-xs transition-colors font-medium cursor-pointer ${
                            selectedTime === time
                              ? "bg-gold text-white font-semibold"
                              : "bg-[#221612] border border-[#332117] text-[#FAF5EC]/80 hover:border-[#DF9F4F]/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#FAF5EC]/60 font-medium pt-1">{t.drawer.dinnerService}:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {dinnerSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-2.5 py-1.5 rounded text-xs transition-colors font-medium cursor-pointer ${
                            selectedTime === time
                              ? "bg-gold text-white font-semibold"
                              : "bg-[#221612] border border-[#332117] text-[#FAF5EC]/80 hover:border-[#DF9F4F]/50"
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
                    <label className="block text-[11px] font-medium text-[#FAF5EC]/70 mb-1">
                      {t.restaurant.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.drawer.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#221612] border border-[#332117] text-white focus:outline-none focus:border-[#DF9F4F]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#FAF5EC]/70 mb-1">
                      {t.restaurant.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.drawer.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#221612] border border-[#332117] text-white focus:outline-none focus:border-[#DF9F4F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#FAF5EC]/70 mb-1">
                    {t.drawer.notesLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.drawer.notesPlaceholder}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#221612] border border-[#332117] text-white focus:outline-none focus:border-[#DF9F4F]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-lg font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-lg text-white flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 hover:brightness-110 active:scale-[0.99]"
                  style={{
                    backgroundColor: accentColor,
                  }}
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
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: accentColor }}>
                {t.restaurant.menuBadge}
              </span>
              <h3 className="font-serif text-xl font-medium text-white">
                {t.drawer.viewDetails}
              </h3>
              <p className="text-xs text-[#FAF5EC]/70 mt-1 leading-relaxed">
                {localized.description}
              </p>
            </div>

            {/* Visual Preview Box */}
            <div className="relative rounded-xl overflow-hidden border border-[#332117] group">
              <div className="relative h-36 w-full">
                <Image
                  src={restaurant.heroImage}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18110E] via-[#18110E]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/70 block">
                      {localized.badges.join(" · ")}
                    </span>
                    <span className="font-serif text-base text-white font-medium">
                      {restaurant.name}
                    </span>
                  </div>
                  <span className="text-xs font-medium underline" style={{ color: accentColor }}>
                    {t.portal.detailsBtn}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <Link
              href={restaurant.route}
              onClick={onClose}
              className="w-full py-3.5 px-4 rounded-lg font-medium text-xs tracking-widest uppercase border transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/5 text-center group"
              style={{
                borderColor: `${accentColor}80`,
                color: accentColor,
              }}
            >
              <span>{t.drawer.viewDetails}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 border-t border-[#332117] bg-[#140D0A] flex items-center justify-between text-[11px] text-[#FAF5EC]/50">
          <span>{localized.hours.split("&")[0]}</span>
          <span className="font-mono text-white/80">{restaurant.phone}</span>
        </div>
      </aside>
    </>
  );
}
