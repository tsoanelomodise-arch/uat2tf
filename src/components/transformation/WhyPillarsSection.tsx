const WhyPillarsSection = () => {
  return (
    <section id="why-pillars" className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why?</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-4xl">
          The Transformation Fund is designed as a strategic instrument to drive inclusive economic transformation in South Africa. By combining financial and non-financial support, mobilising public-private investment, and streamlining Enterprise and Supplier Development efforts, the Fund aims to empower Black-owned enterprises, foster job creation, and promote structural change across key sectors.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#00703C] rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Increase access to finance for Black Enterprises</h3>
                <p className="text-gray-500 leading-relaxed">
                  Provide affordable, appropriate funding for Black-owned and managed businesses, especially those underserved by commercial lenders, including start-ups, scale-ups, and distressed firms.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#00703C] rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mobilise public-private investment for transformation</h3>
                <p className="text-gray-500 leading-relaxed">
                  Pool resources from private corporations, DFIs, and donors into a large fund dedicated to B-BBEE, with voluntary contributions incentivised through B-BBEE scoring.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Wide */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#00703C] rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Coordinate and enhance ESD impact</h3>
                <p className="text-gray-500 leading-relaxed">
                  Serve as a central vehicle for Enterprise and Supplier Development (ESD), by addressing the current shortcomings of fragmented corporate initiatives, ensuring coordination and long-term impact through mechanisms like the proposed Transformation Index, Transformation Passport, and Clearinghouse.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#00703C] rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Provide non-financial support and mentorship</h3>
                <p className="text-gray-500 leading-relaxed">
                  Offer business development services including planning, feasibility studies, accreditation, mentorship, and training to address common SMME challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#00703C] rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Promote Inclusive growth and job creation</h3>
                <p className="text-gray-500 leading-relaxed">
                  Promotes inclusive growth by supporting job creation in labour-intensive sectors and stimulating local economies, while actively prioritising Black women, youth, and people with disabilities as business owners and beneficiaries to reduce inequality.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 - Wide */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#00703C] rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Facilitate structural transformation of the economy</h3>
                <p className="text-gray-500 leading-relaxed">
                  Develop Black industrialists, broaden ownership in strategic sectors, and deepen local supply chains in line with South Africa's industrial policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPillarsSection;
