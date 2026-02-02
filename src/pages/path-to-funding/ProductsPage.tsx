import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import Footer from "@/components/transformation/Footer";
import ProductsContent from "@/components/path-to-funding/ProductsContent";
import { Link } from "react-router-dom";

const ProductsPage = () => {
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
            <span>Products</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
            Products
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-3xl">
            To meet the diverse needs of its target market, the Transformation Fund offers a suite of investment products that combine financial capital with embedded capability support. These instruments are designed to be flexible, performance-linked, and tailored to the realities of underserved enterprises, addressing gaps left by traditional funding models.
          </p>
        </section>

        {/* Main Content */}
        <ProductsContent />
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
