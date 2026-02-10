import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhakamaniIndex from "./pages/PhakamaniIndex";
import TransformationIndex from "./pages/TransformationIndex";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Requirements from "./pages/Requirements";
import StartupGrants from "./pages/StartupGrants";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import PathToFunding from "./pages/PathToFunding";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import { usePageTracking } from "./hooks/useAnalytics";

// Why sub-pages
import PolicyChoicePage from "./pages/why/PolicyChoicePage";
import TheoryPage from "./pages/why/TheoryPage";
import ValuePage from "./pages/why/ValuePage";
import OperatingModelPage from "./pages/why/OperatingModelPage";
import NationalAgendaPage from "./pages/why/NationalAgendaPage";
import FundingProcessPage from "./pages/path-to-funding/FundingProcessPage";
import MarketSegmentsPage from "./pages/path-to-funding/MarketSegmentsPage";
import ProductsPage from "./pages/path-to-funding/ProductsPage";
import InvestorsPage from "./pages/InvestorsPage";
import GovernancePage from "./pages/investors/GovernancePage";
import TestHome from "./pages/TestHome";

const queryClient = new QueryClient();

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  usePageTracking();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsWrapper>
          <Routes>
            <Route path="/" element={<PhakamaniIndex />} />
            <Route path="/about/why" element={<TransformationIndex />} />
            <Route path="/about/why/policy-choice" element={<PolicyChoicePage />} />
            <Route path="/about/why/theory" element={<TheoryPage />} />
            <Route path="/about/why/value" element={<ValuePage />} />
            <Route path="/about/why/operating-model" element={<OperatingModelPage />} />
            <Route path="/about/why/national-agenda" element={<NationalAgendaPage />} />
            <Route path="/old" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/startup-grants" element={<StartupGrants />} />
            <Route path="/path-to-funding" element={<PathToFunding />} />
            <Route path="/path-to-funding/process" element={<FundingProcessPage />} />
            <Route path="/path-to-funding/market-segments" element={<MarketSegmentsPage />} />
            <Route path="/path-to-funding/products" element={<ProductsPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/investors/governance" element={<GovernancePage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/test-home" element={<TestHome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
