import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    location: "Lagos",
    rating: 5,
    text: "Solar Bridge Solution transformed our home with a reliable solar system. Our electricity bills have dropped significantly!",
  },
  {
    name: "Chioma Okafor",
    location: "Abuja",
    rating: 5,
    text: "Professional service from start to finish. The team was knowledgeable and the installation was seamless.",
  },
  {
    name: "Ibrahim Mohammed",
    location: "Kano",
    rating: 5,
    text: "Best investment we made for our business. The solar system pays for itself with the energy savings.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-blue-600 fill-blue-600" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
