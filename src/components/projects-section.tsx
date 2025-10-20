import { Card, CardContent } from "./ui/card";


const projects = [
  {
    image: "http://www.eltom.co.uk/wp-content/uploads/2025/07/residential-solar-pv-installation.png",
    title: "Residential Installation - Lagos",
    description: "5kW solar system for a family home",
  },
  {
    image: "https://frontend-cdn.solarreviews.com/sr-commercial-solar.jpg",
    title: "Commercial Project - Abuja",
    description: "20kW solar installation for office complex",
  },
  {
    image: "https://jakson-solar.com/wp-content/uploads/2025/01/Rooftop-Solar-for-Factories-and-Industrial-Buildings-Jakson-Solar.jpg",
    title: "Industrial Setup - Port Harcourt",
    description: "50kW solar system for manufacturing facility",
  },
];

export function ProjectsSection() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See some of our successful solar installations across Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Footer removed from here. Place the footer at the end of your main App/page layout instead. */}
    </>
  );
}
