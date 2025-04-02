
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FLEX<span className="text-gym-red">GYM</span></h3>
            <p className="mb-6 text-gray-300">
              We're dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert training programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gym-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-red transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gym-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gym-red transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-gym-red transition-colors">Classes</Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-gym-red transition-colors">Membership</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gym-red transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-gym-red" />
                <span className="text-gray-300">123 Fitness Avenue, Workout City, WC 10234</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gym-red" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gym-red transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gym-red" />
                <a href="mailto:info@flexgym.com" className="text-gray-300 hover:text-gym-red transition-colors">
                  info@flexgym.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gym-red" />
                <div>
                  <span className="block text-gray-300">Monday - Friday</span>
                  <span className="text-white">5:00 AM - 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gym-red" />
                <div>
                  <span className="block text-gray-300">Saturday</span>
                  <span className="text-white">6:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gym-red" />
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
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FLEXGYM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
