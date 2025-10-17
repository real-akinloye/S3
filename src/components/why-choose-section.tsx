import { Award, Shield, DollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience delivering successful solar projects across Nigeria",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium products with comprehensive warranties and guarantees",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with flexible payment plans to suit your budget",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Dedicated support team ensuring your satisfaction every step of the way",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Solar Bridge Solution?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're committed to providing the best solar energy solutions in Nigeria
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
