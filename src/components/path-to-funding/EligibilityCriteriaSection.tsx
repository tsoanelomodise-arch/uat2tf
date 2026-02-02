import React, { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const EligibilityCriteriaSection: React.FC = memo(() => {
  const eligibilityItems = [
    {
      title: 'Informal and start-up enterprises',
      content: 'Includes township traders, emerging farmers, and micro manufacturers needing support to formalise and grow. These greenfield ventures often lie outside formal supply chains and lack access to capital.',
    },
    {
      title: 'Early-stage industrial and high-impact ventures',
      content: 'Targets Black Industrialist projects and strategic sectors such as manufacturing, agro-processing, mineral beneficiation, and green economy. These ventures require patient, risk-tolerant capital to scale.',
    },
    {
      title: 'Growth-phase MSMEs',
      content: 'Supports small and medium enterprises that have survived initial hurdles and are ready to expand, but face barriers accessing conventional finance due to collateral or paperwork requirements.',
    },
    {
      title: 'Mid-size firms graduating to large enterprises',
      content: 'Backs majority Black-owned firms with proven unit economics aiming for structural growth through technology upgrades, M&A, and market expansion, while preserving Black ownership.',
    },
    {
      title: 'Cooperatives and collective enterprises',
      content: 'Includes community-owned entities such as agricultural cooperatives and village savings groups, especially in rural and township areas. Support will be tailored to help them scale and access larger markets.',
    },
    {
      title: 'Youth-, women-, and designated group-led businesses',
      content: 'Prioritises enterprises led by black women, youth, and people with disabilities. A mandated portion of funding is reserved for these groups, with flexible requirements and linked technical support.',
    },
    {
      title: 'Township and rural enterprises',
      content: 'Special emphasis is placed on businesses located in disadvantaged geographies. Dedicated funding and on-site support will help overcome infrastructure and market access barriers.',
    },
  ];

  return (
    <section id="eligibility-criteria" className="py-10 bg-[hsl(var(--ptf-section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[hsl(var(--ptf-accent))]/10 text-[hsl(var(--ptf-accent))] rounded-full text-sm font-semibold mb-4">
            Who Can Apply
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
            Eligibility and criteria
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed">
              The Transformation Fund is designed to serve a broad yet intentionally segmented market of majority Black-owned enterprises that are underserved by traditional finance.
            </p>
            <p className="text-lg text-[hsl(var(--ptf-text))] leading-relaxed">
              Applicants will need to show that their businesses are legally compliant, properly registered and meet basic operational and financial management standards. This approach will ensure that support is provided to enterprises that are ready to succeed and contribute to economic development. Eligibility is segmented across firm types and structural contexts to ensure inclusive coverage. This includes:
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {eligibilityItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-[hsl(var(--ptf-heading))] font-semibold py-5 hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--ptf-text))] pb-5 leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

EligibilityCriteriaSection.displayName = 'EligibilityCriteriaSection';

export default EligibilityCriteriaSection;
