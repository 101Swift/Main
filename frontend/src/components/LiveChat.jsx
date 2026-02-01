import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const FORMSPREE_URL = "https://formspree.io/f/xqelqeel";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      await axios.post(`${API}/leads`, {
        ...formData,
        trade: "Quick Chat",
        areas: "Not specified"
      });
      
      // Send email via Formspree
      await axios.post(FORMSPREE_URL, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `Quick Chat: ${formData.name}`
      });
      
      setIsSuccess(true);
      toast.success("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen 
            ? "bg-zinc-800 hover:bg-zinc-700" 
            : "bg-[#FF5500] hover:bg-[#FF5500]/90 hover:scale-110"
        }`}
        data-testid="live-chat-button"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#121212] border border-white/10 shadow-2xl animate-slide-up"
          data-testid="live-chat-window"
        >
          {/* Header */}
          <div className="bg-[#FF5500] p-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Quick Message
            </h3>
            <p className="text-white/80 text-xs mt-1">
              We typically reply within a few hours
            </p>
          </div>

          {/* Content */}
          <div className="p-4">
            {isSuccess ? (
              <div className="text-center py-8" data-testid="chat-success">
                <CheckCircle className="w-12 h-12 text-[#FF5500] mx-auto mb-4" />
                <p className="text-white font-semibold">Message Sent!</p>
                <p className="text-zinc-400 text-sm mt-1">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="live-chat-form">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] rounded-none h-10 text-sm"
                    data-testid="chat-input-name"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] rounded-none h-10 text-sm"
                    data-testid="chat-input-email"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows={3}
                    className="bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF5500] rounded-none text-sm resize-none"
                    data-testid="chat-input-message"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider py-3 rounded-none text-sm flex items-center justify-center gap-2"
                  data-testid="chat-submit-btn"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 p-3 text-center">
            <p className="text-zinc-500 text-xs">
              Or email us at{" "}
              <a href="mailto:info@swiftwebseo.co.uk" className="text-[#FF5500] hover:underline">
                info@swiftwebseo.co.uk
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
