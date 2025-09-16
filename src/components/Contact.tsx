import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: 'Email',
      value: 'enes22seyfovski@gmail.com',
      href: 'mailto:enes22seyfovski@gmail.com'
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      label: 'Phone',
      value: '+38977 907 247',
      href: 'tel:+38977907247'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/sejfovskienes',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/enes-sejfovski-866607272/',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <ExternalLink size={24} />,
      label: 'Kaggle',
      href: 'https://www.kaggle.com/enessejfovski',
      color: 'bg-teal-600 hover:bg-teal-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in collaborating on machine learning projects or discussing opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to discuss machine learning opportunities, 
              or simply want to connect, I'm always open to meaningful conversations and new collaborations.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="p-2 bg-gray-700 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Follow my work and connect with me on these platforms to stay updated 
              on my latest projects and insights in machine learning and data science.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`flex items-center justify-between p-4 ${link.color} rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  <div className="flex items-center space-x-3">
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </div>
                  <ExternalLink size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2025 Enes Sejfovski. Built with React and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;