import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FundingPrograms = () => {
  const programs = [
    {
      id: "startup-grants",
      title: "Startup and Informal Business Grants",
      price: "R50K - R500K",
      description: "Startup grants or \"vouchers\" for early-stage and informal enterprises",
      badge: "POPULAR",
      badgeColor: "bg-yellow-500 text-black",
      idealFor: "Early-stage entrepreneurs who lack initial funding or collateral and need accessible capital to start their business journey.",
      commonRoles: "New Business Owner, Informal Trader, First-time Entrepreneur, Community Business",
      talentSource: "From grassroots communities and emerging markets across South Africa.",
      ctaText: "Apply Now",
      footerNote: "No application fees"
    },
    {
      id: "growth-loans",
      title: "Growth and Expansion Loans",
      price: "R500K - R10M",
      description: "Patient, concessionary loans for scaling up established MSMEs, delivered with flexible terms and performance-based disbursements.",
      badge: "RECOMMENDED", 
      badgeColor: "bg-yellow-500 text-black",
      idealFor: "Growing firms looking to invest in capacity expansion, equipment, larger facilities, and staff hiring.",
      commonRoles: "SME Owner, Manufacturing Business, Service Provider, Established Entrepreneur",
      talentSource: "From businesses that have outgrown micro-finance but are not yet served by commercial banks.",
      ctaText: "Apply Now",
      footerNote: "Fast-track available"
    },
    {
      id: "equity-investment",
      title: "Equity and Co-Investment Instruments", 
      price: "R10M - R50M",
      description: "Equity funding for larger-scale ventures and high-growth companies, particularly in priority sectors.",
      badge: "EQUITY",
      badgeColor: "bg-yellow-500 text-black",
      idealFor: "Black industrialists and innovative startups needing substantial capital injections for high-growth ventures.",
      commonRoles: "Industrial Entrepreneur, Tech Startup Founder, Manufacturing Executive, Innovation Leader",
      talentSource: "From priority sectors and high-growth companies with substantial scaling potential.",
      ctaText: "Apply Now",
      footerNote: "Pitch deck required"
    }
  ];

  return (
    <section id="programs" className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformation Fund suite of funding programmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive funding solutions tailored to support transformation, innovation, and sustainable economic development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={program.id} className={`relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 ${index === 0 ? 'md:col-span-1' : ''}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffb81c' }}>
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="py-4 border-b border-gray-200">
                  <div className="text-4xl font-bold text-gray-900">
                    {program.price}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ideal For</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.idealFor}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Roles</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.commonRoles}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Talent Source</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.talentSource}
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-200" style={{ backgroundColor: '#ffb81c', color: '#000' }}>
                    {program.ctaText}
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    {program.footerNote}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-lg text-white text-center">
          <h4 className="text-2xl font-bold mb-4">Not sure which program fits your needs?</h4>
          <p className="text-white/90 mb-6 text-lg">
            Our funding specialists will help you choose the perfect program and guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" onClick={() => (document.getElementById('assessment-modal') as HTMLDialogElement)?.showModal()}>Take Assessment Quiz</Button>
            <Button variant="hero-secondary" onClick={() => (document.getElementById('consultation-modal') as HTMLDialogElement)?.showModal()}>Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingPrograms;