'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 1,
    title: "Business Skills",
    skills: [
      "Financial Analysis", 
      "Market Research", 
      "Strategy", 
      "Corporate Finance", 
      "Risk Management"
    ]
  },
  {
    id: 2,
    title: "Programming & Data Science",
    skills: [
      "Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, XGBoost)",
      "SQL (PostgreSQL, MySQL, SQL Server)",
      "PySpark (Big Data Processing)",
      "SAS Enterprise Miner",
      "Git & GitHub (Version Control & Collaboration)"
    ]
  },
  {
    id: 3,
    title: "IDEs & Development Environments",
    skills: [
      "Jupyter Notebook, Google Colab (Interactive Computing & Experimentation)",
      "PyCharm, Visual Studio Code (Python Development)"
    ]
  },
  {
    id: 4,
    title: "Big Data & Cloud Technologies",
    skills: [
      "Apache Spark & Databricks (Big Data Processing & ETL)",
      "AWS S3 (Basic Understanding) (Cloud Storage & Data Handling)"
    ]
  },
  {
    id: 5,
    title: "Data Science & Machine Learning",
    skills: [
      "Data Gathering & Pre-processing (Cleaning, Transformation, Feature Engineering)",
      "Exploratory Data Analysis (EDA) (Visualization, Trend & Pattern Identification)",
      "Statistical Analysis & Hypothesis Testing",
      "Predictive Modeling & Forecasting (Regression, Classification, Time-Series)",
      "Machine Learning & Deep Learning Models",
      "Model Validation & Performance Optimization",
      "Automated Data Pipelines & Workflow Automation"
    ]
  },
  {
    id: 6,
    title: "Business Intelligence & Visualization",
    skills: [
      "Excel (Advanced Analytics & Dashboarding)",
      "Tableau & Power BI (Data Visualization & Business Insights)",
      "Matplotlib, Seaborn, Plotly (Python-based Data Visualization)"
    ]
  },
  {
    id: 7,
    title: "AI & Automation in Business & Marketing",
    skills: [
      "AI-Powered Chatbots & NLP (Sentiment Analysis, Text Processing)",
      "AI & ML in Financial Modeling & Risk Assessment",
      "AI-Driven Digital Marketing Analytics",
      "No-Code & Low-Code Automation (Zapier, Power Automate, Notion, Airtable)"
    ]
  },
  {
    id: 8,
    title: "Content Creation, Digital Media & Branding",
    skills: [
      "Content Writing & Editing (Long-form Blogs, Technical Writing, AI & Fitness Content)",
      "SEO Optimization (Keyword Research, On-Page & Off-Page SEO)",
      "Scriptwriting & Storytelling (For Video & Digital Media)",
      "Social Media Strategy & Growth (LinkedIn, Twitter, Instagram, YouTube)",
      "Video Content Editing (CapCut, Adobe Premiere Pro [Basic])",
      "No-Code Website Building (WordPress, Wix, Notion)",
      "Community Engagement & Audience Building"
    ]
  },
  {
    id: 9,
    title: "Additional Areas of Expertise & Interest",
    skills: [
      "Podcasting & Audio Content Editing (For future AI/Fitness knowledge-sharing)",
      "Live Streaming & Webinars (Fitness, AI, or general industry insights)",
      "AI-Generated Content (Using ChatGPT, Jasper, Midjourney for text/image generation)",
      "Graphic Design (Canva, Figma [Basic]) (For social media, thumbnails, banners)",
      "Fitness & Performance Analytics (Tracking progress, data-driven workout optimizations)"
    ]
  }
];

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* Skills Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span></h1>
            <p className="text-lg text-gray-300 mb-12">
              My comprehensive skill set spanning data science, business, content creation, and technology domains, with an evolving focus on fitness and health analytics.
            </p>
            
            <div className="space-y-14">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl p-6 shadow-xl"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{category.title}</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={`${category.id}-${skillIndex}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center space-x-2"
                      >
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-lg text-gray-300 italic">
                &quot;Transforming data into insights, technology into solutions, and knowledge into impact.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 