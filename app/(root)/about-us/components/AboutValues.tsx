import { Target, Globe2 } from "lucide-react";

export default function AboutValues() {
  return (
    // UPDATED: py-16 / lg:py-24 tightens the yellow section significantly
    <section className="relative overflow-hidden bg-[#F5C20B] py-16 lg:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(#020b2c 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Giant Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none text-[15vw] font-black leading-none text-[#020b2c] opacity-[0.03]">
        VALUES
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* CARD 1: MISSION */}
          <div className="group relative transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-[#020b2c] opacity-0 blur transition duration-500 group-hover:opacity-20"></div>

            <div className="relative h-full rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-2xl ring-1 ring-black/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50 text-[#020b2c] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:rotate-6">
                <Target className="h-8 w-8" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#020b2c]">
                Our Mission
              </h3>
              <p className="text-base font-medium leading-relaxed text-slate-600">
                To provide reliable, transparent, and compliant higher education
                guidance that supports students in making informed academic
                decisions and successfully progressing within higher education
                systems.
              </p>
            </div>
          </div>

          {/* CARD 2: VISION (Offset reduced to mt-16 for tighter layout) */}
          <div className="group relative mt-0 transition-all duration-500 hover:-translate-y-2 lg:mt-16">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-[#020b2c] opacity-0 blur transition duration-500 group-hover:opacity-20"></div>

            <div className="relative h-full rounded-[2.5rem] bg-[#020b2c] p-8 sm:p-10 shadow-2xl ring-1 ring-white/10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-yellow-400 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:-rotate-6">
                <Globe2 className="h-8 w-8" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-base font-medium leading-relaxed text-slate-300">
                To be a trusted global education consultancy, recognised by
                students and partner institutions for professionalism,
                compliance, and high-quality student support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
