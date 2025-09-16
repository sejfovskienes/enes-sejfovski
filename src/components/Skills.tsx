import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Globe, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "Web Development",
      skills: ["FastAPI", "Flask", "Spring Boot", "React.js", "FastMCP", "A2A", "Chainlit"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Brain className="text-purple-600" size={32} />,
      title: "ML & Data Science",
      skills: ["PydanticAI", "Transformers", "Pandas", "NumPy", "Scikit-Learn", "BeautifulSoup", "Selenium", "Scrapy"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Wrench className="text-orange-600" size={32} />,
      title: "Tools & Platforms",
      skills: ["Jupyter", "VS Code", "GitHub", "Kaggle"],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and data-driven solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-900 rounded-xl shadow-sm mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.05 }}
                    className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-600 hover:shadow-md transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;