import logoDtic from "@/assets/logo-dtic.png";
import logoNef from "@/assets/logo-nef.png";
import logoSeda from "@/assets/logo-seda.png";
import logoIdc from "@/assets/logo-idc.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Footer = () => {
  const partners = [
    {
      name: "The Department of Trade, Industry and Competition (the dtic)",
      logo: logoDtic
    },
    {
      name: "National Empowerment Fund",
      logo: logoNef
    },
    {
      name: "Small Enterprise Development and Finance Agency",
      logo: logoSeda
    },
    {
      name: "The Industrial Development Corporation of South Africa Ltd (IDC)",
      logo: logoIdc
    }
  ];

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Our Strategic Partners
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Working together with leading government agencies and development finance institutions 
            to drive economic transformation across South Africa
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-6xl mx-auto"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {partners.concat(partners).map((partner, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 h-32 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    width="120"
                    height="80"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © 2026 Transformation Fund. All rights reserved. | Building an inclusive economy for all South Africans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;