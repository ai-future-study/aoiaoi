import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'トップページへ', href: '#top' },
  { label: 'リトリート', href: '#retreat-detail' },
  { label: 'ムナイキ', href: '#munayki' },
  { label: 'プロフィール', href: '#profile-detail' },
  { label: 'ご予約', href: '#contact' },
];

interface NavigationProps {
  onNavigate?: (href: string) => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(isOpen);
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onMenuToggle]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      // Fallback default behavior
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[120] transition-all duration-1000 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo removed as per request */}
        <div className="z-50 relative h-8 w-1" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-zinc-600 text-xs tracking-[0.15em] hover:text-[#C4A962] transition-all duration-500 font-light relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C4A962]/60 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <div className="w-px h-4 bg-[#C4A962]/40 mx-2" />
          <a 
            href="https://www.instagram.com/toumeihibiki?igsh=aDNjNTl5cHo1NHh4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-[#C4A962] transition-colors"
          >
            <Instagram strokeWidth={1} size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#C4A962] hover:text-[#A88E4D] transition-colors z-[130] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X strokeWidth={1} size={26} /> : <Menu strokeWidth={1} size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[120] flex flex-col justify-center items-center space-y-10 transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="serif text-zinc-700 text-xl tracking-[0.2em] hover:text-[#C4A962] transition-colors"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="w-12 h-px bg-[#C4A962]/40 my-8" />
          <a 
            href="https://www.instagram.com/toumeihibiki?igsh=aDNjNTl5cHo1NHh4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#C4A962] transition-colors flex items-center gap-3 tracking-widest text-sm"
          >
            <Instagram strokeWidth={1} size={20} />
            <span>INSTAGRAM</span>
          </a>
      </div>
    </nav>
  );
};