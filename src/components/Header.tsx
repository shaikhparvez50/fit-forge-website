
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Track scroll position for header styling and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show scroll-to-top button when scrolled down 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Classes', path: '/classes' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed w-full z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/95 dark:bg-gym-dark/95 backdrop-blur-sm shadow-md py-2" 
            : "bg-transparent py-4"
        )}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-gym-purple">FLEX<span className="text-gym-dark">GYM</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-2 mx-1 rounded-md transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gym-purple after:transition-all hover:after:w-full",
                  location.pathname === link.path
                    ? "text-gym-purple font-medium after:w-full"
                    : "text-gym-dark hover:text-gym-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="ml-4 bg-gym-purple hover:bg-opacity-90 animate-scale-in">Join Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gym-dark p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gym-dark/95 backdrop-blur-sm shadow-lg transition-all duration-500",
            isMenuOpen 
              ? "max-h-[500px] opacity-100" 
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="container-custom py-4 flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "py-3 px-4 border-b border-gray-100 transition-all hover:pl-6 hover:text-gym-purple",
                  location.pathname === link.path
                    ? "text-gym-purple font-medium"
                    : "text-gym-dark",
                  `animation-delay-${index * 100}`
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 bg-gym-purple hover:bg-opacity-90 animate-fade-in">Join Now</Button>
          </div>
        </div>
      </header>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gym-purple text-white shadow-lg transition-all duration-500 hover:bg-opacity-90 hover:-translate-y-1",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Header;
