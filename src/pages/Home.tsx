import { ArrowRight, Phone, Mail, MapPin, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Circuit Background */}
      <div 
        className="absolute inset-0 z-0 animate-pulse"
        style={{
          backgroundImage: `url(/lovable-uploads/278ffca6-5d7c-4554-8de0-2d4763ab1e1d.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent/70" />
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-accent rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-primary-foreground animate-pulse" />
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
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Innovation Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-scale-in">
            <Zap className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold tracking-wide">AI Innovation • Smart Automation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent animate-pulse">
              Intelligent
            </span>
            <span className="block text-accent animate-bounce">Innovation</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Custom AI workflows and smart automation solutions that transform businesses across industries. 
            <span className="text-accent font-medium">Simplify. Accelerate. Innovate.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProducts}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-4 rounded-xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 group"
              size="lg"
            >
              Explore AI Solutions
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-10 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              size="lg"
            >
              View Portfolio
            </Button>
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
                <span className="text-primary-foreground font-bold text-sm">24/7</span>
              </div>
              <span className="font-medium">Enterprise Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;