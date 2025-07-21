import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import structuralSteel from '@/assets/structural-steel.jpg';
import concreteMaterials from '@/assets/concrete-materials.jpg';
import safetyEquipment from '@/assets/safety-equipment.jpg';
import heavyEquipment from '@/assets/heavy-equipment.jpg';
import electricalSystems from '@/assets/electrical-systems.jpg';
import logisticsDelivery from '@/assets/logistics-delivery.jpg';

const Products = () => {
  const products = [
    {
      title: "Structural Steel",
      description: "High-grade steel beams, columns, and reinforcement materials",
      image: structuralSteel,
    },
    {
      title: "Concrete Materials",
      description: "Ready-mix concrete, cement, and aggregates",
      image: concreteMaterials,
    },
    {
      title: "Safety Equipment",
      description: "Professional safety gear and protective equipment",
      image: safetyEquipment,
    },
    {
      title: "Heavy Equipment",
      description: "Construction machinery and equipment rental",
      image: heavyEquipment,
    },
    {
      title: "Electrical Systems",
      description: "Wiring, panels, and electrical components",
      image: electricalSystems,
    },
    {
      title: "Logistics & Delivery",
      description: "Nationwide delivery and project coordination",
      image: logisticsDelivery,
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive building materials and services for all your construction needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
            size="lg"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;