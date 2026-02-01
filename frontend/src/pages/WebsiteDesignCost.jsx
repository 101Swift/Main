import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CheckCircle, PoundSterling, HelpCircle } from "lucide-react";

const packages = [
  {
    name: "Website + SEO Setup",
    price: "£399.99",
    type: "One-off",
    includes: [
      "Custom designed website (5-10 pages)",
      "Mobile responsive design",
      "On-page SEO setup",
      "Google Business Profile optimisation",
      "Contact forms and tracking",
      "Basic speed optimisation"
    ],
    ideal: "New businesses or those with outdated websites"
  },
  {
    name: "Monthly Growth",
    price: "£150",
    type: "Per month",
    includes: [
      "Ongoing SEO improvements",
      "Content updates and additions",
      "Technical maintenance",
      "Monthly reporting",
      "Google Business management",
      "Competitor monitoring"
    ],
    ideal: "Businesses wanting consistent growth"
  }
];

const faqs = [
  {
    q: "Why is website design so expensive elsewhere?",
    a: "Many agencies charge £2,000-£10,000 for websites. They're often overcomplicating things or covering large overheads. We keep it simple and focused on what actually gets results."
  },
  {
    q: "What's included in the £399.99?",
    a: "A fully custom website (not a template), mobile-friendly design, basic SEO setup, contact forms, and Google Analytics. Typically 5-10 pages depending on your needs."
  },
  {
    q: "Are there any hidden costs?",
    a: "No. The only additional cost would be domain registration (around £10-15/year) and hosting if you don't have it (around £5-10/month). We'll always be upfront about costs."
  },
  {
    q: "Do I need the monthly package?",
    a: "Not necessarily. The one-off setup gives you a solid foundation. The monthly package is for businesses that want ongoing improvements and don't have time to manage it themselves."
  },
  {
    q: "What if I'm not happy?",
    a: "We offer unlimited revisions until you're happy with the design. For monthly packages, there's no contract - cancel anytime."
  }
];

export default function WebsiteDesignCost() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="website-cost-page">
      <SEO 
        title="Website Design Cost UK - Affordable Web Design Prices"
        description="How much does a website cost in the UK? Transparent pricing from £399.99. No hidden fees, no long contracts. See our full pricing breakdown."
        canonical="/website-design-cost"
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              How Much Does a<br />
              <span className="text-[#FF5500]">Website Cost?</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              No confusing quotes. No hidden fees. Just straightforward pricing that won't break the bank.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 border-b border-white/10 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">The Quick Answer</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A professional website that ranks on Google and converts visitors into customers: 
            <span className="text-[#FF5500] font-bold text-2xl mx-2">£399.99</span> 
            one-off, or <span className="text-[#FF5500] font-bold">£150/month</span> for ongoing growth.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              What's Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-[#121212] border border-white/10 p-8">
                <h3 className="text-xl font-semibold uppercase text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#FF5500]">{pkg.price}</span>
                  <span className="text-zinc-500">{pkg.type}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Ideal for: {pkg.ideal}</p>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#FF5500] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              How We Compare
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              <div className="p-6 bg-[#0A0A0A] border border-white/10">
                <p className="text-zinc-400 text-sm mb-2">DIY Website Builders</p>
                <p className="text-2xl font-bold text-white">£10-30/mo</p>
                <p className="text-zinc-500 text-xs mt-2">Limited, template-based</p>
              </div>
              <div className="p-6 bg-[#FF5500]/10 border-2 border-[#FF5500]">
                <p className="text-[#FF5500] text-sm mb-2 font-medium">Swift Web & SEO</p>
                <p className="text-2xl font-bold text-white">£399.99</p>
                <p className="text-zinc-400 text-xs mt-2">Custom, SEO-optimised</p>
              </div>
              <div className="p-6 bg-[#0A0A0A] border border-white/10">
                <p className="text-zinc-400 text-sm mb-2">Traditional Agencies</p>
                <p className="text-2xl font-bold text-white">£2,000-10,000</p>
                <p className="text-zinc-500 text-xs mt-2">Often overcomplicated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#121212] border border-white/10 p-6">
                <h3 className="text-white font-semibold mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-zinc-400 ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation. We'll discuss your needs and give you an exact quote.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
