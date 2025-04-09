'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    name: "Google Advanced Data Analytics",
    issuer: "Google",
    date: "June 2023",
    description: "Successfully completed 7-course specialization, covering: Data Science Foundations & Python for Analytics, Statistics, Regression, and Predictive Modeling, Machine Learning Fundamentals, and Advanced Data Analytics Capstone.",
    skills: ["Data Exploration", "Statistical Analysis", "Machine Learning", "Business Insights", "Python for Analytics", "Predictive Modeling"],
    verificationLink: "https://coursera.org/verify/professional-cert/K77CZFHYEJRW"
  },
  {
    id: 2,
    name: "Unilever Digital Marketing Analyst",
    issuer: "Unilever",
    date: "May 2024",
    description: "Successfully completed 4-course specialization, covering: Customer Insights & Digital Marketing Channels, Campaign Performance Measurement & Analytics, Data Visualization & Performance Improvement Strategies, and Advanced Marketing Analytics Tools.",
    skills: ["Digital Marketing Analytics", "Campaign Performance Optimization", "Reporting & Visualization", "Customer Insights", "Marketing Channels"],
    verificationLink: "https://coursera.org/verify/professional-cert/7GPKU245V49U"
  }
];

export default function Certifications() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* Certifications Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Certifications</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              Industry-recognized certifications that validate my expertise in data analytics, machine learning, and digital marketing.
            </p>
            
            <div className="space-y-12">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification.id}
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{certification.name}</h2>
                      <div className="mt-2 flex items-center text-gray-400 space-x-2">
                        <span className="font-medium">{certification.issuer}</span>
                        <span>•</span>
                        <span>{certification.date}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <a 
                        href={certification.verificationLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-800/30 hover:bg-blue-800/40 transition-colors duration-300"
                      >
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-300">{certification.description}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Skills Acquired</h3>
                    <div className="flex flex-wrap gap-2">
                      {certification.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-gray-800/70 text-gray-300 text-sm border border-blue-900/30 backdrop-blur-sm hover:bg-gray-700/80 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Continuing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Education</span></h2>
              <p className="text-gray-300 mb-6">
                In addition to formal certifications, I regularly participate in workshops, webinars, and online courses to stay updated with the latest advancements in data science, AI, and health optimization.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-gradient-to-b border-blue-500 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white">AI for Everyone</h3>
                  <p className="text-gray-400">deeplearning.ai (2023)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white">Fitness Data Analysis & Tracking</h3>
                  <p className="text-gray-400">Self-Directed Learning (2023-Present)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white">Digital Content Creation & Audience Growth</h3>
                  <p className="text-gray-400">Various Platforms (2022-Present)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 