import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Bot, TrendingUp, Car, Eye, Wrench } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      icon: <Bot className="text-blue-600" size={28} />,
      title: "InfoStore Chatbot",
      description: "MCP server powered agentic chatbot for intranet application, featuring advanced conversational AI capabilities and seamless integration with internal systems.",
      tech: ["PydanticAI", "MCP", "FastAPI", "React.js"],
      category: "AI & Chatbots"
    },
    {
      icon: <TrendingUp className="text-green-600" size={28} />,
      title: "Sentiment Analysis of Financial News",
      description: "Comprehensive analysis of news sentiment to study its impact on stock market trends, using NLP techniques and financial data correlation.",
      tech: ["Python", "Transformers", "Pandas", "Scikit-Learn"],
      category: "ML & Finance"
    },
    {
      icon: <TrendingUp className="text-yellow-600" size={28} />,
      title: "GoldIQ",
      description: "Advanced gold market analysis and price prediction system using machine learning algorithms to forecast precious metal market movements.",
      tech: ["Python", "NumPy", "Pandas", "Machine Learning"],
      category: "Financial Analysis"
    },
    {
      icon: <Car className="text-purple-600" size={28} />,
      title: "Car Data Research",
      description: "End-to-end project involving vehicle data scraping, preprocessing, and implementation of both supervised and unsupervised learning methods for market insights.",
      tech: ["Python", "Scrapy", "BeautifulSoup", "Scikit-Learn"],
      category: "Data Science"
    },
    {
      icon: <Eye className="text-red-600" size={28} />,
      title: "Traffic Sign Recognition",
      description: "Computer vision project focusing on fine-tuning YOLO model for accurate traffic sign detection and recognition from image datasets.",
      tech: ["Python", "YOLO", "Computer Vision", "Deep Learning"],
      category: "Computer Vision"
    },
    {
      icon: <Wrench className="text-gray-600" size={28} />,
      title: "Netcetera Experimental Projects",
      description: "Collection of innovative projects including Multiple MCP agent systems, A2A-based applications, and MCP server authentication mechanisms.",
      tech: ["FastMCP", "A2A", "Authentication", "Microservices"],
      category: "Enterprise Solutions"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, machine learning, and data science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-700 p-8 rounded-2xl border border-gray-600 hover:bg-gray-600 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-800 rounded-xl mr-4 group-hover:bg-gray-900 transition-colors">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;