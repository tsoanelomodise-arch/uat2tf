import { X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQModalProps {
  open: boolean;
  onClose: () => void;
}

const FAQModal = ({ open, onClose }: FAQModalProps) => {
  if (!open) return null;

  const faqs = [
    {
      question: "What is the Transformation Fund?",
      answer: "The Transformation Fund is South Africa's national platform that pools resources from government, corporates, and development finance institutions to create systemic impact for inclusive economic growth. It provides bundled support - capital, capability development, and market access - to empowered enterprises."
    },
    {
      question: "Who can benefit from the Transformation Fund?",
      answer: "The Fund primarily supports black-owned SMMEs and entrepreneurs across various sectors. It targets businesses at different stages - from early-stage startups needing seed capital to growth-stage enterprises requiring scale-up funding and market access."
    },
    {
      question: "How does the Fund differ from traditional B-BBEE programs?",
      answer: "Unlike fragmented B-BBEE compliance programs, the Transformation Fund coordinates resources at a national level, bundles capital with capability development and market access, and measures real transformation outcomes rather than just compliance. It creates network effects that amplify impact across the entire ecosystem."
    },
    {
      question: "What types of support does the Fund provide?",
      answer: "The Fund provides three pillars of support:\n\n• Access to Capital: Grants, loans, equity, and blended finance\n• Access to Capability: Business development, technical training, and mentorship\n• Access to Markets: Procurement linkages and supply chain integration"
    },
    {
      question: "How can my company contribute to the Fund?",
      answer: "Corporates can contribute through their Enterprise and Supplier Development (ED/SD) budgets, which can be pooled into the Fund. This allows companies to meet B-BBEE requirements while creating greater systemic impact through coordinated deployment of resources."
    },
    {
      question: "What is the Transformation Index?",
      answer: "The Transformation Index is a comprehensive data platform that continuously measures, aggregates, and reports on transformation outcomes across the ecosystem. It tracks metrics like jobs created, revenue generated, black ownership percentages, women participation, and youth employment - providing real-time visibility into impact."
    },
    {
      question: "How do I apply for support from the Fund?",
      answer: "Applications can be submitted through our online portal. Visit online.sa-transformationfund.co.za to register and submit your application. You'll need to provide information about your business, funding needs, and transformation objectives."
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#007847]">Frequently Asked Questions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-6 hover:bg-gray-100 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#007847] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;