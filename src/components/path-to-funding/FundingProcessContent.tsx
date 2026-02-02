import { Link } from "react-router-dom";
import {
  ArrowUp,
  Search,
  FileText,
  Layers,
  Monitor,
  DollarSign,
  CheckCircle,
  Flag,
} from "lucide-react";

const stages = [
  {
    label: "Stage 0",
    title: "Stage 0: Initiation and sponsor alignment",
    description:
      "You start by submitting a formal funding request. At this stage, sponsorship is confirmed, governance arrangements are put in place, and the relevant regulatory pathways for your project are identified.",
    icon: ArrowUp,
    alt: false,
  },
  {
    label: "Assessment",
    title: "Pre-investment assessment",
    description:
      "Your proposal is initially assessed to confirm strategic alignment, readiness and potential impact before moving into detailed development.",
    icon: Search,
    alt: true,
  },
  {
    label: "Stage 1",
    title: "Stage 1: Feasibility and information memorandum",
    description:
      "A feasibility study and Information Memorandum are developed, setting out the project description, market analysis and an initial financial model. Proposals are reviewed by an Early Review Committee.",
    icon: FileText,
    alt: false,
  },
  {
    label: "Stage 2",
    title: "Stage 2: Concept, site and process design",
    description:
      "The project concept is refined through site selection, infrastructure confirmation and definition of production technology. A comprehensive concept design pack is prepared, supported by full technical, market, financial and risk due diligence.",
    icon: Layers,
    alt: true,
  },
  {
    label: "Stage 3",
    title: "Stage 3: Procurement and EPC strategy",
    description:
      "Equipment specifications are finalised, suppliers identified and the contracting model confirmed. Engineering, Procurement and Construction (EPC) and Technical Assistance (TA) agreements are negotiated, followed by credit approval and contracting.",
    icon: Monitor,
    alt: false,
  },
  {
    label: "Stage 4",
    title: "Stage 4: Financing and approvals",
    description:
      "The capital structure is finalised, funding sources secured and all regulatory approvals obtained. The financial model is refined, enabling disbursement and ongoing monitoring.",
    icon: DollarSign,
    alt: true,
  },
  {
    label: "Stage 5",
    title: "Stage 5: Construction and commissioning",
    description:
      "Construction and commissioning are managed in line with quality, health and safety standards. Operational and maintenance documentation is prepared to support a smooth transition to operations.",
    icon: CheckCircle,
    alt: false,
  },
  {
    label: "Stage 6",
    title: "Stage 6: Operations readiness and handover",
    description:
      "The final stage focuses on operational readiness, including management and staffing, establishment of marketing and distribution channels, and the setting of performance KPIs and reporting systems to ensure sustainable operations.",
    icon: Flag,
    alt: true,
  },
];

const FundingProcessContent = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
        {/* Main Content - Stages Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xl font-bold text-[hsl(var(--ptf-heading))]">
              Stages
            </h2>
          </div>
          <div className="p-8">
            <div className="space-y-5">
              {stages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-4 sm:gap-6 p-6 border rounded-xl transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-0.5 ${
                      stage.alt
                        ? "bg-gradient-to-br from-white to-green-50/50 border-[hsl(var(--ptf-accent))]/20"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[hsl(var(--ptf-accent))]/10 flex items-center justify-center text-[hsl(var(--ptf-accent))]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                        {stage.label}
                      </span>
                      <h3 className="text-lg font-bold text-[hsl(var(--ptf-heading))] mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-[hsl(var(--ptf-text))] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar - Quick Actions */}
        <div className="lg:sticky lg:top-[220px] h-fit">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-[hsl(var(--ptf-heading))]">
                Quick actions
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <a
                  href="https://tfportaltest-bjggc8febhc3aucy.southafricanorth-01.azurewebsites.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 px-5 rounded-full font-semibold text-white bg-[hsl(var(--ptf-accent))] hover:opacity-90 transition-all shadow-md hover:shadow-lg text-center"
                >
                  Start application
                </a>
                <Link
                  to="/path-to-funding#eligibility"
                  className="block w-full py-3.5 px-5 rounded-full font-semibold border border-gray-200 text-[hsl(var(--ptf-heading))] hover:border-gray-300 hover:bg-gray-50 transition-all text-center"
                >
                  Eligibility check
                </Link>
                <Link
                  to="/contacts"
                  className="block w-full py-3.5 px-5 rounded-full font-semibold border border-gray-200 text-[hsl(var(--ptf-heading))] hover:border-gray-300 hover:bg-gray-50 transition-all text-center"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingProcessContent;
