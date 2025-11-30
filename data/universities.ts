// app/universities/universities.ts

export type University = {
  slug: string;
  name: string;
  type: string;
  country: string;
  region: string;
  city: string;

  ranking: {
    label: string;
    value: string;
  };

  overview: string;

  stats: {
    foundedYear: string;
    programmes: string;
    mentors: string;
    employability: string;
    campuses: string;
  };

  studyMode: string;
  schedulePreferences: string;
  support: string;
};

export const universities: University[] = [
  {
    slug: "university-of-hertfordshire",
    name: "University of Hertfordshire",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "Hatfield",
    ranking: {
      label: "UK Ranking 2025",
      value: "Top modern university for graduate employment",
    },
    overview:
      "The University of Hertfordshire is a career-focused UK university with modern facilities, strong links to industry and a vibrant international community.",
    stats: {
      foundedYear: "1952",
      programmes: "250+ programmes",
      mentors: "60+ student mentors",
      employability: "95% graduate employment",
      campuses: "2 campuses (College Lane & de Havilland)",
    },
    studyMode: "On campus with some online and blended options",
    schedulePreferences: "Full-time and part-time study routes",
    support: "Dedicated international student support and careers team",
  },
  {
    slug: "university-of-birmingham",
    name: "University of Birmingham",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "Birmingham",
    ranking: {
      label: "World Ranking 2025",
      value: "Top 100 globally",
    },
    overview:
      "A member of the prestigious Russell Group, the University of Birmingham combines research strength with a green campus close to a major UK city.",
    stats: {
      foundedYear: "1900",
      programmes: "350+ programmes",
      mentors: "80+ student mentors",
      employability: "94% graduate employment",
      campuses: "Edgbaston campus and city centre sites",
    },
    studyMode: "On campus",
    schedulePreferences: "Primarily full-time programmes",
    support: "International student hub and specialist careers support",
  },
  {
    slug: "university-of-manchester",
    name: "University of Manchester",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "Manchester",
    ranking: {
      label: "World Ranking 2025",
      value: "Top 30 globally",
    },
    overview:
      "The University of Manchester is known for research excellence, innovation and a lively city-centre campus in one of the UK’s biggest student cities.",
    stats: {
      foundedYear: "1824",
      programmes: "400+ programmes",
      mentors: "100+ student mentors",
      employability: "95% graduate employment",
      campuses: "City campus across Oxford Road corridor",
    },
    studyMode: "On campus",
    schedulePreferences: "Full-time, with some part-time and distance options",
    support: "Dedicated international societies and careers service",
  },
  {
    slug: "coventry-university",
    name: "Coventry University",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "Coventry",
    ranking: {
      label: "UK Ranking 2025",
      value: "Top modern university for teaching quality",
    },
    overview:
      "Coventry University focuses on applied learning, industry links and real-world placements, especially in business, engineering and health.",
    stats: {
      foundedYear: "1992",
      programmes: "250+ programmes",
      mentors: "50+ student mentors",
      employability: "95% graduate employment",
      campuses: "Coventry city campus plus London campus",
    },
    studyMode: "On campus with some online courses",
    schedulePreferences: "Full-time and part-time routes available",
    support: "International support team and embedded careers coaching",
  },
  {
    slug: "university-of-leeds",
    name: "University of Leeds",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "Leeds",
    ranking: {
      label: "World Ranking 2025",
      value: "Top 100 globally",
    },
    overview:
      "The University of Leeds is a large research-intensive university with a single city-centre campus and a strong reputation for student experience.",
    stats: {
      foundedYear: "1904",
      programmes: "300+ programmes",
      mentors: "75+ student mentors",
      employability: "93% graduate employment",
      campuses: "Single campus close to Leeds city centre",
    },
    studyMode: "On campus",
    schedulePreferences: "Mainly full-time programmes",
    support: "Global community and award-winning student union",
  },
  {
    slug: "queen-mary-university-of-london",
    name: "Queen Mary University of London",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "London",
    ranking: {
      label: "World Ranking 2025",
      value: "Top 150 globally",
    },
    overview:
      "Queen Mary is a Russell Group university in east London, known for its diverse community and strong health, law and business schools.",
    stats: {
      foundedYear: "1887",
      programmes: "200+ programmes",
      mentors: "70+ student mentors",
      employability: "92% graduate employment",
      campuses: "Mile End campus plus specialist London sites",
    },
    studyMode: "On campus",
    schedulePreferences: "Full-time with some flexible options",
    support: "Specialist international welcome and wellbeing teams",
  },
  {
    slug: "kingston-university-london",
    name: "Kingston University London",
    type: "Public University",
    country: "United Kingdom",
    region: "England",
    city: "London",
    ranking: {
      label: "UK Ranking 2025",
      value: "Strong for creative subjects and design",
    },
    overview:
      "Kingston University specialises in creative industries, business and engineering, with riverside campuses in south-west London.",
    stats: {
      foundedYear: "1899",
      programmes: "200+ programmes",
      mentors: "45+ student mentors",
      employability: "90% graduate employment",
      campuses: "Multiple campuses around Kingston upon Thames",
    },
    studyMode: "On campus",
    schedulePreferences: "Full-time, some foundation and top-up routes",
    support: "International student support and creative careers service",
  },
  {
    slug: "university-of-glasgow",
    name: "University of Glasgow",
    type: "Public University",
    country: "United Kingdom",
    region: "Scotland",
    city: "Glasgow",
    ranking: {
      label: "World Ranking 2025",
      value: "Top 100 globally",
    },
    overview:
      "One of Scotland’s oldest universities, the University of Glasgow offers a historic campus, strong research and a friendly student city.",
    stats: {
      foundedYear: "1451",
      programmes: "300+ programmes",
      mentors: "90+ student mentors",
      employability: "95% graduate employment",
      campuses: "Main Gilmorehill campus plus other Scottish sites",
    },
    studyMode: "On campus",
    schedulePreferences: "Mainly full-time programmes",
    support: "International support and global alumni network",
  },
];
