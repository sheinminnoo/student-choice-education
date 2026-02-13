import type { Metadata } from "next";
import EligibilityWizard from "../components/EligibilityWizard";

export const metadata: Metadata = {
  title: "Check University Eligibility | Student Choice Education",
  description:
    "Find out if you qualify for top universities in the UK, USA, and Canada in just 2 minutes.",
};

export default function EligibilityPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white selection:bg-[#facc15] selection:text-[#020b2c]">
      {/* Heavy background ONLY for md+ */}
      <div className="absolute inset-0 hidden md:block bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute left-0 top-0 hidden md:block -ml-[10%] -mt-[10%] h-[520px] w-[520px] rounded-full bg-blue-100/50 blur-[110px]" />
      <div className="absolute bottom-0 right-0 hidden md:block -mb-[10%] -mr-[10%] h-[520px] w-[520px] rounded-full bg-yellow-100/50 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl lg:text-5xl mb-3 md:mb-4">
            Check Your{" "}
            <span className="text-[#020b2c] underline decoration-[#facc15] decoration-4 underline-offset-4">
              Eligibility
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base text-slate-600 leading-relaxed">
            Answer 5 quick questions to see which universities match your
            academic profile. No paperwork required.
          </p>
        </div>

        <div className="relative">
          <EligibilityWizard />
        </div>

        <div className="mt-12 md:mt-16 border-t border-slate-200 pt-8">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { label: "Partner Universities", val: "20+" },
              { label: "Visa Success Rate", val: "98%" },
              { label: "Students Placed", val: "5k+" },
              { label: "Free Support", val: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-slate-900 tracking-tight md:transition-transform md:duration-300 md:ease-out md:hover:scale-110">
                  {stat.val}
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
