export type Language = "en" | "fr" | "vi";

export interface TranslationSchema {
  // Navigation & Common
  nav: {
    bothRestaurants: string;
    viHanoi: string;
    maisonDeVi: string;
    story: string;
    menu: string;
    press: string;
    space: string;
    bookTable: string;
    contact: string;
    phone: string;
  };

  // Hero Section
  hero: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreBtn: string;
    selectLabel: string;
    badgeAuthentic: string;
    badgeContemporary: string;
  };

  // Portal Section
  portal: {
    tagline: string;
    title: string;
    description: string;
    bookTableBtn: string;
    detailsBtn: string;
    metroLabel: string;
    featureAuthenticTitle: string;
    featureAuthenticDesc: string;
    featureBookingTitle: string;
    featureBookingDesc: string;
    featurePressTitle: string;
    featurePressDesc: string;
    featureAmbianceTitle: string;
    featureAmbianceDesc: string;
    footerCopyright: string;
    footerTagline: string;
  };

  // Quick Reservation Drawer
  drawer: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    today: string;
    tomorrow: string;
    otherDate: string;
    chooseDate: string;
    lunchService: string;
    dinnerService: string;
    guestsCount: string;
    guestUnit: string;
    contactInfo: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    confirmBtn: string;
    submitting: string;
    directCall: string;
    viewDetails: string;
    successTitle: string;
    successMessage: string;
    bookAnother: string;
    alertNamePhone: string;
  };

  // Restaurant Detail View
  restaurant: {
    backToAll: string;
    storyBadge: string;
    storyTitleViHanoi: string;
    storyTitleMaisonDeVi: string;
    pressBadge: string;
    pressTitle: string;
    viewArticle: string;
    menuBadge: string;
    menuTitle: string;
    menuSubtitle: string;
    spaceBadge: string;
    spaceTitle: string;
    reserveBadge: string;
    reserveTitle: string;
    reserveSubtitle: string;
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    nameLabel: string;
    phoneLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitReservation: string;
    reservationSuccessTitle: string;
    reservationSuccessDesc: string;
    bookAnotherTable: string;
    openingHours: string;
    contactHotline: string;
    backHome: string;
    lunchGroup: string;
    dinnerGroup: string;
  };
}
