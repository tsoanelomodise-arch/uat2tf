const governanceCards = [
  {
    number: "01",
    title: "Governance structure",
    description: "A joint Board of Directors, comprising public and private sector representatives, will oversees the strategic direction and fiduciary responsibilities. Functional areas will include investment management, financial stewardship and risk management, including impact monitoring, each with clear mandates and internal controls."
  },
  {
    number: "02",
    title: "Digital oversight",
    description: "A central digital platform will enable real-time data collection from investees, feeding into an impact dashboard that tracks key metrics like jobs created and capital deployed. This system will support proactive management and transparent reporting."
  },
  {
    number: "03",
    title: "Public reporting",
    description: "The Fund will publish annual integrated reports and quarterly updates, with stakeholder engagement through AGMs and parliamentary briefings. A Transformation Index will aggregate impact data for public visibility and accountability."
  }
];

const GovernanceContent = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Governance Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {governanceCards.map((card) => (
          <div
            key={card.number}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-1"
          >
            <span className="text-sm font-bold text-[hsl(var(--ptf-accent))] uppercase tracking-wider mb-2 block">
              {card.number}
            </span>
            <h3 className="text-xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
              {card.title}
            </h3>
            <p className="text-[hsl(var(--ptf-text))] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernanceContent;
