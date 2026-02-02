import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import Footer from "@/components/transformation/Footer";
import MarketSegmentsContent from "@/components/path-to-funding/MarketSegmentsContent";

const MarketSegmentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PhakamaniNavbar />

      <main className="pt-[180px] lg:pt-[210px]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-10">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-2">
            Market segments we support
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium text-[hsl(var(--ptf-accent))]">
            Introduction
          </h2>
        </section>

        {/* Main Content */}
        <MarketSegmentsContent />
      </main>

      <Footer />
    </div>
  );
};

export default MarketSegmentsPage;
