export type ServiceSlug =
  | "admission-consultation"
  | "accommodation"
  | "airport-pickup";

export type ServiceSection = {
  title: string;
  items: string[];
};

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  highlight?: string;
  sections: ServiceSection[];
  showApplyForm?: boolean;
  showAccommodationList?: boolean;
  showPickupForm?: boolean;
};

export const services: Service[] = [
  {
    slug: "admission-consultation",
    name: "University Admission Consultation",
    shortDescription:
      "One-to-one guidance on choosing courses, universities, and preparing a strong application for UK study.",
    heroTitle: "University Admission Consultation",
    heroSubtitle:
      "Personalised support at every stage of your UK university application.",
    highlight: "Ideal for students who want structured, step-by-step support.",
    sections: [
      {
        title: "What we cover",
        items: [
          "Course and university selection based on your goals and profile",
          "Application timeline planning and document checklist",
          "Personal statement and motivation letter guidance",
          "Support with reference letters and CVs",
        ],
      },
      {
        title: "Who this is for",
        items: [
          "Students applying for foundation, undergraduate, or postgraduate programmes",
          "Parents who want professional advice for their children’s education plans",
        ],
      },
    ],
    showApplyForm: true,
  },
  {
    slug: "accommodation",
    name: "Student Accommodation Services",
    shortDescription:
      "Support in finding safe, trusted and convenient housing options close to your university.",
    heroTitle: "Student Accommodation Support",
    heroSubtitle:
      "We help you understand options, contracts and costs before you move.",
    highlight: "Perfect for students arriving in the UK for the first time.",
    sections: [
      {
        title: "How we help",
        items: [
          "Explaining types of accommodation (halls, private, shared flats)",
          "Shortlisting options based on budget and location",
          "Guidance on contracts, deposits and payment terms",
        ],
      },
    ],
    showAccommodationList: true,
  },
  {
    slug: "airport-pickup",
    name: "Airport Pickup",
    shortDescription:
      "Safe and reliable airport pickup for new international students arriving in the UK.",
    heroTitle: "Airport Pickup & Arrival Assistance",
    heroSubtitle:
      "We make your first day in the UK less stressful with planned pick-up and drop-off.",
    highlight: "A安心 arrival experience for students and parents.",
    sections: [
      {
        title: "What is included",
        items: [
          "Pre-arranged pickup from major UK airports",
          "Drop-off at your confirmed accommodation",
          "Basic local guidance on arrival (transport, essentials, safety)",
        ],
      },
    ],
    showPickupForm: true,
  },
];
