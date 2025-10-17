export default function Projects() {
  const projects = [
    {
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Residential Installation',
      location: 'Los Angeles, CA'
    },
    {
      image: 'https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Commercial Complex',
      location: 'San Diego, CA'
    },
    {
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Industrial Facility',
      location: 'Phoenix, AZ'
    },
    {
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Solar Farm',
      location: 'Austin, TX'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of successful solar installations across the country
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {project.title}
              </h3>
              <p className="text-slate-600">
                {project.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
