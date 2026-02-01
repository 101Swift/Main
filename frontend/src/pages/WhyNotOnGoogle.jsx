import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CheckCircle, ArrowRight, Search, Eye, MousePointerClick, AlertTriangle } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Google Can't Find You",
    desc: "Your website might look great, but if Google can't read it properly, you won't show up in search results."
  },
  {
    icon: Eye,
    title: "Wrong Keywords",
    desc: "You might be targeting the wrong words. If nobody searches for what's on your site, nobody will find you."
  },
  {
    icon: MousePointerClick,
    title: "Competitors Are Ahead",
    desc: "Other businesses in your area have already optimised their websites. Google shows them first."
  },
  {
    icon: AlertTriangle,
    title: "Technical Problems",
    desc: "Slow loading, mobile issues, or broken links can all push you down in Google's rankings."
  }
];

const fixes = [
  "Make sure Google can properly read your website",
  "Target the words your customers actually search for",
  "Optimise your Google Business Profile",
  "Fix any technical issues holding you back",
  "Build your local online presence",
  "Create content that answers customer questions"
];

export default function WhyNotOnGoogle() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="why-not-google-page">
      <SEO 
        title="Why Is My Business Not Showing on Google? - We Can Help"
        description="Frustrated that your business doesn't appear on Google? We explain the common reasons and show you how to fix it. Free website review available."
        canonical="/why-not-on-google"
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Common Problem, Easy Fix
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              Why Is My Business<br />
              <span className="text-[#FF5500]">Not on Google?</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              You have a website, but when you search for your services, you're nowhere to be found. 
              Sound familiar? Here's why it happens and how to fix it.
            </p>
            <Link to="/contact">
              <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
                Get a Free Website Review
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              The Usual Suspects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              4 Reasons You're Not Showing Up
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-[#121212] border border-white/10 p-8 hover:border-[#FF5500] transition-colors">
                <div className="p-3 bg-[#FF5500]/10 w-fit mb-4">
                  <reason.icon className="w-6 h-6 text-[#FF5500]" />
                </div>
                <h3 className="text-xl font-semibold uppercase text-white mb-3">{reason.title}</h3>
                <p className="text-zinc-400">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fix */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                The Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
                How We Get You Found
              </h2>
              <p className="text-zinc-400 mb-8">
                We've helped dozens of businesses go from invisible to page one. 
                It's not magic - it's just knowing what Google wants to see.
              </p>
              <Link to="/contact">
                <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-none">
                  Fix My Website
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {fixes.map((fix) => (
                <div key={fix} className="flex items-center gap-3 bg-[#0A0A0A] border border-white/10 p-4">
                  <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                  <span className="text-zinc-300">{fix}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Find Out What's Wrong
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Send us your website and we'll tell you exactly why you're not showing up - and what to do about it.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px]">
              Get Your Free Review
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
