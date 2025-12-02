// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18)_0,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(15,118,210,0.25)_0,_transparent_55%)]" />
      </div>

      {/* content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-14 px-6 py-16 lg:flex-row lg:gap-20">
        {/* LEFT */}
        <section className="max-w-xl space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            ERROR 404
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.1rem]">
              This page is lost in space.
            </h1>

            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              The page you&apos;re trying to reach doesn&apos;t exist, was
              moved, or is temporarily unavailable.
              <br />
              <span className="text-white">
                We&apos;re quietly working on keeping everything running
                smoothly.
              </span>
            </p>
          </div>

          <ul className="space-y-1.5 text-sm text-white/65">
            <li>– Check the URL for spelling mistakes</li>
            <li>– Go back to the homepage</li>
            <li>– Contact us if this keeps happening</li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Back to Home
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Support
            </Link>
          </div>

          <p className="pt-3 text-xs text-white/40">
            Error code: <span className="font-mono">404_NOT_FOUND</span>
          </p>
        </section>

        {/* RIGHT */}
        <section className="relative w-full max-w-md">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
            <Image
              src="/home/404-as.png"
              alt="Lost astronaut floating in space"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* floating badge */}
          <div className="pointer-events-none absolute -top-6 right-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs backdrop-blur">
            <p className="font-medium text-white">We&apos;re fixing this</p>
            <p className="text-[11px] text-white/65">
              Sit tight — smoother experience coming.
            </p>
          </div>
        </section>
      </div>

      {/* bottom tiny text */}
      <div className="absolute bottom-5 w-full text-center text-[11px] text-white/35">
        If this keeps happening, please{" "}
        <Link href="/contact-us" className="underline underline-offset-4">
          report it
        </Link>
        .
      </div>
    </main>
  );
}
