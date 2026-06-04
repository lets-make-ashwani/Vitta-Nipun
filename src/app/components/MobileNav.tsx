import { useState } from 'react';
import { Menu, X, Home, BookOpen, Briefcase, Video, FileText, LayoutDashboard, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: BookOpen, label: 'Courses', href: '/#courses' },
    { icon: Briefcase, label: 'Placements', href: '/#placements' },
    { icon: Video, label: 'Webinars', href: '/#webinars' },
    { icon: FileText, label: 'Blogs', href: '/blog', target: '_blank' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/#dashboard' },
    { icon: Mail, label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-primary z-50 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold text-white">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setIsOpen(false);
                      if (item.href === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    target={item.target}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 text-white hover:bg-white/10 rounded-lg transition-all group"
                  >
                    <item.icon className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Book Free Counselling
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
