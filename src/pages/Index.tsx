import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import TrustSection from '@/components/TrustSection';
import QuoteSection from '@/components/QuoteSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll animation trigger
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductCategories />
      <TrustSection />
      <QuoteSection />
      <FooterSection />
    </div>
  );
};

export default Index;
