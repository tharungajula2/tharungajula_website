'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      <section className="relative flex flex-col items-center justify-center flex-1 px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-6xl font-bold text-white mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-8">Page Not Found</h2>
          <p className="text-gray-400 mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </section>
    </div>
  );
} 