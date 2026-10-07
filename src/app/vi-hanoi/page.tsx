import { Metadata } from "next";
import { RestaurantDetailView } from "@/components/restaurant/RestaurantDetailView";
import { VI_HANOI_DATA } from "@/lib/restaurant-data";

export const metadata: Metadata = {
  title: "Vị Hanoi — Meilleur Restaurant Vietnamien Paris 15e | 282 Rue Lecourbe",
  description: "Saveurs authentiques de Hanoï au cœur de Paris. Phở bò hầm 48h, bún chả than hoa. Réservez votre table au 282 Rue Lecourbe, 75015 Paris.",
};

export default function ViHanoiPage() {
  return <RestaurantDetailView data={VI_HANOI_DATA} />;
}
