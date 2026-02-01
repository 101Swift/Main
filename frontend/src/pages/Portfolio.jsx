import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const portfolioItems = [
  {
    title: "Timber Services",
    desc: "Elegant, premium website for a bespoke carpentry business. Clean design showcasing craftsmanship with strong calls-to-action.",
    tags: ["Web Design", "Carpentry", "Lead Generation"],
    image: "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/296j55t4_carpentry-website.png"
  },
  {
    title: "PowerPro Electricians",
    desc: "Bold, high-converting website for London electricians. Features emergency service CTA, trust signals, and clear pricing.",
    tags: ["Web Design", "Electricians", "Local SEO"],
    image: "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/f1wpodh7_electrician-website.png"
  },
  {
    title: "WebCraft Agency",
    desc: "Modern dark-themed website for a web design agency. Professional aesthetic with smooth animations and clear service offerings.",
    tags: ["Web Design", "Agency", "Dark Theme"],
    image: "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/1q8als6h_work-1.webp"
  },
  {
    title: "CMW Roofing & Building",
    desc: "Professional website for roofing and building services in Hampshire. Full-screen hero with compelling visuals and trust signals.",
    tags: ["Roofing", "Building", "Lead Generation"],
    image: "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/4cc4zrwi_work-2.webp"
  },
  {
    title: "LPM Carpentry",
    desc: "Clean, service-focused website for bespoke carpentry. Showcases kitchens, media walls, and outdoor works with gallery integration.",
    tags: ["Carpentry", "Gallery", "Services"],
    image: "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/tm7drsxo_work-3.webp"
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
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              Real websites we've built for real businesses. Each project designed to rank and convert.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 md:py-32" data-testid="portfolio-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.title}
                className={`group bg-[#121212] border border-white/10 overflow-hidden hover:border-[#FF5500] transition-all duration-300 ${index === 0 ? 'md:col-span-2' : ''}`}
                data-testid={`portfolio-item-${index + 1}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${index === 0 ? 'h-[400px]' : 'h-64'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
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
              { value: "30+", label: "Industries Served" },
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
            Get a free consultation and see how we can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button 
                data-testid="portfolio-cta-primary"
                className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]"
              >
                Get a Free Consultation
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
