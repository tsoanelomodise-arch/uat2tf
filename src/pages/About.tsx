import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import AboutHero from "@/components/phakamani/AboutHero";
import Footer from "@/components/transformation/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-[180px] lg:pt-[210px]">
      <PhakamaniNavbar />
      <AboutHero />
      <main>
        {/* About Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* About H1 + Intro Paragraph */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About</h1>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12">
              The Transformation Fund is a strategic instrument designed to enable coherent and efficient implementation of B-BBEE and related financing interventions, alongside complementary policy tools such as competition and public-interest commitments. It brings together empowerment, industrialisation and macroeconomic resilience through measurable, accountable interventions that drive inclusive economic growth.
            </p>
          </div>
        </section>

        {/* Objectives + The Method Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Objectives */}
              <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
                <h2 className="text-2xl font-bold text-primary mb-6">Objectives</h2>
                <div className="space-y-0">
                  {[
                    { num: "01", text: "Promote economic transformation in order to enable meaningful participation of black people in the productive economy;" },
                    { num: "02", text: "Improve access to funding for majority black-owned and controlled enterprises;" },
                    { num: "03", text: "Empower and support majority black-owned and controlled enterprises participation in value chains across key sectors of the economy; and" },
                    { num: "04", text: "Mobilise financial resources from the private and public sector using B-BBEE legislation." },
                  ].map((obj, index) => (
                    <div
                      key={obj.num}
                      className={`flex gap-4 py-4 ${index > 0 ? "border-t border-gray-100" : ""}`}
                    >
                      <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                        {obj.num}
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">{obj.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Method */}
              <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
                <h2 className="text-2xl font-bold text-primary mb-6">The Method</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Transformation Fund adopts a deliberate, impact-driven approach that moves beyond trickle-down models and fragmented initiatives. It systematically and transparently empowers businesses at scale by providing capital, capabilities and market access, enabling firms to become self-sufficient, grow locally and globally, and create jobs. By strengthening the grassroots productive economy, the Fund complements macro-level interventions and drives inclusive growth, rising incomes and sustainable national development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Architecture Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Architecture</h2>
              <p className="text-xl text-white/80">The Fund's architecture rests on five interlocking pillars:</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="capital" className="bg-white/95 backdrop-blur border-0 rounded-xl px-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-dark transition-colors py-6 hover:no-underline [&[data-state=open]]:text-primary-dark [&>svg]:text-primary">
                  Capital
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  The Transformation Fund will mobilise and pool patient, transformative capital from voluntary sources into a large-scale, professionally managed vehicle dedicated to expanding black-owned and community-based enterprises. Structured as an SPV or fund-of-funds, the capital will be ring-fenced and invested in productive enterprises and entrepreneurial projects that deliver inclusive economic outcomes, addressing the significant financing gap where commercial markets often do not invest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="capability" className="bg-white/95 backdrop-blur border-0 rounded-xl px-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-dark transition-colors py-6 hover:no-underline [&[data-state=open]]:text-primary-dark [&>svg]:text-primary">
                  Capability
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  Recognising that finance alone is not enough, the Transformation Fund prioritises Access to Capability (ATC) through a digital-first technical assistance platform. This provides enterprises with the skills, tools and systems needed to absorb capital effectively and meet market standards. By delivering a comprehensive "capability stack", including accounting, production and logistics tools, training and mentorship, the Fund strengthens productivity, creditworthiness and operational credibility, improving the long-term success of MSMEs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="markets" className="bg-white/95 backdrop-blur border-0 rounded-xl px-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-dark transition-colors py-6 hover:no-underline [&[data-state=open]]:text-primary-dark [&>svg]:text-primary">
                  Markets
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  The Transformation Fund enables sustainable growth by unlocking reliable market access for supported enterprises. Through digitally driven buyer consortia, offtake agreements, supply aggregation and integration into corporate, public and export supply chains, the Fund reduces barriers to market entry. By creating predictable demand via digitally managed "buyer councils" and quality-assured contracts, the Fund allows firms to scale with confidence while giving buyers access to a broader, compliant and competitive supplier base.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="telemetry" className="bg-white/95 backdrop-blur border-0 rounded-xl px-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-dark transition-colors py-6 hover:no-underline [&[data-state=open]]:text-primary-dark [&>svg]:text-primary">
                  Telemetry
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  The Transformation Fund is built as a digital-first, data-driven platform with a comprehensive telemetry system that tracks performance and impact in real time. By capturing data on financial health, production, quality, delivery and jobs, and consolidating it into a Transformation Index, the Fund enables transparent, outcomes-based decision-making. This approach reduces information gaps, supports alternative credit assessment, allows real-time adjustment of support, and ensures funding is linked to measurable results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="governance" className="bg-white/95 backdrop-blur border-0 rounded-xl px-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-dark transition-colors py-6 hover:no-underline [&[data-state=open]]:text-primary-dark [&>svg]:text-primary">
                  Governance
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  The Transformation Fund is underpinned by a strong governance framework that ensures integrity, transparency and strategic alignment. It will be overseen by an independent board and management team, accountable to national objectives and insulated from undue influence. Digitally enabled public reporting dashboards and a multi-stakeholder oversight council, spanning government, business, labour and civil society, will strengthen accountability, embed checks and balances, and align the Fund with global best practice in transparency and governance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
