import SEO from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";

const industryData = {
  "home-services": {
    name: "Home Services & Trades",
    headline: "SEO for Home Services & Trades",
    description: "We help plumbers, electricians, builders, HVAC technicians, landscapers, and other home service providers dominate local search results and get more calls.",
    services: [
      "Emergency service keywords targeting",
      "Service area page creation",
      "Google Business Profile optimisation",
      "Review generation campaigns",
      "Before/after portfolio pages",
      "Local citation building"
    ],
    benefits: [
      "Rank for 'near me' searches",
      "Appear in Google Maps 3-pack",
      "Get more emergency callouts",
      "Build trust with reviews",
      "Target specific service areas",
      "Track calls and enquiries"
    ],
    examples: ["Plumbers", "Electricians", "Builders", "Roofers", "HVAC", "Landscapers", "Painters", "Carpenters"]
  },
  "professional-services": {
    name: "Professional Services",
    headline: "SEO for Professional Services",
    description: "We help accountants, lawyers, consultants, financial advisors, and B2B service providers attract high-value clients through strategic local SEO.",
    services: [
      "Industry-specific keyword research",
      "Thought leadership content",
      "Professional directory listings",
      "LinkedIn integration",
      "Case study pages",
      "Service page optimisation"
    ],
    benefits: [
      "Attract high-value clients",
      "Build professional authority",
      "Rank for specialist searches",
      "Generate qualified leads",
      "Showcase expertise",
      "Dominate local professional searches"
    ],
    examples: ["Accountants", "Lawyers", "Consultants", "Financial Advisors", "Architects", "Engineers", "IT Services"]
  },
  "retail": {
    name: "Retail & E-commerce",
    headline: "SEO for Retail & E-commerce",
    description: "We help local shops, boutiques, and online stores increase foot traffic and online sales through targeted local and e-commerce SEO strategies.",
    services: [
      "Product page optimisation",
      "Local inventory ads setup",
      "Google Shopping integration",
      "Category page SEO",
      "Store locator pages",
      "Review and rating schema"
    ],
    benefits: [
      "Increase foot traffic",
      "Boost online visibility",
      "Compete with big retailers",
      "Drive local purchases",
      "Showcase product inventory",
      "Build customer loyalty"
    ],
    examples: ["Clothing Boutiques", "Gift Shops", "Hardware Stores", "Bookshops", "Sports Shops", "Electronics"]
  },
  "health-wellness": {
    name: "Health & Wellness",
    headline: "SEO for Health & Wellness",
    description: "We help dental practices, clinics, gyms, physiotherapists, and wellness centres attract more patients and members through healthcare-focused SEO.",
    services: [
      "HIPAA-compliant content strategy",
      "Appointment booking integration",
      "Medical schema markup",
      "Patient review management",
      "Condition-specific pages",
      "Insurance and pricing pages"
    ],
    benefits: [
      "Attract new patients",
      "Rank for symptom searches",
      "Build medical authority",
      "Increase appointments",
      "Manage online reputation",
      "Compete locally"
    ],
    examples: ["Dentists", "Physios", "Gyms", "Chiropractors", "Opticians", "Private Clinics", "Mental Health"]
  },
  "food-hospitality": {
    name: "Food & Hospitality",
    headline: "SEO for Food & Hospitality",
    description: "We help restaurants, cafes, hotels, and catering businesses get more bookings and customers through local SEO and reputation management.",
    services: [
      "Menu page optimisation",
      "Reservation system integration",
      "Food photography SEO",
      "Event and catering pages",
      "Multi-location SEO",
      "Delivery platform optimisation"
    ],
    benefits: [
      "Increase reservations",
      "Rank for cuisine searches",
      "Attract tourists and locals",
      "Boost delivery orders",
      "Manage reviews effectively",
      "Promote events and specials"
    ],
    examples: ["Restaurants", "Cafes", "Hotels", "Pubs", "Catering", "Food Trucks", "Bakeries"]
  },
  "beauty": {
    name: "Beauty & Personal Care",
    headline: "SEO for Beauty & Personal Care",
    description: "We help salons, spas, barbers, and beauty service providers attract more clients through visually-focused local SEO and booking optimisation.",
    services: [
      "Service menu optimisation",
      "Online booking integration",
      "Instagram and social SEO",
      "Before/after galleries",
      "Staff profile pages",
      "Treatment-specific pages"
    ],
    benefits: [
      "Fill appointment books",
      "Showcase your work",
      "Attract style-conscious clients",
      "Build social proof",
      "Rank for treatment searches",
      "Increase repeat bookings"
    ],
    examples: ["Hair Salons", "Barbers", "Nail Salons", "Spas", "Beauty Therapists", "Tattoo Studios", "Aesthetics"]
  }
};

const locations = [
  { name: "London", slug: "london" },
  { name: "Reading", slug: "reading" },
  { name: "Guildford", slug: "guildford" },
  { name: "Oxford", slug: "oxford" },
  { name: "Milton Keynes", slug: "milton-keynes" },
  { name: "Brighton", slug: "brighton" },
  { name: "Bournemouth", slug: "bournemouth" }
];

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industryData[slug] || industryData["home-services"];

  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="industry-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              {industry.name}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              {industry.headline.split(' ').slice(0, 2).join(' ')}<br />
              <span className="text-[#FF5500]">{industry.headline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              {industry.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
                  Get a Free Consultation
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

      {/* Business Types */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {industry.examples.map((example) => (
              <span key={example} className="bg-[#121212] border border-white/10 px-4 py-2 text-zinc-400 text-sm">
                {example}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Benefits */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What We Do */}
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-8">
                Our {industry.name} SEO Services
              </h2>
              <div className="space-y-4">
                {industry.services.map((service) => (
                  <div key={service} className="flex items-start gap-3 bg-[#121212] border border-white/10 p-4">
                    <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-8">
                What You'll Achieve
              </h2>
              <div className="space-y-4">
                {industry.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-[#121212] border border-white/10 p-4">
                    <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Service Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              {industry.name} SEO by Location
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide {industry.name.toLowerCase()} SEO services across the UK. Select your area.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <Link
                to={`/locations/${location.slug}`}
                key={location.slug}
                className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 px-6 py-3 hover:border-[#FF5500] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span className="text-white text-sm font-medium group-hover:text-[#FF5500] transition-colors">
                  {location.name}
                </span>
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
            Ready to Grow Your {industry.name} Business?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and see how we can help you attract more customers from Google.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
              Get Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
