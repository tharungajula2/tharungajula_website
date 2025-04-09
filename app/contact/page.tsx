'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Normally we would send the form data to a server here
    // This is just a placeholder response
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you as soon as possible.'
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              Feel free to reach out with opportunities, questions, or just to say hello!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Form</span></h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-900/50 text-green-300 border border-green-800/50' : 'bg-red-900/50 text-red-300 border border-red-800/50'}`}>
                    {formStatus.message}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">With Me</span></h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
                    <a href="mailto:tharune4ir@gmail.com" className="text-gray-300 hover:text-blue-400 transition">
                      tharune4ir@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Social Media</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
                        aria-label="GitHub"
                      >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://huggingface.co" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                        aria-label="HuggingFace"
                      >
                        <svg className="h-8 w-8" viewBox="0 0 120 120" fill="currentColor">
                          <path d="M59.97 29.29c-5.59 0-12.33 1.1-18.76 4.34-5.82 2.82-10.84 7-14.27 13.67-4.42 8.57-7.06 16.9-8.16 28.79-1.1 11.9 3.58 21.9 9.73 28.2 6.15 6.3 13.9 7.8 26.88 6.58 12.98-1.22 21.2-3.86 28.96-10.4 7.76-6.55 13.09-16.4 16.15-22.48 3.06-6.08 4.22-10.23 4.69-19.34.47-9.1-.38-20.48-7.52-26.8-7.15-6.32-15.5-7.35-23.23-6.26-7.73 1.1-14.47 3.7-14.47 3.7z"/>
                          <path d="M43.19 45.13c5.63.97 17.5 7.16 17.29 12.96-.2 5.8-7.69 10.43-12.99 3.14-5.3-7.28-9.94-17.07-4.3-16.1M80.6 43.99c-5.8.45-17.8 6.9-17.7 12.72.1 5.82 7.18 10.63 12.95 3.7 5.76-6.93 10.56-16.87 4.76-16.42M49.15 86.97c1.76 1.8 5.69 2.75 5.34 0s-1.54-7.13-3.31-8.93-5.22-2.4-5.34 0c-.12 2.4 1.56 7.13 3.31 8.93M76.32 75.3c-1.85 1.94-5.8 2.97-5.32 0 .48-2.97 1.97-7.7 3.81-9.63 1.85-1.94 5.05-2.2 5.32 0 .27 2.2-1.95 7.7-3.8 9.63" fill="#fff"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Location</h3>
                    <p className="text-gray-300">
                      Anantapur, India
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl shadow-xl">
                    <h3 className="text-lg font-semibold text-white mb-3">Open to:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Freelance Projects</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Full-time Opportunities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Research Collaborations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 