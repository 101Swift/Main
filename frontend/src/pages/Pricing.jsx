import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  ArrowRight,
  Search,
  FileText,
  Phone,
  Link2
} from "lucide-react";

const plans = [
  {
    name: "Website + SEO Setup",
    price: "£399.99",
    period: "One-off",
    desc: "Best if you need a clean foundation that can rank.",
    features: [
      "Fast, responsive website build",
      "On-page SEO structure (titles, headings, internal linking)",
      "Technical basics (indexing signals, sitemap/crawl hygiene)",
      "Tracking setup so you can measure enquiries"
    ],
    popular: false
  },
  {
    name: "Monthly Growth",
    price: "£150",
    period: "per month",
    desc: "Ongoing work to grow rankings and enquiries month after month.",
    features: [
      "Technical fixes and maintenance",
      "Content + page improvements",
      "Local SEO support",
      "Monthly priorities and recommendations"
    ],
    popular: true
  },
  {
    name: "Backlinks Add-on",
    price: "£100",
    period: "per month",
    desc: "Consistent link velocity and simple reporting.",
    features: [
      "30 backlinks per month",
      "Quality link building",
      "Monthly reporting",
      "Authority growth"
    ],
    popular: false
  },
];

const faqs = [
  {
    q: "Is there a contract?",
    a: "No long-term contracts. Cancel anytime."
  },
  {
    q: "How long does SEO take?",
    a: "Most sites see movement in 2–3 months, then compounding growth."
  },
  {
    q: "Do I need backlinks?",
    a: "Not always. It depends on competition. You can add them later."
  },
];

const benefits = [
  { icon: Check, title: "Clear Priorities", desc: "We don't do \"everything\". We do what matters first." },
  { icon: Phone, title: "Built for Enquiries", desc: "Pages are structured to turn visitors into calls and quote requests." },
  { icon: FileText, title: "Plain-English Updates", desc: "You'll know what changed and what we're doing next." },
];

const howItWorks = [
  { step: "01", title: "Search Visibility", desc: "Appear when people search for your services." },
  { step: "02", title: "Service Pages", desc: "Pages built around real searches and locations." },
  { step: "03", title: "Enquiries", desc: "Calls and quote requests you can track." },
];

export default function Pricing() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="pricing-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10" data-testid="pricing-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
            Simple Pricing<br />
            <span className="text-[#FF5500]">Built for Trades</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Start with a one-off setup. Add monthly growth if you want consistent enquiries.
          </p>
          <p className="text-zinc-500 text-sm">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* How It Works Mini */}
      <section className="py-16 border-b border-white/10" data-testid="pricing-how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <div 
                key={item.step}
                className="flex items-center gap-4 p-4"
                data-testid={`pricing-step-${index + 1}`}
              >
                <span className="text-[#FF5500] text-3xl font-bold">{item.step}</span>
                <div>
                  <h3 className="text-white font-semibold text-sm uppercase">{item.title}</h3>
                  <p className="text-zinc-500 text-xs">{item.desc}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-zinc-600 ml-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 md:py-32" data-testid="pricing-cards">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Plans
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
              Two Clear Options
            </h2>
            <p className="text-zinc-400 mt-4">Add-ons are optional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`flex flex-col h-full p-10 ${
                  plan.popular 
                    ? "bg-[#121212] border-2 border-[#FF5500] shadow-[0_0_30px_rgba(255,85,0,0.15)]" 
                    : "bg-[#121212] border border-white/10"
                } hover:border-[#FF5500] transition-colors duration-300`}
                data-testid={`pricing-card-${index + 1}`}
              >
                {plan.popular && (
                  <span className="text-[#FF5500] text-xs font-bold uppercase tracking-widest mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold uppercase text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-8">
                  {plan.desc}
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <Check className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button 
                    data-testid={`pricing-card-${index + 1}-cta`}
                    className={`w-full font-bold uppercase tracking-wider py-4 rounded-none transition-all duration-300 ${
                      plan.popular 
                        ? "bg-[#FF5500] hover:bg-[#FF5500]/90 text-white" 
                        : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-400 text-sm mt-8">
            Typical path: <span className="text-white">£399.99</span> setup → then optional <span className="text-white">£150/month</span> growth. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-[#121212]" data-testid="pricing-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              What You Get
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
              Simple, Enquiry-Focused
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FF5500] transition-colors duration-300"
                data-testid={`benefit-card-${index + 1}`}
              >
                <benefit.icon className="w-8 h-8 text-[#FF5500] mb-4" />
                <h3 className="text-lg font-semibold uppercase text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32" data-testid="pricing-faqs">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={faq.q}
                className="bg-[#121212] border border-white/10 p-6"
                data-testid={`faq-${index + 1}`}
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-zinc-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 md:py-32 bg-[#121212]" data-testid="pricing-next-steps">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                Next Steps
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
                Clear Steps &<br />Fast Momentum
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-zinc-300">
                  <span className="w-8 h-8 bg-[#FF5500] flex items-center justify-center text-white font-bold text-sm">1</span>
                  Quick call to confirm services and target areas
                </li>
                <li className="flex items-center gap-4 text-zinc-300">
                  <span className="w-8 h-8 bg-[#FF5500] flex items-center justify-center text-white font-bold text-sm">2</span>
                  Audit + priorities shared
                </li>
                <li className="flex items-center gap-4 text-zinc-300">
                  <span className="w-8 h-8 bg-[#FF5500] flex items-center justify-center text-white font-bold text-sm">3</span>
                  Work starts
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/contact">
                <Button 
                  data-testid="pricing-cta-primary"
                  className="w-full bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  data-testid="pricing-cta-secondary"
                  variant="outline"
                  className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300"
                >
                  See Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
