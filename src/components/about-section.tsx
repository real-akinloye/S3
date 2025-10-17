import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://www.shutterstock.com/image-photo/african-american-man-safety-helmet-260nw-2610297241.jpg"
              alt="About Solar Bridge"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Solar Bridge Solution</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Solar Bridge Solution is Nigeria's leading provider of sustainable solar energy solutions. We specialize
              in delivering high-quality, affordable solar installations for homes, businesses, and industries across
              the country.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of experience and a commitment to excellence, we help our clients reduce energy costs while
              contributing to a cleaner, greener future.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Quality Products</h3>
                  <p className="text-gray-600">Premium solar panels and equipment from trusted manufacturers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Expert Installation</h3>
                  <p className="text-gray-600">Professional installation by certified technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Ongoing Support</h3>
                  <p className="text-gray-600">Comprehensive maintenance and customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
