import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import PhakamaniHero from "@/components/phakamani/PhakamaniHero";
import HeroSectionNew from "@/components/transformation/HeroSectionNew";
import WhySection from "@/components/transformation/WhySection";
import PolicyChoice from "@/components/transformation/PolicyChoice";
import TheoryOfChange from "@/components/transformation/TheoryOfChange";
import ValueProposition from "@/components/transformation/ValueProposition";
import OperatingModel from "@/components/transformation/OperatingModel";
import NationalAgenda from "@/components/transformation/NationalAgenda";
import WhyPillarsSection from "@/components/transformation/WhyPillarsSection";
import ScrollToTop from "@/components/transformation/ScrollToTop";
import Footer from "@/components/transformation/Footer";

const TransformationIndex = () => {
  const location = useLocation();

  // Handle hash navigation after page load/navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    // Fade in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background pt-[180px] lg:pt-[210px]">
      <PhakamaniNavbar />
      <PhakamaniHero />
      <main id="main-content">
        <HeroSectionNew />
        <WhySection />
        <PolicyChoice />
        <TheoryOfChange />
        <ValueProposition />
        <OperatingModel />
        <NationalAgenda />
        <WhyPillarsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TransformationIndex;