import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import PhakamaniHero from "@/components/phakamani/PhakamaniHero";
import ProductsSection from "@/components/phakamani/ProductsSection";
import PortalSection from "@/components/phakamani/PortalSection";
import Footer from "@/components/transformation/Footer";

const PhakamaniIndex = () => {
  return (
    <div className="min-h-screen pt-[180px] lg:pt-[210px]">
      <PhakamaniNavbar />
      <PhakamaniHero />
      <ProductsSection />
      <PortalSection />
      <Footer />
    </div>
  );
};

export default PhakamaniIndex;
