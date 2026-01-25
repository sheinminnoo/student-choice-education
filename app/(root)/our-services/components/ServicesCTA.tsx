import Link from "next/link";

export default function ServicesCTA() {
  return (
    // UPDATED: Changed bg-slate-50 to bg-[#020b2c] (Dark Brand Blue)
    <section className="bg-[#020b2c] py-16 relative overflow-hidden">
      {/* Added subtle texture for premium feel */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="mx-auto max-w-4xl px-4 text-center relative z-10 animate-section">
        {/* UPDATED: Text color to White */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Ready to focus on your future?
        </h2>

        {/* UPDATED: Text color to Slate-300 */}
        <p className="text-body text-slate-300 mb-8 max-w-2xl mx-auto">
          From application to arrival, we are here to make your journey
          stress-free and successful.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-bold text-[#020b2c] shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-transform hover:scale-105 hover:bg-yellow-300"
          >
            Book Free Consultation
          </Link>
          {/* UPDATED: Secondary button style for dark background */}
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
