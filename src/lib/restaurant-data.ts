import { Language } from "./i18n/types";

export interface MenuItem {
  name: string;
  vietnameseName?: string;
  nameI18n?: Record<Language, string>;
  description: string;
  descriptionI18n?: Record<Language, string>;
  price: string;
  tag?: string;
  tagI18n?: Record<Language, string>;
}

export interface MenuCategory {
  category: string;
  categoryI18n?: Record<Language, string>;
  items: MenuItem[];
}

export interface ReviewItem {
  author: string;
  role?: string;
  roleI18n?: Record<Language, string>;
  quote: string;
  date?: string;
  dateI18n?: Record<Language, string>;
  url?: string;
}

export interface GalleryItem {
  src: string;
  caption: string;
  captionI18n?: Record<Language, string>;
}

export interface RestaurantData {
  id: "vi-hanoi" | "maison-de-vi";
  name: string;
  subtitle: string;
  subtitleI18n?: Record<Language, string>;
  tagline: string;
  taglineVi: string;
  taglineI18n?: Record<Language, string>;
  address: string;
  city: string;
  metro: string;
  phone: string;
  email: string;
  hours: string;
  hoursI18n?: Record<Language, string>;
  heroImage: string;
  accentColor: string;
  secondaryColor: string;
  badges: string[];
  badgesI18n?: Record<Language, string[]>;
  description: string;
  descriptionVi: string;
  descriptionI18n?: Record<Language, string>;
  storyQuote: string;
  storyQuoteI18n?: Record<Language, string>;
  storyAuthor: string;
  storyAuthorI18n?: Record<Language, string>;
  storyContent: string;
  storyContentI18n?: Record<Language, string>;
  reviews: ReviewItem[];
  menu: MenuCategory[];
  menuImages?: { src: string; title: string; subtitle?: string }[];
  gallery: GalleryItem[];
  route: string;
}

export function getLocalizedRestaurant(data: RestaurantData, lang: Language) {
  return {
    ...data,
    subtitle: data.subtitleI18n?.[lang] || data.subtitle,
    tagline: data.taglineI18n?.[lang] || (lang === "vi" ? data.taglineVi : data.tagline),
    description: data.descriptionI18n?.[lang] || (lang === "vi" ? data.descriptionVi : data.description),
    badges: data.badgesI18n?.[lang] || data.badges,
    storyQuote: data.storyQuoteI18n?.[lang] || data.storyQuote,
    storyAuthor: data.storyAuthorI18n?.[lang] || data.storyAuthor,
    storyContent: data.storyContentI18n?.[lang] || data.storyContent,
    hours: data.hoursI18n?.[lang] || data.hours,
    menu: data.menu.map((cat) => ({
      ...cat,
      category: cat.categoryI18n?.[lang] || cat.category,
      items: cat.items.map((item) => ({
        ...item,
        name:
          item.nameI18n?.[lang] ||
          (lang === "vi" && item.vietnameseName ? item.vietnameseName : item.name),
        description: item.descriptionI18n?.[lang] || item.description,
        tag: item.tagI18n?.[lang] || item.tag,
      })),
    })),
    gallery: data.gallery.map((img) => ({
      ...img,
      caption: img.captionI18n?.[lang] || img.caption,
    })),
    reviews: data.reviews.map((rev) => ({
      ...rev,
      role: rev.roleI18n?.[lang] || rev.role,
      date: rev.dateI18n?.[lang] || rev.date,
    })),
  };
}

