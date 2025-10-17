export default function About() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        background: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)), url('/about-solar-bg.jpg') center center/cover no-repeat fixed`
      }}
    >
      <section id="about" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 contact-screenshot-header">
              About Solar Bridge Solution
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Solar Bridge Solution is Nigeria's leading provider of sustainable solar energy solutions. We specialize in delivering high-quality, affordable solar installations for homes, businesses, and industries across the country.
            </p>
            <p className="text-lg text-white/90 mb-8">
              With years of experience and a commitment to excellence, we help our clients reduce energy costs while contributing to a cleaner, greener future.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <span className="text-blue-300 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Quality Products</h3>
                  <p className="text-white/80">Premium solar panels and equipment from trusted manufacturers</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <span className="text-blue-300 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Expert Installation</h3>
                  <p className="text-white/80">Professional installation by certified technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <span className="text-blue-300 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">Ongoing Support</h3>
                  <p className="text-white/80">Comprehensive maintenance and customer support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg h-96 flex items-center justify-center shadow-xl backdrop-blur-md">
            <img
              src="https://www.google.com/imgres?q=Residential%20Installation&imgurl=http%3A%2F%2Fwww.eltom.co.uk%2Fwp-content%2Fuploads%2F2025%2F07%2Fresidential-solar-pv-installation.png&imgrefurl=https%3A%2F%2Fwww.eltom.co.uk%2F&docid=MdTMJbbuKRljBM&tbnid=B6rvNRhRpINVTM&vet=12ahUKEwjRqv2PtKSQAxVYU0EAHbRTIPM4FBAzegQIZRAA..i&w=362&h=231&hcb=2&ved=2ahUKEwjRqv2PtKSQAxVYU0EAHbRTIPM4FBAzegQIZRAA"
              alt="Solar panels installation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
