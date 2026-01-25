import { Users, CheckCircle2 } from "lucide-react";

export default function ServicesCore() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="grid lg:grid-cols-2">
            {/* Left: Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-[#020b2c]">
                <Users className="h-6 w-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#020b2c] mb-4">
                One-to-One Consulting
              </h2>
              <p className="text-base font-medium text-slate-600 mb-6">
                Personalized, expert guidance tailored exactly to you — the
                foundation of our student success.
              </p>

              <div className="space-y-4">
                {[
                  "Complimentary 1-hour session for you & your family",
                  "In-depth review of academic background & goals",
                  "Realistic pathways & IELTS waiver options",
                  "Honest advice on visa prospects & affordability",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-slate-50 p-4 border border-slate-100">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Expertise
                </p>
                <p className="text-sm font-bold text-[#020b2c]">
                  Delivered by consultants from UCL, King’s College London, and
                  Birkbeck.
                </p>
              </div>
            </div>

            {/* Right: Visual / Color Block */}
            <div className="relative bg-[#020b2c] p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-center">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Why one-to-one?</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  &quot;This approach ensures every recommendation is
                  customized, never generic, helping you make confident,
                  informed decisions.&quot;
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/10">
                    <p className="text-2xl font-bold text-yellow-400 mb-1">
                      1 Hr
                    </p>
                    <p className="text-xs text-slate-300">Free Session</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/10">
                    <p className="text-2xl font-bold text-yellow-400 mb-1">
                      100%
                    </p>
                    <p className="text-xs text-slate-300">Tailored Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
