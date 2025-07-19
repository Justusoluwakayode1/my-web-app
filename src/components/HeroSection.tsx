import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteRequest = () => {
    const quoteSection = document.getElementById('quote-section');
    quoteSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">BC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">??stores</h1>
                <p className="text-sm text-muted-foreground">Premium Building Materials</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>quotes@stores.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Multiple Locations</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto fade-in-up animate">
          <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-accent font-medium">Premium Quality • Nationwide Delivery</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Premium Building Materials
            <span className="block text-accent">For Industrial Projects</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            From steel and concrete to specialized construction materials, we supply the backbone of America's infrastructure projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleQuoteRequest}
              className="btn-quote group"
              size="lg"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-secondary bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/40"
              size="lg"
            >
              View Product Catalog
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">✓</span>
              </div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">⭐</span>
              </div>
              <span>5-Star Safety Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">🏗️</span>
              </div>
              <span>1000+ Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;