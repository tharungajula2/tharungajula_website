'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/education', label: 'Education' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-300 hover:to-purple-500 transition-colors duration-300">
            Portfolio
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative py-1"
                >
                  <span className={`text-base font-medium ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none z-30"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-black/95 z-20 pt-20 pb-6 px-4 md:hidden"
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="w-full text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`text-lg font-medium ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold' : 'text-gray-300'} transition-colors duration-300`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
} 