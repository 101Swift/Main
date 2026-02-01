import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import LocationPage from "@/pages/LocationPage";
import IndustryPage from "@/pages/IndustryPage";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#0A0A0A]">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<IndustryPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/locations/:slug" element={<LocationPage />} />
          </Routes>
        </main>
        <Footer />
        <LiveChat />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