export const VI_HANOI_DATA: RestaurantData = {
  id: "vi-hanoi",
  name: "Vị Hanoi",
  subtitle: "Cuisine Traditionnelle de Hanoï",
  subtitleI18n: {
    en: "Traditional Hanoi Cuisine",
    fr: "Cuisine Traditionnelle de Hanoï",
    vi: "Ẩm Thực Truyền Thống Hà Nội",
  },
  tagline: "Les saveurs authentiques de Hanoï au cœur de Paris",
  taglineVi: "Hương vị truyền thống Hà Nội giữa lòng Paris",
  taglineI18n: {
    en: "Authentic flavors of Hanoi in the heart of Paris",
    fr: "Les saveurs authentiques de Hanoï au cœur de Paris",
    vi: "Hương vị truyền thống Hà Nội giữa lòng Paris",
  },
  address: "282 Rue Lecourbe",
  city: "75015 Paris",
  metro: "Lourmel (M8) · Boucicaut (M8)",
  phone: "+33 1 89 32 49 07",
  email: "reservation.lecourbe@maisonde-vi.fr",
  hours: "7j/7 : 11:30 - 14:30 & 19:00 - 22:30",
  hoursI18n: {
    en: "7 days a week: 11:30 - 14:30 & 19:00 - 22:30",
    fr: "7j/7 : 11:30 - 14:30 & 19:00 - 22:30",
    vi: "Cả tuần: 11:30 - 14:30 & 19:00 - 22:30",
  },
  heroImage: "/images/hero-3.webp",
  accentColor: "#C9873A",
  secondaryColor: "#2C1810",
  badges: ["Paris", "Phở & Bún Chả", "4.7★ (500+ avis)"],
  badgesI18n: {
    en: ["Paris", "Phở & Bún Chả", "4.7★ (500+ reviews)"],
    fr: ["Paris", "Phở & Bún Chả", "4.7★ (500+ avis)"],
    vi: ["Paris", "Phở & Bún Chả", "4.7★ (500+ đánh giá)"],
  },
  description:
    "Saveurs authentiques de Hanoï au cœur de Paris. Phở traditionnel, bún chả than hoa et spécialités vietnamiennes d'exception.",
  descriptionVi:
    "Nhà hàng mang đến những món ăn chuẩn vị Hà Nội trong không gian gỗ ấm cúng, đậm đà ký ức thủ đô.",
  descriptionI18n: {
    en: "Authentic Hanoi dishes in a warm wooden interior, echoing the soul and culinary heritage of Vietnam's capital.",
    fr: "Saveurs authentiques de Hanoï au cœur de Paris. Meilleur phở, bún chả, chả giò du 15e arrondissement.",
    vi: "Nhà hàng mang đến những món ăn chuẩn vị Hà Nội trong không gian gỗ ấm cúng, đậm đà ký ức thủ đô.",
  },
  storyQuote: "“Phở là thứ quà riêng của Hà Nội, không phải chỉ riêng Hà Nội mới có, nhưng chính là vì chỉ ở Hà Nội mới ngon”",
  storyQuoteI18n: {
    en: "“Pho is Hanoi's unique gift; not because other places don't have it, but because only in Hanoi is it truly exceptional.”",
    fr: "« Le Phở est un présent exclusif de Hanoï — non pas que d'autres ne le fassent point, mais c'est à Hanoï qu'il révèle toute sa quintessence. »",
    vi: "“Phở là thứ quà riêng của Hà Nội, không phải chỉ riêng Hà Nội mới có, nhưng chính là vì chỉ ở Hà Nội mới ngon”",
  },
  storyAuthor: "Thạch Lam (Hà Nội 36 Phố Phường)",
  storyAuthorI18n: {
    en: "Thạch Lam (Hanoi 36 Streets and Guilds)",
    fr: "Thạch Lam (Hanoï aux 36 Rues et Corporations)",
    vi: "Thạch Lam (Hà Nội 36 Phố Phường)",
  },
  storyContent:
    "Nous vous apportons les saveurs authentiques et uniques de la cuisine hanoïenne. Notre espace, orné de peintures murales et de mobilier en bois traditionnel, est idéal pour dîner en famille, entre amis ou entre collègues. Mỗi nồi nước dùng được ninh hầm chậm rãi trên 48 tiếng, giữ trọn vị ngọt thanh thuần khiết từ xương tủy và hồi, quế thơm lừng.",
  storyContentI18n: {
    en: "We bring you the authentic and unique flavors of traditional Hanoi gastronomy. Our space, adorned with warm wooden craftsmanship and cultural murals, is the ideal destination for dining with family, friends, and colleagues. Every pot of broth is gently slow-simmered for over 48 hours with marrow bones, star anise, and cinnamon to preserve the purest natural sweetness.",
    fr: "Nous vous apportons les saveurs authentiques et uniques de la cuisine hanoïenne. Notre espace, orné de peintures murales et de mobilier en bois traditionnel, est idéal pour dîner en famille, entre amis ou entre collègues. Chaque bouillon est mijoté lentement plus de 48 heures, révélant toute la richesse aromatique de l'anis étoilé et de la cannelle.",
    vi: "Chúng tôi mang đến cho quý khách những hương vị nguyên bản và độc đáo nhất của ẩm thực Hà Nội. Không gian trang nhã với nội thất gỗ truyền thống và tranh tường văn hóa là điểm hẹn lý tưởng cho những bữa ăn sum họp gia đình, bạn bè và đồng nghiệp. Mỗi nồi nước dùng được ninh hầm chậm rãi trên 48 tiếng, giữ trọn vị ngọt thanh thuần khiết từ xương tủy, hồi và quế thơm lừng.",
  },
  reviews: [
    {
      author: "Télérama",
      role: "Critique Presse",
      roleI18n: {
        en: "Press Review",
        fr: "Critique Presse",
        vi: "Báo Chí & Phê Bình",
      },
      quote: "Un vietnamien délicieusement croustillant, rue Lecourbe.",
      date: "Sélection Télérama",
      dateI18n: {
        en: "Selected Address",
        fr: "Sélection Télérama",
        vi: "Chuyên Mục Télérama",
      },
      url: "https://www.telerama.fr/restos-loisirs/vi-hanoi-un-vietnamien-rue-lecourbe-delicieusement-croustillant_cri-7040809.php",
    },
    {
      author: "Gilles Pudlowski",
      role: "Les Pieds dans le Plat",
      roleI18n: {
        en: "Food Critic",
        fr: "Les Pieds dans le Plat",
        vi: "Chuyên Gia Ẩm Thực",
      },
      quote: "Une perle à saisir, bonne, sympa, pas chère, authentique.",
      date: "15 Septembre 2024",
      dateI18n: {
        en: "September 15, 2024",
        fr: "15 Septembre 2024",
        vi: "15 Tháng 9, 2024",
      },
      url: "https://www.gillespudlowski.com/383306/restaurants/paris-15e-comme-a-hanoi-2",
    },
    {
      author: "David Tang",
      role: "Client fidèle",
      roleI18n: {
        en: "Regular Guest",
        fr: "Client fidèle",
        vi: "Khách Quen Thân Thiết",
      },
      quote: "This is the best restaurant pho I'll ever have! Perfect balance of fresh spices and authentic herbs.",
      date: "Mars 2025",
      dateI18n: {
        en: "March 2025",
        fr: "Mars 2025",
        vi: "Tháng 3, 2025",
      },
    },
  ],
  menu: [
    {
      category: "Entrées (Khai vị)",
      categoryI18n: {
        en: "Starters & Appetizers",
        fr: "Entrées & Khai Vị",
        vi: "Món Khai Vị",
      },
      items: [
        {
          name: "Bánh Cuốn Hanoïen",
          nameI18n: {
            en: "Hanoi Steamed Rice Rolls",
            fr: "Bánh Cuốn Hanoïen",
            vi: "Bánh cuốn nhân thịt mộc nhĩ",
          },
          vietnameseName: "Bánh cuốn nhân thịt mộc nhĩ",
          description: "Galette de riz à la vapeur maison, porc haché, champignons noirs parfumés et échalotes frites.",
          descriptionI18n: {
            en: "Handmade steamed rice rolls filled with minced pork, wood ear mushrooms, and crispy shallots.",
            fr: "Galette de riz à la vapeur maison, porc haché, champignons noirs parfumés et échalotes frites.",
            vi: "Bánh cuốn tráng tay nóng hổi, nhân thịt băm mộc nhĩ nấm hương, rắc hành phi giòn thơm.",
          },
          price: "9.50 €",
          tag: "Spécialité",
          tagI18n: {
            en: "Specialty",
            fr: "Spécialité",
            vi: "Đặc Sản",
          },
        },
        {
          name: "Nems au Porc Spécial (4 pcs)",
          nameI18n: {
            en: "Crispy Pork Spring Rolls (4 pcs)",
            fr: "Nems au Porc Spécial (4 pcs)",
            vi: "Nem rán truyền thống",
          },
          vietnameseName: "Nem rán truyền thống",
          description: "Nems croustillants dorés au porc, crevettes, vermicelles de riz et légumes croquants.",
          descriptionI18n: {
            en: "Crispy golden spring rolls with pork, shrimp, glass noodles, and crunchy vegetables.",
            fr: "Nems croustillants dorés au porc, crevettes, vermicelles de riz et légumes croquants.",
            vi: "Nem rán vỏ giòn rụm nhân thịt heo, tôm tươi, miến dong và mộc nhĩ truyền thống.",
          },
          price: "9.50 €",
          tag: "Incontournable",
          tagI18n: {
            en: "Must-Try",
            fr: "Incontournable",
            vi: "Nên Thử",
          },
        },
        {
          name: "Rouleaux de Printemps aux Crevettes",
          nameI18n: {
            en: "Fresh Summer Rolls with Shrimp",
            fr: "Rouleaux de Printemps aux Crevettes",
            vi: "Gỏi cuốn tôm tươi",
          },
          vietnameseName: "Gỏi cuốn tôm tươi",
          description: "Rouleaux de riz frais, crevettes roses, herbes aromatiques et vermicelles.",
          descriptionI18n: {
            en: "Fresh summer rolls with tender shrimp, aromatic Vietnamese herbs, and rice vermicelli.",
            fr: "Rouleaux de riz frais, crevettes roses, herbes aromatiques et vermicelles.",
            vi: "Gỏi cuốn thanh mát với tôm tươi, bún gạo mềm và rau thơm nhiệt đới.",
          },
          price: "9.00 €",
        },
        {
          name: "Bánh Khọt (4 pcs)",
          nameI18n: {
            en: "Crispy Mini Pancakes with Shrimp & Pork (4 pcs)",
            fr: "Bánh Khọt (4 pcs)",
            vi: "Bánh khọt tôm thịt",
          },
          vietnameseName: "Bánh khọt tôm thịt",
          description: "Palets croustillants au lait de coco et curcuma, garniture crevettes et porc.",
          descriptionI18n: {
            en: "Savory crispy mini pancakes with coconut milk and turmeric, topped with shrimp and pork.",
            fr: "Palets croustillants au lait de coco et curcuma, garniture crevettes et porc.",
            vi: "Bánh khọt giòn rụm béo ngậy nước cốt dừa, nghệ tươi, nhân tôm thịt đậm đà.",
          },
          price: "10.50 €",
        },
        {
          name: "Plateau Royal Vietnamien (12 pcs)",
          nameI18n: {
            en: "Royal Vietnamese Platter (12 pcs)",
            fr: "Plateau Royal Vietnamien (12 pcs)",
            vi: "Mẹt khai vị hoàng gia",
          },
          vietnameseName: "Mẹt khai vị hoàng gia",
          description: "Assortiment généreux : nems porc, crevettes, bánh khọt, rouleaux de printemps à partager.",
          descriptionI18n: {
            en: "Grand sharing platter: crispy pork spring rolls, shrimp, bánh khọt, and fresh summer rolls.",
            fr: "Assortiment généreux : nems porc, crevettes, bánh khọt, rouleaux de printemps à partager.",
            vi: "Mẹt khai vị thịnh soạn gồm nem rán, bánh khọt, gỏi cuốn tôm tươi thích hợp dùng chung.",
          },
          price: "19.50 €",
          tag: "À partager",
          tagI18n: {
            en: "To Share",
            fr: "À partager",
            vi: "Dành Cho Nhóm",
          },
        },
      ],
    },
    {
      category: "Soupes Phở (Phở truyền thống)",
      categoryI18n: {
        en: "Traditional Phở Soups",
        fr: "Soupes Phở Traditionnelles",
        vi: "Phở Truyền Thống",
      },
      items: [
        {
          name: "Phở Spécial du Chef",
          nameI18n: {
            en: "Chef's Special Phở",
            fr: "Phở Spécial du Chef",
            vi: "Phở đặc biệt Vị Hanoi",
          },
          vietnameseName: "Phở đặc biệt Vị Hanoi",
          description: "Phở bœuf mi-cuit mi-saignant, bœuf mijoté, boulettes artisanales, bouillon mijoté 48h.",
          descriptionI18n: {
            en: "Chef's special phở: rare beef, slow-braised brisket, artisanal meatballs, 48h simmered bone broth.",
            fr: "Phở bœuf mi-cuit mi-saignant, bœuf mijoté, boulettes artisanales, bouillon mijoté 48h.",
            vi: "Phở đặc biệt với bò tái mềm, nạm gầu ninh nhừ, bò viên thủ công và nước dùng hầm 48 giờ.",
          },
          price: "16.00 €",
          tag: "Signature",
          tagI18n: {
            en: "Signature",
            fr: "Signature",
            vi: "Món Đặc Trưng",
          },
        },
        {
          name: "Phở Bœuf Cru",
          nameI18n: {
            en: "Rare Beef Phở",
            fr: "Phở Bœuf Cru",
            vi: "Phở bò tái",
          },
          vietnameseName: "Phở bò tái",
          description: "Fines tranches de bœuf tendre crues cuites au bouillon brûlant et aromates frais.",
          descriptionI18n: {
            en: "Tender thinly sliced rare beef cooked in steaming hot aromatic marrow broth with fresh herbs.",
            fr: "Fines tranches de bœuf tendre crues cuites au bouillon brûlant et aromates frais.",
            vi: "Phở bò tái với thịt thăn mềm chần chín tới trong nước dùng sôi sùng sục thơm lừng quế hồi.",
          },
          price: "13.50 €",
        },
        {
          name: "Phở Bœuf Sauté à l'Ail",
          nameI18n: {
            en: "Wok-Seared Garlic Beef Phở",
            fr: "Phở Bœuf Sauté à l'Ail",
            vi: "Phở bò tái lăn",
          },
          vietnameseName: "Phở bò tái lăn",
          description: "Bœuf émincé sauté vivement au wok à l'ail et gingembre frais, bouillon riche.",
          descriptionI18n: {
            en: "Wok-seared tender beef with fragrant garlic and fresh ginger over rich savory broth.",
            fr: "Bœuf émincé sauté vivement au wok à l'ail et gingembre frais, bouillon riche.",
            vi: "Phở bò tái lăn áp chảo lửa lớn cùng tỏi thơm, gừng tươi và nước dùng đậm đà béo ngậy.",
          },
          price: "15.50 €",
          tag: "Populaire",
          tagI18n: {
            en: "Popular",
            fr: "Populaire",
            vi: "Yêu Thích",
          },
        },
        {
          name: "Phở Poulet Fermier",
          nameI18n: {
            en: "Free-Range Chicken Phở",
            fr: "Phở Poulet Fermier",
            vi: "Phở gà ta lá chanh",
          },
          vietnameseName: "Phở gà ta lá chanh",
          description: "Bouillon limpide et parfumé au gingembre, poulet fermier émincé et feuilles de citronnier.",
          descriptionI18n: {
            en: "Crystal-clear broth infused with ginger, tender free-range chicken, and fresh kaffir lime leaves.",
            fr: "Bouillon limpide et parfumé au gingembre, poulet fermier émincé et feuilles de citronnier.",
            vi: "Phở gà ta da vàng giòn thịt ngọt, nước dùng thanh trong thơm lừng lá chanh bánh tẻ.",
          },
          price: "14.50 €",
        },
      ],
    },
    {
      category: "Plats Chauds (Món chính)",
      categoryI18n: {
        en: "Hot Dishes & Specialties",
        fr: "Plats Chauds & Spécialités",
        vi: "Món Chính & Đặc Sản",
      },
      items: [
        {
          name: "Bún Chả Hanoïen",
          nameI18n: {
            en: "Hanoi Charcoal-Grilled Bún Chả",
            fr: "Bún Chả Hanoïen",
            vi: "Bún chả than hoa Hà Nội",
          },
          vietnameseName: "Bún chả than hoa Hà Nội",
          description: "Poitrine et boulettes de porc grillées au charbon de bois, vermicelles, herbes fraîches et bouillon tiède.",
          descriptionI18n: {
            en: "Charcoal-grilled pork patties and belly, fresh rice vermicelli, fragrant herbs, warm dipping broth.",
            fr: "Poitrine et boulettes de porc grillées au charbon de bois, vermicelles, herbes fraîches et bouillon tiède.",
            vi: "Bún chả nướng than hoa thơm nức mũi, chả miếng chả băm kèm nước mắm đu đủ cà rốt giòn.",
          },
          price: "18.50 €",
          tag: "Spécialité",
          tagI18n: {
            en: "Specialty",
            fr: "Spécialité",
            vi: "Đặc Sản",
          },
        },
        {
          name: "Bò Bún Traditionnel & Nem",
          nameI18n: {
            en: "Traditional Bò Bún with Crispy Spring Roll",
            fr: "Bò Bún Traditionnel & Nem",
            vi: "Bún bò Nam Bộ & Nem",
          },
          vietnameseName: "Bún bò Nam Bộ & Nem",
          description: "Bœuf sauté à la citronnelle sur lit de vermicelles frais, salade, menthe, cacahuètes pilées.",
          descriptionI18n: {
            en: "Lemongrass sautéed beef on fresh vermicelli, fresh herbs, crispy spring roll, roasted peanuts.",
            fr: "Bœuf sauté à la citronnelle sur lit de vermicelles frais, salade, menthe, cacahuètes pilées.",
            vi: "Bún bò Nam Bộ xào sả ớt thơm lừng, ăn kèm nem giòn, rau sống xanh mát và lạc rang giã dập.",
          },
          price: "14.50 €",
        },
        {
          name: "Bœuf Luk Lak au Poivre de Phu Quoc",
          nameI18n: {
            en: "Shaking Beef Luk Lak with Tomato Rice",
            fr: "Bœuf Luk Lak au Poivre de Phu Quoc",
            vi: "Bò lúc lắc cơm chiên tỏi",
          },
          vietnameseName: "Bò lúc lắc cơm chiên tỏi",
          description: "Dés de bœuf ultra-fondants sautés à haute température, servis avec riz parfumé à la tomate.",
          descriptionI18n: {
            en: "Melt-in-mouth diced beef seared with Phu Quoc black pepper, served with fragrant tomato rice.",
            fr: "Dés de bœuf ultra-fondants sautés à haute température, servis avec riz parfumé à la tomate.",
            vi: "Bò lúc lắc thịt thăn mềm mọng sốt tiêu đảo lửa lớn, ăn kèm cơm chiên cà chua thơm dẻo.",
          },
          price: "18.50 €",
          tag: "Coup de cœur",
          tagI18n: {
            en: "Favorite",
            fr: "Coup de cœur",
            vi: "Tuyển Chọn",
          },
        },
        {
          name: "Cơm Thịt Kho Tàu",
          nameI18n: {
            en: "Caramelized Braised Pork Belly & Egg",
            fr: "Cơm Thịt Kho Tàu",
            vi: "Thịt kho tàu nước dừa",
          },
          vietnameseName: "Thịt kho tàu nước dừa",
          description: "Porc fondant caramélisé lentement au jus de coco frais et œufs fermiers, servi avec riz blanc.",
          descriptionI18n: {
            en: "Slow-caramelized braised pork belly in fresh coconut water with farm eggs, served with jasmine rice.",
            fr: "Porc fondant caramélisé lentement au jus de coco frais et œufs fermiers, servi avec riz blanc.",
            vi: "Thịt kho tàu mềm rục ngấm nước dừa xiêm béo ngọt cùng trứng kho đậm đà, ăn kèm cơm trắng nóng hổi.",
          },
          price: "16.00 €",
        },
      ],
    },
    {
      category: "Desserts (Tráng miệng)",
      categoryI18n: {
        en: "Desserts & Sweets",
        fr: "Douceurs & Desserts",
        vi: "Món Tráng Miệng",
      },
      items: [
        {
          name: "Kem Bơ Dừa Hanoï",
          nameI18n: {
            en: "Hanoi Avocado & Artisanal Coconut Ice Cream",
            fr: "Kem Bơ Dừa Hanoï",
            vi: "Kem bơ cốt dừa sấy",
          },
          vietnameseName: "Kem bơ cốt dừa sấy",
          description: "Crème d'avocat onctueuse sur glace artisanale à la noix de coco, éclats de noix de coco grillée.",
          descriptionI18n: {
            en: "Silky avocado puree over artisanal coconut ice cream, sprinkled with toasted coconut flakes.",
            fr: "Crème d'avocat onctueuse sur glace artisanale à la noix de coco, éclats de noix de coco grillée.",
            vi: "Kem bơ dẻo mịn béo ngậy quyện cùng kem dừa cốt thủ công và dừa tươi sấy giòn tan.",
          },
          price: "7.50 €",
          tag: "Dessert phare",
          tagI18n: {
            en: "Signature Dessert",
            fr: "Dessert phare",
            vi: "Tráng Miệng Nổi Bật",
          },
        },
        {
          name: "Chè Ba Màu",
          nameI18n: {
            en: "Traditional Three-Color Sweet Dessert",
            fr: "Chè Ba Màu",
            vi: "Chè ba màu nước cốt dừa",
          },
          vietnameseName: "Chè ba màu nước cốt dừa",
          description: "Dessert traditionnel rafraîchissant aux trois douceurs, haricots sucrés et gelée de pandan.",
          descriptionI18n: {
            en: "Refreshing traditional sweet dessert soup with three layers of sweetened beans, pandan jelly, and coconut milk.",
            fr: "Dessert traditionnel rafraîchissant aux trois douceurs, haricots sucrés et gelée de pandan.",
            vi: "Chè ba màu truyền thống thanh mát với đỗ đỏ, đậu xanh bùi bùi, thạch lá dứa và nước cốt dừa thơm béo.",
          },
          price: "6.50 €",
        },
      ],
    },
  ],
  gallery: [
    {
      src: "/images/hero-3.webp",
      caption: "Không gian ấm cúng tại 282 Rue Lecourbe",
      captionI18n: {
        en: "Warm & cozy atmosphere at 282 Rue Lecourbe",
        fr: "Ambiance chaleureuse au 282 Rue Lecourbe",
        vi: "Không gian ấm cúng tại 282 Rue Lecourbe",
      },
    },
    {
      src: "/images/gallery-restaurant-4.webp",
      caption: "Nội thất gỗ và tranh tường nghệ thuật",
      captionI18n: {
        en: "Artisanal woodwork and cultural wall murals",
        fr: "Boiseries artisanales et fresques culturelles",
        vi: "Nội thất gỗ và tranh tường nghệ thuật",
      },
    },
    {
      src: "/images/food-3.jpeg",
      caption: "Bún chả than hoa trứ danh",
      captionI18n: {
        en: "Renowned charcoal-grilled Bún Chả",
        fr: "Bún chả grillé au charbon de bois renommé",
        vi: "Bún chả than hoa trứ danh",
      },
    },
    {
      src: "/images/food-1.jpeg",
      caption: "Bánh cuốn nóng truyền thống",
      captionI18n: {
        en: "Fresh handmade steamed rice rolls",
        fr: "Bánh cuốn traditionnel préparé minute",
        vi: "Bánh cuốn nóng truyền thống",
      },
    },
    {
      src: "/images/food-2.jpeg",
      caption: "Nem rán giòn rụm",
      captionI18n: {
        en: "Crispy golden traditional spring rolls",
        fr: "Nems traditionnels dorés et croustillants",
        vi: "Nem rán giòn rụm truyền thống",
      },
    },
    {
      src: "/images/food-6.jpeg",
      caption: "Bò lúc lắc đậm vị sốt tiêu",
      captionI18n: {
        en: "Savory wok-tossed Shaking Beef with pepper glaze",
        fr: "Bœuf Luk Lak au poivre sauté au wok",
        vi: "Bò lúc lắc đậm vị sốt tiêu thơm lừng",
      },
    },
  ],
  route: "/vi-hanoi",
};

