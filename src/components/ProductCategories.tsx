import { useState, useEffect, useRef } from 'react';
import { Building2, Hammer, ShieldCheck, Truck, Zap, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import structuralSteelImg from '@/assets/structural-steel.jpg';
import concreteMaterialsImg from '@/assets/concrete-materials.jpg';
import safetyEquipmentImg from '@/assets/safety-equipment.jpg';
import logisticsDeliveryImg from '@/assets/logistics-delivery.jpg';
import electricalSystemsImg from '@/assets/electrical-systems.jpg';
import heavyEquipmentImg from '@/assets/heavy-equipment.jpg';

const categories = [
  {
    id: 'structural',
    icon: Building2,
    title: 'Structural Steel',
    description: 'High-grade steel beams, columns, and frameworks for industrial construction',
    features: ['ASTM Certified', 'Custom Fabrication', 'Fast Delivery'],
    image: structuralSteelImg
  },
  {
    id: 'concrete',
    icon: Hammer,
    title: 'Concrete & Masonry',
    description: 'Premium concrete mixes, blocks, and masonry supplies for foundations',
    features: ['High Strength', 'Weather Resistant', 'Various Grades'],
    image: concreteMaterialsImg
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Safety Equipment',
    description: 'OSHA-compliant safety gear and protective equipment for job sites',
    features: ['OSHA Compliant', 'Bulk Ordering', '24/7 Support'],
    image: safetyEquipmentImg
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics & Delivery',
    description: 'Reliable transportation and on-site delivery for all materials',
    features: ['Same Day Delivery', 'Crane Service', 'GPS Tracking'],
    image: logisticsDeliveryImg
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Systems',
    description: 'Industrial electrical components and wiring solutions',
    features: ['Code Compliant', 'Industrial Grade', 'Technical Support'],
    image: electricalSystemsImg
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Heavy Equipment',
    description: 'Rental and sales of construction machinery and tools',
    features: ['Well Maintained', 'Operator Training', 'Flexible Terms'],
    image: heavyEquipmentImg
  }
];

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.category-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up animate">
          <div className="inline-block bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium">Product Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Building Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From foundation to finish, we provide comprehensive building materials and services 
            for industrial, commercial, and infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isVisible = visibleCards.includes(index);
            const isActive = activeCategory === category.id;
            
            return (
              <div
                key={category.id}
                data-index={index}
                className={`category-card ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
                    style={{
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 ${isActive ? 'opacity-90' : 'opacity-60'}`} />
                  
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-accent rounded-lg flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    variant="default"
                  >
                    View Products
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button className="btn-quote" size="lg">
            Request Custom Quote for Multiple Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;