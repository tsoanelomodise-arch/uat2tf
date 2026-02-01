import successStoriesBg from "@/assets/success-stories-bg.jpg";
import technovaLogo from "@/assets/logo-technova.png";
import greenharvestLogo from "@/assets/logo-greenharvest.png";
import urbanstyleLogo from "@/assets/logo-urbanstyle.png";

const SuccessStories = () => {
  const stories = [
    {
      company: "TechNova Solutions",
      industry: "Technology",
      quote: "Fund Ignite's SME Development Fund enabled us to expand our team from 8 to 45 employees and secure major enterprise contracts. The mentorship program was invaluable.",
      metrics: [
        { value: "R2.5M", label: "Funding Received" },
        { value: "37", label: "Jobs Created" },
        { value: "340%", label: "Revenue Growth" }
      ],
      logo: technovaLogo
    },
    {
      company: "GreenHarvest Foods",
      industry: "Agriculture", 
      quote: "The Transformation Fund helped us achieve sustainable growth while expanding our organic food distribution. We've become a leading player in sustainable agriculture.",
      metrics: [
        { value: "R1.8M", label: "Funding Received" },
        { value: "28", label: "Jobs Created" },
        { value: "250%", label: "Market Expansion" }
      ],
      logo: greenharvestLogo
    }
  ];

  return (
    <section 
      className="py-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${successStoriesBg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Success Stories
          </h2>
          <p className="text-xl text-white/80">
            Real impact, real transformation, real results
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl hover:bg-white/98 transition-all duration-300">
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden bg-white border border-gray-200">
                  <img 
                    src={story.logo} 
                    alt={`${story.company} logo`}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                    width="48"
                    height="48"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{story.company}</h3>
                  <p className="text-muted-foreground">{story.industry}</p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-muted-foreground mb-8 text-lg leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {story.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;