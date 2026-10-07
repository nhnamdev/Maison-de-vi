"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ArrowLeft,
  Calendar,
  Users,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Menu as MenuIcon,
  X,
  Star,
} from "lucide-react";
import { RestaurantData } from "@/lib/restaurant-data";
import { GoldDivider, TerracottaDivider } from "@/components/common/BrandLogos";

interface RestaurantDetailViewProps {
  data: RestaurantData;
}

export function RestaurantDetailView({ data }: RestaurantDetailViewProps) {
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
  const accentColor = isMaison ? "#C2692C" : "#C9873A";
  const themeBg = isMaison ? "#19100C" : "#140D0A";
  const Divider = isMaison ? TerracottaDivider : GoldDivider;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName || !resPhone) {
      alert("Vui lòng điền họ tên và số điện thoại!");
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-[#FAF5EC]" style={{ backgroundColor: themeBg }}>
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#160E0A]/95 backdrop-blur-md border-b border-[#2D1B13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Back link & Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#FAF5EC]/70 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Cả 2 nhà hàng</span>
            </Link>

            <Link href={data.route} className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                {data.name}
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-[#FAF5EC]/70">
            <a href="#histoire" className="hover:text-white transition-colors">Câu chuyện</a>
            <a href="#menu" className="hover:text-white transition-colors">Thực đơn</a>
            <a href="#presse" className="hover:text-white transition-colors">Báo chí</a>
            <a href="#espace" className="hover:text-white transition-colors">Không gian</a>
            <a href="#reservation" className="hover:text-white transition-colors">Đặt bàn</a>
            <a href="#contact" className="hover:text-white transition-colors">Liên hệ</a>
          </nav>

          {/* CTA Reservation Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#reservation"
              className="px-5 py-2.5 rounded-lg text-xs font-medium uppercase tracking-widest text-white shadow transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: accentColor }}
            >
              Đặt bàn ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#2D1B13] bg-[#160E0A] px-4 py-4 space-y-3 text-sm">
            <a
              href="#histoire"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/80 hover:text-white"
            >
              Câu chuyện & Triết lý
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/80 hover:text-white"
            >
              Thực đơn (Menu)
            </a>
            <a
              href="#presse"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/80 hover:text-white"
            >
              Đánh giá báo chí
            </a>
            <a
              href="#espace"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/80 hover:text-white"
            >
              Không gian nhà hàng
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-center rounded-lg text-white font-medium uppercase text-xs"
              style={{ backgroundColor: accentColor }}
            >
              Đặt bàn trực tuyến
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#19100C]" />
          <div className="absolute inset-0 pattern-indochine opacity-40 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-12">
          <div
            className="inline-block text-[11px] sm:text-xs tracking-[0.35em] uppercase font-semibold px-4 py-1.5 rounded-full border bg-black/50 backdrop-blur-md"
            style={{ color: accentColor, borderColor: `${accentColor}50` }}
          >
            {data.address} · {data.city}
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal italic text-white tracking-tight leading-none drop-shadow-2xl">
            {data.name}
          </h1>

          <Divider className="my-2" />

          <p className="font-script text-2xl sm:text-4xl leading-snug drop-shadow-md" style={{ color: accentColor }}>
            {data.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#FAF5EC]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {data.descriptionVi}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservation"
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-xl text-white hover:brightness-110"
              style={{ backgroundColor: accentColor }}
            >
              Đặt Bàn Ngay
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 font-medium text-xs tracking-widest uppercase transition-all duration-300"
            >
              Xem Thực Đơn
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: NOTRE HISTOIRE */}
      <section id="histoire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-[#332117] aspect-[4/3] shadow-2xl group">
            <Image
              src={data.gallery[1]?.src || data.heroImage}
              alt={data.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-[#FAF5EC]/80 italic">
                {data.gallery[1]?.caption || data.name}
              </span>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold block mb-2" style={{ color: accentColor }}>
                Notre Histoire & Âme
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-white leading-tight">
                {isMaison ? "Hành Trình Kiến Tạo Maison de Vị" : "Vị Hanoi — L'Âme de Hanoï à Paris"}
              </h2>
            </div>

            <Divider className="my-1 justify-start" />

            <p className="text-sm sm:text-base text-[#FAF5EC]/80 leading-relaxed font-light">
              {data.storyContent}
            </p>

            <blockquote className="border-l-2 pl-4 py-1 italic font-script text-2xl sm:text-3xl leading-snug" style={{ borderColor: accentColor, color: accentColor }}>
              {data.storyQuote}
              <footer className="text-xs font-sans not-italic text-[#FAF5EC]/60 mt-2 font-normal">
                — {data.storyAuthor}
              </footer>
            </blockquote>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#FAF5EC]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: accentColor }} />
                <span>{data.address}, {data.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: accentColor }} />
                <span>{data.hours.split("&")[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PRESSE / ILS EN PARLENT */}
      <section id="presse" className="py-20 bg-[#160E0A] border-y border-[#291A13] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: accentColor }}>
              Họ Nói Về Chúng Tôi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-white">
              Ils en parlent
            </h2>
            <Divider className="my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.reviews.map((rev, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#1F140F] border border-[#332117] flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-white">{rev.author}</span>
                    <span
                      className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded border"
                      style={{ color: accentColor, borderColor: `${accentColor}50` }}
                    >
                      {rev.role || "Critique"}
                    </span>
                  </div>
                  <p className="font-serif text-lg italic text-[#FAF5EC]/90 leading-relaxed">
                    “{rev.quote}”
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-[#FAF5EC]/50">
                  <span>{rev.date || "Revue Gastronomique"}</span>
                  {rev.url && (
                    <a
                      href={rev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                      style={{ color: accentColor }}
                    >
                      <span>Xem bài báo</span>
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
          <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: accentColor }}>
            Tươi Ngon & Tinh Tế
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-white">
            Notre Carte · Thực Đơn
          </h2>
          <Divider className="my-2" />
          <p className="text-xs text-[#FAF5EC]/60 italic">
            Prix TTC · Service compris · Nguyên liệu tươi mới nhập hàng ngày
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {data.menu.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === idx
                  ? "text-white shadow-lg font-semibold"
                  : "bg-[#1E130E] text-[#FAF5EC]/70 hover:text-white border border-[#332117]"
              }`}
              style={{
                backgroundColor: activeCategory === idx ? accentColor : undefined,
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Dish Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {data.menu[activeCategory]?.items.map((dish, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#1B110D] border border-[#2F1D15] flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-lg font-medium text-white flex items-center gap-2">
                    <span>{dish.name}</span>
                    {dish.tag && (
                      <span
                        className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full border font-normal"
                        style={{ color: accentColor, borderColor: `${accentColor}50` }}
                      >
                        {dish.tag}
                      </span>
                    )}
                  </h3>
                  <span className="font-serif text-lg font-semibold whitespace-nowrap" style={{ color: accentColor }}>
                    {dish.price}
                  </span>
                </div>
                {dish.vietnameseName && (
                  <div className="text-xs text-[#DF9F4F]/80 font-light italic">
                    {dish.vietnameseName}
                  </div>
                )}
                <p className="text-xs sm:text-sm text-[#FAF5EC]/70 leading-relaxed font-light pt-1">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: NOTRE ESPACE / GALLERY */}
      <section id="espace" className="py-20 bg-[#160E0A] border-t border-[#291A13] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: accentColor }}>
              Ấm Cúng & Trang Nhã
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-white">
              Notre Espace · Không Gian
            </h2>
            <Divider className="my-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {data.gallery.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#2D1B13] bg-black/40"
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1B110D] border border-[#332117] shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: accentColor }}>
              Đặt Bàn Trực Tuyến
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal italic text-white">
              Réserver Une Table
            </h2>
            <Divider className="my-1" />
            <p className="text-xs sm:text-sm text-[#FAF5EC]/70">
              Đặt bàn trực tuyến 24/7 hoặc liên hệ hotline:{" "}
              <a href={`tel:${data.phone}`} className="font-mono underline text-white">
                {data.phone}
              </a>
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-green-950/20 border border-green-500/40 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-green-400 mx-auto" />
              <h3 className="font-serif text-2xl text-white">Yêu Cầu Đã Được Ghi Nhận!</h3>
              <p className="text-sm text-green-200">
                Cảm ơn quý khách <strong>{resName}</strong>. Chúng tôi sẽ liên hệ tới số{" "}
                <span className="font-mono text-white">{resPhone}</span> để xác nhận lịch đặt bàn {resGuests} khách.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs uppercase tracking-wider underline hover:text-white"
                style={{ color: accentColor }}
              >
                Đặt thêm bàn khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/70 mb-1.5 uppercase tracking-wider">
                    Ngày (Date) *
                  </label>
                  <input
                    type="date"
                    required
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#221612] border border-[#332117] text-white text-xs focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/70 mb-1.5 uppercase tracking-wider">
                    Giờ (Heure) *
                  </label>
                  <select
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#221612] border border-[#332117] text-white text-xs focus:outline-none focus:border-gold"
                  >
                    <optgroup label="Bữa trưa (Midi)">
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                    </optgroup>
                    <optgroup label="Bữa tối (Soir)">
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/70 mb-1.5 uppercase tracking-wider">
                    Số Khách (Personnes) *
                  </label>
                  <select
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#221612] border border-[#332117] text-white text-xs focus:outline-none focus:border-gold"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                      <option key={n} value={n}>
                        {n} người
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/70 mb-1.5 uppercase tracking-wider">
                    Họ và tên (Nom) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Nguyễn Văn A"
                    value={resName}
                    onChange={(e) => setResName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#221612] border border-[#332117] text-white text-xs focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#FAF5EC]/70 mb-1.5 uppercase tracking-wider">
                    Số điện thoại (Téléphone) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+33 6 12 34 56 78"
                    value={resPhone}
                    onChange={(e) => setResPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#221612] border border-[#332117] text-white text-xs focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#FAF5EC]/70 mb-1.5 uppercase tracking-wider">
                  Ghi chú yêu cầu đặc biệt
                </label>
                <textarea
                  rows={2}
                  placeholder="Bàn ngoài trời, ghế trẻ em, dị ứng hải sản..."
                  value={resNotes}
                  onChange={(e) => setResNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#221612] border border-[#332117] text-white text-xs focus:outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs font-medium uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: accentColor }}
              >
                Gửi Xác Nhận Đặt Bàn
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION: CONTACT & ACCÈS */}
      <section id="contact" className="py-16 bg-[#120B08] border-t border-[#291A13] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-white">{data.name}</h4>
            <p className="text-xs text-[#FAF5EC]/70">{data.address}, {data.city}</p>
            <p className="text-xs text-[#FAF5EC]/50">Métro: {data.metro}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-white">Giờ Mở Cửa (Horaires)</h4>
            <p className="text-xs text-[#FAF5EC]/70">{data.hours}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-white">Liên Hệ & Hotline</h4>
            <p className="text-xs text-[#FAF5EC]/70">
              <a href={`tel:${data.phone}`} className="font-mono hover:text-white underline">
                {data.phone}
              </a>
            </p>
            <p className="text-xs text-[#FAF5EC]/50">{data.email}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#22150F] bg-[#0C0705] py-8 text-center text-xs text-[#FAF5EC]/40 space-y-2">
        <p>© 2026 {data.name} Paris — {data.address}, 75015 Paris.</p>
        <Link href="/" className="inline-block text-[#FAF5EC]/70 hover:text-white underline">
          ← Quay lại trang chủ chọn nhà hàng
        </Link>
      </footer>
    </div>
  );
}
