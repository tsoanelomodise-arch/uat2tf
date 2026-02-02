import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import Footer from "@/components/transformation/Footer";
import FundingProcessContent from "@/components/path-to-funding/FundingProcessContent";
import { Link } from "react-router-dom";

const FundingProcessPage = () => {
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
            <span>Funding Process</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
            Transformation Fund Funding Process
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-3xl">
            The Transformation Fund follows a structured, stage-gated funding process designed to ensure alignment, viability, accountability and long-term impact across the full project lifecycle.
          </p>
        </section>

        {/* Main Content */}
        <FundingProcessContent />
      </main>

      <Footer />
    </div>
  );
};

export default FundingProcessPage;
