import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Brain, Facebook, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Brain className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold">Connect With JUSTUS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with intelligent automation? Connect with Omola Justus Oluwakayode and discover how JUSTUS can deliver custom AI solutions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-accent mb-2">+234 813 158 8727</p>
              <p className="text-muted-foreground">Available Mon-Sun 9AM-9PM WAT</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-bold text-accent mb-2">justuskyle1@gmail.com</p>
              <p className="text-muted-foreground">24-hour response guarantee</p>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 transition-all duration-300 group hover:scale-105 animate-fade-in md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-bold text-accent mb-2">Akure, Ondo State</p>
              <p className="text-muted-foreground">Nigeria • Remote consultations worldwide</p>
            </CardContent>
          </Card>
        </div>

        {/* Company Info Section */}
        <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">JUSTUS</h3>
            <p className="text-xl text-accent font-semibold mb-4">One Name. Endless Innovation</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded in 2025 by Omola Justus Oluwakayode, JUSTUS is a forward-thinking technology brand specializing in custom AI workflows and smart automation solutions. More than a name—it's a promise of relentless innovation, integrity, and impact through intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">Services</h4>
              <p className="text-muted-foreground">AI Workflows • Automation • Data Engineering • NLP Solutions • AI Consulting</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">Industries</h4>
              <p className="text-muted-foreground">Finance • E-commerce • Logistics • Healthcare • Education</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">Technology</h4>
              <p className="text-muted-foreground">Python • Node.js • AWS • Docker • AI/ML Frameworks</p>
            </div>
          </div>
        </div>

        {/* Social Media & Links */}
        <div className="text-center animate-fade-in">
          <h4 className="text-2xl font-semibold text-foreground mb-8">Connect With Us</h4>
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="#" 
              className="w-14 h-14 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl flex items-center justify-center hover:from-accent hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl flex items-center justify-center hover:from-accent hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl flex items-center justify-center hover:from-accent hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl flex items-center justify-center hover:from-accent hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Quick Links</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>AI Solutions</p>
                <p>Automation Services</p>
                <p>Consulting</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-2">Business Hours</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday - Sunday: 10AM - 4PM</p>
                <p>Emergency Support: 24/7</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-2">Support</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Technical Documentation</p>
                <p>Customer Support</p>
                <p>Project Consultations</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-6">
            <p className="text-muted-foreground text-sm">
              © 2025 JUSTUS. All rights reserved. | Innovative AI Solutions • Custom Automation • Future-Ready Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;