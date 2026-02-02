import { Link } from "react-router-dom";
import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import Footer from "@/components/transformation/Footer";
import GovernanceContent from "@/components/investors/GovernanceContent";

const GovernancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PhakamaniNavbar />

      <main className="pt-[180px] lg:pt-[210px]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link 
                  to="/investors" 
                  className="text-[hsl(var(--ptf-accent))] hover:underline font-medium"
                >
                  Investors
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">Governance</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-6">
            Governance and accountability framework
          </h1>

          {/* Introduction */}
          <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-4xl">
            The Transformation Fund is governed through a legally incorporated Special Purpose Vehicle (SPV), designed to ensure transparency, integrity, and alignment with national transformation goals. Its finances are ring-fenced, tax-exempt, and managed under South African law and B-BBEE regulations.
          </p>
        </section>

        {/* Main Content */}
        <GovernanceContent />
      </main>

      <Footer />
    </div>
  );
};

export default GovernancePage;
