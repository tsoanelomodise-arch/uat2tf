import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Card className="bg-white/10 border-white/20 backdrop-blur-lg shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful businesses that have accelerated their growth through our comprehensive funding and support programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => (document.getElementById('assessment-modal') as HTMLDialogElement)?.showModal()}
              >
                Start Your Application
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
                onClick={() => (document.getElementById('consultation-modal') as HTMLDialogElement)?.showModal()}
              >
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;