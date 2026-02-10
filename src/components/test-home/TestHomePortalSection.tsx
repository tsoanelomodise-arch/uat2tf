const serviceItems = [
  { number: "01", title: "Status Tracking" },
  { number: "02", title: "Secure Document Upload" },
  { number: "03", title: "Guided Application Process" },
];

const TestHomePortalSection = () => {
  return (
    <section className="py-16 bg-white mb-8">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Text + YouTube embed */}
        <div>
          <span className="text-xs font-bold tracking-widest text-[#666666] uppercase">
            SECURE PORTAL
          </span>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[#222222] mt-2 mb-4">
            How to apply
          </h2>
          <p className="text-[0.95rem] font-light text-[#666666] leading-relaxed mb-6">
            Register, apply, and track your status through our secure portal environment.
          </p>

          {/* YouTube embed */}
          <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/C3yyl_4lrd4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Right: Numbered service items */}
        <div className="lg:pl-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mr-6 font-bold text-sm">
                {item.number}
              </div>
              <h4 className="text-base font-extrabold uppercase tracking-tight text-[#222222]">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestHomePortalSection;
