import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About TextUtils</h1>
          <p className="text-lg text-gray-700 mb-4">
            TextUtils is a versatile text manipulation tool designed to help you efficiently manage and transform your text. Whether you need to convert text to uppercase, lowercase, or remove extra spaces, TextUtils provides a simple and intuitive interface to get the job done.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to provide users with a powerful yet easy-to-use tool for all their text processing needs. With TextUtils, you can quickly analyze your text, count words and characters, and ensure your content is formatted just the way you want it.
          </p>
          <p className="text-lg text-gray-700">
            We are committed to continuously improving TextUtils and adding new features based on user feedback. Thank you for choosing TextUtils as your go-to text manipulation tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 