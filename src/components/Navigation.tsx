import { useState, useEffect } from 'react';

export default function Navigation() {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Products', to: '/products' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' },
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 font-spaceGrotesk transition-colors duration-300 ${scrolled ? 'bg-white/80 backdrop-blur border-b border-black/5 shadow-sm' : 'bg-transparent'}`}> 
      <div className="flex items-center justify-between px-6 py-3 lg:px-12">
        {/* Logo left */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
        </a>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className={`${scrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-blue-200'} text-lg font-bold transition text-center font-clash`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/2348146249855?text=Hello%2C%20I%20would%20like%20a%20solar%20quotation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 px-6 py-2.5 rounded-pill bg-gradient-to-r from-primary to-secondary text-white font-extrabold text-base shadow-lg border-2 border-primary transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Get a Quote
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 bg-transparent border-none focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className={`w-8 h-8 ${scrolled ? 'text-blue-900' : 'text-white'}`} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile slide-in menu */}
  <div className={`fixed top-0 right-0 h-full w-72 bg-accent shadow-xl z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-lg animate-fade-in`}> 
        <div className="flex flex-col h-full p-8 gap-8">
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
                  className="block text-primary text-lg font-semibold hover:text-secondary transition font-clash"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/2348146249855?text=Hello%2C%20I%20would%20like%20a%20solar%20quotation"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 px-6 py-3 rounded-pill bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg text-center transition hover:scale-105"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)}></div>
      )}
    </nav>
  );
}
