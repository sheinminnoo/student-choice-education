import { Users, CheckCircle2 } from "lucide-react";

export default function ServicesProcess() {
  return (
    // UPDATED: Reduced vertical padding (py-16 instead of py-24)
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        {/* UPDATED: Reduced bottom margin (mb-12) and gap (gap-8) */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            {/* UPDATED: Reduced mb-2 */}
            <h2 className="text-mini font-bold uppercase tracking-widest text-slate-400 mb-2">
              Our Core Methodology
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#020b2c] leading-tight">
              One-to-One Consulting. <br />
              <span className="text-slate-400">
                Tailored to you, not the crowd.
              </span>
            </h3>
          </div>
          <div className="hidden md:block">
            {/* UPDATED: Slightly smaller icon container (h-14 w-14) */}
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 border border-yellow-100">
              <Users className="h-7 w-7" />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          {/* UPDATED: Moved line up to top-5 to match new dot position */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 hidden lg:block"></div>

          {/* UPDATED: Reduced grid gap (gap-8) */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="relative group">
              {/* UPDATED: Dot moved to top-3 */}
              <div className="h-4 w-4 rounded-full bg-slate-200 border-4 border-white absolute top-3 left-0 lg:left-1/2 lg:-translate-x-1/2 z-10 group-hover:bg-yellow-400 transition-colors"></div>

              {/* UPDATED: Reduced top padding (lg:pt-10) */}
              <div className="pl-8 lg:pl-0 lg:pt-10 lg:text-center">
                {/* UPDATED: Smaller background number (text-5xl) */}
                <span className="text-5xl font-black text-slate-100 absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 -z-10 select-none group-hover:text-yellow-100 transition-colors">
                  01
                </span>
                {/* UPDATED: Reduced mb-2 */}
                <h4 className="text-lg font-bold text-[#020b2c] mb-2">
                  Discovery Session
                </h4>
                {/* UPDATED: Reduced mb-3 */}
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  A complimentary 1-hour deep dive with you and your family. We
                  review your academic history, budget, and career dreams.
                </p>
                <ul className="text-xs font-medium text-slate-500 space-y-1.5 lg:mx-auto lg:max-w-xs text-left inline-block">
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-yellow-500" />
                    Identify Goals
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-yellow-500" />
                    Assess Budget
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="h-4 w-4 rounded-full bg-slate-200 border-4 border-white absolute top-3 left-0 lg:left-1/2 lg:-translate-x-1/2 z-10 group-hover:bg-yellow-400 transition-colors"></div>
              <div className="pl-8 lg:pl-0 lg:pt-10 lg:text-center">
                <span className="text-5xl font-black text-slate-100 absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 -z-10 select-none group-hover:text-yellow-100 transition-colors">
                  02
                </span>
                <h4 className="text-lg font-bold text-[#020b2c] mb-2">
                  Strategic Planning
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  We match you with the best universities. We look for
                  &quot;hidden gems&quot; and IELTS waiver opportunities (MOI).
                </p>
                <ul className="text-xs font-medium text-slate-500 space-y-1.5 lg:mx-auto lg:max-w-xs text-left inline-block">
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-yellow-500" />
                    Shortlist Uni&apos;s
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-yellow-500" />
                    Check Waivers
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="h-4 w-4 rounded-full bg-slate-200 border-4 border-white absolute top-3 left-0 lg:left-1/2 lg:-translate-x-1/2 z-10 group-hover:bg-yellow-400 transition-colors"></div>
              <div className="pl-8 lg:pl-0 lg:pt-10 lg:text-center">
                <span className="text-5xl font-black text-slate-100 absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 -z-10 select-none group-hover:text-yellow-100 transition-colors">
                  03
                </span>
                <h4 className="text-lg font-bold text-[#020b2c] mb-2">
                  Execution Roadmap
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  You get a clear action plan. We explain visa realities,
                  scholarship deadlines, and exactly what documents you need.
                </p>
                <ul className="text-xs font-medium text-slate-500 space-y-1.5 lg:mx-auto lg:max-w-xs text-left inline-block">
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-yellow-500" />
                    Visa Timeline
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-yellow-500" />
                    Next Steps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
