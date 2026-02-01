const partners = [
  "African Bank",
  "Localisation Fund",
  "Tirisano Fund",
  "JSE",
  "Takealot",
  "Uber",
];

const PartnerTicker = () => {
  return (
    <section className="bg-white py-8 border-b border-gray-200 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {/* First set */}
          {partners.map((partner, index) => (
            <span key={`first-${index}`} className="partner-text">
              {partner}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, index) => (
            <span key={`second-${index}`} className="partner-text">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTicker;
