const ApplicationProcess = () => {
  const steps = [
    {
      title: "Initial Assessment",
      description: "Complete our online eligibility assessment to determine the best funding program for your needs.",
      icon: "📋"
    },
    {
      title: "Document Submission",
      description: "Submit required documentation through our secure online portal with dedicated support.",
      icon: "📄"
    },
    {
      title: "Review & Approval", 
      description: "Our expert team reviews applications within 14 business days with transparent communication.",
      icon: "🔍"
    },
    {
      title: "Funding Disbursement",
      description: "Approved funds are disbursed quickly with ongoing support and monitoring throughout the term.",
      icon: "💰"
    }
  ];

  const stats = [
    { number: "24hrs", label: "Average Response Time" },
    { number: "14", label: "Business Days Review" },
    { number: "95%", label: "Approval Rate" },
    { number: "48hrs", label: "Disbursement Time" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Simple Application Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A streamlined, digitally-enabled process that brings together assessment, documentation, 
            and approval through transparent workflows and efficient timelines.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Process Steps */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">How Our Process Works</h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats/Visual */}
          <div className="text-center">
            {/* Central Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center text-white text-3xl mb-4">
                📊
              </div>
              <h4 className="text-xl font-bold text-primary">Process Efficiency</h4>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;