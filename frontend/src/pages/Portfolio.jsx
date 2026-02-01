import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";

const portfolioItems = [
  {
    title: "Timber Services",
    desc: "Clean, premium website for a bespoke carpentry and timber services business. Built to showcase craftsmanship, build trust, and drive enquiries.",
    tags: ["Web Design", "Trades", "Lead Generation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  },
  {
    title: "London Electricians",
    desc: "Fast, mobile-first website for emergency electrical services. Optimised for local search and quick contact.",
    tags: ["Local SEO", "Electricians", "Mobile-First"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
  },
  {
    title: "Surrey Plumbing Co",
    desc: "Service-focused website with clear pricing and booking. Built to rank for local plumbing searches across Surrey.",
    tags: ["Web Design", "Plumbers", "SEO"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop"
  },
  {
    title: "Green Gardens",
    desc: "Portfolio-style website for a landscaping business. Showcasing project galleries and seasonal services.",
    tags: ["Landscapers", "Portfolio", "Visual"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
  },
  {
    title: "Heat Pro Solutions",
    desc: "Lead generation website for heating engineers. Focus on boiler services and emergency callouts.",
    tags: ["Heating", "Lead Gen", "Local SEO"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop"
  },
  {
    title: "Oxford Builders",
    desc: "Extension and renovation specialist website. Before/after galleries and customer testimonials.",
    tags: ["Builders", "Web Design", "Trust Signals"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="portfolio-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10" data-testid="portfolio-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              Recent Work
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              A few examples of our work. Ask for trade-specific examples if you want.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 md:py-32" data-testid="portfolio-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.title}
                className="group bg-[#121212] border border-white/10 overflow-hidden hover:border-[#FF5500] transition-all duration-300"
                data-testid={`portfolio-item-${index + 1}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold uppercase text-white mb-3 group-hover:text-[#FF5500] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="flex items-center gap-1 text-xs text-zinc-500 bg-[#0A0A0A] px-3 py-1 border border-white/10"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-[#121212]" data-testid="portfolio-stats">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Websites Built" },
              { value: "200%", label: "Avg Traffic Increase" },
              { value: "30+", label: "Trades Served" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} data-testid={`stat-${index + 1}`}>
                <p className="text-4xl md:text-5xl font-bold text-[#FF5500] mb-2">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="portfolio-cta">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free audit and see how we can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button 
                data-testid="portfolio-cta-primary"
                className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]"
              >
                Get a Free Audit
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                data-testid="portfolio-cta-secondary"
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
