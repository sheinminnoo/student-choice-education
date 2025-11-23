import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Online Courses", href: "/onlinecourses" },
  { label: "Ambassadors", href: "/ambassadors" },
  { label: "Contact", href: "/contactus" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#050f22] text-slate-100">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)_minmax(0,1.5fr)]">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Student Choice Education Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide">
                STUDENT CHOICE EDUCATION
              </span>
            </Link>

            <p className="text-sm text-slate-300 max-w-md">
              Student Choice Education helps learners compare universities,
              scholarships and online courses so they can make confident
              decisions about their future.
            </p>
            {/* Badges
                <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-400">
              <span className="inline-flex h-6 items-center rounded-full border border-slate-700 px-3">
                Trusted student advisory
              </span>
              <span className="inline-flex h-6 items-center rounded-full border border-slate-700 px-3">
                UK · Global reach
              </span>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="space-y-4 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-emerald-300 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div className="space-y-4 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Contact
            </h3>
            <div className="space-y-2 text-slate-300">
              <p className="text-[13px] leading-relaxed">
                Flat 1, 8A Nightingales Corner,
                <br />
                Little Chalfont, London, UK
              </p>
              <div className="space-y-1 text-[13px]">
                <a
                  href="mailto:info@studentchoice.com"
                  className="block hover:text-emerald-300 transition"
                >
                  info@studentchoice.com
                </a>
                <a
                  href="mailto:hi@studentchoice.com"
                  className="block hover:text-emerald-300 transition"
                >
                  hi@studentchoice.com
                </a>
                <a
                  href="tel:+441234567890"
                  className="block hover:text-emerald-300 transition"
                >
                  +44 1234 567 890
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Follow us
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <SocialIcon label="Facebook" abbr="f" />
                <SocialIcon label="X / Twitter" abbr="x" />
                <SocialIcon label="LinkedIn" abbr="in" />
                <SocialIcon label="YouTube" abbr="▶" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2 text-[11px] sm:text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Student Choice Education. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/legal/terms"
              className="hover:text-emerald-300 transition"
            >
              Terms
            </Link>
            <span className="hidden md:inline text-slate-600">•</span>
            <Link
              href="/legal/privacy"
              className="hover:text-emerald-300 transition"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ label, abbr }: { label: string; abbr: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-xs font-semibold uppercase text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
    >
      {abbr}
    </button>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-800/70 px-3 py-1 text-[11px] text-slate-200">
      {children}
    </span>
  );
}
