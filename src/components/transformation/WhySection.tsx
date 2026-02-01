import { useState } from "react";
import problemSpaceImg from "@/assets/problemspace.jpg";
import opportunitySpaceImg from "@/assets/opportunityspace.jpg";

const tabs = [
  { id: "problem", label: "Problem Space" },
  { id: "opportunity", label: "Opportunity" },
];

const WhySection = () => {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <section id="why" className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">

        {/* Tab Navigation */}
        <div className="flex gap-12 mb-10 border-b-2 border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-3xl font-bold pb-4 cursor-pointer tracking-tight transition-colors whitespace-nowrap ${
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
        {activeTab === "problem" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#0000FE]">Understanding the Challenges We Face</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                South Africa continues to face deep-rooted inequalities in its economy. Despite decades of Broad-Based Black Economic Empowerment (B-BBEE) policy, many black-owned small, medium, and micro enterprises (SMMEs) still struggle to access meaningful financial resources.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Traditional Enterprise and Supplier Development (ESD) programmes are fragmented and uneven in impact: contributions are made across the private sector, but the support often fails to reach those most excluded, particularly in township and rural economies.
              </p>
              <ul className="highlight-list">
                <li>Lack of coordinated funding mechanisms</li>
                <li>Insufficient capital access for SMMEs</li>
                <li>No unified measurement framework</li>
              </ul>
            </div>
            <div>
              <img 
                src={problemSpaceImg} 
                alt="Problem Space visualization" 
                className="w-full rounded-2xl shadow-lg"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {activeTab === "opportunity" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#00703C]">The Transformation Fund Solution</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                The proposed Transformation Fund offers a strong opportunity to change how South Africa finances its economic transformation. By centralising transformation funding, the Fund will combine and use resources from multiple sources such as ESD contributions, Equity Equivalent Investment Programmes (EEIP), public interest commitments and government allocations.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Beyond financing, the Fund will provide a full range of support: debt, equity, grants and guidance all in one place. This means not only investing in enterprises, but also building their capacity, strengthening business models and connecting them to markets.
              </p>
              <ul className="highlight-list">
                <li>Centralised funding platform</li>
                <li>Comprehensive support ecosystem</li>
                <li>Transformation Index for accountability</li>
              </ul>
            </div>
            <div>
              <img 
                src={opportunitySpaceImg} 
                alt="Opportunity Space visualization" 
                className="w-full rounded-2xl shadow-lg"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhySection;
