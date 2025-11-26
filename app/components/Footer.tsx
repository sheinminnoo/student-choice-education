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
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)_minmax(0,1.5fr)]">
          {/* Logo + Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200">
                <Image
                  src="/logo.png"
                  alt="Student Choice Education Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-900">
                STUDENT CHOICE EDUCATION
              </span>
            </Link>

            <p className="text-sm text-slate-600 max-w-md">
              Student Choice Education helps learners compare universities,
              scholarships and online courses so they can make confident
              decisions about their future.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-4 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-yellow-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600">
              Contact
            </h3>

            <div className="space-y-2 text-slate-600">
              <p className="text-[13px] leading-relaxed">
                Flat 1, 8A Nightingales Corner,
                <br />
                Little Chalfont, London, UK
              </p>

              <div className="space-y-1 text-[13px]">
                <a
                  href="mailto:info@studentchoice.com"
                  className="block hover:text-yellow-600 transition"
                >
                  info@studentchoice.com
                </a>

                <a
                  href="mailto:hi@studentchoice.com"
                  className="block hover:text-yellow-600 transition"
                >
                  hi@studentchoice.com
                </a>

                <a
                  href="tel:+441234567890"
                  className="block hover:text-yellow-600 transition"
                >
                  +44 1234 567 890
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600">
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

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2 text-[11px] sm:text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Student Choice Education. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/legal/terms"
              className="hover:text-yellow-600 transition"
            >
              Terms
            </Link>
            <span className="hidden md:inline text-slate-400">•</span>
            <Link
              href="/legal/privacy"
              className="hover:text-yellow-600 transition"
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold uppercase text-slate-600 hover:border-yellow-500 hover:text-yellow-600 shadow-sm transition"
    >
      {abbr}
    </button>
  );
}
