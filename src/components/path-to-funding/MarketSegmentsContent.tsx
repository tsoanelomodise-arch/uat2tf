import { Users, MapPin, TrendingUp, Sun, HardHat, Wheat, Wifi, Building, Factory, Headphones } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Ownership",
    description: "We support black-owned businesses, including enterprises owned by women, youth and persons with disabilities, with a strong emphasis on broad-based and community-linked participation."
  },
  {
    icon: MapPin,
    title: "Geographic focus",
    description: "We prioritise enterprises based in rural areas and townships, recognising their potential to drive local industrial activity, job creation and inclusive development."
  },
  {
    icon: TrendingUp,
    title: "Enterprise stage",
    description: "We support both early-stage and growth-stage enterprises, providing tailored financing and support to help businesses move from concept to scale and into sustainable, competitive operations."
  }
];

const sectors = [
  {
    icon: Sun,
    title: "Renewable energy",
    description: "We support renewable and clean energy value chains, including solar, wind and hydro-electric generation, as well as biofuels, biomass and biogas projects that contribute to energy security and a low-carbon economy."
  },
  {
    icon: HardHat,
    title: "Mining services",
    description: "Our investments extend beyond extraction to include mining services, mineral beneficiation and services incidental to mining, strengthening local value addition and industrial capability."
  },
  {
    icon: Wheat,
    title: "Agro-processing",
    description: "We prioritise agro-processing and food manufacturing, alongside chemicals processing and biofuels, to deepen local production, improve food security and expand export-ready industries."
  },
  {
    icon: Wifi,
    title: "Information & communication technology",
    description: "The Transformation Fund supports the development and expansion of ICT and telecoms infrastructure that enables digital connectivity, innovation and inclusive participation in the digital economy."
  },
  {
    icon: Building,
    title: "Infrastructure",
    description: "The Transformation Fund invests in enabling infrastructure, including tourism infrastructure, bulk services and other specialised buildings that support productive economic activity. These investments create the foundations for growth, job creation and sustainable local development."
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "The Fund supports a wide range of manufacturing activities, including textiles, consumables, automotive components, batteries and electric accumulators, enabling industrial diversification and competitiveness."
  },
  {
    icon: Headphones,
    title: "Services and business process outsourcing",
    description: "The Transformation Fund supports services-led growth through business process outsourcing, call centre and data analytics services, alongside investment in healthcare infrastructure. It also focuses on digital industry commercialisation, enabling innovative digital solutions to scale into competitive, market-ready enterprises."
  }
];

const MarketSegmentsContent = () => {
  return (
    <>
      {/* Strategic Pillars Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--ptf-accent))]/10 flex items-center justify-center text-[hsl(var(--ptf-accent))] mb-4">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--ptf-heading))] mb-3 pb-3 border-b-[3px] border-[hsl(var(--ptf-accent))] inline-block">
                  {pillar.title}
                </h3>
                <p className="text-[hsl(var(--ptf-text))] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Priority Sectors Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
              Priority sectors
            </h2>
            <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed">
              Our investments focus on productive, future-focused sectors that strengthen industrial capacity, unlock new markets and drive inclusive economic growth. Our sector focus reflects national priorities, sustainability imperatives and opportunities for scalable enterprise development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-l-4 border-[hsl(var(--ptf-heading))] p-6 rounded-r-xl shadow-sm transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--ptf-accent))]/10 flex items-center justify-center text-[hsl(var(--ptf-accent))] flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[hsl(var(--ptf-heading))] mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-[hsl(var(--ptf-text))] leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketSegmentsContent;
