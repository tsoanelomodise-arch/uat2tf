import HeroSection from "@/components/HeroSection";
import FundingPrograms from "@/components/FundingPrograms";
import ApplicationProcess from "@/components/ApplicationProcess";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/transformation/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FundingPrograms />
      <ApplicationProcess />
      <SuccessStories />
      <FAQ />
      <Resources />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
