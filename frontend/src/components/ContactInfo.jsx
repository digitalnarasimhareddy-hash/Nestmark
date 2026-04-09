import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfoCard = ({ icon: Icon, title, content, href, isLink = false }) => (
  <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-cyan-300 card-3d">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 pulse-glow">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
          {title}
        </h3>
        {isLink ? (
          <a href={href} className="text-gray-600 hover:text-cyan-600 transition-colors text-lg break-all">
            {content}
          </a>
        ) : (
          <p className="text-gray-600 text-lg">{content}</p>
        )}
      </div>
    </div>
  </div>
);

export const ContactInfoSection = () => (
  <div className="space-y-8">
    <ContactInfoCard
      icon={Phone}
      title="Connect"
      content="+91 7975676409"
      href="tel:+917975676409"
      isLink={true}
    />
    <ContactInfoCard
      icon={Mail}
      title="Support"
      content="marketing@nestmarksolutions.com"
      href="mailto:marketing@nestmarksolutions.com"
      isLink={true}
    />
    <ContactInfoCard
      icon={MapPin}
      title="Location"
      content="HSR Layout, Bengaluru"
    />
    <ContactInfoCard
      icon={Clock}
      title="Hours"
      content="9:30 AM - 6:30 PM"
    />
  </div>
);
