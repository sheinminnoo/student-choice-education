export const universityCountries = [
  "UK",
  "Germany",
  "France",
  "Spain",
  "Malta",
] as const;
export type UniversityCountry = (typeof universityCountries)[number];

export const universityCategories = ["University", "Pathway Provider"] as const;
export type UniversityCategory = (typeof universityCategories)[number];

type AcademicRequirements = {
  foundation?: string;
  undergraduate?: string;
  postgraduate?: string;
};

type EnglishRequirements = {
  standard: string;
  alternatives?: string;
};

type TuitionBand = {
  home: string;
  international: string;
};

type TuitionFees = {
  undergraduate: TuitionBand;
  postgraduate?: TuitionBand;
};

type Scholarship = {
  name: string;
  description: string;
};

type LivingCosts = {
  summary: string;
  typicalMonthlyTotal: string;
  onCampusFrom?: string;
  privateRentFrom?: string;
};

type AccommodationOption = {
  name: string;
  description: string;
};

export type University = {
  slug: string;
  name: string;
  country: UniversityCountry;
  city: string;
  campus: string;
  category: UniversityCategory;
  website: string;

  logo: string;
  campusImage: string;

  established: number;
  rankingBadge?: string;

  shortDescription: string;
  fullDescription: string;

  highlights: string[];
  popularPrograms: string[];
  intakes: string[];
  studyModes: string[];

  academicRequirements: AcademicRequirements;
  englishRequirements: EnglishRequirements;
  tuitionFees: TuitionFees;
  scholarships?: Scholarship[];

  // NEW
  whyThisUniversity?: string[];
  livingCosts?: LivingCosts;
  accommodationOptions?: AccommodationOption[];

  showGeduLogo?: boolean;
};

