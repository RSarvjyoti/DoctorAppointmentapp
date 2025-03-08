import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
              Appointment App
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/doctor-login" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Doctor Login
                </Link>
              </li>
              <li>
                <Link to="/patient-login" className="bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors">
                  Patient Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;