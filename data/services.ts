import {
  GraduationCap,
  FileCheck,
  Banknote,
  Home,
  PlaneLanding,
} from "lucide-react";

export const servicesData = [
  {
    id: "university-admissions",
    title: "University Admission", // Shortened title for better fit
    slug: "university-admissions",
    icon: GraduationCap,
    image: "/services/university-admissions.jpg", // Add your image path
    shortDesc:
      "We handle the full application process professionally and at no cost. Error-free preparation, document guidance, and submission.",
    fullDesc:
      "Building on your one-to-one session, we handle the full application process professionally and at no cost. We provide step-by-step, personalized support to select and apply to undergraduate, postgraduate, foundation, or pre-master’s programmes.",
    features: [
      "Error-free application preparation",
      "Guidance on Statement of Purpose (SOP)",
      "Document guidance (CAS, references)",
      "Advice on strengthening your profile",
    ],
    ctaText: "Start Application",
  },
  {
    id: "visa-guidance",
    title: "Visa Guidance",
    slug: "visa-guidance",
    icon: FileCheck,
    image: "/services/visa-guidance.jpg",
    shortDesc:
      "Simplified assistance through the UK student visa process. Detailed checklists, interview prep, and updates on UKVI rules.",
    fullDesc:
      "We provide simplified, reliable assistance through the UK student visa process. Our team stays updated on the latest UKVI rules to ensure your application is compliant.",
    features: [
      "Detailed document checklists",
      "Preparation for credibility interviews",
      "Updates on UKVI rules & sponsorship",
      "Dependent visa advice",
    ],
    ctaText: "Get Visa Help",
  },
  {
    id: "scholarships",
    title: "Scholarships & Funding",
    slug: "scholarships",
    icon: Banknote,
    image: "/services/scholarships.jpg",
    shortDesc:
      "Expert support to unlock financial opportunities. We identify university-specific scholarships matched to your profile.",
    fullDesc:
      "We offer expert support to unlock financial opportunities for international students. We help identify university-specific scholarships, bursaries, and grants.",
    features: [
      "University-specific scholarship identification",
      "Bursary & Grant eligibility checks",
      "Application essay support",
      "Deadline tracking",
    ],
    ctaText: "Find Scholarships",
  },
  {
    id: "accommodation",
    title: "Student Accommodation",
    slug: "accommodation",
    icon: Home,
    image: "/services/accommodation.jpg",
    shortDesc:
      "Find safe, convenient housing with ease. Recommendations for halls or private options tailored to your campus location.",
    fullDesc:
      "Find safe, convenient housing with ease. We provide recommendations for university halls of residence, private accommodation options, or homestays.",
    features: [
      "University halls & private housing",
      "Contract review assistance",
      "Location advice based on campus",
      "Budget-friendly recommendations",
    ],
    ctaText: "Find Housing",
  },
  {
    id: "arrival-support",
    title: "Airport Pickup & Arrival",
    slug: "arrival-support",
    icon: PlaneLanding,
    image: "/services/arrival-support.jpg",
    shortDesc:
      "A stress-free welcome. Professional pickups from major airports and help settling into your new accommodation.",
    fullDesc:
      "We ensure a stress-free welcome to the UK. Our service includes professional, safe pickups from major airports (Heathrow, Gatwick, Manchester) and transport directly to your accommodation.",
    features: [
      "Safe pickup from major UK airports",
      "Transport directly to accommodation",
      "Pre-departure orientation",
      "Initial settling-in help",
    ],
    ctaText: "Book Arrival Support",
  },
];
