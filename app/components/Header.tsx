'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <span className="text-xl font-semibold text-blue-500 tracking-tight">Portfolio</span>
          </Link>
          
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`transition-all duration-300 hover:text-blue-400 ${
                    isActive 
                      ? 'text-blue-500 border-b-2 border-blue-500' 
                      : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-lg z-40"
          >
            <div className="pt-6 pb-4 px-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={`block py-3 px-4 text-lg text-center ${
                        isActive ? 'text-blue-400 font-medium' : 'text-gray-300'
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 