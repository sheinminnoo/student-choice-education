export const scholarshipCountries = [
  "UK",
  "Germany",
  "France",
  "Spain",
  "Malta",
] as const;

export type ScholarshipCountry = (typeof scholarshipCountries)[number];

export type StudyLevel =
  | "Foundation"
  | "Undergraduate"
  | "Postgraduate"
  | "MBA";

export type ScholarshipFundingType =
  | "fee-discount"
  | "tuition-waiver"
  | "bursary"
  | "living-cost-support";

export type ScholarshipAudience = "international" | "eu" | "home-uk" | "all";

export type ScholarshipTag =
  | "merit-based"
  | "need-based"
  | "country-specific"
  | "automatic"
  | "early-bird"
  | "alumni"
  | "government-linked";

export type Scholarship = {
  id: string;
  universitySlug: string;
  universityName: string;
  campusLabel: string;
  country: ScholarshipCountry;
  name: string;
  fundingType: ScholarshipFundingType;
  studyLevels: StudyLevel[];
  maxValue: string;
  isPercentage: boolean;
  maxPercentage?: number;
  typicalValueDescription: string;
  overview: string;
  keyEligibility: string[];
  automaticConsideration: boolean;
  applicationGuidance: string;
  canCombineWithOtherAwards: "no" | "limited" | "unknown";
  mainIntakes: string[];
  officialUrl: string;
  universityLogo: string;
  campusImage: string;
  tagline?: string;
  audiences: ScholarshipAudience[];
  tags?: ScholarshipTag[];
};

