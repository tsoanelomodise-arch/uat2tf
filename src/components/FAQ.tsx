import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the eligibility requirements for funding?",
      answer: `Eligibility varies by program, but general requirements include:
      
• South African registered business or individual
• Clear business plan and financial projections  
• Compliance with regulatory requirements
• Demonstration of economic impact potential
• Meeting specific program criteria (B-BBEE status, sector focus, etc.)`
    },
    {
      question: "How long does the application process take?", 
      answer: `Application timelines vary by program complexity:

**Standard Applications:** 14-21 business days for review and approval

**Complex Applications:** 30-45 business days for comprehensive due diligence`
    },
    {
      question: "What documents do I need to apply?",
      answer: `Required documentation typically includes:

**Business Documents:**
• Company registration certificate
• Tax clearance certificate  
• B-BBEE certificate (if applicable)
• Audited financial statements

**Project Documents:**
• Detailed business plan
• Financial projections
• Market analysis
• Impact assessment`
    },
    {
      question: "What support do you provide beyond funding?",
      answer: `We provide comprehensive support throughout your journey:

**Business Development:** Strategic planning and market research support

**Mentorship:** Access to experienced business leaders

**Training:** Skills development and capacity building`
    },
    {
      question: "Can I apply for multiple funding programs?",
      answer: `Yes, you can apply for multiple programs, but there are guidelines:

**Recommended Approach:** Start with one program that best fits your current needs, then explore additional programs as your business grows.

• Each application is evaluated independently
• Funding amounts may be adjusted to prevent over-leveraging
• Our specialists can help you choose the optimal combination
• Sequential applications often work better than simultaneous ones`
    },
    {
      question: "What happens if my application is declined?",
      answer: `We believe in supporting your success, even if your initial application isn't approved:

**Detailed Feedback:** Receive specific reasons for decline and improvement recommendations

**Reapplication Support:** Access to mentorship to strengthen your next application

**Alternative Programs:** Guidance on other programs that might be a better fit

**Development Resources:** Access to training and development programs`
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80">
            Get answers to common questions about our funding programs
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/95 backdrop-blur border-0 rounded-xl px-6 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-dark transition-colors py-6 [&[data-state=open]]:text-primary-dark [&>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;