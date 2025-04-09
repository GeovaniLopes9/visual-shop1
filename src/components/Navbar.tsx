
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-blackRich/90 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold">
            <span className="text-gradient-gold">Visual</span>
            <span className="text-white">Shop</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#portfolio" label="Portfólio" />
          <NavLink href="#calculator" label="Calculadora" />
          <NavLink href="#process" label="Processo" />
          <NavLink href="#contact" label="Contato" />
          <button className="btn-primary">Transforme sua Loja</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-blackRich/95 backdrop-blur-md absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 shadow-lg border-t border-gold/20">
          <NavLink href="#portfolio" label="Portfólio" onClick={() => setMobileMenuOpen(false)} mobile />
          <NavLink href="#calculator" label="Calculadora" onClick={() => setMobileMenuOpen(false)} mobile />
          <NavLink href="#process" label="Processo" onClick={() => setMobileMenuOpen(false)} mobile />
          <NavLink href="#contact" label="Contato" onClick={() => setMobileMenuOpen(false)} mobile />
          <button className="btn-primary w-full">Transforme sua Loja</button>
        </nav>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink = ({ href, label, onClick, mobile }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "relative font-medium transition-colors duration-300",
        "hover:text-gold",
        "after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-[-4px]",
        "after:bg-gold after:transition-all after:duration-300 after:ease-in-out",
        "hover:after:w-full",
        mobile ? "text-white py-2" : "text-white/80 hover:text-white"
      )}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Navbar;
