
// Modern Service page with animated video background, glassmorphism overlay, and premium layout

export default function Services() {
  const services = [
    { name: 'Residential Solar', icon: '🏠' },
    { name: 'Commercial Solar', icon: '🏢' },
    { name: 'Industrial Solar', icon: '🏭' },
    { name: 'Estate Solar', icon: '🏘️' },
    { name: 'Floating Solar', icon: '🌊' },
    { name: 'Complex Solar', icon: '🏬' },
  ];
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-accent to-white py-16 px-4 flex flex-col items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none"
        src="/service.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <h1 className="text-4xl md:text-5xl font-clash text-primary mb-10 text-center relative z-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto relative z-10">
        {services.map((service) => (
          <div key={service.name} className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center animate-fade-in">
            <div className="text-4xl mb-4">{service.icon}</div>
            <div className="text-primary font-bold text-xl font-satoshi mb-2 text-center">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tailwind CSS custom animation classes (add to your global CSS or tailwind.config.js)
// .animate-fade-in { animation: fadeIn 1s ease both; }
// .animate-gradient-fade { animation: gradientFade 8s ease-in-out infinite alternate; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
// @keyframes gradientFade { 0% { opacity: 0.7; } 100% { opacity: 1; } }
