import React from 'react';
import CommentSection from '../components/layout/CommentSection';
import PlatformFeatures from '../components/layout/PlatformFeatures';
import FrequentQuestions from '../components/layout/FrequentQuestions';
import BannerSection from '../components/layout/BannerSection';
import PricingSection from '../components/layout/PricingSection';
import ContactSection from '../components/layout/ContactSection';
import TrustSection from '../components/layout/TrustSection';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerSection />
      <PlatformFeatures />
      <PricingSection />
      <FrequentQuestions />
      <CommentSection />
      <TrustSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
