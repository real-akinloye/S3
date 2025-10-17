export default function Contact() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-gradient-to-br from-accent to-white py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-clash text-primary mb-6 text-center">Contact Us</h1>
      <p className="text-slate-600 max-w-2xl text-center mb-10">We'd love to hear from you. Visit us, call us, or chat on WhatsApp.</p>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Map Card */}
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl border border-blue-50 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">Our Location</h2>
            <p className="text-slate-600 mb-4">7, Jeminata Street, Alagba, Agege, Lagos, Nigeria</p>
          </div>
          <div className="h-80 w-full">
            <iframe
              className="w-full h-full"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.760964274331!2d7.4956!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a6e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sJ%20%26%20M%20Event%20Centre!5e0!3m2!1sen!2sng!4v1665666666666!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6">
            <a
              href="https://goo.gl/maps/your-location-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl border border-blue-50 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Reach Us</h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <span className="font-semibold">Phone:</span> <a className="text-blue-700 hover:underline" href="tel:+2349028519838">+234 902 851 9838</a>
            </div>
            <div>
              <span className="font-semibold">Email:</span> <a className="text-blue-700 hover:underline" href="mailto:info@solarbridgesolution.com.ng">info@solarbridgesolution.com.ng</a>
            </div>
            <div>
              <span className="font-semibold">WhatsApp:</span> <a className="text-blue-700 hover:underline" href="https://wa.me/2348146249855" target="_blank" rel="noopener noreferrer">Chat with us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating buttons */}
      <a
        href="tel:+2349028519838"
        aria-label="Call Now"
        title="Call Now"
        className="fixed bottom-24 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 shadow-lg hover:bg-blue-700 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
        Call
      </a>

      <a
        href="https://wa.me/2348146249855"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 shadow-lg hover:bg-green-600 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="currentColor" />
          <path d="M16 6.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.67.44 3.29 1.28 4.71L6 26l5.44-1.77c1.36.75 2.9 1.16 4.56 1.16 5.24 0 9.5-4.26 9.5-9.5S21.24 6.5 16 6.5zm0 16.5c-1.44 0-2.83-.38-4.03-1.09l-.29-.17-3.23 1.05 1.06-3.14-.18-.3C8.38 17.33 8 15.97 8 14.5c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.15-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.36.12.15 1.61 2.46 3.91 3.35.55.19.98.3 1.32.38.56.12 1.07.1 1.47.06.45-.05 1.36-.56 1.55-1.1.19-.54.19-1.01.13-1.1-.06-.09-.21-.15-.44-.27z" fill="#fff"/>
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
