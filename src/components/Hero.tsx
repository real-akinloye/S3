import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Generated File October 11, 2025 - 4_37AM.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12 font-space-mono">
        <div className="text-2xl font-bold text-white font-space-grotesk">
          SolarPro
        </div>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => window.location.hash = '#home'} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition">Home</button>
          <button onClick={() => window.location.hash = '#about'} className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-blue-700 text-white font-bold transition">About Us</button>
          <button onClick={() => window.location.hash = '#products'} className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-blue-700 text-white font-bold transition">Products</button>
          <button onClick={() => window.location.hash = '#installers'} className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-blue-700 text-white font-bold transition">Find Installers</button>
          <button onClick={() => window.location.hash = '#projects'} className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-blue-700 text-white font-bold transition">Project Showcases</button>
          <button onClick={() => navigate('/ContactUs')} className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition">Contact Us</button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
          Get a Free Quote
        </button>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-[80vh] text-center text-white">
        <p className="text-lg md:text-2xl font-space-mono mb-8 max-w-2xl mx-auto">
          Empowering homes and businesses with clean, renewable energy. Discover our range of solar products and expert installation services.
        </p>
        <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6 drop-shadow-lg">
          Sustainable, cost-effective solar solutions for a brighter tomorrow
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl">
          Get a Free Quote
        </button>
      </div>
    </div>
  )
}
