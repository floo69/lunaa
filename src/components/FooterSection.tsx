
import React from 'react';
import { Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Luna</h3>
            <p className="text-gray-600 mb-4">
              Empowering women's health through technology and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-luna-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-luna-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-luna-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 footer-link">About Us</a></li>
              <li><a href="#features" className="text-gray-600 footer-link">Features</a></li>
              <li><a href="#" className="text-gray-600 footer-link">How It Works</a></li>
              <li><a href="#" className="text-gray-600 footer-link">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 footer-link">Help Center</a></li>
              <li><a href="#" className="text-gray-600 footer-link">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 footer-link">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 footer-link">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get updates on new features and wellness tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-l-full border border-gray-200 focus:outline-none focus:border-luna-purple" 
              />
              <button 
                type="submit" 
                className="bg-luna-purple text-white px-4 py-2 rounded-r-full hover:bg-purple-600 transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="flex items-center justify-center text-gray-600 gap-1">
            Your health, your journey, your Luna
            <Heart className="h-4 w-4 text-red-400 fill-red-400" />
          </p>
          <p className="text-sm text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} Luna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
