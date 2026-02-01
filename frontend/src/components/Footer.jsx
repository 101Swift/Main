import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/17lnfwcm_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Swift Website & SEO Services" 
                className="h-14 w-auto"
              />
              <span className="text-white font-medium">Website & SEO Services</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md">
              We help tradespeople get found on Google and turn clicks into enquiries. 
              No long-term contracts. Cancel anytime.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@swiftwebseo.co.uk" 
                className="flex items-center gap-3 text-zinc-400 hover:text-[#FF5500] transition-colors text-sm"
                data-testid="footer-email"
              >
                <Mail size={16} />
                info@swiftwebseo.co.uk
              </a>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin size={16} />
                United Kingdom
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-zinc-400 hover:text-[#FF5500] transition-colors text-sm"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6 text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Local SEO",
                "Website Design",
                "PPC Ads",
                "Technical SEO",
                "On-page SEO",
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-zinc-400 hover:text-[#FF5500] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Swift Website & SEO Services. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </footer>
  );
}
