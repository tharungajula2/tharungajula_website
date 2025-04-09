'use client';

import { motion } from 'framer-motion';

const educations = [
  {
    id: 1,
    degree: "Post Graduate Level Executive Programme in Deep Learning",
    specialization: "Deep Learning, Reinforcement Learning, Computer Vision, and AI Applications",
    institution: "Indian Institute of Science, Bangalore",
    location: "Bangalore, India",
    duration: "September 2023 - December 2024",
    grade: "Graduated with 92%",
    description: "Advanced training in deep learning architectures, reinforcement learning algorithms, computer vision techniques, and practical AI applications. Applied cutting-edge techniques to solve complex problems through project-based learning."
  },
  {
    id: 2,
    degree: "PGDM, Banking and Finance",
    specialization: "Credit Risk, Portfolio Management, and Financial Analytics",
    institution: "National Institute of Bank Management",
    location: "Pune, India",
    duration: "2019 - 2021",
    grade: "Graduated with 74.13%",
    description: "Comprehensive education in banking operations, financial analysis, risk management, and investment strategies. Developed expertise in credit risk assessment methodologies and financial data analytics techniques."
  },
  {
    id: 3,
    degree: "Bachelor of Technology, Mechanical Engineering",
    specialization: "Engineering Design and Analysis",
    institution: "GRIET, JNTUH",
    location: "Hyderabad, India",
    duration: "2013 - 2017",
    grade: "Graduated with 85.62%",
    description: "Strong foundation in engineering principles, design methodologies, and analytical problem-solving. Led an all-terrain vehicle (ATV) project, managing sponsorships, technical documentation, and engineering analysis."
  }
];

export default function Education() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* Education Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Education</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              My educational journey from engineering to finance and artificial intelligence, building a versatile foundation for data-driven solutions.
            </p>
            
            <div className="space-y-12">
              {educations.map((education, index) => (
                <motion.div
                  key={education.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl p-6 shadow-xl"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                    scale: 1.01
                  }}
                >
                  <h2 className="text-2xl font-bold text-white">{education.degree}</h2>
                  <p className="text-lg text-gray-300 mt-1">{education.specialization}</p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <div className="text-gray-200 font-medium">{education.institution}</div>
                      <div className="text-gray-400">{education.location}</div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <div className="text-gray-200 font-medium">{education.duration}</div>
                      <div className="text-gray-400">{education.grade}</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-300">{education.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Areas</span> of Study</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Deep Learning Architectures",
                  "Reinforcement Learning",
                  "Computer Vision",
                  "AI Applications",
                  "Credit Risk Analysis",
                  "Portfolio Management",
                  "Financial Analytics",
                  "Banking Operations",
                  "Mechanical Design",
                  "Engineering Analysis"
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span> & Achievements</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Led an all-terrain vehicle (ATV) project during engineering, managing sponsorships and technical documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Completed advanced reinforcement learning projects at IISc, including CartPole optimization with various RL algorithms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Developed credit risk models and financial analytics frameworks during PGDM program</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 