import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Brain, Send, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted",
      description: "Justus will get back to you within 24 hours to discuss your AI needs.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-muted/30 to-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Brain className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold">Let's Build the Future Together</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Start Your AI Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with intelligent automation? Let's discuss how JUSTUS can deliver custom AI solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+234 813 158 8727</p>
                <p className="text-muted-foreground">Available Mon-Sun 9AM-9PM WAT</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">justuskyle1@gmail.com</p>
                <p className="text-muted-foreground">24-hour response guarantee</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Akure, Ondo State</p>
                <p className="text-muted-foreground">Nigeria • Remote consultations available</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 p-6">
              <div className="text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-foreground mb-2">Founder & AI Architect</h3>
                <p className="text-lg font-semibold text-accent">Omola Justus Oluwakayode</p>
                <p className="text-muted-foreground mt-2">
                  Bringing cutting-edge AI solutions to businesses across Nigeria and beyond
                </p>
              </div>
            </Card>
          </div>

          {/* AI Consultation Form */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <Brain className="w-8 h-8 text-accent animate-pulse" />
                AI Consultation Request
              </CardTitle>
              <p className="text-muted-foreground">Tell us about your business needs and AI goals</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-accent focus:ring-accent"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-accent focus:ring-accent"
                    />
                  </div>
                </div>
                
                <Input
                  name="company"
                  placeholder="Company/Organization Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:border-accent focus:ring-accent"
                />
                
                <Textarea
                  name="message"
                  placeholder="Describe your business challenges, AI goals, or automation needs. What problems are you looking to solve?"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:border-accent focus:ring-accent"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-lg py-3 shadow-xl hover:shadow-accent/25 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Request Free AI Consultation
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  No obligation • Free initial consultation • Custom solutions only
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border/50 animate-fade-in">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">JUSTUS</h3>
                <p className="text-accent font-medium">One Name. Endless Innovation</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              More than a name—it's a promise of relentless innovation, integrity, and impact through intelligent systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Services</h4>
              <p className="text-sm text-muted-foreground">AI Workflows • Automation • Data Engineering</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Industries</h4>
              <p className="text-sm text-muted-foreground">Finance • E-commerce • Healthcare • Education</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Founded</h4>
              <p className="text-sm text-muted-foreground">2025 • Akure, Nigeria</p>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            © 2025 JUSTUS. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;