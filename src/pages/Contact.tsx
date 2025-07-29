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
    <section id="contact" className="min-h-screen bg-gradient-to-b from-muted/30 to-background py-10 px-4 overflow-x-hidden">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Brain className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-accent font-semibold text-sm">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your AI and automation needs? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Contact Info Cards */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm">Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">+234 813 158 8727</p>
              <p className="text-muted-foreground text-sm">Mon-Sun 9AM-9PM WAT</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm">Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">justuskyle1@gmail.com</p>
              <p className="text-muted-foreground text-sm">24-hour response</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm">Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Akure, Ondo State</p>
              <p className="text-muted-foreground text-sm">Nigeria • Remote available</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Chatbot */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-xl">
                <Brain className="w-6 h-6 text-accent animate-pulse" />
                AI Assistant
              </CardTitle>
              <p className="text-muted-foreground text-sm">Chat with our AI-powered assistant</p>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-4 min-h-[200px] border border-border/30">
                <div className="text-center text-muted-foreground">
                  <Brain className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="text-sm">AI Chatbot powered by n8n</p>
                  <p className="text-xs mt-1">Integration coming soon...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50 animate-fade-in bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-lg p-8 mx-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-1 text-sm">Services</h4>
              <p className="text-xs text-muted-foreground">AI Workflows • Automation • Data Engineering</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1 text-sm">Industries</h4>
              <p className="text-xs text-muted-foreground">Finance • E-commerce • Healthcare • Education</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1 text-sm">Founded</h4>
              <p className="text-xs text-muted-foreground">2025 • Akure, Nigeria</p>
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