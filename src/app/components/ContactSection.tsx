import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-[#084158] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have questions? Our expert counselors are here to guide you every step of the way
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Visit Us</p>
                    <p className="text-white/70">Flat No. 103, 1st Floor Indradeep, Complex, 117/N/47, AVON Market, Ambedkar Nagar, Navin Nagar, Kakadeo Kanpur, Uttar Pradesh, 208005, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Call Us</p>
                    <p className="text-white/70">+91 9956660896</p>
                    <p className="text-white/70">+91 9365106332</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email Us</p>
                    <p className="text-white/70">Contact@vittanipun.com</p>
                    <p className="text-white/70">admissions@vittanipun.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">WhatsApp Support</p>
                    <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-2">
                      Chat with us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Interested Course</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option value="" className="bg-primary">Select a course</option>
                  <option value="investment-banking" className="bg-primary">Investment Banking</option>
                  <option value="financial-modeling" className="bg-primary">Financial Modeling</option>
                  <option value="data-science" className="bg-primary">Data Science</option>
                  <option value="fintech" className="bg-primary">FinTech</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals and how we can help..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
