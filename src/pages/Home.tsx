import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                <span className="text-primary-foreground font-bold text-xl">??</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">??stores</h1>
                <p className="text-sm text-muted-foreground">Premium Building Materials</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Premium Building Materials
            <span className="block text-accent">For Industrial Projects</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            From steel and concrete to specialized construction materials, we supply the backbone of America's infrastructure projects.
          </p>
          
          <Button 
            onClick={scrollToProducts}
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3"
            size="lg"
          >
            View Our Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;