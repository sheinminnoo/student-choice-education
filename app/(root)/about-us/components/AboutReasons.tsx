import {
  Wallet,
  UserCheck,
  Layers,
  ShieldCheck,
  TrendingUp,
  Heart,
} from "lucide-react";

// ... (keep the `reasons` array the same as before) ...
const reasons = [
  {
    icon: Wallet,
    title: "Completely Free Applications",
    desc: "Unlike many agents who charge hefty fees, our application service to world-class UK universities is 100% free.",
  },
  {
    icon: UserCheck,
    title: "Expert, Personalised Guidance",
    desc: "Benefit from over 10 years of UK HE experience. We offer one-to-one counselling tailored to your goals.",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    desc: "From initial planning to arrival: error-free applications, fast document collection, and visa guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Utmost Transparency",
    desc: "We prioritise honesty and ethical practices — no hidden fees, no misleading promises.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Your Future",
    desc: "We go beyond admission — providing career pathway advice to help you access post-study work opportunities.",
  },
  {
    icon: Heart,
    title: "Student-Centric Approach",
    desc: "We evaluate your specific needs to recommend the right courses, ensuring you get the best value and outcomes.",
  },
];

export default function AboutReasons() {
  return (
    // UPDATED: py-20
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* UPDATED: mb-12 is sufficient gap */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-section">
          <p className="text-mini font-bold uppercase tracking-widest text-slate-400 mb-3">
            The SCE Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020b2c] mb-4">
            Why thousands of students trust us.
          </h2>
          <p className="text-body text-slate-600">
            In a crowded education consultancy market, we stand out by
            prioritizing honesty, expertise, and student success above all else.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              // UPDATED: p-6 is plenty of padding for these cards
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-50/30 hover:shadow-xl hover:-translate-y-1 animate-row"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-[#020b2c] transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-[#020b2c] shadow-sm">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#020b2c] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
