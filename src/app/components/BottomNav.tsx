import { Home, BookOpen, Video, LayoutDashboard, User } from 'lucide-react';
import { useState } from 'react';

export function BottomNav() {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' },
    { id: 'courses', icon: BookOpen, label: 'Courses', href: '#courses' },
    { id: 'webinars', icon: Video, label: 'Webinars', href: '#webinars' },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', href: '#dashboard' },
    { id: 'profile', icon: User, label: 'Profile', href: '#profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-2xl z-40 lg:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              active === item.id
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            <item.icon
              size={22}
              className={active === item.id ? 'fill-primary/10' : ''}
            />
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
