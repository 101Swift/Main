import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Wrench, 
  FileText, 
  BarChart3, 
  Phone, 
  MousePointerClick,
  Search,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Improve visibility on Google Maps and local results.",
    points: [
      "Google Business Profile support",
      "Service + area page structure",
      "Citations and consistency checks",
      "Review strategy guidance"
    ]
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    desc: "Fix the blockers that stop rankings and performance.",
    points: [
      "Crawlability and indexation checks",
      "Speed and performance improvements",
      "Internal linking structure",
      "Tracking setup and tidy analytics"
    ]
  },
  {
    icon: FileText,
    title: "On-page SEO",
    desc: "Pages built around real searches and real intent.",
    points: [
      "Service page optimisation",
      "Title/meta and heading structure",
      "FAQs to increase conversions",
      "Content improvements month by month"
    ]
  },
  {
    icon: MousePointerClick,
    title: "PPC Ads",
    desc: "Targeted advertising to get immediate leads.",
    points: [
      "Google Ads setup and management",
      "Local targeting for your service areas",
      "Budget optimisation",
      "Conversion tracking and reporting"
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting",
    desc: "Clear updates, what changed, and what we're doing next.",
    points: [
      "Top actions completed",
      "What's moving and why",
      "Next priorities",
      "Plain-English updates"
    ]
  },
  {
    icon: Phone,
    title: "Conversion Improvements",
    desc: "We tighten pages to increase calls and quote requests.",
    points: [
      "Clear CTAs",
      "Better page flow and readability",
      "Trust signals and proof points",
      "Mobile optimisation"
    ]
  },
];

const process = [
  { 
    step: "1", 
    title: "Audit", 
    desc: "We review your site, competitors, and the searches that matter." 
  },
  { 
    step: "2", 
    title: "Fix", 
    desc: "We fix foundations: structure, technical issues, and conversion basics." 
  },
  { 
    step: "3", 
    title: "Build", 
    desc: "We improve pages and add content around high-intent keywords." 
  },
  { 
    step: "4", 
    title: "Grow", 
    desc: "Monthly work focused on rankings, enquiries, and what's next." 
  },
];

export default function Services() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="services-page">
      <SEO 
        title="SEO Services for Local Businesses"
        description="Local SEO, technical SEO, on-page optimisation, and PPC advertising services. We help UK businesses rank higher on Google and get more customers."
        canonical="/services"
      />
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Services
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              SEO Services<br />
              <span className="text-[#FF5500]">For Local Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              Local SEO, technical fixes, and pages built to turn clicks into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  data-testid="services-cta-primary"
                  className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  data-testid="services-cta-secondary"
                  variant="outline"
                  className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Work That Improves Rankings
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              And helps visitors take action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-[#121212] border border-white/10 p-8 hover:border-[#FF5500] transition-all duration-300 group"
                data-testid={`service-card-${index + 1}`}
              >
                <div className="p-3 bg-[#FF5500]/10 w-fit mb-6 group-hover:bg-[#FF5500]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#FF5500]" />
                </div>
                <h3 className="text-xl font-semibold uppercase text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-zinc-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#FF5500] mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-[#121212]" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Simple Steps
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              So you know what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="relative"
                data-testid={`process-step-${index + 1}`}
              >
                <div className="bg-[#0A0A0A] border border-white/10 p-8 h-full hover:border-[#FF5500] transition-colors duration-300">
                  <span className="text-[#FF5500] text-5xl font-bold mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold uppercase text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-zinc-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="services-cta">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and a simple plan to grow your business online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button 
                data-testid="services-bottom-cta-primary"
                className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]"
              >
                Get a Free Consultation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                data-testid="services-bottom-cta-secondary"
                variant="outline"
                className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
