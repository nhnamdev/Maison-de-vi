import { Language } from "./i18n/types";

export interface MenuItem {
  name: string;
  vietnameseName?: string;
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
  email: "contact@vi-hanoi.com",
  hours: "Mar - Dim: 11:30 - 14:30 & 19:00 - 22:30 (Fermé le Lundi)",
  hoursI18n: {
    en: "Tue - Sun: 11:30 - 14:30 & 19:00 - 22:30 (Closed Mon)",
    fr: "Mar - Dim: 11:30 - 14:30 & 19:00 - 22:30 (Fermé le Lundi)",
    vi: "Thứ 3 - CN: 11:30 - 14:30 & 19:00 - 22:30 (Đóng cửa thứ 2)",
  },
  heroImage: "/images/hero-3.webp",
  accentColor: "#C9873A",
  secondaryColor: "#2C1810",
  badges: ["Paris 15e", "Phở & Bún Chả", "4.7★ (500+ avis)"],
  badgesI18n: {
    en: ["Paris 15th", "Phở & Bún Chả", "4.7★ (500+ reviews)"],
    fr: ["Paris 15e", "Phở & Bún Chả", "4.7★ (500+ avis)"],
    vi: ["Paris 15", "Phở & Bún Chả", "4.7★ (500+ đánh giá)"],
  },
  description:
    "Saveurs authentiques de Hanoï au cœur de Paris. Meilleur phở, bún chả, chả giò du 15e arrondissement.",
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
  tagline: "L'art de vivre et la haute gastronomie vietnamienne à Paris",
  taglineVi: "Tinh hoa ẩm thực Việt & Nghệ thuật sống Indochine đương đại",
  taglineI18n: {
    en: "The art of living and haute gastronomy of Vietnam in Paris",
    fr: "L'art de vivre et la haute gastronomie vietnamienne à Paris",
    vi: "Tinh hoa ẩm thực Việt & Nghệ thuật sống Indochine đương đại",
  },
  address: "142 Rue de Vaugirard",
  city: "75015 Paris",
  metro: "Pasteur (M6, M12) · Falguière (M12)",
  phone: "+33 1 89 32 49 07",
  email: "contact@maison-de-vi.com",
  hours: "Mar - Dim: 12:00 - 15:00 & 19:00 - 23:00 (Fermé le Lundi)",
  hoursI18n: {
    en: "Tue - Sun: 12:00 - 15:00 & 19:00 - 23:00 (Closed Mon)",
    fr: "Mar - Dim: 12:00 - 15:00 & 19:00 - 23:00 (Fermé le Lundi)",
    vi: "Thứ 3 - CN: 12:00 - 15:00 & 19:00 - 23:00 (Đóng cửa thứ 2)",
  },
  heroImage: "/images/maison-de-vi/entrance.png",
  accentColor: "#833422",
  secondaryColor: "#C2692C",
  badges: ["Nouvelle Adresse", "Rue de Vaugirard", "Indochine Chic"],
  badgesI18n: {
    en: ["New Address", "Rue de Vaugirard", "Indochine Chic"],
    fr: ["Nouvelle Adresse", "Rue de Vaugirard", "Indochine Chic"],
    vi: ["Địa Điểm Mới", "Rue de Vaugirard", "Indochine Chic"],
  },
  description:
    "Nouvelle table d'exception du groupe Vị au 142 Rue de Vaugirard. Une rencontre intime entre l'élégance parisienne et les saveurs raffinées du Vietnam.",
  descriptionVi:
    "Cơ sở mới tại 142 Rue de Vaugirard mang ngôn ngữ kiến trúc vòm nón quai thao, gạch nung ấm áp và hương vị Việt được trau chuốt tỉ mỉ.",
  descriptionI18n: {
    en: "A new exceptional address at 142 Rue de Vaugirard, presenting warm terracotta architecture, artisanal archways, and carefully curated contemporary Vietnamese dishes.",
    fr: "Nouvelle table d'exception du groupe Vị au 142 Rue de Vaugirard. Une rencontre intime entre l'élégance parisienne et les saveurs raffinées du Vietnam.",
    vi: "Cơ sở mới tại 142 Rue de Vaugirard mang ngôn ngữ kiến trúc vòm nón quai thao, gạch nung ấm áp và hương vị Việt được trau chuốt tỉ mỉ.",
  },
  storyQuote: "“Nón quai thao, trái ớt và hoa hồi — Ba biểu tượng hội tụ chiều sâu di sản và hương sắc Việt Nam.”",
  storyQuoteI18n: {
    en: "“The Quai Thao hat, the chili, and the star anise — three symbols uniting Vietnam's heritage and culinary depth.”",
    fr: "« Le chapeau Quai Thao, le piment et l'anis étoilé — Trois symboles réunissant héritage et profondeur aromatique vietnamienne. »",
    vi: "“Nón quai thao, trái ớt và hoa hồi — Ba biểu tượng hội tụ chiều sâu di sản và hương sắc Việt Nam.”",
  },
  storyAuthor: "Triết lý thương hiệu Maison de Vị",
  storyAuthorI18n: {
    en: "Maison de Vị Brand Philosophy",
    fr: "Philosophie de marque Maison de Vị",
    vi: "Triết lý thương hiệu Maison de Vị",
  },
  storyContent:
    "Biểu tượng logo được xây dựng từ ba chất liệu văn hoá và ẩm thực đặc trưng của Việt Nam: nón quai thao mang giá trị di sản và nét duyên dáng truyền thống, trái ớt và hoa hồi đại diện cho chiều sâu gia vị và cảm xúc ẩm thực. Chữ “Vị” được sáng tạo với nhịp điệu thư pháp mềm mại, bay bổng, hòa cùng kiến trúc vòm Indochine sang trọng tại trung tâm quận 15 Paris.",
  storyContentI18n: {
    en: "Our brand identity is inspired by three distinctive cultural and culinary elements of Vietnam: the traditional Quai Thao hat representing graceful heritage, alongside fresh chili and star anise evoking culinary passion and rich aromatic depth. The word “Vị” flows in delicate calligraphy, harmonizing with warm arched Indochine architecture in Paris 15th.",
    fr: "L'identité de notre maison puise son inspiration dans trois éléments culturels et culinaires emblématiques du Vietnam : le chapeau traditionnel Quai Thao incarnant la grâce du patrimoine, le piment et l'anis étoilé symbolisant la passion des épices. La calligraphie du mot « Vị » s'associe à des arcades élégantes au cœur du 15e arrondissement.",
    vi: "Biểu tượng thương hiệu được xây dựng từ ba chất liệu văn hoá và ẩm thực đặc trưng của Việt Nam: nón quai thao mang giá trị di sản và nét duyên dáng truyền thống, trái ớt và hoa hồi đại diện cho chiều sâu gia vị và cảm xúc ẩm thực. Chữ “Vị” được sáng tạo với nhịp điệu thư pháp mềm mại, bay bổng, hòa cùng kiến trúc vòm Indochine sang trọng tại trung tâm quận 15 Paris.",
  },
  reviews: [
    {
      author: "Guide Gourmand Paris",
      role: "Avant-première",
      roleI18n: {
        en: "Preview Tasting",
        fr: "Avant-première",
        vi: "Trải Nghiệm Độc Quyền",
      },
      quote: "Une atmosphère feutrée, des céramiques soignées et une cuisine qui sublime l'essence des épices vietnamiennes.",
      date: "Prochainement",
      dateI18n: {
        en: "Coming Soon",
        fr: "Prochainement",
        vi: "Sắp Ra Mắt",
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
      quote: "Maison de Vị réinvente le bistrot vietnamien avec une grâce architecturale remarquable.",
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
  gallery: [
    {
      src: "/images/maison-de-vi/entrance.png",
      caption: "Mặt tiền và cổng vòm Maison de Vị tại 142 Rue de Vaugirard",
      captionI18n: {
        en: "Façade and artisanal arches of Maison de Vị at 142 Rue de Vaugirard",
        fr: "Façade et arcades de Maison de Vị au 142 Rue de Vaugirard",
        vi: "Mặt tiền và cổng vòm Maison de Vị tại 142 Rue de Vaugirard",
      },
    },
    {
      src: "/images/maison-de-vi/signboard.png",
      caption: "Biển hiệu hộp đèn mang đậm dấu ấn Indochine",
      captionI18n: {
        en: "Lighted lightbox signage with authentic Indochine charm",
        fr: "Enseigne lumineuse au charme indochinois",
        vi: "Biển hiệu hộp đèn mang đậm dấu ấn Indochine",
      },
    },
    {
      src: "/images/maison-de-vi/tableware.png",
      caption: "Bộ đồ ăn gốm sứ thủ công khắc logo thương hiệu",
      captionI18n: {
        en: "Artisanal ceramic tableware engraved with brand emblems",
        fr: "Art de la table en céramique artisanale estampillée",
        vi: "Bộ đồ ăn gốm sứ thủ công khắc logo thương hiệu",
      },
    },
    {
      src: "/images/maison-de-vi/logo-page-10.png",
      caption: "Đồng phục và phong cách phục vụ chu đáo",
      captionI18n: {
        en: "Attentive hospitality and tailored staff uniforms",
        fr: "Service attentionné et élégance des uniformes",
        vi: "Đồng phục và phong cách phục vụ chu đáo",
      },
    },
    {
      src: "/images/maison-de-vi/logo-page-3.png",
      caption: "Moodboard cảm hứng kiến trúc và nón quai thao",
      captionI18n: {
        en: "Design moodboard inspired by architecture & Quai Thao hat",
        fr: "Planche d'inspiration architecturale et chapeau Quai Thao",
        vi: "Moodboard cảm hứng kiến trúc và nón quai thao",
      },
    },
    {
      src: "/images/food-3.jpeg",
      caption: "Bún chả nướng chuẩn mực",
      captionI18n: {
        en: "Gastronomic Bún Chả grilled over volcanic stones",
        fr: "Bún Chả gastronomique cuit sur galets",
        vi: "Bún chả nướng chuẩn mực",
      },
    },
  ],
  route: "/maison-de-vi",
};
