"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { RestaurantData, getLocalizedRestaurant } from "@/lib/restaurant-data";
import { GoldDivider, TerracottaDivider } from "@/components/common/BrandLogos";
import { useI18n } from "@/lib/i18n/context";

interface RestaurantDetailViewProps {
  data: RestaurantData;
}

export function RestaurantDetailView({ data }: RestaurantDetailViewProps) {
  const { language, setLanguage, t } = useI18n();
  const localized = getLocalizedRestaurant(data, language);

  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("19:30");
  const [resGuests, setResGuests] = useState("2");
  const [resName, setResName] = useState("");
  const [resPhone, setResPhone] = useState("");
  const [resNotes, setResNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isMaison = data.id === "maison-de-vi";
  const Divider = isMaison ? TerracottaDivider : GoldDivider;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName || !resPhone) {
      alert(t.drawer.alertNamePhone);
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-[#241812] bg-[#FAF6EF]">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#DFD5BF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Back link & Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#5C4B42] hover:text-[#241812] transition-colors bg-[#F3ECE0] px-3.5 py-1.5 rounded-md border border-[#DFD5BF] font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.restaurant.backToAll}</span>
            </Link>

            <Link href={data.route} className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#241812] tracking-wide">
                {data.name}
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-[#6D5A50]">
            <a href="#histoire" className="hover:text-[#BF4227] transition-colors">{t.nav.story}</a>
            <a href="#menu" className="hover:text-[#BF4227] transition-colors">{t.nav.menu}</a>
            <a href="#presse" className="hover:text-[#BF4227] transition-colors">{t.nav.press}</a>
            <a href="#espace" className="hover:text-[#BF4227] transition-colors">{t.nav.space}</a>
            <a href="#reservation" className="hover:text-[#BF4227] transition-colors">{t.nav.bookTable}</a>
            <a href="#contact" className="hover:text-[#BF4227] transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Right Action: Language Switcher + CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher - Crisp architectural tabs */}
            <div className="flex items-center bg-[#F3ECE0] border border-[#DFD5BF] rounded-md p-0.5 text-[11px] font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                  language === "en" ? "bg-[#BF4227] text-white shadow-xs font-semibold" : "text-[#6D5A50] hover:text-[#241812]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                  language === "fr" ? "bg-[#BF4227] text-white shadow-xs font-semibold" : "text-[#6D5A50] hover:text-[#241812]"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("vi")}
                className={`px-2.5 py-1 rounded-sm transition-all cursor-pointer font-sans tracking-wider ${
                  language === "vi" ? "bg-[#BF4227] text-white shadow-xs font-semibold" : "text-[#6D5A50] hover:text-[#241812]"
                }`}
              >
                VI
              </button>
            </div>

            <a
              href="#reservation"
              className="px-5 py-2.5 rounded-md text-xs font-medium uppercase tracking-widest text-white shadow-xs transition-all duration-300 bg-[#BF4227] hover:bg-[#A4351D]"
            >
              {t.nav.bookTable}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="flex items-center bg-[#F3ECE0] border border-[#DFD5BF] rounded-md p-0.5 text-[10px] font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-sm ${
                  language === "en" ? "bg-[#BF4227] text-white font-medium" : "text-[#6D5A50]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`px-2 py-0.5 rounded-sm ${
                  language === "fr" ? "bg-[#BF4227] text-white font-medium" : "text-[#6D5A50]"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("vi")}
                className={`px-2 py-0.5 rounded-sm ${
                  language === "vi" ? "bg-[#BF4227] text-white font-medium" : "text-[#6D5A50]"
                }`}
              >
                VI
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#241812] hover:bg-[#F3ECE0] rounded-md cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#DFD5BF] bg-[#FAF6EF] px-4 py-4 space-y-3 text-sm">
            <a
              href="#histoire"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#5C4B42] hover:text-[#241812] font-medium"
            >
              {t.nav.story}
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#5C4B42] hover:text-[#241812] font-medium"
            >
              {t.nav.menu}
            </a>
            <a
              href="#presse"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#5C4B42] hover:text-[#241812] font-medium"
            >
              {t.nav.press}
            </a>
            <a
              href="#espace"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#5C4B42] hover:text-[#241812] font-medium"
            >
              {t.nav.space}
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-center rounded-md text-white font-medium uppercase text-xs bg-[#BF4227]"
            >
              {t.restaurant.reserveTitle}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#241812]/80 via-[#241812]/50 to-[#FAF6EF]" />
          <div className="absolute inset-0 pattern-indochine opacity-30 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-12">
          <div className="inline-block text-[11px] sm:text-xs tracking-[0.35em] uppercase font-semibold px-4 py-1.5 rounded-md border border-[#DFD5BF] bg-[#FAF6EF]/95 text-[#4B5031] shadow-xs">
            {data.address} · {data.city}
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal italic text-white tracking-tight leading-none drop-shadow-lg">
            {data.name}
          </h1>

          <Divider className="my-2" />

          <p className="font-script text-2xl sm:text-4xl leading-snug drop-shadow-md text-[#F4D3B0]">
            {localized.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#FAF6EF]/90 max-w-2xl mx-auto font-light leading-relaxed">
            {localized.description}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservation"
              className="w-full sm:w-auto px-8 py-3.5 rounded-md font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md text-white bg-[#BF4227] hover:bg-[#A4351D]"
            >
              {t.restaurant.reserveTitle}
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#DFD5BF] bg-white/90 text-[#241812] hover:bg-white font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-xs"
            >
              {t.restaurant.menuTitle}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: NOTRE HISTOIRE */}
      <section id="histoire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative rounded-lg overflow-hidden border border-[#DFD5BF] aspect-[4/3] shadow-md group bg-white">
            <Image
              src={localized.gallery[1]?.src || data.heroImage}
              alt={data.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-white/90 italic font-serif">
                {localized.gallery[1]?.caption || data.name}
              </span>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold block mb-2 text-[#4B5031]">
                {t.restaurant.storyBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-[#241812] leading-tight">
                {isMaison ? t.restaurant.storyTitleMaisonDeVi : t.restaurant.storyTitleViHanoi}
              </h2>
            </div>

            <Divider className="my-1 justify-start" />

            <p className="text-sm sm:text-base text-[#5C4B42] leading-relaxed font-light">
              {localized.storyContent}
            </p>

            <blockquote className="border-l-2 pl-4 py-1 italic font-script text-2xl sm:text-3xl leading-snug border-[#BF4227] text-[#BF4227]">
              {localized.storyQuote}
              <footer className="text-xs font-sans not-italic text-[#7A695F] mt-2 font-normal">
                — {localized.storyAuthor}
              </footer>
            </blockquote>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#6D5A50]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4B5031]" />
                <span className="font-medium text-[#241812]">{data.address}, {data.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C06129]" />
                <span>{localized.hours.split("&")[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PRESSE / ILS EN PARLENT */}
      <section id="presse" className="py-20 bg-[#F3ECE0] border-y border-[#DFD5BF] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#4B5031]">
              {t.restaurant.pressBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-[#241812]">
              {t.restaurant.pressTitle}
            </h2>
            <Divider className="my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localized.reviews.map((rev, i) => (
              <div
                key={i}
                className="p-7 rounded-md bg-white border border-[#DFD5BF] flex flex-col justify-between space-y-4 hover:border-[#BF4227]/50 shadow-xs transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#241812]">{rev.author}</span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-sm border border-[#4B5031]/30 bg-[#4B5031]/5 text-[#4B5031] font-medium">
                      {rev.role || t.restaurant.defaultReviewRole}
                    </span>
                  </div>
                  <p className="font-serif text-lg italic text-[#4A3B33] leading-relaxed">
                    “{rev.quote}”
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#EAE2D5] text-xs text-[#7A695F]">
                  <span>{rev.date || t.restaurant.defaultReviewDate}</span>
                  {rev.url && (
                    <a
                      href={rev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#241812] transition-colors text-[#BF4227] font-medium"
                    >
                      <span>{t.restaurant.viewArticle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: MENU / NOTRE CARTE */}
      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#4B5031]">
            {t.restaurant.menuBadge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#241812]">
            {t.restaurant.menuTitle}
          </h2>
          <Divider className="my-2" />
          <p className="text-xs text-[#7A695F] italic">
            {t.restaurant.menuSubtitle}
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {localized.menu.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-md text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === idx
                  ? "bg-[#BF4227] text-white shadow-xs font-semibold"
                  : "bg-white text-[#5C4B42] hover:text-[#241812] border border-[#DFD5BF]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Dish Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {localized.menu[activeCategory]?.items.map((dish, i) => (
            <div
              key={i}
              className="p-6 rounded-md bg-white border border-[#DFD5BF] flex flex-col justify-between hover:border-[#BF4227]/50 shadow-xs transition-all duration-300"
            >
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-lg font-medium text-[#241812] flex items-center gap-2">
                    <span>{dish.name}</span>
                    {dish.tag && (
                      <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-sm border border-[#4B5031]/30 bg-[#4B5031]/5 text-[#4B5031] font-normal">
                        {dish.tag}
                      </span>
                    )}
                  </h3>
                  <span className="font-serif text-lg font-bold whitespace-nowrap text-[#BF4227]">
                    {dish.price}
                  </span>
                </div>
                {dish.vietnameseName && (
                  <div className="text-xs text-[#C06129] font-light italic">
                    {dish.vietnameseName}
                  </div>
                )}
                <p className="text-xs sm:text-sm text-[#5C4B42] leading-relaxed font-light pt-1">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: NOTRE ESPACE / GALLERY */}
      <section id="espace" className="py-20 bg-[#F3ECE0] border-t border-[#DFD5BF] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#4B5031]">
              {t.restaurant.spaceBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-[#241812]">
              {t.restaurant.spaceTitle}
            </h2>
            <Divider className="my-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {localized.gallery.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-md overflow-hidden border border-[#DFD5BF] bg-white shadow-xs"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-white font-serif italic">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: RESERVATION ONLINE FORM */}
      <section id="reservation" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-lg bg-white border border-[#DFD5BF] shadow-md space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#4B5031]">
              {t.restaurant.reserveBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-[#241812]">
              {t.restaurant.reserveTitle}
            </h2>
            <Divider className="my-1" />
            <p className="text-xs sm:text-sm text-[#6D5A50]">
              {t.restaurant.reserveSubtitle}{" "}
              <a href={`tel:${data.phone.replace(/\s+/g, "")}`} className="font-mono underline text-[#BF4227] font-medium">
                {data.phone}
              </a>
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-md bg-[#4B5031]/10 border border-[#4B5031]/30 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-[#4B5031] mx-auto" />
              <h3 className="font-serif text-2xl text-[#241812] font-semibold">{t.restaurant.reservationSuccessTitle}</h3>
              <p className="text-sm text-[#4B5031]">
                {t.restaurant.reservationSuccessDesc
                  .replace("{name}", resName)
                  .replace("{phone}", resPhone)
                  .replace("{guests}", String(resGuests))}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs uppercase tracking-wider underline hover:text-[#241812] cursor-pointer text-[#BF4227] font-medium"
              >
                {t.restaurant.bookAnotherTable}
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] mb-1.5 uppercase tracking-wider">
                    {t.restaurant.dateLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF6EF] border border-[#DFD5BF] text-[#241812] text-xs focus:outline-none focus:border-[#BF4227]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] mb-1.5 uppercase tracking-wider">
                    {t.restaurant.timeLabel}
                  </label>
                  <select
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF6EF] border border-[#DFD5BF] text-[#241812] text-xs focus:outline-none focus:border-[#BF4227]"
                  >
                    <optgroup label={t.restaurant.lunchGroup}>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                    </optgroup>
                    <optgroup label={t.restaurant.dinnerGroup}>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] mb-1.5 uppercase tracking-wider">
                    {t.restaurant.guestsLabel}
                  </label>
                  <select
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF6EF] border border-[#DFD5BF] text-[#241812] text-xs focus:outline-none focus:border-[#BF4227]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                      <option key={n} value={n}>
                        {n} {t.drawer.guestUnit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] mb-1.5 uppercase tracking-wider">
                    {t.restaurant.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.drawer.namePlaceholder}
                    value={resName}
                    onChange={(e) => setResName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF6EF] border border-[#DFD5BF] text-[#241812] text-xs focus:outline-none focus:border-[#BF4227]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5C4B42] mb-1.5 uppercase tracking-wider">
                    {t.restaurant.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.drawer.phonePlaceholder}
                    value={resPhone}
                    onChange={(e) => setResPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF6EF] border border-[#DFD5BF] text-[#241812] text-xs focus:outline-none focus:border-[#BF4227]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#5C4B42] mb-1.5 uppercase tracking-wider">
                  {t.restaurant.notesLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder={t.restaurant.notesPlaceholder}
                  value={resNotes}
                  onChange={(e) => setResNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF6EF] border border-[#DFD5BF] text-[#241812] text-xs focus:outline-none focus:border-[#BF4227]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-md text-xs font-medium uppercase tracking-widest text-white shadow-sm transition-all duration-300 bg-[#BF4227] hover:bg-[#A4351D] cursor-pointer"
              >
                {t.restaurant.submitReservation}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION: CONTACT & ACCÈS */}
      <section id="contact" className="py-16 bg-[#F3ECE0] border-t border-[#DFD5BF] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#241812]">{data.name}</h4>
            <p className="text-xs text-[#5C4B42]">{data.address}, {data.city}</p>
            <p className="text-xs text-[#7A695F]">{t.portal.metroLabel}: {data.metro}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#241812]">{t.restaurant.openingHours}</h4>
            <p className="text-xs text-[#5C4B42]">{localized.hours}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#241812]">{t.restaurant.contactHotline}</h4>
            <p className="text-xs text-[#5C4B42]">
              <a href={`tel:${data.phone.replace(/\s+/g, "")}`} className="font-mono hover:text-[#BF4227] underline">
                {data.phone}
              </a>
            </p>
            <p className="text-xs text-[#7A695F]">{data.email}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#DFD5BF] bg-[#EFE6D6] py-8 text-center text-xs text-[#7A695F] space-y-2">
        <p>© 2026 {data.name} Paris — {data.address}, 75015 Paris.</p>
        <Link href="/" className="inline-block text-[#5C4B42] hover:text-[#BF4227] underline">
          {t.restaurant.backHome}
        </Link>
      </footer>
    </div>
  );
}
