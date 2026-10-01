/**
 * wedding-data.js — Customer-facing editable data layer for emerald-nikah
 * Edit this file to update couple names, families, dates, venue, itinerary, verses, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    groom: {
      name: "M. Mohammed Musthafa, D.A.E",
      firstName: "M. Mohammed",
      lastName: "Musthafa",
      parents: "Son of Mr. M. Masood Ahamed & Mrs. M. Fairose Begam",
      role: "The Groom · D.A.E",
      note: "Beloved son of Mr. M. Masood Ahamed & Mrs. M. Fairose Begam, blessed with noble virtue and stepping into a joyful new chapter of life.",
      photo: "./editable/assets/groom.jpg",
    },
    bride: {
      name: "S. Nilofer Nisha, B.Sc.",
      firstName: "S. Nilofer",
      lastName: "Nisha",
      parents: "Daughter of Mr. J. Seyad Muhammed Buhari & Mrs. S. Maideen Fathima",
      role: "The Bride · B.Sc.",
      note: "Beloved daughter of Mr. J. Seyad Muhammed Buhari & Mrs. S. Maideen Fathima, graced with elegance, gentle warmth, and cherished prayers.",
      photo: "./editable/assets/bride.jpg",
    },
  },

  wedding: {
    dateISO: "2026-11-15T11:30:00+05:30",
    dateBadge: "Sunday · 15 November 2026",
    dateFormatted: "Sunday, 15 November 2026",
    timeFormatted: "11:30 AM – 12:30 PM",
    eventTitle: "Nikkah Ceremony & Celebrations",
    inviteLine: "With joyful hearts & the blessings of the Almighty, we warmly invite you to the Nikkah ceremony of our beloved son",
    hostLine: "Mr. M. Masood Ahamed & Mrs. M. Fairose Begam",
    countdownEyebrow: "Counting Every Sacred Moment",
    countdownTitle: "Until We Say Qubool",
  },

  religious: {
    bismillah: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    duaArabic: "بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation: "“May Allah bless you both, shower His blessings upon you, and unite you together in goodness.”",
    verseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    verseTranslation: "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”",
    verseRef: "Surah Ar-Rum · 30:21",
  },

  venue: {
    name: "Kaja Mahal",
    badge: "Kaja Mahal · Tirunelveli",
    address: "Abhishekapatti, Tenkasi Road, Tirunelveli, Tamil Nadu, India",
    fullAddress: "Kaja Mahal, Abhishekapatti, Tenkasi Road, Tirunelveli, Tamil Nadu 627012, India",
    notes: "Abhishekapatti, Tenkasi Road, Tirunelveli. For venue directions or enquiries, please contact +91 8754681647.",
    contactPhone: "+918754681647",
    contactDisplay: "+91 87546 81647",
    mapImage: "./editable/assets/map.jpg",
    mapsUrl: "https://maps.app.goo.gl/QGNxTvqPtVgifGh68?g_st=iw",
  },

  itinerary: [
    {
      time: "10:00 AM",
      title: "Off to the Wedding Hall",
      subtitle: "Departure",
      description: "Departure of the groom and family heading towards Kaja Mahal to begin the auspicious wedding celebrations.",
    },
    {
      time: "10:30 AM",
      title: "Grand Entrance",
      subtitle: "Istiqbal & Reception",
      description: "Warm welcome and grand reception of family members, relatives, and honored guests at Kaja Mahal.",
    },
    {
      time: "11:30 AM",
      title: "Wedding Nikkah Ceremony",
      subtitle: "Ijab-e-Qubool",
      description: "Solemnisation of the sacred Nikkah according to the Sunnah, Quranic recitation, and prayers for eternal bliss.",
    },
    {
      time: "12:00 PM",
      title: "Functions at Kaja Mahal",
      subtitle: "Stage Celebrations & Felicitations",
      description: "Heartfelt congratulations, stage greetings, family blessings, and photo sessions with the newlyweds.",
    },
    {
      time: "12:30 PM",
      title: "Grand Feast",
      subtitle: "Walima Lunch",
      description: "Traditional celebratory wedding banquet served with warmth and hospitality for all our guests.",
    },
    {
      time: "04:00 PM",
      title: "Off to Home",
      subtitle: "Rukhsati & Duas",
      description: "Emotional farewell and joyful send-off towards home, enveloped in the loving prayers and duas of all families.",
    },
  ],

  closing: {
    blessing: "“May Allah SWT bless this union with love, barakah, and guidance, granting them a life rich in Imaan, Prosperity, Happiness, and Grant the couple a life filled with peace upon the path of righteousness. Aameen.”",
    coupleNames: "Musthafa & Nilofer",
    duasLine: "Your presence will be our greatest blessing",
    footerCredit: "with prayers for our families",
    contactLine: "RSVP & Enquiries: +91 87546 81647",
    contactPhone: "+918754681647",
    contactDisplay: "+91 87546 81647",
    instagram: "@invitestory.in",
    instagramUrl: "https://www.instagram.com/invitestory.in/",
  },

  images: {
    heroBackground: "./editable/assets/hero-bg.jpg",
    groom: "./editable/assets/groom.jpg",
    bride: "./editable/assets/bride.jpg",
    map: "./editable/assets/map.jpg",
    mandala: "./editable/assets/mandala.png",
    roses: "./editable/assets/roses.png",
    daisies: "./editable/assets/daisies.png",
    divider: "./editable/assets/divider.png",
    ogImage: "./editable/assets/og-image.jpg",
  },
};
