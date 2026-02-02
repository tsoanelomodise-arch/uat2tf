import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const investorCards = [
  {
    number: "01",
    title: "Equity equivalent investment programme (EEIP) contributions",
    description: "Multinational corporations unable to sell equity locally can contribute 25% of their South African operations' value to empowerment projects. The Fund offers a centralised vehicle for these contributions, replacing fragmented initiatives with a high-impact portfolio. This simplifies compliance and ensures funds are directed toward national development priorities."
  },
  {
    number: "02",
    title: "Enterprise and supplier development (ESD) contributions",
    description: "Corporates can redirect their ESD budgets into the Fund and still receive full B-BBEE scorecard recognition. This pooled approach improves efficiency, impact, and compliance while reducing administrative burdens. Unspent ESD funds can also be absorbed, ensuring no resources go to waste."
  },
  {
    number: "03",
    title: "Development Finance Institutions (DFIs) and impact investors",
    description: "Domestic and international DFIs can co-invest, offer credit lines, or match-fund projects aligned with the Fund's goals. Their involvement brings additional capital, technical expertise, and ESG standards. This expands the Fund's reach and strengthens its credibility and operational rigor."
  },
  {
    number: "04",
    title: "Donors and philanthropy",
    description: "Foundations, high-net-worth individuals, and international donors can contribute grants for targeted programmes. These funds may support specific initiatives like tech accelerators or women entrepreneurship. The Fund provides a transparent and accountable structure for deploying donor capital effectively."
  },
  {
    number: "05",
    title: "Innovative financing and private investors",
    description: "The Fund can issue diaspora bonds, green bonds, or social impact bonds to attract private capital. Pension funds (Regulation 28 compliant) can also invest in the Fund's secure, diversified instruments. This crowds in private sector liquidity to scale impact without solely relying on government or corporate grants."
  },
  {
    number: "06",
    title: "Special case: Mid-sized firms and ESD complexity",
    description: "Mid-sized companies often lack capacity to run effective ESD programmes and struggle with compliance. The Fund offers a simplified alternative, allowing these firms to contribute and meet B-BBEE requirements. This unlocks underutilised ESD budgets and broadens participation in transformation efforts:"
  }
];

const accordionItems = [
  {
    value: "item-1",
    title: "Simplified ESD contributions",
    content: "Mid-sized firms can contribute directly to the Fund and receive full B-BBEE scorecard recognition without running complex in-house ESD programmes."
  },
  {
    value: "item-2",
    title: "Pre-approved framework",
    content: "Contributions are validated under a standardised, government-endorsed framework, earning immediate compliance credit."
  },
  {
    value: "item-3",
    title: "Reduced administrative burden",
    content: "This approach eliminates the overhead of managing ESD initiatives, ensuring funds are used for impactful MSME development."
  },
  {
    value: "item-4",
    title: "Procurement compliance support",
    content: "Firms still meet Preferential Procurement targets, aided by the Fund's telemetry dashboard for supplier tracking and spend visibility."
  },
  {
    value: "item-5",
    title: "Strategic supplier engagement",
    content: "The dashboard helps firms identify high-potential MSMEs for partnerships, enhancing supply chains and unlocking innovation."
  },
  {
    value: "item-6",
    title: "Benefits beyond compliance",
    content: "Engaging diverse suppliers boosts market reach, resilience, and innovation—turning compliance into a strategic growth opportunity."
  }
];

const InvestorsContent = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Investor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {investorCards.map((card) => (
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

      {/* Accordion Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border-b border-gray-100">
              <AccordionTrigger className="text-left font-bold text-[hsl(var(--ptf-heading))] hover:no-underline py-5">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[hsl(var(--ptf-text))] leading-relaxed pb-5">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default InvestorsContent;
