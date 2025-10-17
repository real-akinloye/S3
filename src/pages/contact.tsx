
import '../contact-page.css';

export default function Contact() {
  return (
    <div className="contact-bg contact-screenshot-layout">
      {/* Floating Call Now button */}
      <a
        href="tel:+2349028519838"
  className="btn-call contact-btn contact-btn-flex"
        aria-label="Call Now"
        title="Call Now"
  // ...removed inline style, now in CSS...
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
        Call Now
      </a>

      {/* Glassmorphic Card Centered */}
      <h1 className="contact-header contact-screenshot-header">Contact Us</h1>
      <div className="contact-header-underline contact-screenshot-underline" />
      <div className="contact-glass-card contact-screenshot-card">
        <div className="contact-title contact-screenshot-title">Find Our Location</div>
        <div className="contact-map contact-screenshot-map compact-map-box">
          <iframe
            className="contact-map-iframe"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.760964274331!2d7.4956!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a6e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sJ%20%26%20M%20Event%20Centre!5e0!3m2!1sen!2sng!4v1665666666666!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a
          href="https://goo.gl/maps/your-location-link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-directions contact-btn contact-screenshot-directions contact-btn-flex"
        >
          <svg className="icon-margin-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l7 19-7-4-7 4z" />
          </svg>
          Get Directions
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348146249855"
        target="_blank"
        rel="noopener noreferrer"
  className="btn-whatsapp contact-btn contact-btn-flex"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
  // ...removed inline style, now in CSS...
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path d="M16 6.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.67.44 3.29 1.28 4.71L6 26l5.44-1.77c1.36.75 2.9 1.16 4.56 1.16 5.24 0 9.5-4.26 9.5-9.5S21.24 6.5 16 6.5zm0 16.5c-1.44 0-2.83-.38-4.03-1.09l-.29-.17-3.23 1.05 1.06-3.14-.18-.3C8.38 17.33 8 15.97 8 14.5c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.15-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.36.12.15 1.61 2.46 3.91 3.35.55.19.98.3 1.32.38.56.12 1.07.1 1.47.06.45-.05 1.36-.56 1.55-1.1.19-.54.19-1.01.13-1.1-.06-.09-.21-.15-.44-.27z" fill="#fff"/>
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
