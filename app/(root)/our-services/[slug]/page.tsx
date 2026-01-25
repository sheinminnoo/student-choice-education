import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Our Services
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
          {service.heroTitle}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          {service.heroSubtitle}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[2fr,1.1fr]">
        {/* Left: main content */}
        <section className="space-y-6">
          {service.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                {section.title}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Right: enquiry + extra info */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Quick enquiry
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Share your details and we will contact you about{" "}
              {service.name.toLowerCase()}.
            </p>

            <form className="mt-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder={`Tell us briefly about your situation for ${service.name.toLowerCase()}.`}
                />
              </div>
              <button
                type="submit"
                className="mt-1 w-full rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Send enquiry
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-semibold text-slate-900">
              Why students use this service
            </p>
            <ul className="space-y-1.5">
              {service.showApplyForm && (
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Guided support with applications and documents.</span>
                </li>
              )}
              {service.showAccommodationList && (
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Help understanding housing options and contracts.</span>
                </li>
              )}
              {service.showPickupForm && (
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Peace of mind on your first day in the UK.</span>
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
