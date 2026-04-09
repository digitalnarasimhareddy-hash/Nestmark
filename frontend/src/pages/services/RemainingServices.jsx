import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { Users, BarChart3, MessageSquare, LineChart } from 'lucide-react';

// Influencer Marketing Page
export const InfluencerMarketingPage = () => (
  <ServiceTemplate
    title="Influencer"
    subtitle="Marketing"
    description="Influencer marketing that leverages trusted voices to expand reach and build authenticity for real estate brands."
    icon={Users}
    bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
    benefits={[
      'Partner with trusted industry voices',
      'Expand brand reach authentically',
      'Build credibility and trust',
      'Engage potential clients effectively',
      'Drive impactful results',
      'Targeted influencer partnerships'
    ]}
  />
);

// Competitor Analysis Page
export const CompetitorAnalysisPage = () => (
  <ServiceTemplate
    title="Competitor"
    subtitle="Analysis"
    description="Gain actionable insights to outshine your rivals by analyzing competitor websites with tools like Ahrefs and Moz, helping you refine strategies, identify gaps, and boost your market position."
    icon={BarChart3}
    bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
    benefits={[
      'Comprehensive competitor research',
      'Identify market gaps and opportunities',
      'Refine your marketing strategies',
      'Boost market position',
      'Advanced analytics with Ahrefs & Moz',
      'Actionable insights for growth'
    ]}
  />
);

// Omnichannel Marketing Page
export const OmnichannelMarketingPage = () => (
  <ServiceTemplate
    title="Omnichannel"
    subtitle="Marketing"
    description="Boost engagement and drive conversions by leveraging bulk messaging across SMS, WhatsApp, and Email – reach the right audience with impactful precision."
    icon={MessageSquare}
    bgImage="https://images.unsplash.com/photo-1557838923-2985c318be48?w=1920&q=80"
    benefits={[
      'Multi-channel messaging campaigns',
      'SMS, WhatsApp, and Email integration',
      'Targeted audience reach',
      'Increased engagement rates',
      'Drive conversions effectively',
      'Unified customer experience'
    ]}
  />
);

// Analytical Tools Page
export const AnalyticalToolsPage = () => (
  <ServiceTemplate
    title="Analytical"
    subtitle="Tools"
    description="Empower your business with actionable data, optimize website performance, and enhance user experience for better ROI."
    icon={LineChart}
    bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
    benefits={[
      'Comprehensive data analytics',
      'Website performance optimization',
      'Enhanced user experience insights',
      'Improved ROI tracking',
      'Real-time performance monitoring',
      'Actionable business intelligence'
    ]}
  />
);
