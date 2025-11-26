export type CourseCategory =
  | "Business"
  | "IT"
  | "Health & Social Care"
  | "Counselling, Mental Health & Wellbeing";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  category: CourseCategory;
  image: string;
  level?: CourseLevel;
  duration?: string;
  certificate?: boolean;
  url?: string;
  shortDescription: string;
};

export const categories: {
  id: CourseCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "Business",
    label: "Business Skills",
    description:
      "Short online courses to build practical business skills in marketing, compliance and management.",
  },
  {
    id: "IT",
    label: "IT & Cyber Security",
    description:
      "Essential IT and cyber security skills to help protect data, systems and people.",
  },
  {
    id: "Health & Social Care",
    label: "Health & Social Care",
    description:
      "Training that supports safe, person-centred practice in schools, care settings and the community.",
  },
  {
    id: "Counselling, Mental Health & Wellbeing",
    label: "Counselling, Mental Health & Wellbeing",
    description:
      "Courses that raise awareness of mental health and help you support yourself and others.",
  },
];

export const courses: Course[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Business",
    image: "/courses/social-media-marketing.png",
    level: "Beginner",
    duration: "3–4 hours",
    certificate: true,
    shortDescription:
      "Learn how to plan simple campaigns, create engaging content and understand basic analytics across key platforms.",
  },
  {
    id: "introducing-gdpr",
    title: "Introducing GDPR",
    category: "Business",
    image: "/courses/introducing-gdpr.png",
    level: "Beginner",
    duration: "2–3 hours",
    certificate: true,
    shortDescription:
      "Understand the main GDPR principles, roles and responsibilities so you can handle personal data more safely.",
  },
  {
    id: "project-management",
    title: "Project Management",
    category: "Business",
    image: "/courses/project-management.png",
    level: "Intermediate",
    duration: "5–6 hours",
    certificate: true,
    shortDescription:
      "Follow a clear project life cycle, manage tasks and risks, and keep small projects on track and on time.",
  },
  {
    id: "seo-for-business",
    title: "Search Engine Optimisation for Business",
    category: "Business",
    image: "/courses/seo-for-business.png",
    level: "Intermediate",
    duration: "3–4 hours",
    certificate: true,
    shortDescription:
      "Learn how search engines work, choose basic keywords and improve on-page content for better visibility.",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    category: "IT",
    image: "/courses/cyber-security.png",
    level: "Beginner",
    duration: "4–5 hours",
    certificate: true,
    url: "https://educateme.global/en-gb/products/cyber-security",
    shortDescription:
      "Explore common cyber threats, safe online behaviour and simple controls that help reduce risk.",
  },
  {
    id: "safeguarding-children",
    title: "Safeguarding Children",
    category: "Health & Social Care",
    image: "/courses/safeguarding-children.png",
    level: "Beginner",
    duration: "3 hours",
    certificate: true,
    shortDescription:
      "Recognise signs of abuse, follow basic safeguarding procedures and understand your duty to protect children.",
  },
  {
    id: "safeguarding-adults",
    title: "Safeguarding Adults",
    category: "Health & Social Care",
    image: "/courses/safeguarding-adults.png",
    level: "Beginner",
    duration: "3 hours",
    certificate: true,
    shortDescription:
      "Learn how to spot abuse or neglect, share concerns and support adults at risk in a safe, respectful way.",
  },
  {
    id: "positive-handling-schools",
    title: "Positive Handling in Schools",
    category: "Health & Social Care",
    image: "/courses/positive-handling-schools.png",
    level: "Intermediate",
    duration: "3–4 hours",
    certificate: true,
    shortDescription:
      "Understand behaviour policies, de-escalation and when physical intervention may be used as a last resort.",
  },
  {
    id: "eyfs-intro",
    title: "Introduction to Early Years Foundation Stage",
    category: "Health & Social Care",
    image: "/courses/eyfs-intro.png",
    level: "Beginner",
    duration: "3 hours",
    certificate: true,
    shortDescription:
      "Get an overview of the EYFS framework, key learning areas and how to support early development.",
  },
  {
    id: "duty-of-care",
    title: "Duty of Care",
    category: "Health & Social Care",
    image: "/courses/duty-of-care.png",
    level: "Beginner",
    duration: "2–3 hours",
    certificate: true,
    shortDescription:
      "Understand your duty of care, how to balance rights and risks and when to raise concerns.",
  },
  {
    id: "children-young-people-mental-health",
    title: "Children and Young People's Mental Health",
    category: "Counselling, Mental Health & Wellbeing",
    image: "/courses/children-young-people-mh.png",
    level: "Intermediate",
    duration: "4 hours",
    certificate: true,
    shortDescription:
      "Explore common mental health challenges for children and young people and ways to offer safe support.",
  },
  {
    id: "mental-health-awareness",
    title: "Mental Health Awareness",
    category: "Counselling, Mental Health & Wellbeing",
    image: "/courses/mental-health-awareness.png",
    level: "Beginner",
    duration: "3 hours",
    certificate: true,
    shortDescription:
      "Build a basic understanding of mental health, stigma and how to respond when someone needs help.",
  },
  {
    id: "adhd-awareness",
    title: "ADHD Awareness",
    category: "Counselling, Mental Health & Wellbeing",
    image: "/courses/adhd-awareness.png",
    level: "Beginner",
    duration: "2–3 hours",
    certificate: true,
    shortDescription:
      "Learn what ADHD is, how it can affect learning and behaviour, and simple ways to offer support.",
  },
  {
    id: "stress-management",
    title: "Stress Management",
    category: "Counselling, Mental Health & Wellbeing",
    image: "/courses/stress-management.png",
    level: "Beginner",
    duration: "2–3 hours",
    certificate: true,
    shortDescription:
      "Understand what stress is, how it shows up and practical tools to manage pressure in daily life.",
  },
];
