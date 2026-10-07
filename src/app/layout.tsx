import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Les Restaurants Vị Paris — Vị Hanoi & Maison de Vị",
  description: "Trải nghiệm ẩm thực Việt Nam tinh hoa tại Paris 15e. Đặt bàn nhanh tại Vị Hanoi (282 Rue Lecourbe) và Maison de Vị (142 Rue de Vaugirard).",
  keywords: ["Restaurant vietnamien Paris", "Vị Hanoi", "Maison de Vị", "Pho Paris 15", "Bun cha Paris", "Rue Lecourbe", "Rue de Vaugirard"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${beVietnam.variable} ${playfair.variable} ${pinyonScript.variable} h-full antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#FAF6EF] text-[#241812] selection:bg-[#BF4227] selection:text-white"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
