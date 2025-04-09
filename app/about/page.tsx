'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* About Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span></h1>
            
            <div className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-strong:text-white">
              <p className="mb-6">
                For years, I explored multiple fields—<strong>banking, technology, AI, and data science</strong>—seeking my true calling. But now, at 30, my vision is crystal clear: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-medium">Health, fitness, and human optimization are my life's mission.</span>
              </p>
              
              <p className="mb-6">
                I am on a <strong>personal transformation journey</strong> to become the <strong>strongest, healthiest, and most disciplined version of myself</strong> in the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-medium">300 days</span>. This is not just about building my body but <strong>mastering the science of fitness</strong>—from <strong>nutrition and biomechanics to data-driven performance optimization</strong>.
              </p>

              <p className="mb-6">
                With a <strong>background in AI, Deep Learning, Data Analytics, and Automation</strong>, I aim to <strong>merge technology with fitness</strong> to create <strong>intelligent, scalable health solutions</strong>. Whether it's <strong>fitness-tech, AI-driven coaching, or content creation</strong>, my mission is to <strong>help people optimize their health through science-backed, data-driven approaches</strong>.
              </p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-semibold text-white mt-12 mb-4"
              >
                My Unique Value Proposition
              </motion.h2>
              
              <p className="mb-6">
                What sets me apart is the combination of technical expertise and passion for health optimization:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Bringing Data & AI into Fitness</strong> – Understanding how algorithms, machine learning, and automation can revolutionize the fitness space.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Personal Transformation First</strong> – Applying every principle to my own journey before helping others.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Technical + Scientific Approach</strong> – Combining data-driven insights with proven fitness methodologies.</span>
                </li>
              </ul>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-semibold text-white mt-12 mb-4"
              >
                Areas of Expertise & Interest
              </motion.h2>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Scientific Approach to Fitness & Health</strong> – Learning and applying nutrition, biochemistry, physiology, and strength training principles.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>AI & Data Science for Health Optimization</strong> – Exploring how AI, predictive analytics, and automation can enhance fitness coaching & performance tracking.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Habit Formation & Mental Conditioning</strong> – Developing systems for consistency, self-discipline, and long-term fitness adherence.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Fitness-Tech & Digital Transformation</strong> – Understanding how wearables, AI-driven meal planning, and smart training systems can revolutionize the industry.</span>
                </li>
              </ul>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 p-6 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl shadow-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Future Vision</h3>
                <p className="mb-4">My long-term goals include:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Becoming a leading figure in AI-powered health transformation</li>
                  <li>Contributing to fitness-tech innovations (apps, AI coaches, automation)</li>
                  <li>Educating & inspiring people with science-backed fitness strategies</li>
                  <li>Bridging the gap between fitness, health, and technology</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 