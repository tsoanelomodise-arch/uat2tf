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

import { memo } from "react";

const NewsHighlightsSection = memo(() => {
  return (
    <section className="bg-white">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_0.5fr]">
        {/* Left image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="News Highlights"
          className="w-full h-full min-h-[400px] object-cover grayscale"
          loading="lazy"
        />

        {/* News content */}
        <div className="p-12 bg-white">
          <span className="text-xs font-bold tracking-widest text-[#666666] uppercase">
            LATEST UPDATES
          </span>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[#222222] mt-2 mb-8">
            NEWS HIGHLIGHTS
          </h2>

          {newsItems.map((item, index) => (
            <div key={index} className={index < newsItems.length - 1 ? "mb-8" : ""}>
              <h4 className="text-base font-extrabold uppercase tracking-tight text-[#222222] mb-2">
                {item.title}
              </h4>
              <p className="text-[0.95rem] font-light text-[#666666] leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* QR Code sidebar */}
        <div className="bg-black text-white flex items-center justify-center p-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Scan to Follow Us
            </span>
            <img
              src="/images/social-media-qr-code.png"
              alt="Scan QR Code"
              className="w-4/5 h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

NewsHighlightsSection.displayName = "NewsHighlightsSection";

export default NewsHighlightsSection;
