'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Digital, Analytics and AI Solutions Consultant",
    company: "Self-Employed",
    duration: "2022 - Present",
    description: "A multi-disciplinary freelancer providing AI-powered solutions across diverse domains: AI-Driven Content, Analytics & Digital Solutions from content creation to data analytics and front-end development, while pursuing a personal fitness transformation journey.",
    responsibilities: [
      "Content Creation & Editing – Video/text-based knowledge-sharing on AI, tech, and fitness",
      "Front-End Website Building – Helping clients establish an online presence using nocode and AI tools, Node.js and related frameworks",
      "Data Analytics & Process Automation – Using Python, SQL, and Excel for workflow optimizations and business intelligence",
      "Implemented buffer rules for stock filtering & rebalancing, minimizing unnecessary trades and optimizing turnover",
      "Automated portfolio weight adjustments to balance turnover control while maintaining performance",
      "Built a workflow automation framework to assess turnover, sector attribution, and rebalancing impact across strategies",
      "Generated detailed visual reports analyzing performance trends, drawdowns, and strategy effectiveness",
      "Tools Used: Python, Pandas, NumPy, Matplotlib, Excel (Pivot Tables, Macros)"
    ],
    relevance: "I have now started content creation focused on fitness & self-improvement, aligning with my 300-day transformation journey. Exploring AI & automation in fitness tracking, performance optimization, and training program personalization."
  },
  {
    id: 2,
    role: "Credit Risk Manager",
    company: "Jana Small Finance Bank",
    duration: "November 2021 - March 2022",
    description: "Leveraged data analytics to assess portfolio risk for personal and SME loans, implementing strategies to optimize lending decisions and minimize risk exposure.",
    responsibilities: [
      "Performed portfolio risk analytics on personal and SME loans, applying data-driven insights to predict borrower risk profiles & optimize lending strategies",
      "Built dashboards & visualizations using Excel to provide real-time business insights",
      "Automated periodic internal reports using SQL, Excel, and KNIME Analytics Tool, reducing manual effort",
      "Led inter-team data discussions, presenting risk trends & action plans to improve lending strategies"
    ],
    relevance: "Risk analytics involves predictive modeling, habit tracking, and pattern recognition—similar concepts apply to fitness progress analysis & personalized training adaptations. Dashboarding & analytics skills translate into visualizing fitness data & tracking personal health improvements."
  },
  {
    id: 3,
    role: "Business Solution Analyst (AI & Automation)",
    company: "Lentra AI Pvt Ltd",
    duration: "April 2021 - October 2021",
    description: "Designed AI-powered workflow automation systems for loan approval processes, focusing on consumer durable and two-wheeler loan segments.",
    responsibilities: [
      "Designed workflow automation using AI-powered rule engines to streamline loan approval processes",
      "Created Business Requirement Documents (BRDs) & Test Cases to assist in AI model deployment",
      "Developed visual process maps & system diagrams to optimize AI workflows",
      "Automated decision-making in consumer durable & two-wheeler loan segments"
    ],
    relevance: "Workflow automation principles can be applied to automated fitness coaching, AI-powered nutrition tracking, and habit-forming systems. Experience in structuring complex systems & data pipelines can be leveraged for wearable tech, health tracking apps, and AI-driven fitness insights."
  },
  {
    id: 4,
    role: "Research Analyst Intern",
    company: "Yadnya Academy Pvt Ltd",
    duration: "August 2020 - October 2020",
    description: "Analyzed financial data to evaluate company performance and investment potential, producing comprehensive research reports on market strategies.",
    responsibilities: [
      "Conducted fundamental analysis of companies, evaluating their financial health & investment potential",
      "Published research on financial ratios, investment strategies, and behavioral biases in decision-making",
      "Analyzed market trends to identify potential investment opportunities",
      "Developed analytical frameworks for evaluating company performance"
    ],
    relevance: "Financial risk & performance analysis uses similar principles as tracking fitness progress, metabolic efficiency, and injury risk."
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* Experience Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              My career path from finance and technology to health, fitness, and human optimization.
            </p>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 sm:pl-12"
                >
                  <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-700" />
                  <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 -ml-3 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl p-6 shadow-xl">
                    <h2 className="text-2xl font-bold text-white">{experience.role}</h2>
                    <div className="mt-2 flex items-center text-gray-400 space-x-2">
                      <span className="font-medium">{experience.company}</span>
                      <span>•</span>
                      <span>{experience.duration}</span>
                    </div>
                    <p className="mt-4 text-gray-300">
                      {experience.description}
                    </p>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {experience.relevance && (
                      <div className="mt-6 p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-900/30">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            Relevance to Fitness & Health:
                          </span>
                        </h3>
                        <p className="text-gray-300">{experience.relevance}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span></h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Analysis", "Risk Analytics", "SQL", "Excel", 
                  "KNIME Analytics", "Workflow Automation", "AI Rule Engines", "Dashboarding", 
                  "Financial Modeling", "Process Optimization", "Visualization", 
                  "Business Requirements", "System Design", "Problem Solving"
                ].map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-full bg-gray-800/70 text-gray-300 text-sm border border-blue-900/30 backdrop-blur-sm hover:bg-gray-700/80 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 