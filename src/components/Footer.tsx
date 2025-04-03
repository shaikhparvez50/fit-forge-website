
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gym-dark text-white relative">
      {/* Footer wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 h-16">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-full"
          style={{ transform: 'rotateY(180deg) rotateX(180deg)' }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white/10"
          ></path>
        </svg>
      </div>
      
      <div className="container-custom pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">FLEX<span className="text-gym-purple">GYM</span></h3>
            <p className="mb-6 text-gray-300">
              We're dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert training programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gym-purple transition-all hover:-translate-y-1 duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-purple transition-all hover:-translate-y-1 duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-purple transition-all hover:-translate-y-1 duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-purple transition-all hover:-translate-y-1 duration-300" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animation-delay-100">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gym-purple transition-all hover:translate-x-1 inline-block duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gym-purple transition-all hover:translate-x-1 inline-block duration-300">Services</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-gym-purple transition-all hover:translate-x-1 inline-block duration-300">Classes</Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-gym-purple transition-all hover:translate-x-1 inline-block duration-300">Membership</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gym-purple transition-all hover:translate-x-1 inline-block duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in animation-delay-200">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-1 text-gym-purple group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">123 Fitness Avenue, Ganesh Nagar, Tilwada Gate No. 177, Pimpri Chinchwad, Pune, India</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-gym-purple group-hover:text-white transition-colors" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gym-purple transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-gym-purple group-hover:text-white transition-colors" />
                <a href="mailto:info@flexgym.com" className="text-gray-300 hover:text-gym-purple transition-colors">
                  info@flexgym.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="animate-fade-in animation-delay-300">
            <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gym-purple" />
                <div>
                  <span className="block text-gray-300">Monday - Friday</span>
                  <span className="text-white">5:00 AM - 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gym-purple" />
                <div>
                  <span className="block text-gray-300">Saturday</span>
                  <span className="text-white">6:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gym-purple" />
                <div>
                  <span className="block text-gray-300">Sunday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gym-gray mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 relative">
          <p>&copy; {new Date().getFullYear()} FLEXGYM. All rights reserved.</p>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 -top-4 p-2 rounded-full bg-gym-purple text-white hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
