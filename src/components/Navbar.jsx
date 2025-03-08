import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex-shrink-0 text-2xl font-bold text-blue-600">
                {props.title}
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/text-utils" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Text Utils
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
              </motion.div>
            </div>
            <div className="ml-6">
              <div className="flex items-center">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/text-utils" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Text Utils
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="mt-4 px-3">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

//this is to see the datatypes of props being passed in the function based component
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    AboutText : PropTypes.string.isRequired,
}

//to pass the default value of the props defined in case they are not defined
Navbar.defaultProps = {
    title : "Set your title here",
    AboutText :"Set your about text here",
}

