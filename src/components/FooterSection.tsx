import { Building2, Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products & Services',
      links: [
        'Structural Steel',
        'Concrete & Masonry',
        'Safety Equipment',
        'Electrical Systems',
        'Heavy Equipment Rental',
        'Custom Fabrication'
      ]
    },
    {
      title: 'Industries Served',
      links: [
        'Commercial Construction',
        'Industrial Facilities',
        'Infrastructure Projects',
        'Residential Development',
        'Government Contracts',
        'Emergency Services'
      ]
    },
    {
      title: 'Company',
      links: [
        'About ??stores',
        'Our History',
        'Safety Standards',
        'Quality Assurance',
        'Careers',
        'News & Updates'
      ]
    },
    {
      title: 'Support',
      links: [
        'Customer Support',
        'Technical Documentation',
        'Product Specifications',
        'Delivery Information',
        'Returns & Warranty',
        'FAQs'
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated on Industry News</h3>
              <p className="text-primary-foreground/80">
                Get the latest updates on building materials, industry trends, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 lg:w-80"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">??stores</h2>
                <p className="text-primary-foreground/80 text-sm">Premium Building Materials</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              ??stores is your premier destination for high-quality building materials and construction supplies. 
              We offer comprehensive solutions for commercial, industrial, and residential projects with 
              unmatched customer service and reliable delivery.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@stores.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Multiple Locations Nationwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>24/7 Emergency Support</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} ??stores. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/60 text-sm">
              Licensed and insured building materials supplier • OSHA certified • BBB A+ rated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;