import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>
  {/* Navigation overlay removed; now handled by Navigation.tsx */}
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Power Your Home or Business <span className="text-blue-500">with Reliable Solar Energy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Affordable, sustainable solar solutions made for Nigeria
          </p>
          <a href="https://wa.me/2348146249855?text=Hello%2C%20I%20would%20like%20a%20solar%20quotation" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-200">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
