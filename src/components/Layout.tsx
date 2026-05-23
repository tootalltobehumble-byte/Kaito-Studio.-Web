import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <header className="h-24 px-6 md:px-12 flex items-center justify-between z-50 border-b border-accent/30 relative">
        <Link to="/" className="flex flex-col z-50 gap-0">
          <span className="font-heading text-xl tracking-widest uppercase text-cream leading-tight">Kaito Studio</span>
          <span className="text-[10px] tracking-[0.3em] text-secondary uppercase leading-none">Ocean & Soar</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-xs tracking-[0.1em] text-secondary hover:text-accent font-medium uppercase transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="text-xs tracking-[0.1em] text-cream px-6 py-2 border border-accent/50 rounded-full hover:bg-accent/10 transition-colors uppercase font-medium"
          >
            Start Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cream z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-midnight z-40 md:hidden transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-heading text-cream hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="h-auto md:h-32 px-6 py-8 md:py-0 md:px-12 border-t border-accent/30 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-heading text-xl tracking-widest uppercase text-cream leading-tight">Kaito Studio</span>
          <span className="text-[10px] tracking-[0.3em] text-secondary uppercase leading-none">Ocean & Soar.</span>
        </div>
        
        <div className="text-center md:text-right text-secondary space-y-1">
          <p className="text-xs tracking-wider uppercase">— © {new Date().getFullYear()}</p>
          <p className="text-[10px] uppercase tracking-widest text-secondary opacity-60">Fully async. No meetings. Privacy first.</p>
        </div>
      </footer>
    </div>
  );
}
