import { services } from "@/data/services";
import ServiceCard from "./components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="space-y-10 pt-10">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Our Services
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
          Support for every step of your study journey
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Student Choice Education provides end-to-end support for UK study,
          from choosing universities and preparing applications to arranging
          accommodation and airport pickup.
        </p>
      </header>

      <section className="grid gap-5 md:gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </section>
    </div>
  );
}
