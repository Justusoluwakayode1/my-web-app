import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Bot, Database, MessageCircle, CloudCog, BarChart3 } from 'lucide-react';
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
      features: ["Custom Model Training", "Data Pipeline Automation", "Performance Optimization", "Scalable Architecture"]
    },
    {
      title: "Smart Automation", 
      description: "Integration of AI into business processes using automation tools, APIs, and intelligent workflow orchestration.",
      image: automationSolutions,
      icon: Bot,
      features: ["Process Automation", "API Integration", "Workflow Optimization", "Real-time Monitoring"]
    },
    {
      title: "Data Engineering",
      description: "Structuring and managing data pipelines for efficient machine learning operations and analytics.",
      image: dataEngineering,
      icon: Database,
      features: ["ETL Pipelines", "Cloud Infrastructure", "Data Warehousing", "Analytics Dashboards"]
    },
    {
      title: "NLP Solutions",
      description: "Text classification, chatbot development, sentiment analysis, and advanced language modeling capabilities.",
      image: nlpSolutions,
      icon: MessageCircle,
      features: ["Chatbot Development", "Sentiment Analysis", "Text Classification", "Language Models"]
    },
    {
      title: "AI Consulting",
      description: "Strategic advisory on AI adoption, resource optimization, and scaling technology solutions for your business.",
      image: aiConsulting,
      icon: BarChart3,
      features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      title: "Cloud Integration",
      description: "Seamless deployment and integration with cloud platforms including AWS, Azure, and custom infrastructure solutions.",
      image: cloudIntegration,
      icon: CloudCog,
      features: ["Multi-Cloud Support", "DevOps Integration", "Auto-Scaling", "Security Compliance"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            AI Solutions & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI and automation solutions designed to transform your business operations and drive intelligent innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                        <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full group-hover/feature:scale-125 transition-transform"></div>
                        <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4 bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how JUSTUS can bring intelligent innovation to your operations with custom AI solutions.
            </p>
          </div>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg px-12 py-4 rounded-xl shadow-2xl hover:shadow-accent/25"
            size="lg"
          >
            Start Your AI Journey
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;