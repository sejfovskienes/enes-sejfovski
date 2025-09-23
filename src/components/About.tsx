import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <GraduationCap className="text-blue-600" size={24} />,
      title: "Academic Excellence",
      description: "Currently pursuing Software Engineering & Information Systems at FCSE, Skopje"
    },
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Specialized Focus",
      description: "Deep expertise in machine learning and data science applications"
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Collaborative Spirit",
      description: "Passionate about teamwork, brainstorming, and finding innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Hello! I'm Enes, a passionate software engineering student.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At 23 years old, I'm currently in my final year at the Faculty of Computer Science 
              and Engineering (FCSE) in Skopje, with an expected graduation in July 2025. My academic 
              journey has led me to specialize in machine learning and data science, where I've 
              discovered my passion for building intelligent solutions.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              What drives me most is the collaborative nature of problem-solving. I thrive in team 
              environments where ideas flow freely, and different perspectives come together to create 
              better approaches. Whether it's analyzing financial sentiment data or building agentic 
              chatbots, I believe the best solutions emerge through thoughtful collaboration and 
              creative brainstorming.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
              >
                <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;