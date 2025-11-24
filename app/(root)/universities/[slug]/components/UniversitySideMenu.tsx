"use client";

import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";

type Section = {
  id: string;
  label: string;
};

type UniversitySideMenuProps = {
  sections: Section[];
  mobileFixed?: boolean;
};

function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const UniversitySideMenu: React.FC<UniversitySideMenuProps> = ({
  sections,
  mobileFixed = false,
}) => {
  const [activeId, setActiveId] = useState<string>(
    sections[0]?.id ?? "overview"
  );

  useEffect(() => {
    const handleScroll = () => {
      let current = activeId;
      const OFFSET = 100;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        if (rect.top <= OFFSET && rect.bottom >= OFFSET) {
          current = section.id;
          break;
        }
      }
      if (current !== activeId) {
        setActiveId(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId, sections]);

  // --- MOBILE FIXED MENU (Bottom of Screen) ---
  if (mobileFixed) {
    return (
      <div className="bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="flex gap-2 overflow-x-auto pb-0.5 -mx-1 px-1 justify-between">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap flex-1 rounded-lg px-2 py-1.5 text-xs font-medium transition-all text-center ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/40"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {section.label.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // --- DESKTOP SIDE MENU (Sticky) ---
  return (
    <aside className="hidden lg:block">
      <div className="relative rounded-3xl border border-slate-800/90 bg-slate-900/80 shadow-[0_30px_80px_rgba(0,0,0,0.95)] p-5 backdrop-blur-xl">
        {/* Visual Separator */}
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-indigo-400/50 via-sky-400/40 to-indigo-300/40" />

        <div className="mb-4 flex items-center gap-2">
          <div className="rounded-full bg-indigo-500/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-indigo-300">
            <Menu size={12} className="inline mr-1" />
            On this page
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          {sections.map((section, index) => {
            const isActive = section.id === activeId;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500/15 border border-indigo-500/70 text-indigo-100 shadow-md"
                    : "border border-transparent text-slate-300 hover:bg-slate-800/70 hover:text-slate-50"
                }`}
              >
                <span className="flex items-center gap-3">
                  {/* Number Indicator (Premium Look) */}
                  <span
                    className={`h-5 w-5 rounded-full text-[0.6rem] flex items-center justify-center font-extrabold ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span>{section.label}</span>
                </span>
                {isActive && (
                  <ArrowRight size={16} className="text-indigo-400" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default UniversitySideMenu;
