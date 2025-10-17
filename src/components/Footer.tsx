import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-footer text-accent pt-16 pb-8 px-4 font-spaceGrotesk mt-auto shadow-footer animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        {/* About Company */}
        <div>
          <span className="font-extrabold text-2xl block leading-tight mb-2 font-clash text-white">Solar Energy Solutions</span>
          <p className="text-sm text-lightgray mb-4 leading-relaxed font-medium font-inter">
            Nigeria's trusted partner for innovative, sustainable solar energy solutions for homes, businesses, and industries.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-bold mb-5 text-lg text-white tracking-wide font-clash">Quick Links</div>
          <ul className="space-y-3 text-base text-lightgray font-medium font-inter">
            <li><a href="/" className="hover:text-secondary">Home</a></li>
            <li><a href="/about" className="hover:text-secondary">About</a></li>
            <li><a href="/products" className="hover:text-secondary">Products</a></li>
            <li><a href="/services" className="hover:text-secondary">Services</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>
        {/* Solutions */}
        <div>
          <div className="font-bold mb-5 text-lg text-white tracking-wide font-clash">Solutions</div>
          <ul className="space-y-3 text-base text-lightgray font-medium font-inter">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Industrial</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <div className="font-bold mb-5 text-lg text-white tracking-wide font-clash">Contact Info</div>
          <div className="space-y-2 text-base text-lightgray font-medium font-inter">
            <div>7, Jeminata Street, Alagba, Agege, Lagos, Nigeria</div>
            <div>info@solarbridgesolution.com.ng</div>
            <div>+2349028519838</div>
            <div>+2348146249855</div>
            <div className="flex gap-4 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
              <a href="https://wa.me/2348146249855" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.3.13 12 .13c3.17 0 6.167 1.233 8.413 3.479A11.822 11.822 0 0 1 23.87 12c0 6.627-5.373 12-12 12a11.87 11.87 0 0 1-5.943-1.59L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.591 5.448 0 9.886-4.434 9.886-9.884 0-2.64-1.033-5.122-2.905-6.994A9.824 9.824 0 0 0 12 2.13c-5.448 0-9.884 4.434-9.884 9.884 0 1.97.576 3.568 1.587 5.347l-.999 3.648 3.65-.996zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900 mt-12 mb-2"></div>
      <div className="text-center text-sm text-gray-300 mt-4 font-semibold">© 2025 Solar Energy Solutions — All rights reserved.</div>
    </footer>
  );
}
