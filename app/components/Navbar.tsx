"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "Universities" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/onlinecourses", label: "Online Courses" },
  { href: "/ambassadors", label: "Ambassadors" },
  { href: "/contactus", label: "Contact" },
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative px-3 py-2 text-[12px] md:text-[13px] tracking-wide uppercase font-semibold transition before:absolute before:left-3 before:-bottom-0.5 before:h-[2px] before:w-0 before:bg-emerald-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-[calc(100%-1.5rem)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Desktop top bar */}
      <div className="hidden lg:block w-full bg-[#050f22]">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-end gap-3 px-4 sm:px-6 lg:px-8 h-9 text-[11px] sm:text-xs text-gray-300">
          <a href="mailto:info@studentchoice.com" className="hover:text-white">
            info@studentchoice.com
          </a>
          <a href="tel:+441234567890" className="hover:text-white">
            +44 1234 567 890
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`w-full transition-colors duration-200 ${
          scrolled ? "bg-[#0B2348]" : "bg-[#0B2348]"
        }`}
      >
        <nav className="mx-auto max-w-7xl h-16 px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="h-10 w-10 sm:h-11 sm:w-11 xl:h-12 xl:w-12 rounded-full bg-white shadow flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Student Choice Education Logo"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span
              className="
                font-bold text-white tracking-wide
                text-base md:text-lg
                hidden xl:inline
              "
            >
              STUDENT CHOICE EDUCATION
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => (
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
            ))}
          </ul>

          {/* Mobile / tablet hamburger */}
          <button
            onClick={() => setDrawer(true)}
            className="xl:hidden flex items-center text-emerald-300 flex-shrink-0"
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

      {/* Backdrop + drawer (mobile / tablet only) */}
      <div
        className={`fixed inset-0 xl:hidden ${
          drawer ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop fade */}
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer with slide + fade + soft edge shadow */}
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 left-0 h-full w-72 sm:w-80 bg-white 
            shadow-[0_0_35px_rgba(0,0,0,0.35)]
            transform transition-all duration-300 ease-out
            ${
              drawer
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
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
              className="p-2 text-gray-100"
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

          <nav className="py-2">
            {navLinks.map((item) => (
              <MobileItem
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={() => setDrawer(false)}
                isActive={
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                }
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
    ? "text-emerald-300 before:w-[calc(100%-1.5rem)]"
    : "text-slate-100 hover:text-emerald-200";
  return (
    <Link href={href} className={`${className} ${activeClass}`}>
      {label}
    </Link>
  );
}

function MobileItem({ href, label, onClick, isActive }: MobileItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 text-[15px] font-medium hover:bg-gray-100 ${
        isActive ? "text-emerald-600 bg-emerald-50" : "text-gray-800"
      }`}
    >
      <span>{label}</span>
      <svg viewBox="0 0 20 20" className="h-4 w-4">
        <path
          d="M7 5l6 5-6 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
