import React from 'react';

const JsonLd: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AixonTech",
    "url": "https://aixontech.com",
    "logo": "https://i.imgur.com/FJxMfup.png",
    "description": "Transform your business with AI automation. Save $50,000+ yearly, reduce manual work by 80%, and scale operations without stress.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/aixontech",
      "https://linkedin.com/company/aixontech",
      "https://github.com/aixontech"
    ],
    "offers": {
      "@type": "Offer",
      "name": "AI Automation Solutions",
      "description": "Comprehensive AI automation solutions for business optimization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;