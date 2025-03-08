import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-600">MediBook</h3>
            <p className="text-sm">&copy; 2025 MediBook. All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-600">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@medibook.com
              </p>
              <p className="text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-teal-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-teal-600 transition-colors">Services</a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:text-teal-600 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-sm hover:text-teal-600 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;