import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-2 tracking-tight">Get in Touch</h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg">
            Ready to go solar? Contact us today for a free consultation and quote.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          {/* Contact Form */}
          <div className="h-full flex items-stretch">
            <form 
              action="https://formspree.io/f/mqaygqry" 
              method="POST" 
              className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 flex-1 flex flex-col justify-center"
              style={{ minHeight: '100%' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-800 font-semibold mb-2" htmlFor="name">Your Name</label>
                  <Input id="name" name="name" type="text" placeholder="Enter your name" className="w-full bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div>
                  <label className="block text-blue-800 font-semibold mb-2" htmlFor="email">Your Email</label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" className="w-full bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400" required />
                </div>
              </div>
              <div>
                <label className="block text-blue-800 font-semibold mb-2" htmlFor="phone">Phone Number</label>
                <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" className="w-full bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-blue-800 font-semibold mb-2" htmlFor="message">Your Message</label>
                <Textarea id="message" name="message" placeholder="Type your message here..." rows={4} className="w-full bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400" required />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-200">
                Send Message
              </Button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="h-full flex items-stretch">
            <div className="space-y-8 bg-white/80 rounded-2xl p-8 shadow-xl border border-blue-100 flex-1 flex flex-col justify-center" style={{ minHeight: '100%' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                  <Phone className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1 text-lg">Phone</h3>
                  <p className="text-blue-700">+234 XXX XXX XXXX</p>
                  <p className="text-blue-700">+234 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                  <Mail className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1 text-lg">Email</h3>
                  <p className="text-blue-700">info@solarbridgesolution.com.ng</p>
                  <p className="text-blue-700">support@solarbridgesolution.com.ng</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                  <MapPin className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1 text-lg">Address</h3>
                  <p className="text-blue-700">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
