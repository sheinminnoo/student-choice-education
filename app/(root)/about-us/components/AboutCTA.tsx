import Link from "next/link";

export default function AboutCTA() {
  return (
    // UPDATED: py-16
    <section className="bg-[#020b2c] py-16 relative overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="mx-auto max-w-4xl px-4 text-center relative z-10 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Ready for a stress-free path to success?
        </h2>
        <p className="text-body text-slate-300 mb-8 max-w-2xl mx-auto">
          Choose Student Choice Education for a supportive and truly affordable
          journey to UK higher education.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-bold text-[#020b2c] shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-transform hover:scale-105 hover:bg-yellow-300"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
