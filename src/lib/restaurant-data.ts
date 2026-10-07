import { Language } from "./i18n/types";

export interface MenuItem {
  name: string;
  vietnameseName?: string;
  description: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  category: string;
  categoryI18n?: Record<Language, string>;
  items: MenuItem[];
}

export interface ReviewItem {
  author: string;
  role?: string;
  quote: string;
  date?: string;
  url?: string;
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
  gallery: { src: string; caption: string }[];
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
      quote: "Un vietnamien délicieusement croustillant, rue Lecourbe.",
      url: "https://www.telerama.fr/restos-loisirs/vi-hanoi-un-vietnamien-rue-lecourbe-delicieusement-croustillant_cri-7040809.php",
    },
    {
      author: "Gilles Pudlowski",
      role: "Les Pieds dans le Plat",
      quote: "Une perle à saisir, bonne, sympa, pas chère, authentique.",
      date: "15 Septembre 2024",
      url: "https://www.gillespudlowski.com/383306/restaurants/paris-15e-comme-a-hanoi-2",
    },
    {
      author: "David Tang",
      role: "Client fidèle",
      quote: "This is the best restaurant pho I'll ever have! Perfect balance of fresh spices and authentic herbs.",
      date: "Mars 2025",
    },
  ],
  menu: [
    {
      category: "Entrées (Khai vị)",
      items: [
        {
          name: "Bánh Cuốn Hanoïen",
          vietnameseName: "Bánh cuốn nhân thịt mộc nhĩ",
          description: "Galette de riz à la vapeur maison, porc haché, champignons noirs parfumés et échalotes frites.",
          price: "9.50 €",
          tag: "Spécialité",
        },
        {
          name: "Nems au Porc Spécial (4 pcs)",
          vietnameseName: "Nem rán truyền thống",
          description: "Nems croustillants dorés au porc, crevettes, vermicelles de riz et légumes croquants.",
          price: "9.50 €",
          tag: "Incontournable",
        },
        {
          name: "Rouleaux de Printemps aux Crevettes",
          vietnameseName: "Gỏi cuốn tôm tươi",
          description: "Rouleaux de riz frais, crevettes roses, herbes aromatiques et vermicelles.",
          price: "9.00 €",
        },
        {
          name: "Bánh Khọt (4 pcs)",
          vietnameseName: "Bánh khọt tôm thịt",
          description: "Palets croustillants au lait de coco et curcuma, garniture crevettes et porc.",
          price: "10.50 €",
        },
        {
          name: "Plateau Royal Vietnamien (12 pcs)",
          vietnameseName: "Mẹt khai vị hoàng gia",
          description: "Assortiment généreux : nems porc, crevettes, bánh khọt, rouleaux de printemps à partager.",
          price: "19.50 €",
          tag: "À partager",
        },
      ],
    },
    {
      category: "Soupes Phở (Phở truyền thống)",
      items: [
        {
          name: "Phở Spécial du Chef",
          vietnameseName: "Phở đặc biệt Vị Hanoi",
          description: "Phở bœuf mi-cuit mi-saignant, bœuf mijoté, boulettes artisanales, bouillon mijoté 48h.",
          price: "16.00 €",
          tag: "Signature",
        },
        {
          name: "Phở Bœuf Cru",
          vietnameseName: "Phở bò tái",
          description: "Fines tranches de bœuf tendre crues cuites au bouillon brûlant et aromates frais.",
          price: "13.50 €",
        },
        {
          name: "Phở Bœuf Sauté à l'Ail",
          vietnameseName: "Phở bò tái lăn",
          description: "Bœuf émincé sauté vivement au wok à l'ail et gingembre frais, bouillon riche.",
          price: "15.50 €",
          tag: "Populaire",
        },
        {
          name: "Phở Poulet Fermier",
          vietnameseName: "Phở gà ta lá chanh",
          description: "Bouillon limpide et parfumé au gingembre, poulet fermier émincé et feuilles de citronnier.",
          price: "14.50 €",
        },
      ],
    },
    {
      category: "Plats Chauds (Món chính)",
      items: [
        {
          name: "Bún Chả Hanoïen",
          vietnameseName: "Bún chả than hoa Hà Nội",
          description: "Poitrine et boulettes de porc grillées au charbon de bois, vermicelles, herbes fraîches et bouillon tiède.",
          price: "18.50 €",
          tag: "Spécialité",
        },
        {
          name: "Bò Bún Traditionnel & Nem",
          vietnameseName: "Bún bò Nam Bộ & Nem",
          description: "Bœuf sauté à la citronnelle sur lit de vermicelles frais, salade, menthe, cacahuètes pilées.",
          price: "14.50 €",
        },
        {
          name: "Bœuf Luk Lak au Poivre de Phu Quoc",
          vietnameseName: "Bò lúc lắc cơm chiên tỏi",
          description: "Dés de bœuf ultra-fondants sautés à haute température, servis avec riz parfumé à la tomate.",
          price: "18.50 €",
          tag: "Coup de cœur",
        },
        {
          name: "Cơm Thịt Kho Tàu",
          vietnameseName: "Thịt kho tàu nước dừa",
          description: "Porc fondant caramélisé lentement au jus de coco frais et œufs fermiers, servi avec riz blanc.",
          price: "16.00 €",
        },
      ],
    },
    {
      category: "Desserts (Tráng miệng)",
      items: [
        {
          name: "Kem Bơ Dừa Hanoï",
          vietnameseName: "Kem bơ cốt dừa sấy",
          description: "Crème d'avocat onctueuse sur glace artisanale à la noix de coco, éclats de noix de coco grillée.",
          price: "7.50 €",
          tag: "Dessert phare",
        },
        {
          name: "Chè Ba Màu",
          vietnameseName: "Chè ba màu nước cốt dừa",
          description: "Dessert traditionnel rafraîchissant aux trois douceurs, haricots sucrés et gelée de pandan.",
          price: "6.50 €",
        },
      ],
    },
  ],
  gallery: [
    { src: "/images/hero-3.webp", caption: "Không gian ấm cúng tại 282 Rue Lecourbe" },
    { src: "/images/gallery-restaurant-4.webp", caption: "Nội thất gỗ và tranh tường nghệ thuật" },
    { src: "/images/food-3.jpeg", caption: "Bún chả than hoa trứ danh" },
    { src: "/images/food-1.jpeg", caption: "Bánh cuốn nóng truyền thống" },
    { src: "/images/food-2.jpeg", caption: "Nem rán giòn rụm" },
    { src: "/images/food-6.jpeg", caption: "Bò lúc lắc đậm vị sốt tiêu" },
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
      quote: "Une atmosphère feutrée, des céramiques soignées et une cuisine qui sublime l'essence des épices vietnamiennes.",
      date: "Prochainement",
    },
    {
      author: "Paris Match Gastronomie",
      role: "Sélection Coup de Cœur",
      quote: "Maison de Vị réinvente le bistrot vietnamien avec une grâce architecturale remarquable.",
    },
  ],
  menu: [
    {
      category: "Créations & Entrées Délicates",
      items: [
        {
          name: "Tartare de Bœuf à la Citronnelle & Épices d'Hanoï",
          vietnameseName: "Bò bóp thấu sốt chanh ớt hoa hồi",
          description: "Bœuf émincé au couteau, échalotes marinées, herbes rares du Nord et chips de riz croustillantes.",
          price: "12.50 €",
          tag: "Création",
        },
        {
          name: "Bánh Cuốn Truffe Noire & Champignons Sylvestres",
          vietnameseName: "Bánh cuốn hương nấm rừng",
          description: "Fines vapeurs de riz cuites minute, farce champignon shiitake parfumé, touche de truffe.",
          price: "13.00 €",
          tag: "Signature",
        },
        {
          name: "Crevettes Royales en Croûte de Riz Vert (Cốm)",
          vietnameseName: "Tôm bọc cốm xanh Làng Vòng",
          description: "Crevettes enrobées de cốm Hà Nội croustillant, sauce aigre-douce pimentée au kumquat.",
          price: "12.00 €",
          tag: "Coup de cœur",
        },
        {
          name: "Salade de Papaye Verte & Bœuf Séché Maison",
          vietnameseName: "Nộm đu đủ bò khô thủ công",
          description: "Papaye verte râpée, bœuf mariné séché aux épices traditionnelles, vinaigrette au vinaigre de riz.",
          price: "11.00 €",
        },
      ],
    },
    {
      category: "Mijotés & Spécialités d'Auteur",
      items: [
        {
          name: "Phở Cuit au Chaudron & Os à Moelle Rôti",
          vietnameseName: "Phở bò thố đá tủy xương nướng",
          description: "Bouillon limpide aux 7 épices torréfiées servi bouillonnant, bœuf Wagyu émincé et os à moelle rôti.",
          price: "21.00 €",
          tag: "Chef Special",
        },
        {
          name: "Canard Laqué aux Cinq Parfums & Prunes Caramel",
          vietnameseName: "Vịt áp chảo ngũ vị sốt mận",
          description: "Filet de canard croustillant aux épices douces, réduction de prunes caramélisées et galette de riz.",
          price: "22.50 €",
          tag: "Signature",
        },
        {
          name: "Bún Chả Impérial Grillé sur Galets",
          vietnameseName: "Bún chả nướng đá núi lửa",
          description: "Brochettes de porc fermier grillées au charbon de bois, bouillon tiède infusé à la fleur d'anis étoilé.",
          price: "19.50 €",
        },
        {
          name: "Poisson Chả Cá de La Ligne à l'Aneth & Curcuma",
          vietnameseName: "Chả cá Lã Vọng chuẩn phong vị",
          description: "Dos de poisson blanc mariné au curcuma frais, sauté à table avec aneth foisonnant et ciboule.",
          price: "23.00 €",
          tag: "Tradition d'Art",
        },
      ],
    },
    {
      category: "Douceurs & Desserts Singuliers",
      items: [
        {
          name: "Entremets Pandan & Noix de Coco Brûlée",
          vietnameseName: "Bánh bông lan lá dứa cốt dừa nướng",
          description: "Mousse légère aux feuilles de pandan fraîches, coulis mangue acidulée et crumble de sésame noir.",
          price: "8.50 €",
          tag: "Dessert",
        },
        {
          name: "Cà Phê Trứng — Café Viennois Vietnamien",
          vietnameseName: "Cà phê trứng kem béo ngậy",
          description: "Café Robusta torréfié surmonté d'un sabayon aérien au jaune d'œuf et lait concentré.",
          price: "6.00 €",
        },
      ],
    },
  ],
  gallery: [
    { src: "/images/maison-de-vi/entrance.png", caption: "Mặt tiền và cổng vòm Maison de Vị tại 142 Rue de Vaugirard" },
    { src: "/images/maison-de-vi/signboard.png", caption: "Biển hiệu hộp đèn mang đậm dấu ấn Indochine" },
    { src: "/images/maison-de-vi/tableware.png", caption: "Bộ đồ ăn gốm sứ thủ công khắc logo thương hiệu" },
    { src: "/images/maison-de-vi/logo-page-10.png", caption: "Đồng phục và phong cách phục vụ chu đáo" },
    { src: "/images/maison-de-vi/logo-page-3.png", caption: "Moodboard cảm hứng kiến trúc và nón quai thao" },
    { src: "/images/food-3.jpeg", caption: "Bún chả nướng chuẩn mực" },
  ],
  route: "/maison-de-vi",
};
