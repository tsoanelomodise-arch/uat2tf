import { useState } from "react";
import PhakamaniNavbar from "@/components/phakamani/PhakamaniNavbar";
import AboutHero from "@/components/phakamani/AboutHero";
import Footer from "@/components/transformation/Footer";
import transformationInActionImg from "@/assets/transformation-in-action.jpg";

const tabs = [
  {
    id: "building",
    label: "Building the Future",
    color: "#00703C", // Green
  },
  {
    id: "growth",
    label: "More Than Growth",
    color: "#E31C23", // Red
  },
  {
    id: "why",
    label: "Why Transform?",
    color: "#004B8D", // Blue
  },
  {
    id: "path",
    label: "A New Path",
    color: "#FDB913", // Yellow
  },
  {
    id: "promise",
    label: "Our Promise",
    color: "#00703C", // Green
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("building");

  return (
    <div className="min-h-screen bg-background pt-[180px] lg:pt-[210px]">
      <PhakamaniNavbar />
      <AboutHero />
      <main>
        {/* Tabbed Content Section */}
        <section className="py-6">
          <div className="max-w-[1400px] mx-auto px-10">
            {/* Tab Navigation - Matching PathwaysSection Style */}
            <div className="flex gap-8 lg:gap-12 mb-10 border-b-2 border-gray-200 overflow-x-auto pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xl lg:text-2xl font-bold pb-4 cursor-pointer tracking-tight transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-black -mb-[2px]"
                      : "text-gray-300"
                  }`}
                  style={{
                    borderBottom: activeTab === tab.id ? `5px solid ${tab.color}` : 'none',
                    ...(activeTab !== tab.id && { ['--hover-color' as string]: tab.color })
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.color = tab.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.color = '';
                    }
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-10">
              {/* Building the Future */}
              {activeTab === "building" && (
                <div className="space-y-10 animate-fade-in">
                  <div>
                    <h2 className="phakamani-section-title mb-5">Building the Future Together</h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                      The Transformation Fund is South Africa's bold answer to the question: How do we build an economy that works for everyone? We're not just another funding mechanism—we're a national movement to engineer inclusive economic growth at scale.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-3xl p-8 -mx-4 shadow-md">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-[transform,box-shadow] duration-300 will-change-transform [transform:translateZ(0)]">
                        <div className="w-12 h-12 bg-[#00703C] rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">Our Vision</h3>
                        <p className="text-gray-500 leading-relaxed">
                          A South Africa where economic opportunity is accessible to all, where black-owned enterprises thrive, and where transformation creates shared prosperity that strengthens our nation.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-[transform,box-shadow] duration-300 will-change-transform [transform:translateZ(0)]">
                        <div className="w-12 h-12 bg-[#00703C] rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
                        <p className="text-gray-500 leading-relaxed">
                          To pool resources, coordinate efforts, and create systemic impact by providing bundled support—capital, capability, and market access—to empowered enterprises across South Africa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* More Than Growth */}
              {activeTab === "growth" && (
                <div className="space-y-10 animate-fade-in">
                  <div>
                    <h2 className="phakamani-section-title mb-5">More Than Growth</h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                      The Transformation Fund is about more than GDP numbers and balance sheets. It's about building a South Africa where prosperity is shared, where talent is nurtured regardless of background, and where economic participation creates dignity and opportunity.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-3xl p-8 -mx-4 shadow-md space-y-6">
                    {[
                      {
                        title: "Creating Jobs That Matter",
                        description: "Every job created through the Fund represents a family lifted, a community strengthened, and a future secured. We target 1 million+ jobs over 10 years—not just any jobs, but quality employment with dignity and growth potential.",
                      },
                      {
                        title: "Building Generational Wealth",
                        description: "By supporting black ownership and enterprise development, we're helping families build assets that can be passed down, creating generational wealth that transforms communities for decades to come.",
                      },
                      {
                        title: "Empowering Women and Youth",
                        description: "Special focus on women-owned enterprises and youth entrepreneurship ensures that those historically most excluded from economic opportunity become drivers of transformation.",
                      },
                      {
                        title: "Developing Rural Economies",
                        description: "Transformation must reach beyond urban centers. The Fund supports rural enterprise development, bringing economic opportunity to communities that have been left behind.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-[transform,box-shadow] duration-300 will-change-transform [transform:translateZ(0)] flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#E31C23] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                          <p className="text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Transform? */}
              {activeTab === "why" && (
                <div className="space-y-10 animate-fade-in">
                  <div>
                    <h2 className="phakamani-section-title mb-5">Why Transform?</h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                      South Africa stands at a crossroads. Despite decades of democracy, economic inequality persists, unemployment remains stubbornly high, and too many talented entrepreneurs lack the resources to succeed. The current approach isn't working—we need systemic change.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-3xl p-8 -mx-4 shadow-md space-y-6">
                    {[
                      {
                        title: "Economic Imperative",
                        description: "Our economy cannot reach its full potential when the majority of our population is excluded from meaningful participation. Transformation isn't just morally right—it's economically essential.",
                      },
                      {
                        title: "Social Stability",
                        description: "Inclusive economic growth builds social cohesion and stability. When people have opportunities to build businesses, create jobs, and generate wealth, entire communities thrive.",
                      },
                      {
                        title: "Unlocking Potential",
                        description: "South Africa has incredible entrepreneurial talent. The Transformation Fund unlocks this potential by removing barriers and providing the support entrepreneurs need to succeed.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-[transform,box-shadow] duration-300 will-change-transform [transform:translateZ(0)] flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#004B8D] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                          <p className="text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* A New Path */}
              {activeTab === "path" && (
                <div className="space-y-10 animate-fade-in">
                  <div>
                    <h2 className="phakamani-section-title mb-5">A New Path Forward</h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                      The Transformation Fund represents a paradigm shift—from fragmented, compliance-driven efforts to coordinated, outcome-based systemic change. We're charting a new path that learns from the past while building for the future.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-3xl p-8 -mx-4 shadow-md grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                      <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        The Old Way
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Fragmented funding mechanisms",
                          "Compliance-focused approach",
                          "Capital without capability",
                          "No coordination or scale",
                          "Limited market access",
                          "Unclear impact measurement",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-500">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                      <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-[#FDB913] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        The New Way
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Pooled national platform",
                          "Outcome-driven transformation",
                          "Bundled support (capital + capability + markets)",
                          "Coordinated systemic impact",
                          "Guaranteed market opportunities",
                          "Real-time impact tracking",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-500">
                            <span className="text-[#FDB913] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-lg">
                    This new path doesn't just fund businesses—it builds an ecosystem where empowered enterprises can thrive, creating jobs, generating wealth, and transforming communities.
                  </p>
                </div>
              )}

              {/* Our Promise */}
              {activeTab === "promise" && (
                <div className="space-y-10 animate-fade-in">
                  <div>
                    <h2 className="phakamani-section-title mb-5">Our Promise</h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                      The Transformation Fund makes a solemn commitment to all South Africans: we will deploy resources with integrity, measure impact with transparency, and create transformation that is real, measurable, and sustainable.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-3xl p-8 -mx-4 shadow-md grid md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Accountability",
                        description: "Every rand deployed is tracked, every outcome measured, every impact reported. We hold ourselves accountable to the people of South Africa.",
                        icon: (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                      },
                      {
                        title: "Integrity",
                        description: "We operate with the highest ethical standards, ensuring resources reach those who need them most and are used for maximum impact.",
                        icon: (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ),
                      },
                      {
                        title: "Transparency",
                        description: "Real-time tracking and public reporting mean every South African can see exactly where resources go and what impact they create.",
                        icon: (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ),
                      },
                      {
                        title: "Partnership",
                        description: "We work hand-in-hand with entrepreneurs, communities, and stakeholders to ensure our approach remains responsive, effective, and aligned with the needs of those we serve.",
                        icon: (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ),
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-[transform,box-shadow] duration-300 will-change-transform [transform:translateZ(0)]">
                        <div className="w-12 h-12 bg-[#00703C] rounded-xl flex items-center justify-center mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
