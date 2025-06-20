import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Youtube, Instagram, ExternalLink } from 'lucide-react';
import logoImage from '../assets/images/lifelong_earner_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/Lifelong_Earner',
      icon: Twitter,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/watch?v=kpF5N6JkiHU',
      icon: Youtube,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/lifelong.earner/',
      icon: Instagram,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@lifelongearner',
      icon: ExternalLink,
    },
    {
      name: 'Linktree',
      href: 'https://linktr.ee/lifelongearner',
      icon: ExternalLink,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Logo Design & Branding',
    'Website Development',
    'Social Media Management',
    'SEO Optimization',
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Lifelong Earner" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional digital consulting with decades of combined experience in SEO, sales, and marketing. 
              We help businesses increase their bottom line through strategic brand development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-brand-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-secondary transition-colors duration-200 hover-lift"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-300 text-sm">
              Follow our journey and get insights into the latest digital trends, AI developments, and business growth strategies.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Lifelong Earner. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-brand-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-brand-secondary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

