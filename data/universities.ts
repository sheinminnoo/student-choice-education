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

  whyThisUniversity?: string[];
  livingCosts?: LivingCosts;
  accommodationOptions?: AccommodationOption[];

  showGeduLogo?: boolean;
};

export const universities: University[] = [
  // --- UK UNIVERSITIES ---
  // UHertfordshire
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
    rankingBadge: "TEF Gold Rated",
    shortDescription:
      "Career-focused modern UK university just outside London.",
    fullDescription:
      "The University of Hertfordshire is a leading modern university located just 20 minutes from London, known for its world-class facilities and strong industry connections.",
    highlights: [
      "20 mins from London",
      "TEF Gold Rated",
      "Huge Campus Facilities",
    ],
    popularPrograms: [
      "Computer Science",
      "Business",
      "Engineering",
      "Creative Arts",
    ],
    intakes: ["January", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      foundation: "High School Certificate with passing grades.",
      undergraduate: "A-Levels, IB, or recognized Foundation.",
      postgraduate: "Bachelor's degree (2:2 or equivalent).",
    },
    englishRequirements: {
      standard: "IELTS 6.0 (UG) / 6.5 (PG).",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£15,500" },
      postgraduate: { home: "£10,000", international: "£16,000" },
    },
    livingCosts: {
      summary: "Affordable living compared to central London.",
      typicalMonthlyTotal: "£900 - £1,100",
    },
  },
  {
    slug: "university-of-roehampton",
    name: "University of Roehampton",
    country: "UK",
    city: "London",
    campus: "Roehampton Campus",
    category: "University",
    website: "https://www.roehampton.ac.uk/",
    logo: "/home/Roehampton.png",
    campusImage: "/campus/roehampton-london.jpg",
    established: 1841,
    rankingBadge: "London's Campus University",
    shortDescription: "London's only parkland campus university.",
    fullDescription:
      "Located in southwest London, Roehampton offers a beautiful 54-acre parkland campus environment with easy access to central London.",
    highlights: [
      "Parkland Campus",
      "Research Intensive",
      "Inclusive Community",
    ],
    popularPrograms: ["Psychology", "Business", "Education", "Humanities"],
    intakes: ["January", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "A-Levels or recognized International Foundation.",
      postgraduate: "Bachelor's degree with 2:2 minimum.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 overall.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£15,750" },
      postgraduate: { home: "£10,500", international: "£16,500" },
    },
    livingCosts: {
      summary: "London living costs apply, but on-campus options exist.",
      typicalMonthlyTotal: "£1,200 - £1,500",
    },
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
    rankingBadge: "Career-Focused",
    shortDescription: "Professional degrees in the heart of London.",
    fullDescription:
      "Delivered in partnership with QA Higher Education, this campus focuses on business, finance, and computing careers with a professional edge.",
    highlights: [
      "City Centre Location",
      "Professional Focus",
      "Modern Facilities",
    ],
    popularPrograms: ["Business", "Accounting", "Computing", "Marketing"],
    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High school diploma or foundation.",
      postgraduate: "Recognized Bachelor's degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 or equivalent.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£13,500" },
      postgraduate: { home: "£10,000", international: "£14,500" },
    },
    livingCosts: {
      summary: "Central London living.",
      typicalMonthlyTotal: "£1,400 - £1,800",
    },
  },
  {
    slug: "northumbria-university-london",
    name: "Northumbria University London",
    country: "UK",
    city: "London",
    campus: "London Campus",
    category: "University",
    website: "https://london.northumbria.ac.uk/",
    logo: "/home/northumbria-london.png",
    campusImage: "/campus/northumbria-london.jpg",
    established: 1969,
    rankingBadge: "AACSB Accredited",
    shortDescription: "Top-ranked expertise in the business capital.",
    fullDescription:
      "Northumbria London offers industry-focused courses in the heart of the city (Liverpool Street), specializing in Business, Computing, and Cyber Security.",
    highlights: [
      "Liverpool Street Location",
      "AACSB Accredited",
      "Cyber Security Focus",
    ],
    popularPrograms: [
      "MSc Cyber Security",
      "Business Management",
      "Project Management",
    ],
    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "A-Levels or Foundation.",
      postgraduate: "2:2 Honours degree or equivalent.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 or 6.5 depending on course.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£16,500" },
      postgraduate: { home: "£10,500", international: "£19,500" },
    },
    livingCosts: {
      summary: "Central London costs.",
      typicalMonthlyTotal: "£1,400 - £1,800",
    },
  },
  {
    slug: "uws-london",
    name: "University of the West of Scotland London",
    country: "UK",
    city: "London",
    campus: "London Campus",
    category: "University",
    website: "https://www.uwslondon.ac.uk/",
    logo: "/home/uws-logo.jpg", // Ensure you add this image to public/home
    campusImage: "/campus/uws-london.png", // Ensure you add this image to public/campus
    established: 1897,
    rankingBadge: "Top 5% Worldwide",
    shortDescription: "Dynamic campus in East London Docklands.",
    fullDescription:
      "UWS London offers undergraduate and postgraduate degrees in business, health, and social sciences in the vibrant East India Docks area.",
    highlights: ["Docklands Location", "Diverse Community", "Flexible Intakes"],
    popularPrograms: ["MBA", "International Business", "Health Studies"],
    intakes: ["January", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High School Diploma or Foundation.",
      postgraduate: "Recognized Bachelor's Degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 with no skill below 5.5.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£15,500" },
      postgraduate: { home: "£8,000", international: "£15,500" },
    },
    livingCosts: {
      summary: "East London is slightly more affordable than Central.",
      typicalMonthlyTotal: "£1,200 - £1,500",
    },
  },
  {
    slug: "arden-university-uk",
    name: "Arden University (UK)",
    country: "UK",
    city: "Various (London/Birmingham/Manchester)",
    campus: "Multi-Campus",
    category: "University",
    website: "https://arden.ac.uk/international-students",
    logo: "/home/arden.jpg",
    campusImage: "/campus/arden-uk.jpg", // Ensure image exists
    established: 1990,
    rankingBadge: "Blended Learning Leader",
    shortDescription: "Flexible learning specialists with multiple UK centres.",
    fullDescription:
      "Arden University provides highly flexible blended learning degrees, allowing students to combine online study with face-to-face tuition at campuses in London, Birmingham, and Manchester.",
    highlights: ["Flexible Study", "Multiple Locations", "Career Focused"],
    popularPrograms: ["Business", "HRM", "Healthcare Management", "Computing"],
    intakes: ["February", "May", "September", "November"],
    studyModes: ["Blended"],
    academicRequirements: {
      undergraduate: "Two A-Level passes or equivalent.",
      postgraduate: "2:2 UK degree or equivalent.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 or Duolingo/Internal Test.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£12,500" },
      postgraduate: { home: "£10,000", international: "£13,000" },
    },
    livingCosts: {
      summary: "Varies by campus city (London vs Manchester).",
      typicalMonthlyTotal: "£900 - £1,400",
    },
  },
  {
    slug: "bloomsbury-institute",
    name: "Bloomsbury Institute London",
    country: "UK",
    city: "London",
    campus: "Bloomsbury",
    category: "University",
    website: "https://www.bil.ac.uk/",
    logo: "/home/bloomsbury.jpg", // Ensure image exists
    campusImage: "/campus/bloomsbury.jpg", // Ensure image exists
    established: 2002,
    rankingBadge: "Student Satisfaction Leader",
    shortDescription: "Inclusive higher education in central London.",
    fullDescription:
      "Located in the academic heart of London, Bloomsbury Institute focuses on business, law, and accounting with a strong ethos of inclusivity and student support.",
    highlights: [
      "Central Location",
      "Law & Business Focus",
      "Personalized Support",
    ],
    popularPrograms: ["Law", "Accounting", "Business Management"],
    intakes: ["January", "June", "October"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "Flexible entry; A-Levels or work experience considered.",
      postgraduate: "Bachelor's degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£13,000" },
      postgraduate: { home: "£9,500", international: "£13,500" },
    },
    livingCosts: {
      summary: "Central London costs apply.",
      typicalMonthlyTotal: "£1,400 - £1,800",
    },
  },
  {
    slug: "aru-london",
    name: "ARU London (Anglia Ruskin)",
    country: "UK",
    city: "London",
    campus: "Farringdon / Docklands",
    category: "University",
    website: "https://london.aru.ac.uk/",
    logo: "/home/aru-london.png", // Ensure image exists
    campusImage: "/campus/aru-london.jpg", // Ensure image exists
    established: 1858,
    rankingBadge: "Employability Focused",
    shortDescription: "Affordable, high-quality degrees in London.",
    fullDescription:
      "ARU London offers degrees in business, law, and healthcare with a focus on employability and affordable tuition fees across two London campuses.",
    highlights: ["Low Tuition Fees", "Two London Campuses", "Industry Links"],
    popularPrograms: ["MBA", "International Business", "Health & Social Care"],
    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "96 UCAS points or equivalent.",
      postgraduate: "UK Honours degree 2:2 or equivalent.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 overall.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£12,900" },
      postgraduate: { home: "£8,500", international: "£14,500" },
    },
    livingCosts: {
      summary: "Competitive London living costs.",
      typicalMonthlyTotal: "£1,200 - £1,600",
    },
  },
  {
    slug: "uclan-london",
    name: "University of Central Lancashire London",
    country: "UK",
    city: "London",
    campus: "West India Quay",
    category: "University",
    website: "https://london.uclan.ac.uk/",
    logo: "/home/uclan.png", // Ensure image exists
    campusImage: "/campus/uclan-london.png", // Ensure image exists
    established: 1828,
    rankingBadge: "Top Northern Uni in London",
    shortDescription: "Preston heritage, London opportunity.",
    fullDescription:
      "UCLan London provides a boutique portfolio of business, construction, and hospitality programmes near Canary Wharf.",
    highlights: [
      "Canary Wharf Location",
      "Construction Focus",
      "Intimate Class Sizes",
    ],
    popularPrograms: [
      "Construction Project Management",
      "Business",
      "Hospitality",
    ],
    intakes: ["January", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "Standard UK university entry reqs.",
      postgraduate: "2:2 Degree minimum.",
    },
    englishRequirements: {
      standard: "IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£14,000" },
      postgraduate: { home: "£10,000", international: "£15,000" },
    },
    livingCosts: {
      summary: "Canary Wharf area can be pricey, but transport is excellent.",
      typicalMonthlyTotal: "£1,300 - £1,700",
    },
  },
  {
    slug: "regent-college-london",
    name: "Regent College London",
    country: "UK",
    city: "London",
    campus: "Various",
    category: "University",
    website: "https://www.rcl.ac.uk/",
    logo: "/home/regent-college.jpg", // Ensure image exists
    campusImage: "/campus/regent-college.jpg", // Ensure image exists
    established: 2010,
    rankingBadge: "Flexible Higher Education",
    shortDescription: "Diverse range of HNDs and Degrees.",
    fullDescription:
      "Regent College London offers flexible higher education pathways including HNDs and top-up degrees across multiple London campuses.",
    highlights: [
      "Flexible Timetables",
      "Multiple Locations",
      "Pathway Support",
    ],
    popularPrograms: ["Business", "Health & Social Care", "Computing"],
    intakes: ["Various throughout year"],
    studyModes: ["On-campus", "Blended"],
    academicRequirements: {
      undergraduate: "Flexible; relevant Level 3 qualifications.",
      postgraduate: "Level 6 qualification.",
    },
    englishRequirements: {
      standard: "Internal test or IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "£9,250", international: "£12,500" },
      postgraduate: { home: "£10,000", international: "£13,000" },
    },
    livingCosts: {
      summary: "Depends on chosen campus location.",
      typicalMonthlyTotal: "£1,200 - £1,600",
    },
  },

  // --- PATHWAY PROVIDERS ---
  {
    slug: "oxford-brookes-pathway",
    name: "Oxford Brookes University (Pathways)",
    country: "UK",
    city: "Oxford",
    campus: "Oxford Campus",
    category: "Pathway Provider",
    website:
      "https://www.brookes.ac.uk/study/courses/international-pathway-courses",
    logo: "/home/oxford-brookes.png", // Ensure image exists
    campusImage: "/campus/oxford-brookes.jpg", // Ensure image exists
    established: 1865,
    rankingBadge: "Premier Pathway",
    shortDescription: "Your route to Oxford Brookes degrees.",
    fullDescription:
      "Specialized foundation and pre-masters courses designed to prepare international students for degree study at Oxford Brookes.",
    highlights: [
      "Guaranteed Progression",
      "Oxford Location",
      "English Support",
    ],
    popularPrograms: ["International Foundation", "Pre-Masters"],
    intakes: ["January", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      foundation: "High school completion.",
      postgraduate: "Diploma or non-honours degree.",
    },
    englishRequirements: {
      standard: "IELTS 4.5 - 5.5 depending on course length.",
    },
    tuitionFees: {
      undergraduate: { home: "N/A", international: "£14,995 approx" },
      postgraduate: { home: "N/A", international: "£14,995 approx" },
    },
    livingCosts: {
      summary: "Oxford is a premium student city.",
      typicalMonthlyTotal: "£1,100 - £1,400",
    },
  },
  {
    slug: "solent-university-pathway",
    name: "Solent University (Pathways)",
    country: "UK",
    city: "Southampton",
    campus: "Southampton Campus",
    category: "Pathway Provider",
    website: "https://qa.solent.ac.uk/pathway/courses/",
    logo: "/home/solent.png", // Ensure image exists
    campusImage: "/campus/solent.jpg", // Ensure image exists
    established: 2005,
    rankingBadge: "Creative Pathway",
    shortDescription: "Pathway courses for creative and maritime degrees.",
    fullDescription:
      "QA Higher Education pathways provide the academic and English skills needed for entry into Solent University's creative and maritime programs.",
    highlights: ["Maritime Focus", "Creative Arts", "Southampton Location"],
    popularPrograms: ["Foundation in Art & Design", "Business Foundation"],
    intakes: ["January", "September", "May"],
    studyModes: ["On-campus"],
    academicRequirements: {
      foundation: "High school completion.",
    },
    englishRequirements: {
      standard: "IELTS 5.0 - 5.5.",
    },
    tuitionFees: {
      undergraduate: { home: "N/A", international: "£13,000 approx" },
    },
    livingCosts: {
      summary: "Southampton is affordable and student-friendly.",
      typicalMonthlyTotal: "£900 - £1,100",
    },
  },
  {
    slug: "northumbria-pathway",
    name: "Northumbria University (Pathways)",
    country: "UK",
    city: "Newcastle/London",
    campus: "Newcastle & London",
    category: "Pathway Provider",
    website: "https://qahighereducation.com/courses/pathways/",
    logo: "/home/northumbria-newcastle.png",
    campusImage: "/campus/northumbria-newcastle.jpg", // Ensure image exists
    established: 1969,
    rankingBadge: "Guaranteed Progression",
    shortDescription: "Foundation routes to Northumbria degrees.",
    fullDescription:
      "Specialist pathway courses delivered by QA Higher Education to prepare students for undergraduate and postgraduate study at Northumbria.",
    highlights: ["Direct Progression", "Integrated CAS", "Subject Specific"],
    popularPrograms: ["International Foundation", "Pre-Masters Business"],
    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      foundation: "High School Certificate.",
    },
    englishRequirements: {
      standard: "IELTS 4.5+.",
    },
    tuitionFees: {
      undergraduate: { home: "N/A", international: "£14,000 - £16,500" },
    },
    livingCosts: {
      summary: "Varies by campus (Newcastle vs London).",
      typicalMonthlyTotal: "£900 - £1,500",
    },
  },

  // --- GERMANY ---
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
    highlights: ["English-taught", "Berlin Tech Hub", "Affordable EU Tuition"],
    popularPrograms: [
      "Business Management",
      "Computer Science",
      "Data Analytics",
    ],
    intakes: ["February", "May", "September", "November"],
    studyModes: ["On-campus", "Blended"],
    academicRequirements: {
      undergraduate: "A-Levels or equivalent high school diploma.",
      postgraduate: "Bachelor's degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "€8,000", international: "€10,500" },
      postgraduate: { home: "€9,000", international: "€12,000" },
    },
    livingCosts: {
      summary: "Berlin is becoming more expensive but remains good value.",
      typicalMonthlyTotal: "€900 - €1,300",
    },
  },
  {
    slug: "schiller-heidelberg",
    name: "Schiller International University – Heidelberg",
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
    highlights: ["American Degree", "Historic City", "GEDU Network"],
    popularPrograms: ["International Business", "Diplomacy", "Hospitality"],
    intakes: ["Monthly / Flexible"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High School Diploma/GED.",
      postgraduate: "Bachelor's degree.",
    },
    englishRequirements: {
      standard: "TOEFL / IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "€12,000", international: "€12,000" },
      postgraduate: { home: "€14,000", international: "€14,000" },
    },
    showGeduLogo: true,
    livingCosts: {
      summary: "Standard German student city costs.",
      typicalMonthlyTotal: "€900 - €1,200",
    },
  },

  // --- FRANCE ---
  {
    slug: "icn-business-school",
    name: "ICN Business School",
    country: "France",
    city: "Paris / Nancy",
    campus: "Paris Campus",
    category: "University",
    website: "https://www.icn-artem.com/en/start-dates/",
    logo: "/home/icn-logo.png", // Ensure image exists
    campusImage: "/campus/icn-paris.jpg", // Ensure image exists
    established: 1905,
    rankingBadge: "Triple Accredited (EQUIS/AMBA/AACSB)",
    shortDescription: "Creative thinking in business.",
    fullDescription:
      "A prestigious 'Grande École' offering triple-accredited management degrees with a focus on creativity and innovation.",
    highlights: [
      "Triple Accredited",
      "Artem Alliance",
      "Paris & Berlin Campuses",
    ],
    popularPrograms: [
      "MSc in Luxury Management",
      "BBA",
      "International Management",
    ],
    intakes: ["September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High school diploma (Baccalaureate equivalent).",
      postgraduate: "Bachelor's degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 / TOEFL 80.",
    },
    tuitionFees: {
      undergraduate: { home: "€10,500", international: "€10,500" },
      postgraduate: { home: "€16,000", international: "€16,000" },
    },
    livingCosts: {
      summary: "Paris is expensive; Nancy is affordable.",
      typicalMonthlyTotal: "€1,200 - €1,600 (Paris)",
    },
  },
  {
    slug: "schiller-paris",
    name: "Schiller International University – Paris",
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
    highlights: ["Central Paris", "US & EU Degrees", "GEDU Network"],
    popularPrograms: ["International Relations", "Business", "Hospitality"],
    intakes: ["Monthly / Flexible"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High School Diploma.",
      postgraduate: "Bachelor's Degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "€12,000", international: "€12,000" },
      postgraduate: { home: "€14,000", international: "€14,000" },
    },
    showGeduLogo: true,
    livingCosts: {
      summary: "Paris living costs are high.",
      typicalMonthlyTotal: "€1,300 - €1,800",
    },
  },

  // --- SPAIN ---
  {
    slug: "schiller-madrid",
    name: "Schiller International University – Madrid",
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
      "Schiller Madrid prepares students for leadership in global business, hospitality and diplomacy in a vibrant capital city.",
    highlights: ["Madrid Lifestyle", "English Taught", "GEDU Network"],
    popularPrograms: ["International Business", "Diplomacy"],
    intakes: ["Monthly / Flexible"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High School Diploma.",
      postgraduate: "Bachelor's Degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0 or TOEFL.",
    },
    tuitionFees: {
      undergraduate: { home: "€11,000", international: "€11,000" },
      postgraduate: { home: "€13,000", international: "€13,000" },
    },
    showGeduLogo: true,
    livingCosts: {
      summary: "Madrid offers a great balance of cost and lifestyle.",
      typicalMonthlyTotal: "€900 - €1,200",
    },
  },

  // --- MALTA ---
  {
    slug: "lsc-malta",
    name: "London School of Commerce Malta",
    country: "Malta",
    city: "Valletta/Floriana",
    campus: "Malta Campus",
    category: "University",
    website: "https://lscmalta.edu.mt/",
    logo: "/home/lsc-malta.png",
    campusImage: "/campus/lsc-malta.jpg",
    established: 2003,
    rankingBadge: "Affordable British Degrees",
    shortDescription: "British education in the Mediterranean.",
    fullDescription:
      "LSC Malta provides high-quality business and management degrees validated by UK awarding bodies at a very competitive price.",
    highlights: ["UK Degrees", "English Speaking", "Low Tuition"],
    popularPrograms: ["MBA Global", "BA Business Management"],
    intakes: ["February", "April", "June", "August", "October", "November"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High School A-Levels or equivalent.",
      postgraduate: "Bachelor's degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "€6,000", international: "€6,950 (Course Total)" },
      postgraduate: { home: "€7,000", international: "€6,950 (Course Total)" },
    },
    livingCosts: {
      summary: "Affordable island living.",
      typicalMonthlyTotal: "€700 - €900",
    },
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
    rankingBadge: "Global Education Provider",
    shortDescription: "Career-driven global education.",
    fullDescription:
      "GBS Malta delivers internationally recognised business and healthcare qualifications in a modern, professional study environment.",
    highlights: ["Modern Campus", "Career Focus", "English Environment"],
    popularPrograms: ["Business", "Management", "Finance"],
    intakes: ["January", "May", "September"],
    studyModes: ["On-campus"],
    academicRequirements: {
      undergraduate: "High School Diploma.",
      postgraduate: "Bachelor's Degree.",
    },
    englishRequirements: {
      standard: "IELTS 6.0.",
    },
    tuitionFees: {
      undergraduate: { home: "€6,000", international: "€8,000" },
      postgraduate: { home: "€7,000", international: "€9,000" },
    },
    livingCosts: {
      summary: "St Julian's is a lively hub.",
      typicalMonthlyTotal: "€800 - €1,100",
    },
  },
];
