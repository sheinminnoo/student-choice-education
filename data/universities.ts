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

    logo: "/universities/logos/herts.png",
    campusImage: "/universities/campuses/herts.jpg",

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
  },

  {
    slug: "university-of-roehampton",
    name: "University of Roehampton London",
    country: "UK",
    city: "London",
    campus: "Roehampton",
    category: "University",
    website: "https://www.roehampton.ac.uk/",

    logo: "/universities/logos/roehampton.png",
    campusImage: "/universities/campuses/roehampton.jpg",

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
  },

  {
    slug: "ulster-university-london",
    name: "Ulster University London",
    country: "UK",
    city: "London",
    campus: "London Campus",
    category: "University",
    website: "https://qa.ulster.ac.uk/campuses/london/",

    logo: "/universities/logos/ulster-london.png",
    campusImage: "/universities/campuses/ulster-london.jpg",

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
  },

  {
    slug: "arden-university-berlin",
    name: "Arden University Berlin",
    country: "Germany",
    city: "Berlin",
    campus: "Berlin Campus",
    category: "University",
    website: "https://arden.ac.uk/where-to-study/locations/berlin",

    logo: "/universities/logos/arden-berlin.png",
    campusImage: "/universities/campuses/arden-berlin.jpg",

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
  },

  {
    slug: "schiller-heidelberg",
    name: "Schiller International University – Heidelberg Campus",
    country: "Germany",
    city: "Heidelberg",
    campus: "Heidelberg Campus",
    category: "University",
    website: "https://www.schiller.edu/campuses/heidelberg/",

    logo: "/universities/logos/schiller-heidelberg.png",
    campusImage: "/universities/campuses/schiller-heidelberg.jpg",

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

    logo: "/universities/logos/schiller-paris.png",
    campusImage: "/universities/campuses/schiller-paris.jpg",

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

    logo: "/universities/logos/schiller-madrid.png",
    campusImage: "/universities/campuses/schiller-madrid.jpg",

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

    logo: "/universities/logos/lsc-malta.png",
    campusImage: "/universities/campuses/lsc-malta.jpg",

    established: 2003,
    rankingBadge: "Affordable British Degrees in EU",

    shortDescription: "British education in Malta.",
    fullDescription:
      "LSC Malta provides high-quality business and management degrees validated by UK awarding bodies.",

    highlights: ["Low tuition fees", "EU opportunities", "UK qualifications"],

    popularPrograms: ["Business", "Finance", "Management"],

    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],
  },

  {
    slug: "gbs-malta",
    name: "GBS Malta",
    country: "Malta",
    city: "St. Julian’s",
    campus: "Malta Campus",
    category: "University",
    website: "https://gbs.edu.mt/",

    logo: "/universities/logos/gbs-malta.png",
    campusImage: "/universities/campuses/gbs-malta.jpg",

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
  },
];
