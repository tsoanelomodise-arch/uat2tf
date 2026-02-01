import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

const AboutModal = ({ open, onClose }: AboutModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">About</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <Tabs defaultValue="building" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-6 bg-transparent gap-2 h-auto p-0">
              <TabsTrigger 
                value="building" 
                className="bg-blue-600 text-white hover:bg-blue-700 data-[state=active]:bg-blue-700 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-semibold text-xs sm:text-sm whitespace-normal"
              >
                Building the Future
              </TabsTrigger>
              <TabsTrigger 
                value="growth" 
                className="bg-red-500 text-white hover:bg-red-600 data-[state=active]:bg-red-600 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-semibold text-xs sm:text-sm whitespace-normal"
              >
                More Than Growth
              </TabsTrigger>
              <TabsTrigger 
                value="why" 
                className="bg-green-600 text-white hover:bg-green-700 data-[state=active]:bg-green-700 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-semibold text-xs sm:text-sm whitespace-normal"
              >
                Why Transform?
              </TabsTrigger>
              <TabsTrigger 
                value="path" 
                className="bg-yellow-500 text-white hover:bg-yellow-600 data-[state=active]:bg-yellow-600 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-semibold text-xs sm:text-sm whitespace-normal"
              >
                A New Path
              </TabsTrigger>
              <TabsTrigger 
                value="promise" 
                className="bg-gray-800 text-white hover:bg-gray-900 data-[state=active]:bg-gray-900 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-semibold text-xs sm:text-sm whitespace-normal"
              >
                Our Promise
              </TabsTrigger>
            </TabsList>

            <TabsContent value="building" className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Building the Future Together</h3>
              
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                The Transformation Fund is South Africa's bold answer to the question: How do we build an economy that works for everyone? We're not just another funding mechanism—we're a national movement to engineer inclusive economic growth at scale.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-600 mb-4">
                    <span className="text-blue-600 mr-2">•</span>Our Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    A South Africa where economic opportunity is accessible to all, where black-owned enterprises thrive, and where transformation creates shared prosperity that strengthens our nation.
                  </p>
                </section>

                <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-600 mb-4">
                    <span className="text-blue-600 mr-2">•</span>Our Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    To pool resources, coordinate efforts, and create systemic impact by providing bundled support—capital, capability, and market access—to empowered enterprises across South Africa.
                  </p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="why" className="space-y-6">
              <h3 className="text-3xl font-bold text-green-600 mb-4">Why Transform?</h3>
              
              <p className="text-gray-700 leading-relaxed text-base mb-8">
                South Africa stands at a crossroads. Despite decades of democracy, economic inequality persists, unemployment remains stubbornly high, and too many talented entrepreneurs lack the resources to succeed. The current approach isn't working—we need systemic change.
              </p>

              <div className="space-y-6">
                <section className="flex gap-4 bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-600 mb-2">Economic Imperative</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our economy cannot reach its full potential when the majority of our population is excluded from meaningful participation. Transformation isn't just morally right—it's economically essential.
                    </p>
                  </div>
                </section>

                <section className="flex gap-4 bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-600 mb-2">Social Stability</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Inclusive economic growth builds social cohesion and stability. When people have opportunities to build businesses, create jobs, and generate wealth, entire communities thrive.
                    </p>
                  </div>
                </section>

                <section className="flex gap-4 bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-600 mb-2">Unlocking Potential</h4>
                    <p className="text-gray-700 leading-relaxed">
                      South Africa has incredible entrepreneurial talent. The Transformation Fund unlocks this potential by removing barriers and providing the support entrepreneurs need to succeed.
                    </p>
                  </div>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="path" className="space-y-6">
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">A New Path Forward</h3>
              
              <p className="text-gray-700 leading-relaxed text-base mb-8">
                The Transformation Fund represents a paradigm shift—from fragmented, compliance-driven efforts to coordinated, outcome-based systemic change. We're charting a new path that learns from the past while building for the future.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-600 mb-4">The Old Way</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Fragmented funding mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Compliance-focused approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Capital without capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>No coordination or scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Limited market access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Unclear impact measurement</span>
                    </li>
                  </ul>
                </section>

                <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-600 mb-4">The New Way</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Pooled national platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Outcome-driven transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Bundled support (capital + capability + markets)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Coordinated systemic impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Guaranteed market opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>Real-time impact tracking</span>
                    </li>
                  </ul>
                </section>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                This new path doesn't just fund businesses—it builds an ecosystem where empowered enterprises can thrive, creating jobs, generating wealth, and transforming communities.
              </p>
            </TabsContent>

            <TabsContent value="growth" className="space-y-6">
              <h3 className="text-3xl font-bold text-red-500 mb-4">More Than Growth</h3>
              
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund is about more than GDP numbers and balance sheets. It's about building a South Africa where prosperity is shared, where talent is nurtured regardless of background, and where economic participation creates dignity and opportunity.
              </p>

              <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  <span className="text-red-500 mr-2">•</span>Creating Jobs That Matter
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every job created through the Fund represents a family lifted, a community strengthened, and a future secured. We target 1 million+ jobs over 10 years—not just any jobs, but quality employment with dignity and growth potential.
                </p>
              </section>

              <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  <span className="text-red-500 mr-2">•</span>Building Generational Wealth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By supporting black ownership and enterprise development, we're helping families build assets that can be passed down, creating generational wealth that transforms communities for decades to come.
                </p>
              </section>

              <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  <span className="text-red-500 mr-2">•</span>Empowering Women and Youth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Special focus on women-owned enterprises and youth entrepreneurship ensures that those historically most excluded from economic opportunity become drivers of transformation.
                </p>
              </section>

              <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  <span className="text-red-500 mr-2">•</span>Developing Rural Economies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Transformation must reach beyond urban centers. The Fund supports rural enterprise development, bringing economic opportunity to communities that have been left behind.
                </p>
              </section>
            </TabsContent>

            <TabsContent value="promise" className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Promise</h3>
              
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund makes a solemn commitment to all South Africans: we will deploy resources with integrity, measure impact with transparency, and create transformation that is real, measurable, and sustainable.
              </p>

              <section className="bg-gray-100 border-l-4 border-gray-600 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="text-gray-800 mr-2">•</span>Accountability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every rand deployed is tracked, every outcome measured, every impact reported. We hold ourselves accountable to the people of South Africa.
                </p>
              </section>

              <section className="bg-gray-100 border-l-4 border-gray-600 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="text-gray-800 mr-2">•</span>Integrity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We operate with the highest ethical standards, ensuring resources reach those who need them most and are used for maximum impact.
                </p>
              </section>

              <section className="bg-gray-100 border-l-4 border-gray-600 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="text-gray-800 mr-2">•</span>Transparency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time tracking and public reporting mean every South African can see exactly where resources go and what impact they create.
                </p>
              </section>

              <section className="bg-gray-100 border-l-4 border-gray-600 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="text-gray-800 mr-2">•</span>Partnership
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We work hand-in-hand with entrepreneurs, communities, and stakeholders to ensure our approach remains responsive, effective, and aligned with the needs of those we serve.
                </p>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;