import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  FileText, 
  Phone, 
  Wrench, 
  Zap, 
  Hammer, 
  Flame, 
  TreeDeciduous,
  Building2,
  BarChart3,
  Search,
  MousePointerClick,
  ArrowRight
} from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85";

const trades = [
  { icon: Wrench, name: "Home Services & Trades", desc: "Plumbers, electricians, builders, and home service providers.", slug: "home-services" },
  { icon: Zap, name: "Professional Services", desc: "Accountants, lawyers, consultants and B2B services.", slug: "professional-services" },
  { icon: Hammer, name: "Retail & E-commerce", desc: "Local shops, boutiques and online stores.", slug: "retail" },
  { icon: Flame, name: "Health & Wellness", desc: "Dentists, clinics, gyms and wellness centres.", slug: "health-wellness" },
  { icon: TreeDeciduous, name: "Food & Hospitality", desc: "Restaurants, cafes, hotels and catering.", slug: "food-hospitality" },
  { icon: Building2, name: "Beauty & Personal Care", desc: "Salons, spas, barbers and beauty services.", slug: "beauty" },
];

const areas = [
  { name: "London", slug: "london" },
  { name: "Reading", slug: "reading" },
  { name: "Guildford", slug: "guildford" },
  { name: "Oxford", slug: "oxford" },
  { name: "Milton Keynes", slug: "milton-keynes" },
  { name: "Brighton", slug: "brighton" },
  { name: "Bournemouth", slug: "bournemouth" },
];

const howItWorks = [
  { step: "01", title: "Search Visibility", desc: "Appear when people search for your services." },
  { step: "02", title: "Service Pages", desc: "Pages built around real searches and locations." },
  { step: "03", title: "Enquiries", desc: "Calls and quote requests you can track." },
];

const features = [
  { 
    icon: MapPin, 
    title: "Local Visibility", 
    desc: "Improve Google Maps and local rankings so you show up when people search for your services.",
    points: ["Google Business Profile support", "Service + area targeting", "Trust signals and consistency"]
  },
  { 
    icon: FileText, 
    title: "Pages That Convert", 
    desc: "We structure pages to turn visitors into calls and quote requests.",
    points: ["Clear service pages", "Stronger calls-to-action", "FAQs that pre-sell"]
  },
  { 
    icon: BarChart3, 
    title: "Technical Fixes", 
    desc: "Remove blockers so Google can crawl, index, and rank your site properly.",
    points: ["Speed and hygiene", "Internal linking", "Tracking and measurement"]
  },
];

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20" data-testid="hero-section">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="" 
            className="w-full h-full object-cover brightness-[0.3] blur"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 opacity-0 animate-slide-up">
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest">
                SEO For Local Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6 opacity-0 animate-slide-up delay-100">
              Dominate Your<br />
              <span className="text-[#FF5500]">Local Market</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl opacity-0 animate-slide-up delay-200">
              We help local businesses get found on Google and turn clicks into customers. 
              From restaurants to retail, professional services to home services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-slide-up delay-300">
              <Link to="/contact">
                <Button 
                  data-testid="hero-cta-primary"
                  className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px] text-base"
                >
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  data-testid="hero-cta-secondary"
                  variant="outline"
                  className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 text-base"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            
            <p className="text-zinc-500 text-sm opacity-0 animate-slide-up delay-400">
              No long-term contracts. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 border-t border-white/10" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
              From Search to Enquiry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div 
                key={item.step}
                className="relative group"
                data-testid={`how-it-works-step-${index + 1}`}
              >
                <div className="bg-[#121212] border border-white/10 p-8 h-full hover:border-[#FF5500] transition-colors duration-300">
                  <span className="text-[#FF5500] text-6xl font-bold opacity-20 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    {index === 0 && <Search className="w-8 h-8 text-[#FF5500]" />}
                    {index === 1 && <FileText className="w-8 h-8 text-[#FF5500]" />}
                    {index === 2 && <Phone className="w-8 h-8 text-[#FF5500]" />}
                  </div>
                  <h3 className="text-xl font-semibold uppercase text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-zinc-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Businesses Choose Us */}
      <section className="py-24 md:py-32 bg-[#121212]" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Why Local Businesses Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Simple SEO Focused on Results
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Not jargon. Real results that grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FF5500] transition-colors duration-300 group"
                data-testid={`feature-card-${index + 1}`}
              >
                <feature.icon className="w-10 h-10 text-[#FF5500] mb-6" />
                <h3 className="text-xl font-semibold uppercase text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-zinc-500 text-sm">
                      <span className="w-1 h-1 bg-[#FF5500] rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses We Work With */}
      <section className="py-24 md:py-32 border-t border-white/10" data-testid="trades-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Businesses We Work With
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Pages Built to Rank & Convert
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trades.map((trade, index) => (
              <Link 
                to={`/services/${trade.slug}`}
                key={trade.name}
                className="bg-[#121212] border border-white/10 p-6 hover:border-[#FF5500] transition-all duration-300 group cursor-pointer"
                data-testid={`trade-card-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF5500]/10 group-hover:bg-[#FF5500]/20 transition-colors">
                    <trade.icon className="w-6 h-6 text-[#FF5500]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold uppercase text-white mb-2 group-hover:text-[#FF5500] transition-colors">
                      {trade.name}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {trade.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Target */}
      <section className="py-24 md:py-32 bg-[#121212]" data-testid="areas-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Areas We Target
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Tell Us Where You Want Enquiries
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Tell us where you want enquiries from and we'll build the pages.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area) => (
              <Link 
                to={`/locations/${area.slug}`}
                key={area.name}
                className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 px-6 py-3 hover:border-[#FF5500] transition-colors cursor-pointer group"
                data-testid={`area-${area.slug}`}
              >
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span className="text-white text-sm font-medium group-hover:text-[#FF5500] transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>

          <p className="text-center text-zinc-500 text-sm mt-8">
            + Many more locations across the UK
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Get More Enquiries?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and a simple plan to grow your business online.
          </p>
          <Link to="/contact">
            <Button 
              data-testid="cta-button"
              className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px] text-base"
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
