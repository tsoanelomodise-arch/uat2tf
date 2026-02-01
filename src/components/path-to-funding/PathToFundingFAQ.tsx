import React, { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PathToFundingFAQ: React.FC = memo(() => {
  const faqs = [
    {
      question: 'What is the Transformation Fund?',
      answer: 'The Transformation Fund is a government-backed initiative designed to provide financial support to Black-owned businesses in South Africa. We offer various funding options including grants, loans, and equity investments to help entrepreneurs grow and scale their businesses.',
    },
    {
      question: 'How much funding can I apply for?',
      answer: 'Funding amounts vary based on your business needs and eligibility. We offer support ranging from R50,000 for early-stage businesses up to R10 million for established enterprises. The exact amount will be determined during the assessment process based on your business plan and requirements.',
    },
    {
      question: 'How long does the application process take?',
      answer: 'The typical application process takes 4-8 weeks from submission to decision. This includes initial review (1 week), eligibility assessment (1-2 weeks), due diligence (2-3 weeks), and final decision (1-2 weeks). Complex applications may take longer.',
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'You\'ll need: CIPC registration documents, B-BBEE certificate, valid tax clearance certificate, 6 months bank statements, audited financial statements (if applicable), and a comprehensive business plan. Use our Document Checklist tool to ensure you have everything ready.',
    },
    {
      question: 'Can I apply if my business is less than 12 months old?',
      answer: 'Yes, we have specific funding programs for early-stage businesses. While some programs require a longer operational history, our Start-up Grant program is specifically designed for businesses under 12 months old. Check your eligibility using our quiz.',
    },
    {
      question: 'What happens after my application is approved?',
      answer: 'Once approved, you\'ll receive a formal offer letter outlining the terms. After accepting, funds are typically disbursed within 2-4 weeks. You\'ll also be assigned a relationship manager to support you throughout your funding journey.',
    },
    {
      question: 'Is there any cost to apply?',
      answer: 'No, there is absolutely no fee to apply for funding through the Transformation Fund. Beware of any third parties claiming to charge application fees on our behalf – this is a scam.',
    },
    {
      question: 'Can I reapply if my application is rejected?',
      answer: 'Yes, you can reapply after 6 months. We recommend addressing the reasons for rejection before reapplying. Our team will provide feedback on your application to help you improve your chances in future applications.',
    },
  ];

  return (
    <section id="faq" className="py-10 bg-[hsl(var(--ptf-section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[hsl(var(--ptf-accent))]/10 text-[hsl(var(--ptf-accent))] rounded-full text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--ptf-heading))] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[hsl(var(--ptf-text))] max-w-2xl mx-auto">
            Find answers to common questions about our funding process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-[hsl(var(--ptf-heading))] font-semibold py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--ptf-text))] pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[hsl(var(--ptf-text))] mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-2 text-[hsl(var(--ptf-accent))] font-semibold hover:underline"
          >
            Contact our support team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

PathToFundingFAQ.displayName = 'PathToFundingFAQ';

export default PathToFundingFAQ;
