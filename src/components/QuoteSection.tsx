import { useState } from 'react';
import { Calculator, FileText, Clock, CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const projectTypes = [
  'Commercial Building',
  'Industrial Facility',
  'Infrastructure Project',
  'Residential Complex',
  'Renovation/Retrofit',
  'Emergency Repair',
  'Other'
];

const materialCategories = [
  'Structural Steel',
  'Concrete & Masonry',
  'Electrical Systems',
  'Safety Equipment',
  'Heavy Equipment Rental',
  'Multiple Categories'
];

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    materialCategory: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours with a detailed quote.",
    });

    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      company: '',
      contactName: '',
      email: '',
      phone: '',
      projectType: '',
      materialCategory: '',
      projectDetails: '',
      timeline: '',
      budget: ''
    });
  };

  const quoteFeatures = [
    {
      icon: Calculator,
      title: 'Accurate Pricing',
      description: 'Detailed material costs with transparent pricing breakdown'
    },
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'Fast turnaround on all quote requests'
    },
    {
      icon: FileText,
      title: 'Detailed Specifications',
      description: 'Complete material specifications and delivery schedules'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free quotes with no commitment required'
    }
  ];

  return (
    <section id="quote-section" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up animate">
          <div className="inline-block bg-accent/20 rounded-full px-4 py-2 mb-4">
            <span className="text-accent font-medium">Get Your Quote</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request a Custom Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get competitive pricing on premium building materials. Our experts will provide 
            a detailed quote tailored to your project specifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quote Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your Company"
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Name *
                  </label>
                  <Input
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    placeholder="Your Full Name"
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Material Category *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('materialCategory', value)}>
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder="Select materials needed" />
                    </SelectTrigger>
                    <SelectContent>
                      {materialCategories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                  placeholder="Please describe your project requirements, quantities needed, specifications, etc."
                  rows={4}
                  required
                  className="bg-card"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Timeline
                  </label>
                  <Input
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    placeholder="e.g., 2-3 months"
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estimated Budget
                  </label>
                  <Input
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="e.g., $50,000 - $100,000"
                    className="bg-card"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full btn-quote text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our terms and privacy policy. 
                We'll never share your information with third parties.
              </p>
            </form>
          </div>

          {/* Quote Features & Contact */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              {quoteFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-card rounded-2xl p-6 elevated-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Call Our Experts</div>
                    <div className="text-primary font-semibold">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email Quotes</div>
                    <div className="text-primary font-semibold">quotes@buildcorp.com</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Rush Orders:</strong> Need materials urgently? Call us for same-day quotes 
                  and emergency delivery options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;