import { Sprout, TrendingUp, Users, Shield } from "lucide-react";

const products = [
  {
    icon: Sprout,
    title: "Startup and informal business grants (capability vouchers)",
    description: "provide seed capital to early-stage and informal enterprises, disbursed in tranches tied to developmental milestones. These grants are easy to access and embedded with technical support to ensure effective use and business formalisation."
  },
  {
    icon: TrendingUp,
    title: "Growth and expansion loans (performance-based debt)",
    description: "offer patient, concessionary finance to established MSMEs ready to scale. Structured around operational performance rather than rigid collateral requirements, these loans are released in stages linked to capability improvements and business outcomes, with mentorship and monitoring built in."
  },
  {
    icon: Users,
    title: "Equity and co-investment instruments",
    description: "provide ownership capital to high-growth ventures and strategic industrial projects, particularly those led by Black entrepreneurs. These instruments allow the Fund to take equity stakes, co-invest with private partners, and structure broad-based ownership models that include communities and workers. Technical support and milestone-based disbursements ensure that equity investments drive both commercial success and transformation impact."
  },
  {
    icon: Shield,
    title: "Blended finance and guarantee instruments",
    description: "combine public and private capital to de-risk lending to underserved enterprises. These include partial credit guarantees, subsidised credit lines, and risk-sharing facilities that encourage commercial lenders to extend finance to MSMEs. Guarantees are tied to capability milestones and integrated with technical support, ensuring that risk-sharing leads to sustainable business growth."
  }
];

const ProductsContent = () => {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--ptf-accent))]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[hsl(var(--ptf-accent))]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[hsl(var(--ptf-heading))] mb-4 pb-4 border-b border-gray-200">
                    {product.title}
                  </h3>
                  <p className="text-[hsl(var(--ptf-text))] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsContent;
