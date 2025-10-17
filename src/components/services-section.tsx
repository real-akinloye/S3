import { Card, CardContent } from "./ui/card";
import { Home, Building2, Factory, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete solar solutions for homes, reducing electricity bills and providing reliable power.",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Scalable solar systems for businesses, offices, and commercial properties.",
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    description: "High-capacity solar installations for factories and industrial facilities.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Regular maintenance, repairs, and technical support for optimal performance.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to meet your specific needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
