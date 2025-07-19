import { useState, useEffect, useRef } from 'react';
import { Star, Shield, Award, Users, Calendar, Truck } from 'lucide-react';

const trustIndicators = [
  {
    icon: Calendar,
    title: '30+ Years',
    subtitle: 'Industry Experience',
    description: 'Three decades of reliable service to the construction industry'
  },
  {
    icon: Users,
    title: '1,000+',
    subtitle: 'Projects Completed',
    description: 'Successfully delivered materials for major infrastructure projects'
  },
  {
    icon: Shield,
    title: 'OSHA',
    subtitle: 'Safety Certified',
    description: 'Maintaining the highest safety standards in all operations'
  },
  {
    icon: Award,
    title: '5-Star',
    subtitle: 'Customer Rating',
    description: 'Consistently rated as the top supplier by our clients'
  },
  {
    icon: Truck,
    title: '24/7',
    subtitle: 'Delivery Service',
    description: 'Round-the-clock logistics support for urgent projects'
  },
  {
    icon: Star,
    title: 'A+',
    subtitle: 'BBB Rating',
    description: 'Better Business Bureau accredited with highest rating'
  }
];

const testimonials = [
  {
    name: 'Michael Johnson',
    title: 'Project Manager',
    company: 'Metropolitan Construction',
    rating: 5,
    review: 'BuildCorp has been our go-to supplier for the past 5 years. Their quality and reliability are unmatched in the industry.',
    project: 'Downtown Office Complex - $50M Project'
  },
  {
    name: 'Sarah Chen',
    title: 'Site Supervisor',
    company: 'Industrial Solutions Inc.',
    rating: 5,
    review: 'The team at BuildCorp understands the urgency of construction deadlines. Their same-day delivery saved our project timeline.',
    project: 'Manufacturing Facility - $25M Project'
  },
  {
    name: 'Robert Davis',
    title: 'General Contractor',
    company: 'Davis Construction Group',
    rating: 5,
    review: 'Quality materials, competitive pricing, and exceptional customer service. BuildCorp is a true partner in our success.',
    project: 'Hospital Expansion - $75M Project'
  }
];

const TrustSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.trust-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-accent fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 blueprint-grid">
      <div className="container mx-auto px-6">
        {/* Trust Indicators */}
        <div className="text-center mb-16 fade-in-up animate">
          <div className="inline-block bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of excellence in building materials supply, backed by industry 
            certifications and thousands of successful projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`trust-badge trust-item ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{indicator.title}</div>
                  <div className="text-sm font-medium text-foreground mb-2">{indicator.subtitle}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{indicator.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customer Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h3>
            <p className="text-muted-foreground">Real feedback from real construction professionals</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-card elevated-shadow">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].review}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-semibold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[activeTestimonial].title} • {testimonials[activeTestimonial].company}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonials[activeTestimonial].project}
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Industry Certifications & Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['OSHA', 'ASTM', 'AWS', 'BBB', 'ISO 9001', 'AISC'].map((cert, index) => (
              <div key={index} className="bg-card rounded-lg px-6 py-3 border border-border">
                <span className="font-semibold text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;