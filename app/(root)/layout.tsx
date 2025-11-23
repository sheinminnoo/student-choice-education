import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16 lg:pt-[6.25rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
