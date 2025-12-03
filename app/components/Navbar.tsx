"use client";

import { useEffect, useState, KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubLink = {
  href: string;
  label: string;
};

type MainLink = {
  href: string;
  label: string;
  children?: SubLink[];
};

const mainLinks: MainLink[] = [
  {
    href: "/",
    label: "Home",
    children: [
      { href: "/ourservices", label: "Our Service" },
      { href: "/about-us", label: "About Us" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    href: "/universities",
    label: "Universities",
  },
  {
    href: "/scholarships",
    label: "Scholarships",
  },
  {
    href: "/ielts-training",
    label: "Online IELTS Training",
  },
  {
    href: "/online-courses",
    label: "Online Courses",
  },
  {
    href: "/ambassadors",
    label: "Ambassadors",
  },
];

interface NavItemProps {
  href: string;
  label: string;
  className: string;
  isActive: boolean;
}

interface MobileItemProps {
  href: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [desktopHomeOpen, setDesktopHomeOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative px-3 py-2 text-[12px] md:text-[13px] tracking-wide uppercase font-semibold transition before:absolute before:left-3 before:-bottom-0.5 before:h-[2px] before:w-0 before:bg-yellow-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-[calc(100%-1.5rem)]";

  const focusRingDark =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2348]";
  const focusRingLight =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const handleDesktopToggleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setDesktopHomeOpen(true);
    }
    if (e.key === "Escape") {
      setDesktopHomeOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden lg:block w-full bg-[#050f22]">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-end gap-3 px-4 sm:px-6 lg:px-8 h-9 text-[11px] sm:text-xs text-gray-300">
          <a
            href="mailto:info@studentchoice.com"
            className={`hover:text-white ${focusRingDark}`}
          >
            info@studentchoice.com
          </a>
          <a
            href="tel:+441234567890"
            className={`hover:text-white ${focusRingDark}`}
          >
            +44 1234 567 890
          </a>
        </div>
      </div>

      <div
        className={`w-full transition-colors duration-200 ${
          scrolled ? "bg-[#0B2348]" : "bg-[#0B2348]"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl h-16 px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`flex items-center gap-2 sm:gap-3 min-w-0 ${focusRingDark}`}
          >
            <div className="h-10 w-10 sm:h-11 sm:w-11 xl:h-12 xl:w-12 rounded-full bg-white shadow flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Student Choice Education Logo"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white tracking-wide text-base md:text-lg hidden xl:inline">
              STUDENT CHOICE EDUCATION
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-1 lg:gap-2">
            {mainLinks.map((item) =>
              item.children ? (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDesktopHomeOpen(true)}
                  onMouseLeave={() => setDesktopHomeOpen(false)}
                >
                  {(() => {
                    const isSectionActive =
                      pathname === item.href ||
                      item.children?.some((c) => pathname.startsWith(c.href));
                    return (
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          className={`${linkBase} ${
                            isSectionActive
                              ? "text-yellow-400 before:w-[calc(100%-1.5rem)]"
                              : "text-slate-100 hover:text-yellow-300"
                          } ${focusRingDark}`}
                          aria-current={isSectionActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Toggle home menu"
                          aria-haspopup="true"
                          aria-expanded={desktopHomeOpen}
                          className={`text-slate-100 hover:text-yellow-300 mt-[1px] rounded-full p-1 ${focusRingDark}`}
                          onClick={() => setDesktopHomeOpen((prev) => !prev)}
                          onKeyDown={handleDesktopToggleKey}
                        >
                          <svg viewBox="0 0 16 16" className="h-3 w-3">
                            <path
                              d="M4 6l4 4 4-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })()}

                  <div
                    className={`absolute left-0 mt-2 min-w-[220px] rounded-md bg-white border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-150 origin-top ${
                      desktopHomeOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    }`}
                    role="menu"
                    aria-label="Home section"
                  >
                    <ul className="py-2 text-[13px]">
                      {item.children.map((child) => {
                        const active = pathname.startsWith(child.href);
                        return (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              onClick={() => setDesktopHomeOpen(false)}
                              className={`block px-5 py-2.5 leading-snug border-b last:border-b-0 border-slate-100 hover:bg-slate-50 ${
                                active
                                  ? "text-yellow-500 font-semibold"
                                  : "text-slate-700 hover:text-yellow-500"
                              } ${focusRingLight}`}
                              role="menuitem"
                              aria-current={active ? "page" : undefined}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <NavItem
                    href={item.href}
                    label={item.label}
                    className={linkBase}
                    isActive={
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href)
                    }
                  />
                </li>
              )
            )}
          </ul>

          <button
            onClick={() => {
              setDrawer(true);
              setMobileHomeOpen(false);
            }}
            className={`xl:hidden flex items-center text-lime-300 flex-shrink-0 rounded-md p-1.5 ${focusRingDark}`}
            aria-label="Open main menu"
            aria-expanded={drawer}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 xl:hidden ${
          drawer ? "visible" : "invisible"
        }`}
      >
        <button
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu backdrop"
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 left-0 h-full w-72 sm:w-80 bg-white shadow-[0_0_35px_rgba(0,0,0,0.35)] transform transition-all duration-300 ease-out ${
            drawer ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b bg-[#0B2348]">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Student Choice Education Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                STUDENT CHOICE
                <br />
                EDUCATION
              </span>
            </div>
            <button
              onClick={() => setDrawer(false)}
              className={`p-2 text-gray-100 rounded-full ${focusRingLight}`}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="py-1 text-sm" aria-label="Mobile navigation">
            <div className="border-b border-slate-100">
              <div className="flex items-stretch">
                <Link
                  href="/"
                  onClick={() => {
                    setDrawer(false);
                    setMobileHomeOpen(false);
                  }}
                  className={`flex-1 px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-50 ${focusRingLight}`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileHomeOpen((prev) => !prev)}
                  className={`w-12 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:bg-slate-50 ${focusRingLight}`}
                  aria-label="Toggle home submenu"
                  aria-expanded={mobileHomeOpen}
                  aria-haspopup="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className={`h-3.5 w-3.5 transition-transform ${
                      mobileHomeOpen ? "rotate-180 text-yellow-500" : ""
                    }`}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {mobileHomeOpen && (
              <div className="border-b border-slate-100 bg-slate-50/70">
                {mainLinks[0].children?.map((child) => {
                  const active = pathname.startsWith(child.href);
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setDrawer(false)}
                      className={`block pl-10 pr-6 py-3 text-[15px] border-t border-slate-100 ${
                        active
                          ? "bg-yellow-50 text-yellow-600 font-semibold"
                          : "text-slate-800 hover:bg-white"
                      } ${focusRingLight}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {mainLinks.slice(1).map((item) => (
              <MobileItem
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={() => setDrawer(false)}
                isActive={pathname.startsWith(item.href)}
              />
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}

function NavItem({ href, label, className, isActive }: NavItemProps) {
  const activeClass = isActive
    ? "text-yellow-400 before:w-[calc(100%-1.5rem)]"
    : "text-slate-100 hover:text-yellow-300";
  const focusRingDark =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2348]";

  return (
    <Link
      href={href}
      className={`${className} ${activeClass} ${focusRingDark}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function MobileItem({ href, label, onClick, isActive }: MobileItemProps) {
  const focusRingLight =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between px-6 py-3.5 text-[15px] font-semibold border-b border-slate-100 ${
        isActive
          ? "text-yellow-600 bg-yellow-50"
          : "text-slate-900 hover:bg-slate-50"
      } ${focusRingLight}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span>{label}</span>
    </Link>
  );
}
