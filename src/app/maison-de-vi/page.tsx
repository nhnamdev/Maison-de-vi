import { Metadata } from "next";
import { RestaurantDetailView } from "@/components/restaurant/RestaurantDetailView";
import { MAISON_DE_VI_DATA } from "@/lib/restaurant-data";

export const metadata: Metadata = {
  title: "Maison de Vị — Restaurant Vietnamien Contemporain Paris 15e | 142 Rue de Vaugirard",
  description: "Trải nghiệm ẩm thực Indochine đương đại và tinh hoa ẩm thực Việt tại 142 Rue de Vaugirard, 75015 Paris. Đặt bàn trực tuyến.",
};

export default function MaisonDeViPage() {
  return <RestaurantDetailView data={MAISON_DE_VI_DATA} />;
}