export const scholarships: Scholarship[] = [
  {
    id: "herts-international-scholarship",
    universitySlug: "university-of-hertfordshire",
    universityName: "University of Hertfordshire",
    campusLabel: "Hatfield, UK",
    country: "UK",
    name: "International Student Scholarship",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Up to £4,000 tuition fee discount",
    isPercentage: false,
    typicalValueDescription:
      "Tiered fee reductions for self-funded international students, awarded on the basis of academic profile and country of domicile.",
    overview:
      "Hertfordshire offers a range of automatic scholarships and discounts for new self-funded international students. Awards are normally applied as a tuition fee reduction on each year of study, subject to meeting progression and fee payment conditions.",
    keyEligibility: [
      "Classified as an international, self-funded fee-paying student",
      "Holding an offer for an eligible full-time degree at the Hatfield campus",
      "Meeting the academic and English language conditions of the offer",
      "Scholarships cannot exceed published maximums and may vary by country and course",
    ],
    automaticConsideration: true,
    applicationGuidance:
      "Students are normally considered automatically when an offer is issued. The final scholarship value is confirmed in the official offer letter or subsequent scholarship email.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["January", "September"],
    officialUrl: "https://www.herts.ac.uk/international/scholarships-and-fees",
    universityLogo: "/home/hertfordshire.jpg",
    campusImage: "/campus/hatfield.jpg",
    tagline: "Automatic scholarships for self-funded international students.",
    audiences: ["international"],
    tags: ["automatic", "merit-based"],
  },
  {
    id: "roehampton-eu-scholarship",
    universitySlug: "university-of-roehampton-london",
    universityName: "University of Roehampton London",
    campusLabel: "Roehampton, London, UK",
    country: "UK",
    name: "EU Scholarship",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "£5,000 tuition fee discount",
    isPercentage: false,
    typicalValueDescription:
      "Flat £5,000 tuition fee reduction for eligible EU students enrolling on undergraduate or postgraduate programmes in 2025 and 2026.",
    overview:
      "Roehampton offers an EU Scholarship to support students from EU countries who are paying overseas fees. The award is applied as a tuition fee discount for the first year of study and is available across a wide range of programmes.",
    keyEligibility: [
      "EU nationality and classified as overseas fee-paying",
      "Enrolling on an eligible full-time undergraduate or postgraduate programme",
      "Meeting academic and English language entry requirements",
      "Cannot be combined with most other institutional discounts",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Eligible applicants are normally flagged by the admissions team and invited to confirm their status. The scholarship is then added to the offer or CAS as appropriate.",
    canCombineWithOtherAwards: "no",
    mainIntakes: ["January", "September"],
    officialUrl:
      "https://www.roehampton.ac.uk/study/fees-and-funding/international-fees-and-financial-support/",
    universityLogo: "/home/Roehampton.png",
    campusImage: "/campus/roehampton-london.jpg",
    tagline: "Support for EU students paying overseas tuition fees.",
    audiences: ["eu"],
    tags: ["country-specific"],
  },
  {
    id: "roehampton-international-excellence",
    universitySlug: "university-of-roehampton-london",
    universityName: "University of Roehampton London",
    campusLabel: "Roehampton, London, UK",
    country: "UK",
    name: "International Excellence Scholarship",
    fundingType: "fee-discount",
    studyLevels: ["Postgraduate"],
    maxValue: "Up to £4,000 tuition fee discount",
    isPercentage: false,
    typicalValueDescription:
      "Competitive postgraduate award offering fee reductions typically between £1,000 and £4,000 for high-achieving international students.",
    overview:
      "This merit-based scholarship supports talented international postgraduate students with a strong academic profile. Awards are limited and are allocated following an additional assessment of academic performance and personal statement.",
    keyEligibility: [
      "International (non-UK) fee-paying status",
      "Offer holder for an eligible full-time taught Masters programme",
      "Strong academic profile, normally equivalent to at least a UK 2:1",
      "Quality of personal statement and overall application is considered",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Students typically complete a short additional scholarship application or are assessed automatically following acceptance of an offer, depending on the cycle. Shortlisted students are informed by email.",
    canCombineWithOtherAwards: "no",
    mainIntakes: ["January", "September"],
    officialUrl:
      "https://www.roehampton.ac.uk/study/fees-and-funding/international-fees-and-financial-support/postgraduate-scholarships/",
    universityLogo: "/home/Roehampton.png",
    campusImage: "/campus/roehampton-london.jpg",
    tagline:
      "Merit scholarship for high-achieving international postgraduates.",
    audiences: ["international"],
    tags: ["merit-based"],
  },
  {
    id: "ulster-london-international-award",
    universitySlug: "ulster-university-london",
    universityName: "Ulster University London Campus",
    campusLabel: "London, UK",
    country: "UK",
    name: "International Scholarship (London Campus)",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Typical fee discount of up to £2,000–£3,000",
    isPercentage: false,
    typicalValueDescription:
      "Fee discounts for new international students at the London campus, with the final value confirmed in the offer letter.",
    overview:
      "Ulster University and its London campus offer a range of scholarships and discounts to international students. Awards are usually applied as a tuition fee reduction, and the exact amount depends on nationality, previous academic performance and the chosen programme.",
    keyEligibility: [
      "Classified as an international, self-funding student",
      "Holding an offer for an eligible full-time programme at the London campus",
      "Meeting academic and English language entry requirements",
      "Not normally available in combination with other Ulster fee discounts",
    ],
    automaticConsideration: true,
    applicationGuidance:
      "Scholarship eligibility is assessed as part of the admissions process. No separate application is usually required; award details are included in the offer or subsequent communication from the campus.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["January", "May", "September"],
    officialUrl:
      "https://london.northumbria.ac.uk/courses/new-students/bursaries-and-scholarships/",
    universityLogo: "/home/Ulster.jpg",
    campusImage: "/campus/ulster-london.jpg",
    tagline:
      "Typical fee discounts for international students at the London campus.",
    audiences: ["international"],
    tags: ["automatic"],
  },
  {
    id: "arden-berlin-merit-scholarship",
    universitySlug: "arden-university-berlin",
    universityName: "Arden University Berlin",
    campusLabel: "Berlin, Germany",
    country: "Germany",
    name: "Berlin Merit and Regional Scholarships",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Up to €3,000 tuition fee reduction",
    isPercentage: false,
    typicalValueDescription:
      "Regional and merit-based scholarships offering reductions on first-year tuition fees for selected undergraduate and postgraduate programmes at the Berlin study centre.",
    overview:
      "Arden University Berlin offers a mix of regional offers and merit scholarships to help international students access career-focused programmes in Germany. Awards are usually made as a discount on first-year tuition fees and vary by country, course and academic profile.",
    keyEligibility: [
      "International student enrolling at the Arden Berlin campus",
      "Offer holder for an eligible undergraduate or postgraduate programme",
      "Meeting specific regional or academic criteria published for the intake",
      "Scholarship value confirmed in the official offer letter",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Applicants are encouraged to speak with the Arden recruitment or admissions team. In most cases, consideration is based on academic documents and country of domicile, and any discount is confirmed when the offer is issued.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["February", "May", "September", "November"],
    officialUrl:
      "https://arden.ac.uk/berlin/admissions/fees/international-scholarships-berlin",
    universityLogo: "/home/arden.jpg",
    campusImage: "/campus/arden-berlin.jpg",
    tagline: "Regional and merit scholarships at Arden’s Berlin study centre.",
    audiences: ["international"],
    tags: ["merit-based", "country-specific"],
  },
  {
    id: "schiller-heidelberg-global-citizen",
    universitySlug: "schiller-international-university-heidelberg",
    universityName: "Schiller International University – Heidelberg",
    campusLabel: "Heidelberg, Germany",
    country: "Germany",
    name: "Global Citizen Scholarship (Heidelberg)",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Up to 50% tuition scholarship",
    isPercentage: true,
    maxPercentage: 50,
    typicalValueDescription:
      "At the Heidelberg campus, eligible students can receive tuition scholarships of up to 50%, depending on academic merit, profile and scholarship category.",
    overview:
      "Schiller’s Global Citizen Scholarship recognises academic excellence and global engagement. At the Heidelberg campus, students can qualify for significant tuition fee reductions, helping to make US-style international education more accessible in Germany.",
    keyEligibility: [
      "Offer holder for an eligible programme at the Heidelberg campus",
      "Strong academic background and motivation for international education",
      "Completion of the dedicated scholarship application form",
      "Total discount cannot exceed 50% of tuition fees",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Students first secure admission, then complete Schiller’s scholarship application form and submit it to the campus scholarship email. Applications are assessed by a scholarship committee and successful applicants receive a formal award letter.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["January", "May", "September"],
    officialUrl: "https://www.schiller.edu/admissions/scholarships/",
    universityLogo: "/home/Schiller.jpg",
    campusImage: "/er/sh.jpg",
    tagline: "Up to 50% tuition awards for global citizens in Heidelberg.",
    audiences: ["international"],
    tags: ["merit-based"],
  },
  {
    id: "schiller-paris-global-citizen",
    universitySlug: "schiller-international-university-paris",
    universityName: "Schiller International University – Paris",
    campusLabel: "Paris, France",
    country: "France",
    name: "Global Citizen Scholarship (Paris)",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Up to 50% tuition scholarship",
    isPercentage: true,
    maxPercentage: 50,
    typicalValueDescription:
      "Scholarships typically range from 20% to 50% of tuition, depending on visa status, citizenship and academic profile.",
    overview:
      "The Paris campus participates in Schiller’s Global Citizen Scholarship scheme, offering merit-based tuition reductions to students who demonstrate academic strength and global mindset. Different percentages apply for visa-required and non-visa students.",
    keyEligibility: [
      "Enrolled or accepted to study at Schiller Paris",
      "Meeting academic and language entry requirements",
      "Submitting a complete scholarship application with supporting documents",
      "Final award level decided by the scholarship committee",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "After receiving an admission offer, students request the scholarship form from the admissions team, complete it and submit it with supporting evidence such as transcripts, CV and motivation statement.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["January", "May", "September"],
    officialUrl: "https://www.schiller.edu/admissions/scholarships/",
    universityLogo: "/home/Schiller.jpg",
    campusImage: "/er/sp.jpg",
    tagline: "Merit-based tuition reductions at Schiller’s Paris campus.",
    audiences: ["international"],
    tags: ["merit-based"],
  },
  {
    id: "schiller-madrid-global-citizen",
    universitySlug: "schiller-international-university-madrid",
    universityName: "Schiller International University – Madrid",
    campusLabel: "Madrid, Spain",
    country: "Spain",
    name: "Global Citizen Scholarship (Madrid)",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Up to 50% tuition scholarship",
    isPercentage: true,
    maxPercentage: 50,
    typicalValueDescription:
      "Visa-required students are typically eligible for scholarships around 20%, with higher percentages possible for non-visa students, up to a maximum of 50%.",
    overview:
      "At the Madrid campus, Schiller extends its portfolio of merit-based and need-based scholarships to international students, helping them to reduce tuition fees while studying in Spain’s capital.",
    keyEligibility: [
      "Offer holder for an eligible Madrid-based programme",
      "International or EU student meeting visa and academic requirements",
      "Completion of Schiller’s scholarship application process",
      "Scholarship value determined individually and capped at 50%",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Students apply for admission first, then work with the campus admissions team to submit a scholarship application, which is reviewed by the scholarship committee.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["January", "May", "September"],
    officialUrl: "https://www.schiller.edu/admissions/scholarships/",
    universityLogo: "/home/Schiller.jpg",
    campusImage: "/er/sm.jpg",
    tagline: "Scholarships supporting international students in Madrid.",
    audiences: ["international"],
    tags: ["merit-based"],
  },
  {
    id: "lsc-malta-country-bursaries",
    universitySlug: "london-school-of-commerce-malta",
    universityName: "London School of Commerce Malta",
    campusLabel: "Valletta, Malta",
    country: "Malta",
    name: "Country-Specific Bursaries and Scholarships",
    fundingType: "bursary",
    studyLevels: ["Undergraduate", "Postgraduate", "MBA"],
    maxValue: "Variable partial tuition bursary",
    isPercentage: true,
    maxPercentage: 30,
    typicalValueDescription:
      "Periodic bursaries and scholarships targeted at specific countries or regions, usually offered as partial tuition fee reductions.",
    overview:
      "LSC Malta periodically offers country-specific bursaries and merit awards to make UK-affiliated business and management degrees more affordable for international students. Exact schemes and amounts vary by intake and nationality.",
    keyEligibility: [
      "Offer holder for an eligible programme at LSC Malta",
      "Meeting any nationality or regional criteria specified for the bursary",
      "Satisfying academic and English language requirements",
      "Subject to availability in the relevant intake",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Prospective students are advised to contact LSC Malta or their local representative to confirm which bursaries are currently available, eligibility criteria and how to have them applied to their offer.",
    canCombineWithOtherAwards: "unknown",
    mainIntakes: ["February", "June", "October"],
    officialUrl: "https://lscmalta.edu.mt/apply-now/",
    universityLogo: "/home/lsc-malta.png",
    campusImage: "/campus/lsc-malta.jpg",
    tagline: "Country-focused bursaries for business and management degrees.",
    audiences: ["international"],
    tags: ["country-specific"],
  },
  {
    id: "gbs-malta-mba-scholarship",
    universitySlug: "gbs-malta",
    universityName: "GBS Malta",
    campusLabel: "St Julian’s, Malta",
    country: "Malta",
    name: "MBA Scholarship",
    fundingType: "fee-discount",
    studyLevels: ["MBA"],
    maxValue: "Up to 50% tuition scholarship",
    isPercentage: true,
    maxPercentage: 50,
    typicalValueDescription:
      "Significant partial scholarships, often up to half of the tuition fee, for selected MBA students based on academic excellence and profile.",
    overview:
      "GBS Malta offers substantial scholarships for its MBA programmes, reflecting the institution’s aim to make postgraduate business education accessible to high-potential students from around the world.",
    keyEligibility: [
      "Offer holder for an eligible MBA programme at GBS Malta",
      "Strong academic track record and/or professional experience",
      "Meeting English language and programme entry requirements",
      "Submitting any additional scholarship documents where requested",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Students should discuss scholarship options with GBS Malta admissions or recruitment partners. In many cases, the scholarship decision is made as part of the offer process and reflected in the tuition fee shown on the offer letter.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["February", "June", "October"],
    officialUrl: "https://gbs.edu.mt/student-life/scholarships/",
    universityLogo: "/home/GBS-Malta.png",
    campusImage: "/campus/gbs-malta.png",
    tagline: "High-value MBA scholarships for strong profiles.",
    audiences: ["international"],
    tags: ["merit-based"],
  },
  {
    id: "gbs-malta-global-excellence",
    universitySlug: "gbs-malta",
    universityName: "GBS Malta",
    campusLabel: "St Julian’s, Malta",
    country: "Malta",
    name: "Global Citizen and Excellence Awards",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate"],
    maxValue: "Varies by programme and intake",
    isPercentage: true,
    maxPercentage: 40,
    typicalValueDescription:
      "A portfolio of awards recognising academic excellence and global engagement, usually offering partial fee reductions for eligible business programmes.",
    overview:
      "Beyond MBA funding, GBS Malta offers additional scholarships and financial support schemes such as Global Citizen and Excellence awards, alongside national schemes like Malta’s Get Qualified initiative, to support a wide range of international students.",
    keyEligibility: [
      "Enrolment on an eligible degree at GBS Malta",
      "Academic performance and motivation for business and management studies",
      "Meeting any additional criteria attached to each award",
      "Some schemes may be tied to specific national initiatives such as Get Qualified",
    ],
    automaticConsideration: false,
    applicationGuidance:
      "Students should review the latest information on the GBS Malta website and speak to an advisor to confirm what they may qualify for and how to apply.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["February", "June", "October"],
    officialUrl:
      "https://gbs.edu.mt/blog/how-international-students-can-access-scholarships-and-financial-support-in-gbs-malta/",
    universityLogo: "/home/GBS-Malta.png",
    campusImage: "/campus/gbs-malta.png",
    tagline: "Excellence awards and support schemes for GBS Malta students.",
    audiences: ["international"],
    tags: ["merit-based", "government-linked"],
  },
  {
    id: "northumbria-newcastle-uk-international",
    universitySlug: "northumbria-university-newcastle",
    universityName: "Northumbria University",
    campusLabel: "Newcastle, UK",
    country: "UK",
    name: "UK International Scholarship (Newcastle campus)",
    fundingType: "fee-discount",
    studyLevels: ["Postgraduate"],
    maxValue: "£3,000 tuition fee discount",
    isPercentage: false,
    typicalValueDescription:
      "Tuition fee discount of £3,000 for eligible postgraduate taught international students joining selected intakes.",
    overview:
      "Northumbria’s UK International Scholarship supports new full-time international postgraduate students studying at the main Newcastle campus. The award is applied as a tuition fee reduction for the first year of study.",
    keyEligibility: [
      "Classified as an international fee-paying student",
      "Enrolling on a full-time eligible Masters programme at the UK campus",
      "Meeting academic and English language conditions set in the offer",
      "Not already receiving another Northumbria scholarship of a higher value",
    ],
    automaticConsideration: true,
    applicationGuidance:
      "There is no separate application for this scholarship. Eligible students are automatically identified during the admissions process and the discount is reflected in the offer documentation.",
    canCombineWithOtherAwards: "no",
    mainIntakes: ["January", "September"],
    officialUrl:
      "https://www.northumbria.ac.uk/study-at-northumbria/fees-funding/international-fees-funding/2025-26-pgt-uk-international-scholarships/",
    universityLogo: "/home/northumbria-newcastle.png",
    campusImage: "/campus/northumbria-newcastle.jpg",
    tagline:
      "Standard £3,000 fee discount for eligible PGT students in Newcastle.",
    audiences: ["international"],
    tags: ["automatic"],
  },
  {
    id: "northumbria-london-international-bursary",
    universitySlug: "northumbria-university-london",
    universityName: "Northumbria University London",
    campusLabel: "London, UK",
    country: "UK",
    name: "International Bursaries and Scholarships (London Campus)",
    fundingType: "fee-discount",
    studyLevels: ["Undergraduate", "Postgraduate", "MBA"],
    maxValue: "Variable fee discount depending on nationality and programme",
    isPercentage: true,
    maxPercentage: 30,
    typicalValueDescription:
      "Combination of country-specific scholarships and programme bursaries to reduce tuition fees for full-time international students at the London campus.",
    overview:
      "Northumbria University London offers a tailored package of bursaries and scholarships for international students. The total discount depends on factors such as previous academic performance, nationality and the chosen course. Only the most beneficial single scholarship or bursary is normally applied.",
    keyEligibility: [
      "Full-time international student enrolling at Northumbria London",
      "Offer holder for an eligible undergraduate, postgraduate or MBA programme",
      "Meeting course entry requirements and any scholarship-specific criteria",
      "Only one scholarship or bursary, whichever is higher, will be awarded",
    ],
    automaticConsideration: true,
    applicationGuidance:
      "Students are usually assessed automatically at application stage. The London campus admissions team confirms any bursary or scholarship entitlement in the offer letter.",
    canCombineWithOtherAwards: "no",
    mainIntakes: ["January", "May", "September"],
    officialUrl:
      "https://london.northumbria.ac.uk/courses/new-students/bursaries-and-scholarships/",
    universityLogo: "/home/northumbria-london.png",
    campusImage: "/campus/northumbria-london.jpg",
    tagline: "Flexible bursaries and scholarships for London campus students.",
    audiences: ["international"],
    tags: ["automatic", "country-specific"],
  },
  {
    id: "northumbria-early-payment-discount",
    universitySlug: "northumbria-university-newcastle",
    universityName: "Northumbria University",
    campusLabel: "Newcastle, UK",
    country: "UK",
    name: "Early Payment Discount (Postgraduate International)",
    fundingType: "fee-discount",
    studyLevels: ["Postgraduate"],
    maxValue: "£500 early payment tuition fee discount",
    isPercentage: false,
    typicalValueDescription:
      "Early payment discount of £500 on tuition fees for eligible international Masters students who pay their deposit by the stated deadlines.",
    overview:
      "Alongside the main UK International Scholarship, Northumbria offers an Early Payment Discount for eligible postgraduate international students who pay their deposit before specific deadlines. This acts like an early-bird saving on tuition fees.",
    keyEligibility: [
      "Postgraduate international (overseas fee) applicant",
      "Holding an offer for an eligible Masters programme",
      "Paying the tuition fee deposit before the published early payment deadline",
      "Meeting all academic and English language conditions of the offer",
    ],
    automaticConsideration: true,
    applicationGuidance:
      "No separate scholarship application is required. Eligible students who pay their deposit in time have the discount applied automatically to their tuition fees, subject to the university’s terms and conditions.",
    canCombineWithOtherAwards: "limited",
    mainIntakes: ["January", "September"],
    officialUrl:
      "https://www.northumbria.ac.uk/study-at-northumbria/fees-funding/international-fees-funding/international-masters-funding/",
    universityLogo: "/home/northumbria-newcastle.png",
    campusImage: "/campus/northumbria-newcastle.jpg",
    tagline: "Early-bird fee discount for paying your deposit on time.",
    audiences: ["international"],
    tags: ["early-bird", "automatic"],
  },
];
