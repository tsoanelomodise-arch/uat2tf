import { useState } from "react";

const tabs = [
  { id: "government", label: "For Government & Policy Makers" },
  { id: "private", label: "For Private Sector & Investors" },
  { id: "society", label: "For Labour, Communities & Society" },
];

const ValueProposition = () => {
  const [activeTab, setActiveTab] = useState("government");

  return (
    <section id="value" className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">

        {/* Tab Navigation */}
        <div className="flex gap-8 lg:gap-12 mb-10 border-b-2 border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg lg:text-xl font-bold pb-4 cursor-pointer tracking-tight transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-black border-b-[5px] border-[#00703C]"
                  : "text-gray-300 hover:text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          {activeTab === "government" && (
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-16 h-16 bg-[#00703C] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">For government and policy makers</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  The Fund provides Government and policy makers with a credible vehicle to coordinate and consolidate fragmented transformation initiatives. As a single national platform, it allows government to monitor progress, align objectives across sectors and ensure that transformation interventions are impactful and measurable. By refocusing, re-engineering and redirecting the empowerment objectives of B-BBEE and related frameworks, the Fund will create a unified approach to drive inclusive economic growth.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Through this integrated platform, policy makers will gain visibility over previously disconnected initiatives, enabling improved oversight, coordination and alignment with national transformation goals. By centralising multiple programmes into one credible vehicle, the Fund ensures that transformation efforts are coherent, targeted, and capable of delivering measurable outcomes.
                </p>
              </div>
            </div>
          )}

          {activeTab === "private" && (
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-16 h-16 bg-[#00703C] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">For private sector and investors</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  The Fund will provide the private sector and investors with a credible vehicle to contribute meaningfully to national transformation initiatives. By consolidating fragmented efforts into a single platform, it will enable companies and investors to align their interventions with broader economic objectives while demonstrating measurable impact. The Fund allows stakeholders to focus their resources strategically, ensuring that transformation programmes are coherent, targeted, and capable of delivering tangible results.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Private sector participants will therefore gain visibility and recognition for their contributions, while ensuring alignment with B-BBEE and national transformation priorities. By participating in the Fund, companies can enhance compliance, strengthen corporate social responsibility and strategically showcase their commitment to inclusive economic growth.
                </p>
              </div>
            </div>
          )}

          {activeTab === "society" && (
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-16 h-16 bg-[#00703C] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">For labour, communities and society</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  For trade unions, this means more and better employment as small firms grow into formal sector employers. For communities, it means revitalisation as successful enterprises spring up in townships and rural areas, bringing investment to long-neglected locales. Through this integrated approach, civil society and community stakeholders gain visibility into initiatives that affect them, allowing for greater accountability, engagement, and benefit from transformation interventions.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  The Fund will therefore provide a transparent, outcomes-driven vehicle that strengthens social cohesion, ensures equitable participation and demonstrates tangible improvements in livelihoods and empowerment across society.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
