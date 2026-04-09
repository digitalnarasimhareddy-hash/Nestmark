import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

// Import Main Pages
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

// Import Individual Service Pages
import PerformanceMarketingPage from "./pages/services/PerformanceMarketingPage";
import SEOServicesPage from "./pages/services/SEOServicesPage";
import SocialMediaMarketingPage from "./pages/services/SocialMediaMarketingPage";
import SEMServicesPage from "./pages/services/SEMServicesPage";
import MetaAdsPage from "./pages/services/MetaAdsPage";
import PRMarketingPage from "./pages/services/PRMarketingPage";
import WebsiteDevelopmentPage from "./pages/services/WebsiteDevelopmentPage";
import { 
  InfluencerMarketingPage, 
  CompetitorAnalysisPage, 
  OmnichannelMarketingPage, 
  AnalyticalToolsPage 
} from "./pages/services/RemainingServices";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Individual Service Pages */}
          <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
          <Route path="/services/seo" element={<SEOServicesPage />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="/services/sem" element={<SEMServicesPage />} />
          <Route path="/services/meta-ads" element={<MetaAdsPage />} />
          <Route path="/services/pr-marketing" element={<PRMarketingPage />} />
          <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
          <Route path="/services/competitor-analysis" element={<CompetitorAnalysisPage />} />
          <Route path="/services/omnichannel-marketing" element={<OmnichannelMarketingPage />} />
          <Route path="/services/analytical-tools" element={<AnalyticalToolsPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
