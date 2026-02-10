const newsItems = [
  {
    title: "News Headline 1",
    summary: "Short summary of the news item goes here. It describes the key update briefly.",
  },
  {
    title: "News Headline 2",
    summary: "Short summary of the news item goes here. It describes the key update briefly.",
  },
  {
    title: "News Headline 3",
    summary: "Short summary of the news item goes here. It describes the key update briefly.",
  },
];

const NewsHighlightsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10">
        {/* Section Label & Heading */}
        <p className="text-sm font-semibold tracking-widest text-[#64748B] uppercase mb-2">
          LATEST UPDATES
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-10">
          NEWS HIGHLIGHTS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left image placeholder */}
          <div className="lg:col-span-3">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-[#64748B] text-sm">Image</span>
            </div>
          </div>

          {/* News items */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-l-black"
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#334155] text-sm leading-relaxed">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>

          {/* QR Code sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-black rounded-lg p-6 flex flex-col items-center justify-center h-full text-center">
              <img
                src="/images/social-media-qr-code.png"
                alt="QR code to follow us on social media"
                className="w-32 h-32 mb-4"
                loading="lazy"
              />
              <p className="text-white font-semibold text-sm">
                Scan to Follow Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlightsSection;
