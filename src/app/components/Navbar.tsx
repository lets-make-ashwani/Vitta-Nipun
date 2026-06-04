import { useState, useEffect } from 'react';
import { MobileNav } from './MobileNav';
import { BookOpen } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 sm:h-12 w-auto bg-white p-1 rounded-md" />
            <div>
              <h1 className="text-white font-bold text-lg sm:text-xl">Vitta Nipun</h1>
              <p className="text-secondary text-xs hidden sm:block">Expert in Finance Education</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-secondary transition-colors">Home</a>
            <a href="#courses" className="text-white hover:text-secondary transition-colors">Courses</a>
            {/* <a href="#placements" className="text-white hover:text-secondary transition-colors">Placements</a>
            <a href="#webinars" className="text-white hover:text-secondary transition-colors">Webinars</a>
            <a href="#blogs" className="text-white hover:text-secondary transition-colors">Blogs</a> */}
            <a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Enroll Now
            </button>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
