import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import Footer from "@/components/transformation/Footer";
import MarketSegmentsContent from "@/components/path-to-funding/MarketSegmentsContent";

const MarketSegmentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PhakamaniNavbar />

      <main className="pt-[180px] lg:pt-[210px]">
        {/* Main Content */}
        <MarketSegmentsContent />
      </main>

      <Footer />
    </div>
  );
};

export default MarketSegmentsPage;
