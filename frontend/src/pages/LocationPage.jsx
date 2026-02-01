import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, ArrowRight, Building2 } from "lucide-react";

const locationData = {
  "london": {
    name: "London",
    description: "London is the UK's largest market for local businesses. With over 9 million residents and millions of daily searches, ranking well in London can transform your business.",
    population: "9+ million",
    businesses: "1 million+",
    searchVolume: "High competition"
  },
  "reading": {
    name: "Reading",
    description: "Reading is a thriving business hub in Berkshire with excellent transport links to London. Local businesses here benefit from a wealthy commuter population seeking quality services.",
    population: "230,000+",
    businesses: "15,000+",
    searchVolume: "Medium competition"
  },
  "guildford": {
    name: "Guildford",
    description: "Guildford is an affluent town in Surrey with high disposable income residents. Local businesses can capture premium customers through effective local SEO.",
    population: "150,000+",
    businesses: "8,000+",
    searchVolume: "Medium competition"
  },
  "oxford": {
    name: "Oxford",
    description: "Oxford combines a historic university city with a modern business economy. Local businesses benefit from both student and professional populations.",
    population: "155,000+",
    businesses: "10,000+",
    searchVolume: "Medium competition"
  },
  "milton-keynes": {
    name: "Milton Keynes",
    description: "Milton Keynes is one of the UK's fastest-growing cities with a young, tech-savvy population. Perfect for businesses looking to establish local dominance.",
    population: "270,000+",
    businesses: "12,000+",
    searchVolume: "Medium competition"
  },
  "brighton": {
    name: "Brighton",
    description: "Brighton is a vibrant coastal city with a creative economy and strong tourism sector. Local businesses can tap into both residents and visitors.",
    population: "290,000+",
    businesses: "20,000+",
    searchVolume: "High competition"
  },
  "bournemouth": {
    name: "Bournemouth",
    description: "Bournemouth is a popular coastal town with a growing digital economy. Local businesses benefit from tourism and a quality-focused resident population.",
    population: "185,000+",
    businesses: "10,000+",
    searchVolume: "Medium competition"
  }
};

const services = [
  "Google Business Profile optimisation",
  "Local keyword research and targeting",
  "Location-specific landing pages",
  "Local citation building",
  "Review generation strategy",
  "Local link building",
  "Mobile optimisation",
  "Local schema markup"
];

const industries = [
  { name: "Home Services & Trades", slug: "home-services" },
  { name: "Professional Services", slug: "professional-services" },
  { name: "Retail & E-commerce", slug: "retail" },
  { name: "Health & Wellness", slug: "health-wellness" },
  { name: "Food & Hospitality", slug: "food-hospitality" },
  { name: "Beauty & Personal Care", slug: "beauty" }
];

export default function LocationPage() {
  const { slug } = useParams();
  const location = locationData[slug] || locationData["london"];

  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="location-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-[#FF5500]" />
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest">
                {location.name}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              SEO Services in<br />
              <span className="text-[#FF5500]">{location.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
                  Get a Free {location.name} Audit
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Stats */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF5500] mb-2">{location.population}</p>
              <p className="text-zinc-400 text-sm uppercase tracking-wider">Population</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF5500] mb-2">{location.businesses}</p>
              <p className="text-zinc-400 text-sm uppercase tracking-wider">Local Businesses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF5500] mb-2">{location.searchVolume}</p>
              <p className="text-zinc-400 text-sm uppercase tracking-wider">Search Competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                Local SEO in {location.name}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
                Dominate {location.name} Search Results
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                We help {location.name} businesses rank higher on Google Maps and local search results. 
                Our proven local SEO strategies drive more calls, visits, and enquiries from customers 
                actively searching for your services.
              </p>
              <Link to="/contact">
                <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-none">
                  Start Ranking in {location.name}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 bg-[#121212] border border-white/10 p-4">
                  <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Industries in {location.name}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              We Work With All Local Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                to={`/services/${industry.slug}`}
                key={industry.slug}
                className="bg-[#0A0A0A] border border-white/10 p-6 hover:border-[#FF5500] transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#FF5500]" />
                  <span className="text-white font-medium group-hover:text-[#FF5500] transition-colors">
                    {industry.name}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#FF5500] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Grow in {location.name}?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free audit and see how we can help your {location.name} business get more customers from Google.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
              Get Your Free {location.name} Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
