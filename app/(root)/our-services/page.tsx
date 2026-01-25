import ServicesBento from "./components/ServicesBento";
import ServicesCore from "./components/ServicesCore";
import ServicesCTA from "./components/ServicesCTA";
import ServicesGuide from "./components/ServicesGuide";
import ServicesHero from "./components/ServicesHero";
import ServicesProcess from "./components/ServicesProcess";

export const metadata = {
  title: "Our Services | Student Choice Education",
  description: "Comprehensive support for your UK study journey.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#020b2c] overflow-x-hidden">
      <ServicesHero />
      <ServicesProcess />
      <ServicesBento />
      <ServicesGuide />
      <ServicesCTA />
    </main>
  );
}
