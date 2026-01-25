import AboutAuthority from "./components/AboutAuthority";
import AboutCTA from "./components/AboutCTA";
import AboutHero from "./components/AboutHero";
import AboutReasons from "./components/AboutReasons";
import AboutValues from "./components/AboutValues";

export const metadata = {
  title: "About Us | Student Choice Education",
  description:
    "Learn about our mission to provide free, expert university admissions guidance.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#020b2c] overflow-x-hidden">
      <AboutHero />
      <AboutAuthority />
      <AboutValues />
      <AboutReasons />
      <AboutCTA />
    </main>
  );
}