export const universities: University[] = [
  {
    slug: "university-of-hertfordshire",
    name: "University of Hertfordshire",
    country: "UK",
    city: "Hatfield",
    campus: "Hatfield Campus",
    category: "University",
    website: "https://www.herts.ac.uk/",

    logo: "/home/hertfordshire.jpg",
    campusImage: "/campus/hatfield.jpg",

    established: 1952,
    rankingBadge: "Top 100 Young Universities",

    shortDescription:
      "Career-focused modern UK university just outside London.",
    fullDescription:
      "The University of Hertfordshire is a leading modern university located just outside London, offering industry-focused degrees with strong employer links and excellent international student support.",

    highlights: [
      "20 minutes from Central London",
      "Strong industry links",
      "Excellent careers support",
      "Modern campus facilities",
    ],

    popularPrograms: [
      "Computer Science",
      "Business & Management",
      "Engineering",
      "Data Science",
      "Cyber Security",
    ],

    intakes: ["January", "May", "September"],
    studyModes: ["On-campus", "Blended"],

    academicRequirements: {
      foundation:
        "Completed high school with passes in 4–5 subjects (including Maths and English) or equivalent GED/IGCSE profile.",
      undergraduate:
        "Higher Secondary education or recognised diploma (for example HDIN) with good grades. Some programmes may require Maths or Science.",
      postgraduate:
        "UK Bachelor’s degree or equivalent with at least second class or equivalent international GPA.",
    },
    englishRequirements: {
      standard:
        "IELTS 6.0 overall with no band lower than 5.5 for most undergraduate programmes. Some postgraduate courses require IELTS 6.5.",
      alternatives:
        "Other tests accepted such as Pearson PTE, TOEFL iBT, or approved internal tests. Some students may be eligible for pre-sessional English.",
    },
    tuitionFees: {
      undergraduate: {
        home: "From ~£9,250 per year (UK students)",
        international:
          "From ~£15,000–£18,000 per year (international students)",
      },
      postgraduate: {
        home: "From ~£9,750 per year (UK students)",
        international:
          "From ~£16,000–£19,000 per year (international students)",
      },
    },
    scholarships: [
      {
        name: "International Merit Scholarship",
        description:
          "Automatic fee reduction for strong academic profiles at undergraduate and postgraduate level.",
      },
      {
        name: "Regional Scholarship",
        description:
          "Extra support for selected countries; your counsellor will confirm current availability.",
      },
    ],

    whyThisUniversity: [
      "Big modern campus with everything in one place, just outside London.",
      "Very strong support for international students, including careers and visas.",
      "Huge range of industry links, placements and live projects.",
    ],
    livingCosts: {
      summary:
        "Hatfield offers lower living costs than many London zones while still being very close to the city.",
      typicalMonthlyTotal:
        "Around £900–£1,200 per month including rent, food, transport and personal costs.",
      onCampusFrom: "On-campus rooms from around £500–£700 per month.",
      privateRentFrom:
        "Shared private housing from around £450–£650 per month depending on room type.",
    },
    accommodationOptions: [
      {
        name: "On-campus halls",
        description:
          "Modern rooms with shared or en-suite bathrooms, walking distance to lectures and campus facilities.",
      },
      {
        name: "Private halls and houses",
        description:
          "Partner providers and local landlords offering shared flats and houses around Hatfield.",
      },
    ],
  },

  {
    slug: "university-of-roehampton",
    name: "University of Roehampton London",
    country: "UK",
    city: "London",
    campus: "Roehampton",
    category: "University",
    website: "https://www.roehampton.ac.uk/",

    logo: "/home/Roehampton.png",
    campusImage: "/campus/roehampton-london.jpg",

    established: 1841,
    rankingBadge: "Top London Modern University",

    shortDescription: "Green campus university in southwest London.",
    fullDescription:
      "The University of Roehampton offers high-quality UK degrees in a beautiful parkland campus environment, combining academic excellence with a supportive learning experience.",

    highlights: [
      "Parkland London campus",
      "Strong student support",
      "Small class sizes",
      "High graduate employment rate",
    ],

    popularPrograms: [
      "Psychology",
      "Business Management",
      "Education",
      "Computer Science",
    ],

    intakes: ["January", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Completion of high school or IGCSE with required grades. Some routes are available for GED holders.",
      undergraduate:
        "Recognised secondary qualification comparable to UK A-levels or a suitable foundation/HDIN diploma.",
      postgraduate:
        "Good undergraduate degree (normally equivalent to UK 2:2 or above) in a related subject.",
    },
    englishRequirements: {
      standard:
        "IELTS 6.0–6.5 overall (depending on programme) with no band below 5.5.",
      alternatives:
        "Accepts a range of English tests such as PTE, TOEFL and approved country-specific qualifications.",
    },
    tuitionFees: {
      undergraduate: {
        home: "Around £9,250 per year",
        international: "From ~£14,000–£16,000 per year",
      },
      postgraduate: {
        home: "From ~£9,500 per year",
        international: "From ~£15,000–£17,000 per year",
      },
    },
    scholarships: [
      {
        name: "International Excellence Scholarship",
        description:
          "Fee discounts for strong academic performance and personal statement.",
      },
    ],

    whyThisUniversity: [
      "Rare green parkland campus while still being in London.",
      "Supportive community feel with smaller class sizes.",
      "Good value compared with some central London universities.",
    ],
    livingCosts: {
      summary:
        "Roehampton is in southwest London, usually cheaper than very central zones but still with London transport and lifestyle.",
      typicalMonthlyTotal:
        "Roughly £1,100–£1,400 per month including rent, food, travel and personal costs.",
      onCampusFrom: "Campus accommodation typically from ~£650–£800 per month.",
      privateRentFrom:
        "Shared private housing from around £600–£750 per month depending on zone and room.",
    },
    accommodationOptions: [
      {
        name: "Campus accommodation",
        description:
          "College-style halls surrounded by green spaces, with a mix of shared and en-suite bathrooms.",
      },
      {
        name: "Private London housing",
        description:
          "Shared flats and houses in areas such as Putney, Kingston and other nearby zones.",
      },
    ],
  },

  {
    slug: "ulster-university-london",
    name: "Ulster University London",
    country: "UK",
    city: "London",
    campus: "London Campus",
    category: "University",
    website: "https://qa.ulster.ac.uk/campuses/london/",

    logo: "/home/Ulster.jpg",
    campusImage: "/campus/ulster-london.jpg",

    established: 1968,
    rankingBadge: "Top UK for Business & Tech",

    shortDescription: "Career-focused university in partnership with QA.",
    fullDescription:
      "Ulster University London delivers business, computing and finance programmes in the heart of London through its partnership with QA Higher Education.",

    highlights: [
      "Located in Central London",
      "Industry-driven curriculum",
      "Strong employability focus",
    ],

    popularPrograms: [
      "MBA",
      "Finance",
      "Marketing",
      "Data Analytics",
      "Cyber Security",
    ],

    intakes: ["January", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Completion of high school or equivalent with passes in relevant subjects. Alternative routes for mature learners.",
      undergraduate:
        "Recognised school-leaver qualification or Higher Diploma in business or computing related area.",
      postgraduate:
        "Honours degree or equivalent professional qualification. Work experience may be considered for some programmes (for example MBA).",
    },
    englishRequirements: {
      standard:
        "Typically IELTS 6.0 overall with no band below 5.5. Some programmes may require higher.",
      alternatives:
        "PTE, TOEFL and QA/Ulster-approved internal tests are also accepted in many cases.",
    },
    tuitionFees: {
      undergraduate: {
        home: "From ~£9,250 per year",
        international: "From ~£13,500–£16,000 per year",
      },
      postgraduate: {
        home: "From ~£9,500 per year",
        international: "From ~£14,500–£17,000 per year",
      },
    },
    scholarships: [
      {
        name: "QA Higher Education Scholarships",
        description:
          "Various bursaries and support schemes depending on intake and nationality.",
      },
    ],

    whyThisUniversity: [
      "Central London campus with strong focus on business and technology.",
      "Programmes designed closely with employers and industry needs.",
      "Good option if you want to work and network in London after study.",
    ],
    livingCosts: {
      summary:
        "Central London has some of the highest living costs in the UK, so planning a clear budget is important.",
      typicalMonthlyTotal:
        "Often £1,300–£1,700 per month, depending on room type and lifestyle.",
      onCampusFrom:
        "Some partner/student residences from ~£800–£950 per month.",
      privateRentFrom:
        "Shared private rooms can start from around £750–£900 per month in outer zones.",
    },
    accommodationOptions: [
      {
        name: "Student residences",
        description:
          "Partner-managed residences with good access to the campus and central London.",
      },
      {
        name: "Private rentals",
        description:
          "Shared houses and flats across London, often found through letting agents or student groups.",
      },
    ],
  },

  {
    slug: "arden-university-berlin",
    name: "Arden University Berlin",
    country: "Germany",
    city: "Berlin",
    campus: "Berlin Campus",
    category: "University",
    website: "https://arden.ac.uk/where-to-study/locations/berlin",

    logo: "/home/arden.jpg",
    campusImage: "/campus/arden-berlin.jpg",

    established: 1991,
    rankingBadge: "Top Private UK University Abroad",

    shortDescription: "UK degrees taught fully in English in Berlin.",
    fullDescription:
      "Arden University Berlin offers British degrees in Germany with flexible learning options and strong global career pathways.",

    highlights: [
      "English-taught degrees",
      "Berlin tech ecosystem",
      "Affordable EU tuition",
      "Flexible schedules",
    ],

    popularPrograms: [
      "Business Management",
      "Computer Science",
      "Digital Marketing",
      "Data Analytics",
    ],

    intakes: ["January", "April", "October"],
    studyModes: ["On-campus", "Blended"],

    academicRequirements: {
      foundation:
        "Completion of secondary school with passes in key subjects or recognised international high school qualification.",
      undergraduate:
        "School leaving certificate giving access to higher education in home country (for example A-levels, IB, Abitur equivalent, IGCSE + A-levels or foundation).",
      postgraduate:
        "Bachelor’s degree in a related area. Some programmes accept non-standard backgrounds with work experience.",
    },
    englishRequirements: {
      standard:
        "IELTS 6.0 overall (no band less than 5.5) or equivalent recognised English test.",
      alternatives:
        "PTE, TOEFL and selected school English grades can be accepted. Foundation options are available if slightly below.",
    },
    tuitionFees: {
      undergraduate: {
        home: "From ~€9,000 per year",
        international: "From ~€9,000–€11,000 per year",
      },
      postgraduate: {
        home: "From ~€10,500 per programme",
        international: "From ~€10,500–€13,000 per programme",
      },
    },
    scholarships: [
      {
        name: "Early Bird Scholarships",
        description:
          "Fee reductions for early applications and strong academic profiles.",
      },
    ],

    whyThisUniversity: [
      "Study a UK degree while living in Berlin, a major tech and start-up hub.",
      "Flexible, career-focused programmes with smaller class sizes.",
      "More affordable tuition compared with many UK campuses.",
    ],
    livingCosts: {
      summary:
        "Berlin is usually cheaper than many other major Western European capitals but prices have increased in recent years.",
      typicalMonthlyTotal:
        "Often around €900–€1,200 per month including rent, food, transport and personal costs.",
      onCampusFrom:
        "Student residences and partner housing from roughly €450–€650 per month.",
      privateRentFrom:
        "Shared private flats often from €400–€600 per month depending on area.",
    },
    accommodationOptions: [
      {
        name: "Student residences",
        description:
          "Shared or single rooms in student housing, usually with common kitchens and social areas.",
      },
      {
        name: "Private WG (shared flats)",
        description:
          "Very common in Berlin; you share a flat with other students or young professionals.",
      },
    ],
  },

  {
    slug: "schiller-heidelberg",
    name: "Schiller International University – Heidelberg Campus",
    country: "Germany",
    city: "Heidelberg",
    campus: "Heidelberg Campus",
    category: "University",
    website: "https://www.schiller.edu/campuses/heidelberg/",

    logo: "/home/Schiller.jpg",
    campusImage: "/campus/schiller-heidelberg.jpg",

    established: 1964,
    rankingBadge: "American Education in Europe",

    shortDescription: "US-style education in historic Heidelberg.",
    fullDescription:
      "Schiller Heidelberg offers American degree programs in an international environment, designed for global careers.",

    highlights: [
      "American degree system",
      "Strong global network",
      "Small class sizes",
      "International student community",
    ],

    popularPrograms: [
      "International Business",
      "Diplomacy",
      "Hospitality Management",
    ],

    intakes: ["February", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Completion of secondary education equivalent to US high school diploma, GED or IGCSE + further study.",
      undergraduate:
        "High school diploma with suitable GPA or recognised international secondary qualification.",
      postgraduate:
        "Recognised Bachelor’s degree in a relevant subject or proven professional experience.",
    },
    englishRequirements: {
      standard:
        "For English-taught degrees, a recognised English test such as TOEFL, IELTS or PTE at an upper-intermediate level is normally required.",
      alternatives:
        "Internal placement testing may be available for some students; pathway English can be offered if needed.",
    },
    tuitionFees: {
      undergraduate: {
        home: "From ~€11,000 per year",
        international: "From ~€11,000–€14,000 per year",
      },
      postgraduate: {
        home: "From ~€12,000 per programme",
        international: "From ~€12,000–€15,000 per programme",
      },
    },
    scholarships: [
      {
        name: "Merit and Need-Based Awards",
        description:
          "Combination of academic merit and financial need scholarships available for international students.",
      },
    ],

    whyThisUniversity: [
      "US-style degrees while studying in a classic German university town.",
      "Very international student body and small classes.",
      "Strong focus on international business, diplomacy and hospitality.",
    ],
    livingCosts: {
      summary:
        "Heidelberg is a student city with moderate costs compared with big capitals, but housing can still be competitive.",
      typicalMonthlyTotal:
        "Roughly €900–€1,200 per month including rent, food, insurance and personal costs.",
      onCampusFrom:
        "Student housing or partner residences from about €400–€600 per month.",
      privateRentFrom:
        "Shared apartments often from €450–€650 per month depending on location.",
    },
    accommodationOptions: [
      {
        name: "Student housing",
        description:
          "Student-style accommodation with shared kitchens and common social areas.",
      },
      {
        name: "Private shared flats",
        description:
          "Many students choose to live in a shared flat (WG) with other students.",
      },
    ],

    showGeduLogo: true,
  },

  {
    slug: "schiller-paris",
    name: "Schiller International University – Paris Campus",
    country: "France",
    city: "Paris",
    campus: "Paris Campus",
    category: "University",
    website: "https://www.schiller.edu/campuses/paris/",

    logo: "/home/Schiller.jpg",
    campusImage: "/campus/schiller–paris.jpg",

    established: 1964,
    rankingBadge: "American Education in Paris",

    shortDescription: "US degrees in the heart of Paris.",
    fullDescription:
      "Schiller Paris provides international business and diplomacy degrees taught in English in one of the world’s most iconic cities.",

    highlights: [
      "Central Paris location",
      "Global employability",
      "Multicultural students",
    ],

    popularPrograms: [
      "Business Administration",
      "International Relations",
      "Hospitality Management",
    ],

    intakes: ["February", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Secondary school completion with suitable grades or recognised international equivalent.",
      undergraduate:
        "US high school diploma, A-levels, IB or similar qualification allowing entry to higher education.",
      postgraduate:
        "Bachelor’s degree in a related field. Relevant work experience can support applications.",
    },
    englishRequirements: {
      standard:
        "Recognised English test at approximately IELTS 6.0 level or equivalent.",
      alternatives:
        "Internal testing and academic interview may be used for some applicants.",
    },
    tuitionFees: {
      undergraduate: {
        home: "From ~€11,000 per year",
        international: "From ~€11,000–€14,000 per year",
      },
      postgraduate: {
        home: "From ~€12,000 per programme",
        international: "From ~€12,000–€15,000 per programme",
      },
    },
    scholarships: [
      {
        name: "Global Talent Scholarships",
        description:
          "Support for high-achieving and globally minded students across all campuses.",
      },
    ],

    whyThisUniversity: [
      "Study an American-style degree while living in central Paris.",
      "Strong focus on international careers and mobility.",
      "Taught fully in English with a global classroom.",
    ],
    livingCosts: {
      summary:
        "Paris is beautiful but can be expensive, especially for rent in central areas.",
      typicalMonthlyTotal:
        "Often €1,200–€1,600 per month including rent, food and transport.",
      onCampusFrom:
        "Student residences or partner halls from roughly €600–€800 per month.",
      privateRentFrom:
        "Shared apartments can start around €550–€750 per month depending on area.",
    },
    accommodationOptions: [
      {
        name: "Student residences",
        description:
          "Managed residences offering student rooms with good access to the campus and metro.",
      },
      {
        name: "Private shared flats",
        description:
          "Shared apartments with other students or young professionals across Paris.",
      },
    ],

    showGeduLogo: true,
  },

  {
    slug: "schiller-madrid",
    name: "Schiller International University – Madrid Campus",
    country: "Spain",
    city: "Madrid",
    campus: "Madrid Campus",
    category: "University",
    website: "https://www.schiller.edu/campuses/madrid/",

    logo: "/home/Schiller.jpg",
    campusImage: "/campus/schiller–madrid.jpg",

    established: 1964,
    rankingBadge: "Top International Business School",

    shortDescription: "Modern international campus in Madrid.",
    fullDescription:
      "Schiller Madrid prepares students for leadership in global business, hospitality and diplomacy.",

    highlights: [
      "International internships",
      "English-taught degrees",
      "Strong business partnerships",
    ],

    popularPrograms: [
      "International Business",
      "Hospitality",
      "International Relations",
    ],

    intakes: ["February", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Completion of secondary school with passes in key subjects or recognised international qualification.",
      undergraduate:
        "High school diploma, A-levels, IB or equivalent qualification giving access to university in home country.",
      postgraduate:
        "Completed Bachelor’s degree in business, hospitality or related field.",
    },
    englishRequirements: {
      standard:
        "English language at roughly IELTS 6.0 or equivalent for most programmes.",
      alternatives:
        "Other international tests accepted; language support available if slightly below entry level.",
    },
    tuitionFees: {
      undergraduate: {
        home: "From ~€11,000 per year",
        international: "From ~€11,000–€14,000 per year",
      },
      postgraduate: {
        home: "From ~€12,000 per programme",
        international: "From ~€12,000–€15,000 per programme",
      },
    },
    scholarships: [
      {
        name: "International Mobility Scholarships",
        description:
          "Support for students who wish to study across multiple Schiller campuses.",
      },
    ],

    whyThisUniversity: [
      "Live and study in Madrid, one of Europe’s sunniest capital cities.",
      "Business and hospitality programmes linked with industry and internships.",
      "Chance to move between different Schiller campuses.",
    ],
    livingCosts: {
      summary:
        "Madrid is usually cheaper than some northern European capitals but still a busy major city.",
      typicalMonthlyTotal:
        "Around €900–€1,200 per month including rent, food, transport and personal costs.",
      onCampusFrom:
        "Student residences from roughly €450–€650 per month depending on room.",
      privateRentFrom:
        "Shared flats often from €350–€550 per month depending on area and flatmates.",
    },
    accommodationOptions: [
      {
        name: "Student residences",
        description:
          "Dedicated student housing with shared kitchens, study rooms and social spaces.",
      },
      {
        name: "Shared apartments",
        description:
          "Popular choice in Madrid, sharing with other students or young professionals.",
      },
    ],

    showGeduLogo: true,
  },

  {
    slug: "lsc-malta",
    name: "London School of Commerce Malta",
    country: "Malta",
    city: "Floriana",
    campus: "Malta Campus",
    category: "University",
    website: "https://lscmalta.edu.mt/",

    logo: "/home/lsc-malta.png",
    campusImage: "/campus/lsc-malta.jpg",

    established: 2003,
    rankingBadge: "Affordable British Degrees in EU",

    shortDescription: "British education in Malta.",
    fullDescription:
      "LSC Malta provides high-quality business and management degrees validated by UK awarding bodies.",

    highlights: ["Low tuition fees", "EU opportunities", "UK qualifications"],

    popularPrograms: ["Business", "Finance", "Management"],

    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Completion of secondary school with satisfactory grades. IGCSE/GED profiles can be considered.",
      undergraduate:
        "Recognised school leaving qualification or relevant business diploma for advanced entry.",
      postgraduate:
        "Bachelor’s degree or professional qualification in business or related area.",
    },
    englishRequirements: {
      standard:
        "Normally IELTS 6.0 or equivalent for degree programmes taught in English.",
      alternatives:
        "Internal English tests or previous English-medium study may be accepted.",
    },
    tuitionFees: {
      undergraduate: {
        home: "Competitive EU fee levels, often below many UK campuses",
        international: "From ~€6,000–€8,000 per year",
      },
      postgraduate: {
        home: "From ~€7,000 per programme",
        international: "From ~€7,000–€9,000 per programme",
      },
    },
    scholarships: [
      {
        name: "LSC Malta Scholarships",
        description:
          "Partial fee waivers and bursaries for strong academic profiles and early applicants.",
      },
    ],

    whyThisUniversity: [
      "Very competitive tuition fees for British degrees.",
      "Warm Mediterranean climate and EU location.",
      "Smaller, more personal learning environment.",
    ],
    livingCosts: {
      summary:
        "Malta is usually cheaper than many UK cities, but costs depend on lifestyle and area.",
      typicalMonthlyTotal:
        "Often €800–€1,000 per month including rent, food and transport.",
      onCampusFrom:
        "Student-style accommodation or partner housing from about €350–€500 per month.",
      privateRentFrom:
        "Shared apartments often from €300–€450 per month depending on proximity to the coast and centre.",
    },
    accommodationOptions: [
      {
        name: "Student-style housing",
        description:
          "Shared apartments and rooms close to the campus or city centre.",
      },
      {
        name: "Private rentals",
        description:
          "Studios and shared flats across Malta, often in Valletta or nearby towns.",
      },
    ],
  },

  {
    slug: "gbs-malta",
    name: "GBS Malta",
    country: "Malta",
    city: "St. Julian’s",
    campus: "Malta Campus",
    category: "University",
    website: "https://gbs.edu.mt/",

    logo: "/home/GBS-Malta.png",
    campusImage: "/campus/gbs-malta.png",

    established: 2010,
    rankingBadge: "Fast-Growing Global Education Provider",

    shortDescription: "Career-driven global education provider.",
    fullDescription:
      "GBS Malta delivers internationally recognised business and healthcare qualifications in a modern study destination.",

    highlights: [
      "Career-focused programmes",
      "International faculty",
      "Modern campus",
    ],

    popularPrograms: ["Business", "Healthcare", "Digital Marketing"],

    intakes: ["January", "September"],
    studyModes: ["On-campus"],

    academicRequirements: {
      foundation:
        "Secondary education completion with passes in key subjects or equivalent vocational route.",
      undergraduate:
        "Recognised secondary qualification or Higher National Diploma/HDIN for advanced standing.",
      postgraduate:
        "Bachelor’s degree or equivalent professional qualification, preferably in a related field.",
    },
    englishRequirements: {
      standard:
        "IELTS 6.0 or equivalent for most programmes. Some healthcare courses may require higher.",
      alternatives:
        "Other English tests and proof of previous English-medium study can be accepted.",
    },
    tuitionFees: {
      undergraduate: {
        home: "Accessible EU-aligned fee levels",
        international: "From ~€7,000–€9,500 per year",
      },
      postgraduate: {
        home: "From ~€8,500 per programme",
        international: "From ~€8,500–€10,500 per programme",
      },
    },
    scholarships: [
      {
        name: "International Student Bursary",
        description:
          "Support to keep tuition affordable for non-EU students in key subject areas.",
      },
    ],

    whyThisUniversity: [
      "Modern campus in a popular seaside area of Malta.",
      "Practical, employment-focused courses in business and healthcare.",
      "Teaching designed for international students.",
    ],
    livingCosts: {
      summary:
        "St. Julian’s is a lively area popular with students and tourists, so housing near the seafront can cost more.",
      typicalMonthlyTotal:
        "Often around €900–€1,100 per month including rent, food and transport.",
      onCampusFrom:
        "Student-style and partner residences from about €400–€550 per month.",
      privateRentFrom:
        "Shared apartments can start from €350–€500 per month depending on exact location.",
    },
    accommodationOptions: [
      {
        name: "Student and partner residences",
        description:
          "Rooms and shared apartments close to the campus and seaside.",
      },
      {
        name: "Private shared flats",
        description:
          "Shared apartments with other students in St. Julian’s or nearby towns.",
      },
    ],
  },
];
