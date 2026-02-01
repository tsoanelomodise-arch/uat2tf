import { memo } from "react";
import { Link } from "react-router-dom";

const AboutHero = memo(() => {
  return (
    <header className="pt-[10px] pb-[40px] phakamani-hero-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Hero Content */}
          <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
            {/* Headline */}
            <h1 
              className="phakamani-headline text-black mb-8" 
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Advancing the economic agenda
            </h1>
          </div>

          {/* Hero Visual - Bakery Only */}
          <div className="order-1 lg:order-2" aria-hidden="true">
            <div className="relative flex justify-center items-center h-[500px]">
              <div className="relative w-full h-full max-w-[650px]">
                <div className="phakamani-slide slide-bakery active">
                  <img 
                    src="https://www.wonderlandstudio.co.za/tfrevised/BakeryBack.png" 
                    className="layer-back-bakery"
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                  />
                  <img 
                    src="https://www.wonderlandstudio.co.za/tfrevised/BakeryFront.png" 
                    className="layer-front-bakery"
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="steam-source">
                    <div className="steam-puff"></div>
                    <div className="steam-puff"></div>
                    <div className="steam-puff"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

AboutHero.displayName = "AboutHero";

export default AboutHero;
