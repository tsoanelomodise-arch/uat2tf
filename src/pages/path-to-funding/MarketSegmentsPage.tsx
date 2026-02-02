import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import Footer from "@/components/transformation/Footer";
import MarketSegmentsContent from "@/components/path-to-funding/MarketSegmentsContent";
import { Link } from "react-router-dom";

const MarketSegmentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PhakamaniNavbar />

      <main className="pt-[180px] lg:pt-[210px]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <div className="text-sm font-semibold text-[hsl(var(--ptf-text))] uppercase tracking-wider mb-4">
            <Link to="/path-to-funding" className="hover:text-[hsl(var(--ptf-accent))] transition-colors">
              How to apply
            </Link>
            <span className="mx-2">•</span>
            <span>Market segments</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
            Market segments we support
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-3xl">
            The Transformation Fund is designed to support enterprises that play a critical role in driving inclusive, productive economic growth. Our focus is on businesses and entrepreneurs who have historically faced barriers to finance, capability and market access.
          </p>
        </section>

        {/* Main Content */}
        <MarketSegmentsContent />
      </main>

      <Footer />
    </div>
  );
};

export default MarketSegmentsPage;
