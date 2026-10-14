import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro, Pinyon_Script } from "next/font/google";
import localFont from "next/font/local";
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

const corinthia = localFont({
  src: "../../public/fonts/Corinthia-Regular.ttf",
  variable: "--font-corinthia",
  display: "swap",
});

const appleChancery = localFont({
  src: "../../public/fonts/Apple Chancery.ttf",
  variable: "--font-chancery",
  display: "swap",
});

const minion = localFont({
  src: "../../public/fonts/MinionVariableConcept-Roman.otf",
  variable: "--font-minion",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Group Maison de Vi — Vị Hanoi & Maison de Vị | Paris",
  description: "Trải nghiệm ẩm thực Việt Nam tinh hoa tại Paris. Vị Hanoi (282 Rue Lecourbe) và Maison de Vị (142 Rue de Vaugirard) thuộc Group Maison de Vi.",
  keywords: ["Group Maison de Vi", "Restaurant vietnamien Paris", "Vị Hanoi", "Maison de Vị", "Pho Paris", "Bun cha Paris", "Rue Lecourbe", "Rue de Vaugirard"],
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
      className={`${beVietnam.variable} ${playfair.variable} ${pinyonScript.variable} ${corinthia.variable} ${appleChancery.variable} ${minion.variable} h-full antialiased scroll-smooth`}
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
