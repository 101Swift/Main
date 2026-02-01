import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import { CheckCircle, ArrowRight, Search, Globe, Zap } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const FORMSPREE_URL = "https://formspree.io/f/xqelqeel";

const checkItems = [
  "Is your website mobile-friendly?",
  "Does Google know your site exists?",
  "Are you targeting the right keywords?",
  "Is your Google Business Profile optimised?",
  "Are there technical issues hurting your rankings?",
  "How do you compare to competitors?"
];

const whatYouGet = [
  { icon: Search, title: "SEO Health Check", desc: "We'll identify what's stopping you from ranking" },
  { icon: Globe, title: "Competitor Analysis", desc: "See how you stack up against local competitors" },
  { icon: Zap, title: "Action Plan", desc: "Clear, prioritised list of what to fix first" },
];

export default function FreeWebsiteAudit() {
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/leads`, {
        name: formData.name,
        email: formData.email,
        trade: "Website Audit Request",
        areas: formData.website,
        message: `Free website audit request for: ${formData.website}`
      });
      
      await axios.post(FORMSPREE_URL, {
        name: formData.name,
        email: formData.email,
        website: formData.website,
        _subject: `Free Audit Request: ${formData.website}`
      });
      
      setIsSuccess(true);
      toast.success("Request submitted!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="free-audit-page">
      <SEO 
        title="Free Website Audit - See Why You're Not Ranking"
        description="Get a free SEO audit of your website. We'll show you exactly what's stopping you from ranking on Google and how to fix it."
        canonical="/free-website-audit"
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
                100% Free, No Obligation
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase text-white mb-6">
                Free Website<br />
                <span className="text-[#FF5500]">Audit</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
                Find out exactly why your website isn't ranking on Google - and get a clear plan to fix it.
              </p>
              <ul className="space-y-3 mb-8">
                {["No credit card required", "Results within 48 hours", "Actionable recommendations"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-[#FF5500]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-[#121212] border border-white/10 p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-[#FF5500] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-zinc-400 mb-6">
                    We'll review your website and send your audit within 48 hours.
                  </p>
                  <Link to="/">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Get Your Free Audit</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-zinc-600 rounded-none h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-zinc-600 rounded-none h-12"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Your website URL"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-zinc-600 rounded-none h-12"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider py-4 rounded-none"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                    </Button>
                  </form>
                  <p className="text-zinc-500 text-xs mt-4 text-center">
                    We'll never spam you or share your details.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              What We'll Check
            </h2>
            <p className="text-zinc-400">A comprehensive review of your online presence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#121212] border border-white/10 p-4">
                <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              What You'll Receive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatYouGet.map((item, index) => (
              <div key={index} className="bg-[#0A0A0A] border border-white/10 p-8 text-center">
                <div className="p-4 bg-[#FF5500]/10 w-fit mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#FF5500]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't Have a Website Yet?
          </h2>
          <p className="text-zinc-400 mb-8">
            No problem. Get in touch and we'll discuss building one that ranks from day one.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-8 py-4 rounded-none">
              Contact Us Instead
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
