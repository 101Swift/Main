import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const trades = [
  "Plumber",
  "Electrician",
  "Builder",
  "Heating Engineer",
  "Landscaper",
  "Roofer",
  "Painter & Decorator",
  "Carpenter",
  "Other"
];

const nextSteps = [
  "We review your website and your competitors",
  "We send a short list of priorities",
  "If it looks like a fit, we start work"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trade: "",
    areas: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTradeChange = (value) => {
    setFormData(prev => ({ ...prev, trade: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.trade || !formData.areas || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/leads`, formData);
      setIsSuccess(true);
      toast.success("Message sent! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        trade: "",
        areas: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-white/10" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Contact
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              Get a Free Audit
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Send the details below and we'll reply with next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {isSuccess ? (
                <div className="bg-[#121212] border border-[#FF5500] p-12 text-center" data-testid="success-message">
                  <CheckCircle className="w-16 h-16 text-[#FF5500] mx-auto mb-6" />
                  <h2 className="text-2xl font-bold uppercase text-white mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-zinc-400 mb-6">
                    We've received your enquiry and will get back to you shortly with next steps.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-none"
                    data-testid="send-another-btn"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <Label htmlFor="name" className="text-white text-sm font-medium uppercase tracking-wider mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#121212] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] rounded-none h-12 px-4"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white text-sm font-medium uppercase tracking-wider mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-[#121212] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] rounded-none h-12 px-4"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="trade" className="text-white text-sm font-medium uppercase tracking-wider mb-2 block">
                      Trade
                    </Label>
                    <Select value={formData.trade} onValueChange={handleTradeChange}>
                      <SelectTrigger 
                        className="bg-[#121212] border border-white/10 text-white focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] rounded-none h-12"
                        data-testid="select-trade"
                      >
                        <SelectValue placeholder="Select your trade" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#121212] border border-white/10">
                        {trades.map((trade) => (
                          <SelectItem 
                            key={trade} 
                            value={trade}
                            className="text-white hover:bg-[#FF5500]/10 focus:bg-[#FF5500]/10"
                          >
                            {trade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="areas" className="text-white text-sm font-medium uppercase tracking-wider mb-2 block">
                      Areas You Target
                    </Label>
                    <Input
                      id="areas"
                      name="areas"
                      value={formData.areas}
                      onChange={handleChange}
                      placeholder="e.g. London, Surrey, Kent"
                      className="bg-[#121212] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] rounded-none h-12 px-4"
                      data-testid="input-areas"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white text-sm font-medium uppercase tracking-wider mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you're looking for..."
                      rows={5}
                      className="bg-[#121212] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] rounded-none px-4 py-3 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-all duration-300 hover:translate-y-[-2px] disabled:opacity-50 relative z-10"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* What Happens Next */}
              <div className="bg-[#121212] border border-white/10 p-8">
                <h3 className="text-xl font-semibold uppercase text-white mb-6 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF5500]" />
                  What Happens Next
                </h3>
                <ul className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <ArrowRight className="w-4 h-4 text-[#FF5500] mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email */}
              <div className="bg-[#121212] border border-white/10 p-8">
                <h3 className="text-xl font-semibold uppercase text-white mb-4">
                  Email
                </h3>
                <a 
                  href="mailto:info@swiftwebseo.co.uk"
                  className="text-[#FF5500] hover:underline text-lg"
                  data-testid="contact-email"
                >
                  info@swiftwebseo.co.uk
                </a>
              </div>

              {/* No Contracts */}
              <div className="bg-[#FF5500]/10 border border-[#FF5500]/20 p-8">
                <p className="text-white font-semibold text-lg mb-2">
                  No long-term contracts.
                </p>
                <p className="text-zinc-400 text-sm">
                  Cancel anytime. We earn your business every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
