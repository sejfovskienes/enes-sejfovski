import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      type: 'work',
      title: 'Machine Learning Intern',
      organization: 'Netcetera',
      location: 'Skopje, Macedonia',
      duration: '3 months',
      description: 'Development of MCP server powered agentic chatbot for InfoStore intranet application. Worked on experimental projects including multiple MCP agents, A2A-based applications, and MCP server authentication.',
      highlights: [
        'Built agentic chatbot with MCP server architecture',
        'Developed A2A-based enterprise applications',
        'Implemented authentication mechanisms for MCP servers',
        'Collaborated on multiple experimental AI projects'
      ]
    },
    {
      type: 'research',
      title: 'Research Associate',
      organization: 'Macedonian Academy of Sciences and Arts',
      location: 'Skopje, Macedonia',
      duration: '3 months',
      description: 'Conducted research on "Sentiment Analysis of Financial Texts" focusing on the impact of news sentiment on stock market trends and financial decision-making.',
      highlights: [
        'Analyzed financial text sentiment using NLP techniques',
        'Studied correlation between news sentiment and stock trends',
        'Applied machine learning models to financial data',
        'Published research findings and methodologies'
      ]
    }
  ];

  const education = {
    degree: 'Software Engineering and Information Systems',
    institution: 'Faculty of Computer Science and Engineering (FCSE)',
    location: 'Skopje, Macedonia',
    duration: 'Expected July 2025',
    description: 'Specializing in machine learning and data science with a focus on intelligent systems and collaborative problem-solving approaches.',
    highlights: [
      'Focus on Machine Learning and Data Science',
      'Software Engineering principles and practices',
      'Information Systems design and architecture',
      'Collaborative development methodologies'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional journey in machine learning, research, and academic excellence
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:bg-gray-700 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {exp.title}
                      </h4>
                      <h5 className="text-lg font-medium text-blue-600 mb-2">
                        {exp.organization}
                      </h5>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <GraduationCap className="text-blue-600 mr-3" size={24} />
              Education
            </h3>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:bg-gray-700 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Bachelor of Science - {education.degree}
                  </h4>
                  <h5 className="text-lg font-medium text-blue-600 mb-2">
                    {education.institution}
                  </h5>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {education.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {education.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {education.description}
              </p>
              
              <div className="space-y-2">
                {education.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;