export const MAISON_DE_VI_DATA: RestaurantData = {
  id: "maison-de-vi",
  name: "Maison de Vị",
  subtitle: "Restaurant Vietnamien Contemporain",
  subtitleI18n: {
    en: "Contemporary Vietnamese Restaurant",
    fr: "Restaurant Vietnamien Contemporain",
    vi: "Nhà Hàng Việt Nam Đương Đại",
  },
  tagline: "La cuisine de Hanoi, comme à la maison",
  taglineVi: "Món ăn Hà Nội, ấm cúng như ở nhà",
  taglineI18n: {
    en: "Hanoi cuisine, just like at home",
    fr: "La cuisine de Hanoi, comme à la maison",
    vi: "Món ăn Hà Nội, ấm cúng như ở nhà",
  },
  address: "142 Rue de Vaugirard",
  city: "75015 Paris",
  metro: "Pasteur (M6, M12) · Falguière (M12)",
  phone: "+33 9 62 19 45 73",
  email: "reservation.vaugirard@maisonde-vi.fr",
  hours: "Lun - Sam : 11:00 - 14:30 & 19:00 - 22:30",
  hoursI18n: {
    en: "Mon - Sat: 11:00 - 14:30 & 19:00 - 22:30 (Closed Sunday)",
    fr: "Lun - Sam : 11:00 - 14:30 & 19:00 - 22:30 (Fermé le dimanche)",
    vi: "Thứ 2 - Thứ 7: 11:00 - 14:30 & 19:00 - 22:30 (Chủ nhật đóng cửa)",
  },
  heroImage: "/images/maison-de-vi/maison-hero.png",
  accentColor: "#833422",
  secondaryColor: "#C2692C",
  badges: ["Paris", "142 Rue de Vaugirard", "Cuisine Maison"],
  badgesI18n: {
    en: ["Paris", "142 Rue de Vaugirard", "Homemade Dishes"],
    fr: ["Paris", "142 Rue de Vaugirard", "Cuisine Maison"],
    vi: ["Paris", "142 Rue de Vaugirard", "Món Ăn Tự Nấu"],
  },
  description:
    "Cuisine vietnamienne authentique et faite maison, avec des produits frais. Nous vous accueillons du lundi au samedi.",
  descriptionVi:
    "Ẩm thực Việt Nam nguyên bản và tự nấu tại nhà với nguyên liệu tươi ngon. Chúng tôi đón tiếp quý khách từ thứ Hai đến thứ Bảy.",
  descriptionI18n: {
    en: "Authentic and homemade Vietnamese cuisine with fresh produce. Welcoming you from Monday to Saturday.",
    fr: "Cuisine vietnamienne authentique et faite maison, avec des produits frais. Nous vous accueillons du lundi au samedi.",
    vi: "Ẩm thực Việt Nam nguyên bản và tự nấu tại nhà với nguyên liệu tươi ngon. Chúng tôi đón tiếp quý khách từ thứ Hai đến thứ Bảy.",
  },
  storyQuote: "« Le Phở est un présent exclusif de Hanoi — non pas que d'autres ne le fassent point, mais c'est à Hanoi qu'il trouve toute sa quintessence. »",
  storyQuoteI18n: {
    en: "“Pho is a unique gift of Hanoi — not that others don't make it, but it is in Hanoi that it finds its true quintessence.”",
    fr: "« Le Phở est un présent exclusif de Hanoi — non pas que d'autres ne le fassent point, mais c'est à Hanoi qu'il trouve toute sa quintessence. »",
    vi: "“Phở là thứ quà riêng của Hà Nội, không phải chỉ riêng Hà Nội mới có, nhưng chính là vì chỉ ở Hà Nội mới ngon.”",
  },
  storyAuthor: "Thạch Lam (Hanoi aux 36 Rues et Corporations)",
  storyAuthorI18n: {
    en: "Thach Lam (Hanoi aux 36 Rues et Corporations)",
    fr: "Thạch Lam (Hanoi aux 36 Rues et Corporations)",
    vi: "Thạch Lam (Hà Nội 36 Phố Phường)",
  },
  storyContent:
    "Maison de Vị vous ouvre les portes d'une maison hanoïenne au cœur du 15e. Sous ses arches de briques et son plafond rouge orné de chapeaux coniques, on partage les saveurs du Nord du Vietnam comme en famille, avec des plats faits maison et préparés chaque jour. Un lieu chaleureux pour un déjeuner sur le pouce, un dîner entre amis ou en famille.",
  storyContentI18n: {
    en: "Maison de Vị welcomes you into a Hanoi home in the heart of the 15th arrondissement. Beneath brick arches and a red ceiling adorned with conical hats, enjoy Northern Vietnamese flavors shared like family, with dishes freshly homemade each day. A warm setting for a quick lunch or an intimate dinner with friends and family.",
    fr: "Maison de Vị vous ouvre les portes d'une maison hanoïenne au cœur du 15e. Sous ses arches de briques et son plafond rouge orné de chapeaux coniques, on partage les saveurs du Nord du Vietnam comme en famille, avec des plats faits maison et préparés chaque jour. Un lieu chaleureux pour un déjeuner sur le pouce, un dîner entre amis ou en famille.",
    vi: "Maison de Vị mở ra cánh cửa của một ngôi nhà Hà Nội giữa lòng quận 15. Dưới những vòm gạch mộc và trần đỏ đan cài nón lá, thực khách cùng nhau sẻ chia hương vị miền Bắc như một bữa cơm gia đình, với các món ăn tự nấu chuẩn vị được chế biến tươi mỗi ngày. Điểm hẹn ấm áp cho bữa trưa nhanh hay bữa tối sum vầy cùng bạn bè, người thân.",
  },
  reviews: [
    {
      author: "Guide Gourmand Paris",
      role: "Critique",
      roleI18n: {
        en: "Critique",
        fr: "Critique",
        vi: "Đánh Giá Ẩm Thực",
      },
      quote: "Une atmosphère chaleureuse aux briques rouges et des saveurs authentiques du Nord du Vietnam.",
      date: "Sélection Paris",
      dateI18n: {
        en: "Paris Selection",
        fr: "Sélection Paris",
        vi: "Lựa Chọn Paris",
      },
    },
    {
      author: "Paris Match Gastronomie",
      role: "Sélection Coup de Cœur",
      roleI18n: {
        en: "Editor's Choice",
        fr: "Sélection Coup de Cœur",
        vi: "Lựa Chọn Yêu Thích",
      },
      quote: "Maison de Vị vous fait voyager à Hanoi avec des plats faits maison pleins de délicatesse.",
      date: "Sélection Gastronomie",
      dateI18n: {
        en: "Gastronomic Selection",
        fr: "Sélection Gastronomie",
        vi: "Chuyên Mục Ẩm Thực",
      },
    },
  ],
  menu: [
    {
      category: "Créations & Entrées Délicates",
      categoryI18n: {
        en: "Delicate Creations & Starters",
        fr: "Créations & Entrées Délicates",
        vi: "Khai Vị Sáng Tạo & Tinh Tế",
      },
      items: [
        {
          name: "Tartare de Bœuf à la Citronnelle & Épices d'Hanoï",
          nameI18n: {
            en: "Hand-Cut Beef Tartare with Lemongrass & Spices",
            fr: "Tartare de Bœuf à la Citronnelle & Épices d'Hanoï",
            vi: "Bò bóp thấu sốt chanh ớt hoa hồi",
          },
          vietnameseName: "Bò bóp thấu sốt chanh ớt hoa hồi",
          description: "Bœuf émincé au couteau, échalotes marinées, herbes rares du Nord et chips de riz croustillantes.",
          descriptionI18n: {
            en: "Hand-cut beef tartare, pickled shallots, Northern Vietnamese highland herbs, and crispy rice crackers.",
            fr: "Bœuf émincé au couteau, échalotes marinées, herbes rares du Nord et chips de riz croustillantes.",
            vi: "Bò bóp thấu thái tay ướp sả non, hành tím muối chua, thảo mộc vùng cao và bánh đa giòn tan.",
          },
          price: "12.50 €",
          tag: "Création",
          tagI18n: {
            en: "Creation",
            fr: "Création",
            vi: "Sáng Tạo",
          },
        },
        {
          name: "Bánh Cuốn Truffe Noire & Champignons Sylvestres",
          nameI18n: {
            en: "Steamed Rice Rolls with Black Truffle & Wild Shiitake",
            fr: "Bánh Cuốn Truffe Noire & Champignons Sylvestres",
            vi: "Bánh cuốn hương nấm rừng",
          },
          vietnameseName: "Bánh cuốn hương nấm rừng",
          description: "Fines vapeurs de riz cuites minute, farce champignon shiitake parfumé, touche de truffe.",
          descriptionI18n: {
            en: "Delicate fresh steamed rice sheets, wild shiitake mushroom filling, accented with black truffle.",
            fr: "Fines vapeurs de riz cuites minute, farce champignon shiitake parfumé, touche de truffe.",
            vi: "Bánh cuốn thủ công tráng mỏng tang, nhân nấm hương rừng Tây Bắc kết hợp tinh dầu nấm truffle đen quý phái.",
          },
          price: "13.00 €",
          tag: "Signature",
          tagI18n: {
            en: "Signature",
            fr: "Signature",
            vi: "Món Đặc Trưng",
          },
        },
        {
          name: "Crevettes Royales en Croûte de Riz Vert (Cốm)",
          nameI18n: {
            en: "King Prawns in Crispy Hanoi Young Green Rice",
            fr: "Crevettes Royales en Croûte de Riz Vert (Cốm)",
            vi: "Tôm bọc cốm xanh Làng Vòng",
          },
          vietnameseName: "Tôm bọc cốm xanh Làng Vòng",
          description: "Crevettes enrobées de cốm Hà Nội croustillant, sauce aigre-douce pimentée au kumquat.",
          descriptionI18n: {
            en: "King prawns coated in crispy young green Hanoi rice flakes, spicy kumquat sweet-and-sour glaze.",
            fr: "Crevettes enrobées de cốm Hà Nội croustillant, sauce aigre-douce pimentée au kumquat.",
            vi: "Tôm sú tươi giòn bọc cốm xanh Làng Vòng chiên vàng ruộm, chấm sốt quất chua ngọt thơm cay dịu.",
          },
          price: "12.00 €",
          tag: "Coup de cœur",
          tagI18n: {
            en: "Favorite",
            fr: "Coup de cœur",
            vi: "Tuyển Chọn",
          },
        },
        {
          name: "Salade de Papaye Verte & Bœuf Séché Maison",
          nameI18n: {
            en: "Green Papaya Salad with Artisanal Spiced Beef",
            fr: "Salade de Papaye Verte & Bœuf Séché Maison",
            vi: "Nộm đu đủ bò khô thủ công",
          },
          vietnameseName: "Nộm đu đủ bò khô thủ công",
          description: "Papaye verte râpée, bœuf mariné séché aux épices traditionnelles, vinaigrette au vinaigre de riz.",
          descriptionI18n: {
            en: "Crispy shredded green papaya, house-cured artisanal dried spiced beef, sweet rice vinegar vinaigrette.",
            fr: "Papaye verte râpée, bœuf mariné séché aux épices traditionnelles, vinaigrette au vinaigre de riz.",
            vi: "Nộm đu đủ giòn ngọt trộn bò khô tẩm ướp gia vị cổ truyền cùng nước giấm đường chua thanh chuẩn vị.",
          },
          price: "11.00 €",
        },
      ],
    },
    {
      category: "Mijotés & Spécialités d'Auteur",
      categoryI18n: {
        en: "Slow-Simmered & Signature Mains",
        fr: "Mijotés & Spécialités d'Auteur",
        vi: "Món Hầm Chậm & Đặc Sản",
      },
      items: [
        {
          name: "Phở Cuit au Chaudron & Os à Moelle Rôti",
          nameI18n: {
            en: "Stone-Pot Wagyu Phở with Roasted Bone Marrow",
            fr: "Phở Cuit au Chaudron & Os à Moelle Rôti",
            vi: "Phở bò thố đá tủy xương nướng",
          },
          vietnameseName: "Phở bò thố đá tủy xương nướng",
          description: "Bouillon limpide aux 7 épices torréfiées servi bouillonnant, bœuf Wagyu émincé et os à moelle rôti.",
          descriptionI18n: {
            en: "Hot stone-pot phở with 7 roasted aromatic spices, tender Wagyu beef slices, and roasted bone marrow.",
            fr: "Bouillon limpide aux 7 épices torréfiées servi bouillonnant, bœuf Wagyu émincé et os à moelle rôti.",
            vi: "Phở thố đá nước dùng thanh trong 7 vị thảo quả rang thơm, bò Wagyu mềm ngọt và tủy xương nướng ngậy béo.",
          },
          price: "21.00 €",
          tag: "Chef Special",
          tagI18n: {
            en: "Chef's Special",
            fr: "Chef Special",
            vi: "Bếp Trưởng Đề Xuất",
          },
        },
        {
          name: "Canard Laqué aux Cinq Parfums & Prunes Caramel",
          nameI18n: {
            en: "Five-Spice Roasted Duck Breast with Plum Reduction",
            fr: "Canard Laqué aux Cinq Parfums & Prunes Caramel",
            vi: "Vịt áp chảo ngũ vị sốt mận",
          },
          vietnameseName: "Vịt áp chảo ngũ vị sốt mận",
          description: "Filet de canard croustillant aux épices douces, réduction de prunes caramélisées et galette de riz.",
          descriptionI18n: {
            en: "Five-spice roasted duck breast with sweet spice aroma, caramelized plum reduction, and crispy rice cakes.",
            fr: "Filet de canard croustillant aux épices douces, réduction de prunes caramélisées et galette de riz.",
            vi: "Ức vịt áp chảo ngũ vị da giòn thịt hồng đào, rưới sốt mận rừng caramen chua ngọt thanh tao.",
          },
          price: "22.50 €",
          tag: "Signature",
          tagI18n: {
            en: "Signature",
            fr: "Signature",
            vi: "Món Đặc Trưng",
          },
        },
        {
          name: "Bún Chả Impérial Grillé sur Galets",
          nameI18n: {
            en: "Imperial Bún Chả Grilled on Volcanic Stones",
            fr: "Bún Chả Impérial Grillé sur Galets",
            vi: "Bún chả nướng đá núi lửa",
          },
          vietnameseName: "Bún chả nướng đá núi lửa",
          description: "Brochettes de porc fermier grillées au charbon de bois, bouillon tiède infusé à la fleur d'anis étoilé.",
          descriptionI18n: {
            en: "Free-range pork skewers grilled over volcanic hot stones, warm broth gently infused with star anise.",
            fr: "Brochettes de porc fermier grillées au charbon de bois, bouillon tiède infusé à la fleur d'anis étoilé.",
            vi: "Bún chả nướng than hoa trên đá núi lửa giữ trọn độ mọng nước, nước mắm hoa hồi ấm nồng tinh tế.",
          },
          price: "19.50 €",
        },
        {
          name: "Poisson Chả Cá de La Ligne à l'Aneth & Curcuma",
          nameI18n: {
            en: "Artisanal Chả Cá White Fish with Fresh Dill & Turmeric",
            fr: "Poisson Chả Cá de La Ligne à l'Aneth & Curcuma",
            vi: "Chả cá Lã Vọng chuẩn phong vị",
          },
          vietnameseName: "Chả cá Lã Vọng chuẩn phong vị",
          description: "Dos de poisson blanc mariné au curcuma frais, sauté à table avec aneth foisonnant et ciboule.",
          descriptionI18n: {
            en: "Wild white fish fillet marinated in fresh turmeric, table-sautéed with fragrant dill and scallions.",
            fr: "Dos de poisson blanc mariné au curcuma frais, sauté à table avec aneth foisonnant et ciboule.",
            vi: "Chả cá Lã Vọng cá trắng phi-lê tẩm nghệ vàng óng, xào nóng tại bàn cùng thì là tươi và đầu hành trắng giòn ngọt.",
          },
          price: "23.00 €",
          tag: "Tradition d'Art",
          tagI18n: {
            en: "Artisan Tradition",
            fr: "Tradition d'Art",
            vi: "Tinh Hoa Ẩm Thực",
          },
        },
      ],
    },
    {
      category: "Douceurs & Desserts Singuliers",
      categoryI18n: {
        en: "Artisanal Sweets & Unique Desserts",
        fr: "Douceurs & Desserts Singuliers",
        vi: "Món Tráng Miệng Độc Đáo",
      },
      items: [
        {
          name: "Entremets Pandan & Noix de Coco Brûlée",
          nameI18n: {
            en: "Pandan & Roasted Coconut Mousse Entremets",
            fr: "Entremets Pandan & Noix de Coco Brûlée",
            vi: "Bánh bông lan lá dứa cốt dừa nướng",
          },
          vietnameseName: "Bánh bông lan lá dứa cốt dừa nướng",
          description: "Mousse légère aux feuilles de pandan fraîches, coulis mangue acidulée et crumble de sésame noir.",
          descriptionI18n: {
            en: "Airy mousse infused with fresh pandan leaves, tangy mango coulis, and roasted black sesame crumble.",
            fr: "Mousse légère aux feuilles de pandan fraîches, coulis mangue acidulée et crumble de sésame noir.",
            vi: "Mousse lá dứa cốt dừa nướng thơm dịu ngát, ăn kèm sốt xoài chua ngọt và vụn vừng đen rang giòn bùi.",
          },
          price: "8.50 €",
          tag: "Dessert",
          tagI18n: {
            en: "Dessert",
            fr: "Dessert",
            vi: "Tráng Miệng",
          },
        },
        {
          name: "Cà Phê Trứng — Café Viennois Vietnamien",
          nameI18n: {
            en: "Artisanal Vietnamese Egg Coffee",
            fr: "Cà Phê Trứng — Café Viennois Vietnamien",
            vi: "Cà phê trứng kem béo ngậy",
          },
          vietnameseName: "Cà phê trứng kem béo ngậy",
          description: "Café Robusta torréfié surmonté d'un sabayon aérien au jaune d'œuf et lait concentré.",
          descriptionI18n: {
            en: "Intense Vietnamese Robusta coffee crowned with a velvety, whipped egg yolk and condensed milk sabayon.",
            fr: "Café Robusta torréfié surmonté d'un sabayon aérien au jaune d'œuf et lait concentré.",
            vi: "Cà phê Robusta rang mộc đậm đà phủ lớp kem trứng đánh bông mịn như nhung béo ngậy ngọt ngào.",
          },
          price: "6.00 €",
        },
      ],
    },
  ],
  menuImages: [
    {
      src: "/images/maison-de-vi/maison-menu-1.png",
      title: "Menu Soft Opening — Entrées & Plats",
      subtitle: "Phở, Bún Chả, Bò Bún, Bánh Cuốn, Nems & Cơm",
    },
    {
      src: "/images/maison-de-vi/maison-menu-2.png",
      title: "Menu Soft Opening — Desserts & Boissons",
      subtitle: "Xôi xoài, Cà phê Phin, Trà thảo mộc & Nước ép tươi",
    },
    {
      src: "/images/maison-de-vi/maison-menu-midi.png",
      title: "Menu Midi — Formule Déjeuner (17,50 €)",
      subtitle: "Entrée + Plat OU Plat + Dessert (Midi en semaine)",
    },
  ],
  gallery: [
    {
      src: "/images/maison-de-vi/maison-ambiance-1.png",
      caption: "Không gian quầy bar và chi tiết đèn lồng nón lá ấm áp",
      captionI18n: {
        en: "Cozy bar counter and artisanal conical hat lamps",
        fr: "Comptoir chaleureux et luminaires en chapeaux coniques",
        vi: "Không gian quầy bar và chi tiết đèn lồng nón lá ấm áp",
      },
    },
    {
      src: "/images/maison-de-vi/maison-ambiance-2.png",
      caption: "Bàn tiệc gỗ mộc dưới trần đỏ truyền thống",
      captionI18n: {
        en: "Wooden dining tables beneath the authentic red ceiling",
        fr: "Tables en bois massif sous le plafond rouge traditionnel",
        vi: "Bàn tiệc gỗ mộc dưới trần đỏ truyền thống",
      },
    },
    {
      src: "/images/maison-de-vi/maison-ambiance-3.png",
      caption: "Góc ngồi thanh lịch bên vách tường gạch nung",
      captionI18n: {
        en: "Elegant seating corner against warm brick archways",
        fr: "Coin repas élégant près des arcades en briques",
        vi: "Góc ngồi thanh lịch bên vách tường gạch nung",
      },
    },
    {
      src: "/images/maison-de-vi/maison-ambiance-4.png",
      caption: "Chi tiết trang trí tường và ánh sáng dịu êm",
      captionI18n: {
        en: "Wall design details and soft ambient lighting",
        fr: "Détails architecturaux et ambiance lumineuse tamisée",
        vi: "Chi tiết trang trí tường và ánh sáng dịu êm",
      },
    },
    {
      src: "/images/maison-de-vi/maison-ambiance-5.png",
      caption: "Toàn cảnh phòng ăn Maison de Vị tại 142 Rue de Vaugirard",
      captionI18n: {
        en: "Panoramic view of Maison de Vị dining hall at 142 Rue de Vaugirard",
        fr: "Vue d'ensemble de la salle de Maison de Vị au 142 Rue de Vaugirard",
        vi: "Toàn cảnh phòng ăn Maison de Vị tại 142 Rue de Vaugirard",
      },
    },
  ],
  route: "/maison-de-vi",
};
