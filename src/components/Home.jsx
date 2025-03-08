import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    {
      icon: "📝",
      title: "Text Transformation",
      description: "Convert your text to uppercase, lowercase, or title case with a single click"
    },
    {
      icon: "📊",
      title: "Text Analysis",
      description: "Get instant word count, character count, and reading time estimates"
    },
    {
      icon: "🎨",
      title: "Modern Interface",
      description: "Clean and responsive design that works on all devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to TextUtils
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            Your all-in-one text manipulation and analysis tool
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#features"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          id="features"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Text?
            </h2>
            <p className="text-gray-600 mb-6">
              Start using TextUtils today and experience the power of efficient text manipulation.
            </p>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/text-utils')}
            >
              Try It Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-600">
                "TextUtils has completely changed the way I handle text. It's fast, efficient, and incredibly easy to use!"
              </p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Alex Johnson</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-600">
                "I love the modern interface and the powerful features. TextUtils is a must-have tool for anyone working with text."
              </p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Emily Davis</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-16 text-center text-gray-600"
          variants={itemVariants}
        >
          <p>&copy; 2023 TextUtils. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-600">Contact Us</a>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Home; 