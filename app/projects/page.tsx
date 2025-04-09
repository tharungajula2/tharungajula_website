'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AI-Powered Credit Risk Modeling",
    category: "Machine Learning | Finance",
    image: "/placeholder.jpg",
    description: "Developed a logistic regression-based probability of default (PD) model to assist in data-driven lending decisions. Created an application scorecard to optimize risk evaluation and enhance credit decision-making.",
    tools: "Python, Scikit-learn, SQL, Excel",
    relevance: "Similar predictive modeling techniques can be applied to personalized fitness plans, metabolic rate estimations, and performance tracking."
  },
  {
    id: 2,
    title: "Employee Retention & Performance Analytics",
    category: "Predictive Modeling | HR",
    image: "/placeholder.jpg",
    description: "Analyzed HR data to identify key drivers of attrition and suggested data-driven retention strategies. Built predictive models using Logistic Regression, Decision Trees, Random Forest, and XGBoost to extract actionable insights.",
    tools: "Python (Pandas, Scikit-learn), Tableau",
    relevance: "Understanding behavioral analytics & motivation factors plays a crucial role in habit formation & long-term fitness adherence."
  },
  {
    id: 3,
    title: "Time Series Forecasting of Antidiabetic Drug Prescriptions",
    category: "Time Series Analysis | Healthcare",
    image: "/placeholder.jpg",
    description: "Developed a SARIMA(2,1,3)(1,1,3)12 model to forecast monthly antidiabetic drug prescriptions using Australian Health Insurance Commission data. Performed time series decomposition, stationarity analysis, and achieved 5.7% MAPE, outperforming naïve models.",
    tools: "Python, Statsmodels, Pandas, Matplotlib, Scikit-learn",
    relevance: "Time-series forecasting techniques can be leveraged for predicting workout adherence, tracking injury risk trends, and optimizing fitness app user engagement strategies."
  },
  {
    id: 4,
    title: "Twitter Sentiment Analysis using NLP",
    category: "Natural Language Processing",
    image: "/placeholder.jpg",
    description: "Developed a text classification model to predict sentiment polarity for airline-related tweets. Applied NLP techniques for text cleaning, tokenization, stopword removal, and lemmatization. Achieved 77% accuracy with high precision in detecting negative sentiment.",
    tools: "Python, Scikit-learn, NLTK, SpaCy, Matplotlib, Seaborn",
    relevance: "The NLP-based sentiment analysis approach can be applied to social media monitoring in the fitness industry, tracking public sentiment around diets, workout programs, and fitness influencers."
  },
  {
    id: 5,
    title: "Neural Network-Based Bank Churn Prediction",
    category: "Deep Learning | Finance",
    image: "/placeholder.jpg",
    description: "Developed a deep learning classifier using Artificial Neural Networks to predict customer churn in a bank. Implemented multiple optimizers and dropout layers to enhance model performance, achieving 75% recall score for detecting potential churners.",
    tools: "Python, TensorFlow/Keras, Scikit-learn, Pandas, Matplotlib, Seaborn",
    relevance: "The predictive modeling approach used in churn analysis can be adapted to fitness attrition prediction, helping gyms and fitness apps identify users at risk of dropping out based on engagement patterns."
  },
  {
    id: 6,
    title: "Reinforcement Learning for CartPole Optimization",
    category: "Reinforcement Learning | IISc Capstone",
    image: "/placeholder.jpg",
    description: "Implemented various reinforcement learning algorithms (REINFORCE, PPO, DQN, VPG, AC, SAC, Twin-Q) to train an agent for CartPole environments. SAC emerged as the best-performing algorithm, achieving the fastest convergence and optimal performance.",
    tools: "Python, TensorFlow/Keras, OpenAI Gym, PyTorch, Scikit-learn",
    relevance: "Reinforcement learning techniques can be applied to personalized fitness training programs, optimizing workout routines and recovery strategies based on real-time feedback."
  },
  {
    id: 7,
    title: "Predictive Modeling of Diabetes Using Health Indicators",
    category: "Machine Learning | Healthcare",
    image: "/placeholder.jpg",
    description: "Developed machine learning models to predict diabetes risk based on health indicators from the BRFSS 2015 dataset. Implemented Ensemble Learning (Gradient Boosting + Neural Network), achieving the best performance with highest ROC-AUC (0.82).",
    tools: "Python (Scikit-learn, XGBoost, TensorFlow), SAS Enterprise Miner",
    relevance: "Predictive health analytics can be extended to fitness optimization, metabolic risk prediction, and personalized diet plans based on user health indicators."
  },
  {
    id: 8,
    title: "IMDb Top 1000 Movies: Web Scraping & Data Analysis",
    category: "Web Scraping | Data Analysis",
    image: "/placeholder.jpg",
    description: "Developed an automated web scraping pipeline to extract IMDb's Top 1000 Movies data. Performed extensive data preprocessing and explored key insights through data visualization including ratings distribution, director analysis, and earnings trends.",
    tools: "Python, BeautifulSoup, Requests, Pandas, Matplotlib, Seaborn",
    relevance: "Web scraping & data analysis techniques can be leveraged for trend analysis in fitness industry data, tracking popular workouts, diet trends, and influencer impact over time."
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      {/* Global Background Effect - Enhanced visibility */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-gray-950/10 to-black pointer-events-none"></div>
      
      {/* Projects Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Section-specific subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Data Science & AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl">
              A showcase of my technical work in data science, machine learning, and AI applications, with insights on how these skills translate to fitness and health optimization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl overflow-hidden shadow-xl flex-grow">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-blue-400 mb-4">{project.category}</p>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Tools Used:</h4>
                        <p className="text-gray-300 text-sm">{project.tools}</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-3 border border-blue-900/30">
                        <h4 className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-1">
                          Relevance to Fitness:
                        </h4>
                        <p className="text-gray-300 text-sm">{project.relevance}</p>
                      </div>
                    </div>
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
              <h2 className="text-2xl font-bold text-white mb-6">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl p-6 shadow-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Machine Learning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Supervised Learning Models</li>
                    <li>Ensemble Methods</li>
                    <li>Feature Engineering</li>
                    <li>Classification & Regression</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl p-6 shadow-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Deep Learning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Neural Networks</li>
                    <li>TensorFlow & Keras</li>
                    <li>Reinforcement Learning</li>
                    <li>Optimization Algorithms</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-blue-900/20 rounded-xl p-6 shadow-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Data Science</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Statistical Analysis</li>
                    <li>Time Series Forecasting</li>
                    <li>NLP & Text Analytics</li>
                    <li>Web Scraping & Visualization</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 