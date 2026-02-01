import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CheckCircle, ArrowRight, Search, MapPin, Phone, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Search,
    problem: "Not showing on Google",
    solution: "We optimise your website so Google can find and rank you"
  },
  {
    icon: MapPin,
    problem: "Competitors above you on Maps",
    solution: "We improve your Google Business Profile and local presence"
  },
  {
    icon: Phone,
    problem: "Website but no enquiries",
    solution: "We fix your pages to turn visitors into customers"
  },
  {
    icon: TrendingUp,
    problem: "No idea where to start",
    solution: "We handle everything and report in plain English"
  }
];

const steps = [
  {
    title: "We Review Your Business",
    desc: "We look at your website, your competitors, and what people are searching for in your area."
  },
  {
    title: "We Fix the Foundations",
    desc: "We make sure Google can find you, understand what you do, and show you to the right people."
  },
  {
    title: "You Get More Enquiries",
    desc: "More people find you, more people call you, more people become customers."
  }
];

export default function GetMoreCustomers() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="get-customers-page">
      <SEO 
        title="Get More Customers From Google - Without the Jargon"
        description="Not showing up on Google? Website not getting enquiries? We help local businesses get found online and turn clicks into customers. No jargon, just results."
        canonical="/get-more-customers"
      />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              No Jargon, Just Results
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              Get More Customers<br />
              <span className="text-[#FF5500]">From Google</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              Not showing up when people search for your services? We help local businesses 
              get found on Google and turn website visitors into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
                  Get a Free Review
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300">
                  See Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Sound Familiar?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Problems We Fix Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-[#121212] border border-white/10 p-8 hover:border-[#FF5500] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF5500]/10">
                    <item.icon className="w-6 h-6 text-[#FF5500]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">"{item.problem}"</h3>
                    <p className="text-zinc-400">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simple */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Simple as 1, 2, 3
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              No tech speak. No confusing reports. Just more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#0A0A0A] border border-white/10 p-8 h-full">
                  <span className="text-[#FF5500] text-5xl font-bold mb-4 block">{index + 1}</span>
                  <h3 className="text-xl font-semibold uppercase text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400">{step.desc}</p>
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

      {/* What You Get */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                What You Actually Get
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
                More Calls.<br />More Enquiries.<br />More Customers.
              </h2>
              <p className="text-zinc-400 mb-8">
                We don't bamboozle you with jargon. We focus on one thing: 
                getting your phone to ring more often with people who want to buy from you.
              </p>
              <Link to="/contact">
                <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-none">
                  Let's Talk
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {[
                "Your business shows up when people search",
                "Your website turns visitors into enquiries", 
                "You appear on Google Maps in your area",
                "Monthly updates in plain English",
                "No long contracts - cancel anytime",
                "We handle everything for you"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#121212] border border-white/10 p-4">
                  <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Get Found?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Send us your website and we'll tell you exactly what's stopping you from getting more customers.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
              Get Your Free Review
            </Button>
          </Link>
          <p className="text-zinc-500 text-sm mt-4">No obligation. No jargon. Just honest advice.</p>
        </div>
      </section>
    </div>
  );
}
