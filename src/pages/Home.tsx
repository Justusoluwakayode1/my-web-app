import { ArrowRight, Phone, Mail, MapPin, Brain, Zap, Star, TrendingUp, Users, Award, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FREE_LOGO from "@/assets/Free.png"
import bannerVideo from "@/assets/WhatsApp Video 2025-08-22 at 13.57.20_d02a28b5.mp4"

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in transforming my business with JUSTUS AI solutions. Can you help me get started?";
    const whatsappUrl = `https://wa.me/2348131588727?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallContact = () => {
    window.open('tel:+2348131588727', '_self');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/92 to-accent/88" />
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-50">
          <div 
            className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full"
            style={{ animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite' }}
          ></div>
          <div 
            className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full"
            style={{ animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite 1.5s' }}
          ></div>
          <div 
            className="absolute bottom-32 left-40 w-2 h-2 bg-accent rounded-full"
            style={{ animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite 3s' }}
          ></div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img src={FREE_LOGO} alt="JUSTUS Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground tracking-tight">JUSTUS</h1>
                <p className="text-sm text-muted-foreground font-medium">One Name. Endless Innovation</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium">Home</a>
              <a href="#products" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium">Solutions</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Innovation Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-scale-in border border-accent/30">
            <Zap className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold tracking-wide">AI Innovation • Smart Automation • Business Transformation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent animate-pulse">
              Intelligent
            </span>
            <span className="block text-accent animate-bounce">Innovation</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your business with cutting-edge AI solutions that drive 
            <span className="text-accent font-bold"> 300% efficiency gains</span> and 
            <span className="text-accent font-bold"> 5x ROI</span>. 
            <span className="text-accent font-medium">Simplify. Accelerate. Dominate.</span>
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppContact}
              className="relative overflow-hidden border-2 border-accent/60 bg-gradient-to-r from-accent to-primary text-primary-foreground text-lg px-10 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 font-bold shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/40 group"
              size="lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Start Your AI Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToProducts}
              variant="outline"
              className="relative overflow-hidden border-2 border-accent/60 bg-gradient-to-r from-accent to-primary text-primary-foreground text-lg px-10 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 font-bold shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/40"
              size="lg"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Social Proof & Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in animation-delay-200">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-primary-foreground">300%</div>
                <div className="text-sm text-primary-foreground/80">Efficiency Gain</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in animation-delay-400">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-primary-foreground">5x</div>
                <div className="text-sm text-primary-foreground/80">ROI Average</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in animation-delay-600">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/80">Global Support</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-medium">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center space-x-3 animate-fade-in animation-delay-500">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-medium">Smart Automation</span>
            </div>
            <div className="flex items-center space-x-3 animate-fade-in animation-delay-1000">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-medium">Enterprise Security</span>
            </div>
          </div>

          {/* Urgency CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl border border-accent/30 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Star className="w-6 h-6 text-accent animate-pulse" />
              <span className="text-lg font-bold text-primary-foreground">Limited Time Offer</span>
              <Star className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Get a <span className="text-accent font-bold">FREE AI Strategy Session</span> worth $300 when you book a consultation this month!
            </p>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 px-8 py-3 rounded-xl font-bold shadow-lg"
            >
              Claim Your Free Session
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;