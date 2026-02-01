import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  const impactStats = [
    { label: "Deployed", value: "R2.8B" },
    { label: "SMEs Supported", value: "4,250" },
    { label: "Jobs Created", value: "18,500" },
    { label: "Success Rate", value: "87%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-sm font-medium backdrop-blur-sm">
                ✨ Empowering Economic Transformation
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                Engineering an
                <br />
                <span className="text-accent-light">inclusive microeconomic foundation</span>
                <br />
                for macroeconomic growth and social stability
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                A national platform for economic transformation that empowers thousands of firms and entrepreneurs with capital, skills, and market access to drive inclusive growth across South Africa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero">
                Apply for Funding
              </Button>
              <Button className="bg-white text-primary hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                Explore Programs
              </Button>
            </div>
          </div>
          
          {/* Right Column - Impact Stats */}
          <div className="space-y-6">
            <div className="bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold text-white mb-8 text-center">
                Impact Overview
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#ffb81c' }}>
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-bold" style={{ color: '#ffb81c' }}>R50K - R50M</div>
                  <div className="text-white/70 text-sm">Funding Range</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-bold" style={{ color: '#ffb81c' }}>14 Days</div>
                  <div className="text-white/70 text-sm">Fast Approval</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;