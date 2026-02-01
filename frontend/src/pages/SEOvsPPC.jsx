import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CheckCircle, X, Clock, PoundSterling, TrendingUp, Zap } from "lucide-react";

const comparison = [
  { feature: "Time to see results", seo: "3-6 months", ppc: "Immediate" },
  { feature: "Cost structure", seo: "Fixed monthly fee", ppc: "Pay per click" },
  { feature: "Long-term value", seo: "Builds over time", ppc: "Stops when you stop paying" },
  { feature: "Trust factor", seo: "Higher (organic)", ppc: "Lower (marked as 'Ad')" },
  { feature: "Click-through rate", seo: "Higher (~30%)", ppc: "Lower (~2-3%)" },
  { feature: "Best for", seo: "Long-term growth", ppc: "Quick wins, testing" },
];

const seoProsCons = {
  pros: [
    "Results compound over time",
    "Higher trust from searchers",
    "No per-click costs",
    "Works 24/7 once established",
    "Builds brand authority"
  ],
  cons: [
    "Takes time to see results",
    "Requires ongoing work",
    "Algorithm changes can affect rankings",
    "Competitive keywords take longer"
  ]
};

const ppcProsCons = {
  pros: [
    "Immediate visibility",
    "Precise targeting options",
    "Easy to test and measure",
    "Control over budget",
    "Can turn on/off instantly"
  ],
  cons: [
    "Costs add up quickly",
    "Stops working when budget runs out",
    "Lower trust than organic results",
    "Click fraud can waste budget"
  ]
};

export default function SEOvsPPC() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="seo-vs-ppc-page">
      <SEO 
        title="SEO vs PPC: Which Is Better for Your Business?"
        description="SEO or PPC - which should you invest in? We break down the pros, cons, costs, and help you decide what's right for your business."
        canonical="/seo-vs-ppc"
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              The Big Question
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              SEO vs PPC:<br />
              <span className="text-[#FF5500]">Which Is Better?</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              Should you invest in organic search (SEO) or paid ads (PPC)? 
              Here's an honest comparison to help you decide.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 border-b border-white/10 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">The Short Answer</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            <span className="text-white font-semibold">SEO</span> for long-term, sustainable growth. 
            <span className="text-white font-semibold"> PPC</span> for immediate results or testing new markets. 
            <span className="text-[#FF5500] font-semibold"> Both together</span> for the best results.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Side-by-Side Comparison
            </h2>
          </div>

          <div className="bg-[#121212] border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#0A0A0A] border-b border-white/10">
              <div className="p-4"></div>
              <div className="p-4 text-center border-l border-white/10">
                <TrendingUp className="w-6 h-6 text-[#FF5500] mx-auto mb-2" />
                <span className="text-white font-semibold">SEO</span>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <Zap className="w-6 h-6 text-[#FF5500] mx-auto mb-2" />
                <span className="text-white font-semibold">PPC</span>
              </div>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-white/10 last:border-b-0">
                <div className="p-4 text-zinc-400 text-sm">{row.feature}</div>
                <div className="p-4 text-zinc-300 text-sm text-center border-l border-white/10">{row.seo}</div>
                <div className="p-4 text-zinc-300 text-sm text-center border-l border-white/10">{row.ppc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#FF5500]" />
                SEO
              </h3>
              <div className="mb-6">
                <h4 className="text-[#FF5500] font-semibold mb-3">Pros</h4>
                <ul className="space-y-2">
                  {seoProsCons.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-zinc-400 font-semibold mb-3">Cons</h4>
                <ul className="space-y-2">
                  {seoProsCons.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PPC */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#FF5500]" />
                PPC
              </h3>
              <div className="mb-6">
                <h4 className="text-[#FF5500] font-semibold mb-3">Pros</h4>
                <ul className="space-y-2">
                  {ppcProsCons.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-zinc-400 font-semibold mb-3">Cons</h4>
                <ul className="space-y-2">
                  {ppcProsCons.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recommendation */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Our Recommendation
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            For most local businesses, we recommend <span className="text-white font-semibold">starting with SEO</span>. 
            It takes longer but builds lasting value. Add PPC later for extra boost or to target specific campaigns.
          </p>
          <p className="text-zinc-400 mb-8">
            If you need leads <span className="text-white font-semibold">right now</span> and have budget to spend, 
            start with PPC while building SEO in the background.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-10 py-6 rounded-none">
              Get Personalised Advice
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
