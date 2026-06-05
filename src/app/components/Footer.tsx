import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity w-fit">
              <Logo className="h-10 sm:h-12 w-auto bg-white p-1 rounded-md" />
              <div>
                <h3 className="font-bold text-xl">Vitta Nipun</h3>
                <p className="text-secondary text-xs">Expert in Finance Education</p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              India's leading finance education institute offering world-class programs in finance, technology, and data science.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-white/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/#courses" className="text-white/70 hover:text-secondary transition-colors">All Courses</a></li>
              <li><a href="/#placements" className="text-white/70 hover:text-secondary transition-colors">Placements</a></li>
              <li><a href="/#webinars" className="text-white/70 hover:text-secondary transition-colors">Webinars</a></li>
              <li><a href="/blog" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="/#testimonials" className="text-white/70 hover:text-secondary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Investment Banking</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Financial Modeling</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Data Science</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Stock Market</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">FinTech</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Business Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-white/70">
                <span className="text-white/70">Flat No. 103, 1st Floor Indradeep, Complex, 117/N/47, AVON Market, Ambedkar Nagar, Navin Nagar, Kakadeo Kanpur, Uttar Pradesh, 208005, India</span>
                  
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <span className="text-white/70">+91 9956660896 , +91 9365106332</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <span className="text-white/70">Contact@vittanipun.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} VITTANIPUN EDUTECH & SKILL SOLUTIONS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
