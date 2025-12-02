import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Online Courses", href: "/onlinecourses" },
  { label: "Ambassadors", href: "/ambassadors" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-10 lg:pt-8 lg:pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)_minmax(0,1.5fr)]">
          {/* Logo + Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Student Choice Education Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-900 sm:text-base">
                STUDENT CHOICE EDUCATION
              </span>
            </Link>

            <p className="max-w-md text-sm text-slate-600">
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
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-yellow-600 text-slate-600"
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
                124 City Road, London City Road,
                <br />
                London, England, EC1V 2NX
              </p>

              <div className="space-y-1 text-[13px]">
                <a
                  href="mailto:info@studentchoice.com"
                  className="block transition hover:text-yellow-600"
                >
                  info@studentchoice.com
                </a>

                <a
                  href="mailto:hi@studentchoice.com"
                  className="block transition hover:text-yellow-600"
                >
                  hi@studentchoice.com
                </a>

                <a
                  href="tel:+441234567890"
                  className="block transition hover:text-yellow-600"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-500 sm:px-6 sm:text-xs md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Student Choice Education. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/terms" className="transition hover:text-yellow-600">
              Terms
            </Link>
            <span className="hidden text-slate-400 md:inline">•</span>
            <Link href="/privacy" className="transition hover:text-yellow-600">
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold uppercase text-slate-600 shadow-sm transition hover:border-yellow-500 hover:text-yellow-600"
    >
      {abbr}
    </button>
  );
}
