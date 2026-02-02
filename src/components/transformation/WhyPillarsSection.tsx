const cards = [
  {
    number: "01",
    title: "Increase access to finance for Black Enterprises",
    paragraphs: [
      "Provide affordable, appropriate funding for Black-owned and managed businesses, especially those underserved by commercial lenders, including start-ups, scale-ups, and distressed firms."
    ],
    hasPlaceholder: true
  },
  {
    number: "02",
    title: "Mobilise public-private investment for transformation",
    paragraphs: [
      "Pool resources from private corporations, DFIs, and donors into a large fund dedicated to B-BBEE, with voluntary contributions incentivised through B-BBEE scoring."
    ],
    hasPlaceholder: true
  },
  {
    number: "03",
    title: "Coordinate and enhance ESD impact",
    paragraphs: [
      "Serve as a central vehicle for Enterprise and Supplier Development (ESD), by addressing the current shortcomings of fragmented corporate initiatives. Instead of companies running numerous disparate projects, they can channel their ESD budgets into the Fund—either fully or partially—where resources are professionally managed and aligned with national priorities.",
      "This approach simplifies compliance, reduces administrative burden, and ensures that ESD contributions are invested in a coherent portfolio of programmes with measurable outcomes in business growth and job creation, while also linking supported enterprises to real market opportunities within corporate supply chains."
    ],
    hasPlaceholder: false
  },
  {
    number: "04",
    title: "Provide non-financial support and mentorship",
    paragraphs: [
      "Offer business development services including planning, feasibility studies, accreditation, mentorship, and training to address common SMME challenges."
    ],
    hasPlaceholder: false
  },
  {
    number: "05",
    title: "Promote Inclusive growth and job creation",
    paragraphs: [
      "Promotes inclusive growth by supporting job creation in labour-intensive sectors and stimulating local economies, while actively prioritising Black women, youth, and people with disabilities as business owners and beneficiaries to reduce inequality."
    ],
    hasPlaceholder: false
  },
  {
    number: "06",
    title: "Facilitate structural transformation of the economy",
    paragraphs: [
      "Develop Black industrialists, broaden ownership in strategic sectors, and deepen local supply chains in line with South Africa's industrial policy."
    ],
    hasPlaceholder: false
  }
];

const WhyPillarsSection = () => {
  return (
    <section id="why-pillars" className="w-full max-w-[1400px] mx-auto py-16 md:py-20 px-5 md:px-10 bg-white">
      {/* Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-16 md:mb-20 border-b-2 border-[#111111] pb-10">
        <div>
          <div className="w-6 h-6 bg-black mb-5" />
          <h2 className="text-3xl md:text-[3rem] font-extrabold uppercase tracking-[-1px] leading-none text-black">
            Why?
          </h2>
        </div>
        <div className="text-lg font-light text-[#333333]">
          <p className="mb-6">
            The Transformation Fund is designed as a strategic instrument to drive inclusive economic transformation in South Africa.
          </p>
          <p className="mb-0">
            By combining financial and non-financial support, mobilising public-private investment, and streamlining Enterprise and Supplier Development efforts, the Fund aims to empower Black-owned enterprises, foster job creation, and promote structural change across key sectors.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-10 lg:gap-y-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col border-l border-[#e0e0e0] pl-6 pb-3 transition-all duration-300 hover:border-l-4 hover:border-black"
          >
            <div>
              <span className="inline-block text-sm font-extrabold text-black bg-[#f4f4f4] px-2 py-1 mb-4">
                {card.number}
              </span>
              <h3 className="text-xl font-bold uppercase leading-[1.3] tracking-[-0.02em] text-black mb-4">
                {card.title}
              </h3>
              {card.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className={`text-[0.95rem] text-[#555555] ${pIndex > 0 ? 'mt-3' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {card.hasPlaceholder && (
              <div
                className="w-full h-[220px] md:h-[180px] lg:h-[220px] bg-[#f4f4f4] mt-8 flex items-center justify-center border border-dashed border-[#cccccc]"
                aria-label={`Placeholder for ${card.title.toLowerCase()} related image`}
              >
                <span className="text-xs font-semibold tracking-[1px] text-[#999999]">
                  IMAGE PLACEHOLDER
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPillarsSection;
