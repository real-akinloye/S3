import { useState } from 'react';

export default function TransparentNav() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Products', to: '/products' },
    { name: 'Find Installers', to: '/installers' },
    { name: 'Services', to: '/services' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <header className="w-full bg-transparent">
      <nav className="flex items-center justify-between px-6 py-6 lg:px-12 bg-transparent">
        <div className="hidden md:flex space-x-8 items-center justify-center w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="text-white text-lg font-medium hover:text-yellow-400 transition px-0 py-0 bg-transparent border-none shadow-none rounded-none drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/2348146249855?text=Hello%2C%20I%20would%20like%20a%20solar%20quotation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 px-7 py-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition font-sans text-lg drop-shadow-md"
          >
            Get a Free Quote
          </a>
        </div>
        {/* Mobile/Tablet hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 bg-transparent border-none shadow-none rounded-none focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-7 h-7 text-white/70" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile/Tablet Menu */}
      {open && (
        <div className="md:hidden bg-transparent shadow-none border-t border-transparent animate-fade-in px-4 pb-4 w-full absolute left-0 top-full z-40">
          <ul className="flex flex-col gap-2 font-medium text-white/70 w-full items-center text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
                  className="block text-lg font-medium hover:text-yellow-400 transition px-0 py-0 bg-transparent border-none shadow-none rounded-none drop-shadow-md"
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
                className="block mt-2 px-7 py-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition text-center font-sans text-lg drop-shadow-md"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
