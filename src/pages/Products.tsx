import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Bot, Database, MessageCircle, CloudCog, BarChart3, CheckCircle, Star, Zap, TrendingUp, Phone } from 'lucide-react';
import aiWorkflows from '@/assets/ai-workflows.jpg';
import automationSolutions from '@/assets/automation-solutions.jpg';
import dataEngineering from '@/assets/data-engineering.jpg';
import nlpSolutions from '@/assets/nlp-solutions.jpg';
import aiConsulting from '@/assets/ai-consulting.jpg';
import cloudIntegration from '@/assets/cloud-integration.jpg';

const Products = () => {
  const solutions = [
    {
      title: "AI Workflow Design",
      description: "Custom AI pipelines including data preprocessing, model selection, training, and deployment for your specific business needs.",
      image: aiWorkflows,
      icon: Brain,
      features: ["Custom Model Training", "Data Pipeline Automation", "Performance Optimization", "Scalable Architecture"],
      price: "₦2.5M+",
      roi: "300%",
      timeframe: "4-8 weeks"
    },
    {
      title: "Smart Automation", 
      description: "Integration of AI into business processes using automation tools, APIs, and intelligent workflow orchestration.",
      image: automationSolutions,
      icon: Bot,
      features: ["Process Automation", "API Integration", "Workflow Optimization", "Real-time Monitoring"],
      price: "₦1.8M+",
      roi: "250%",
      timeframe: "3-6 weeks"
    },
    {
      title: "Data Engineering",
      description: "Structuring and managing data pipelines for efficient machine learning operations and analytics.",
      image: dataEngineering,
      icon: Database,
      features: ["ETL Pipelines", "Cloud Infrastructure", "Data Warehousing", "Analytics Dashboards"],
      price: "₦2.2M+",
      roi: "400%",
      timeframe: "6-10 weeks"
    },
    {
      title: "NLP Solutions",
      description: "Text classification, chatbot development, sentiment analysis, and advanced language modeling capabilities.",
      image: nlpSolutions,
      icon: MessageCircle,
      features: ["Chatbot Development", "Sentiment Analysis", "Text Classification", "Language Models"],
      price: "₦1.5M+",
      roi: "200%",
      timeframe: "4-6 weeks"
    },
    {
      title: "AI Consulting",
      description: "Strategic advisory on AI adoption, resource optimization, and scaling technology solutions for your business.",
      image: aiConsulting,
      icon: BarChart3,
      features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
      price: "₦800K+",
      roi: "500%",
      timeframe: "2-4 weeks"
    },
    {
      title: "Cloud Integration",
      description: "Seamless deployment and integration with cloud platforms including AWS, Azure, and custom infrastructure solutions.",
      image: cloudIntegration,
      icon: CloudCog,
      features: ["Multi-Cloud Support", "DevOps Integration", "Auto-Scaling", "Security Compliance"],
      price: "₦1.2M+",
      roi: "180%",
      timeframe: "3-5 weeks"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppContact = (service: string) => {
    const message = `Hi! I'm interested in your ${service} service. Can you provide more details about pricing and implementation?`;
    const whatsappUrl = `https://wa.me/2348131588727?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm">Premium AI Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            AI Solutions & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with enterprise-grade AI solutions that deliver measurable results. 
            <span className="text-accent font-semibold"> Average ROI: 300% | Implementation: 4-8 weeks</span>
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-sm">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm">300% Average Efficiency Gain</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm">99.9% Uptime Guarantee</span>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-accent to-primary rounded-xl p-3 shadow-lg">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-primary-foreground">{solution.title}</h3>
                  </div>
                  
                </div>
                
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  
                  {/* ROI & Timeframe */}
                  <div className="flex justify-between items-center py-2 bg-muted/30 rounded-lg px-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{solution.roi}</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{solution.timeframe}</div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                        <CheckCircle className="w-4 h-4 text-accent group-hover/feature:scale-125 transition-transform" />
                        <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg font-bold"
                    onClick={() => handleWhatsAppContact(solution.title)}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 mb-8 backdrop-blur-sm border border-accent/20">
            <h3 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 500+ businesses that have already transformed their operations with JUSTUS AI solutions. 
              <span className="text-accent font-semibold"> Book your FREE consultation today!</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => handleWhatsAppContact("AI Solutions")}
                className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg px-12 py-4 rounded-xl shadow-2xl hover:shadow-accent/25 font-bold"
                size="lg"
              >
                <Phone className="mr-3 w-5 h-5" />
                Start Your AI Journey
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-accent/30 text-accent hover:bg-accent/10 text-lg px-8 py-4 rounded-xl font-medium"
                size="lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card/50 rounded-2xl border border-border/30">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Guaranteed Results</h4>
              <p className="text-muted-foreground">We guarantee measurable improvements or your money back</p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-2xl border border-border/30">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Fast Implementation</h4>
              <p className="text-muted-foreground">Get your AI solution up and running in 4-8 weeks</p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-2xl border border-border/30">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Proven ROI</h4>
              <p className="text-muted-foreground">Average 300% efficiency gains and 5x ROI for our clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;