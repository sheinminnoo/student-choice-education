import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutAuthority() {
  return (
    // UPDATED: py-16 is much tighter than py-24
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* UPDATED: gap-12 instead of gap-16 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Column 1: About */}
          <div className="space-y-6 animate-section">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#020b2c] mb-4">
                About Student Choice Education
              </h2>
              <p className="text-body text-slate-600 leading-relaxed">
                Student Choice Education is an independent education consultancy
                supporting students in accessing higher education opportunities
                in the United Kingdom and internationally.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 text-yellow-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#020b2c] mb-1.5">
                    Our Commitment
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We operate with integrity, transparency, and ethical
                    practice. We act in the best interests of students while
                    ensuring strict compliance with UK Visas and Immigration
                    (UKVI) guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Background */}
          <div
            className="space-y-6 animate-section"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#020b2c]">
              Our Background
            </h2>
            <div className="prose text-slate-600 text-body leading-relaxed">
              <p className="mb-4">
                Student Choice Education was established by professionals
                educated at leading UK universities, including{" "}
                <strong>University College London (UCL)</strong>.
              </p>

              <p className="mb-6">
                Our team possesses deep experience in international student
                recruitment, admissions support, academic advising, and graduate
                progression.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "International Recruitment",
                  "Admissions Support",
                  "Academic Advising",
                  "Visa Compliance (UKVI)",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-lg bg-white p-3 shadow-sm border border-slate-200/60"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-yellow-500 flex-shrink-0" />
                    <span className="text-xs font-bold text-[#020b2c] uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
