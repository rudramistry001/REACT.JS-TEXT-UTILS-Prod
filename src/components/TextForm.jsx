import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== "").length;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{props.heading}</h1>
          <div className="space-y-4">
            <div className="w-full">
              <textarea
                className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter the text here"
              ></textarea>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                onClick={handleUppercase}
              >
                Convert to Uppercase
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                onClick={handleLowercase}
              >
                Convert to Lowercase
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                onClick={handleClearText}
              >
                Clear Text
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                onClick={handleCopyText}
              >
                Copy Text
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                onClick={handleRemoveSpaces}
              >
                Remove Extra Spaces
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Text Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-gray-700">Words</p>
              <p className="text-3xl font-bold text-blue-600">{countWords()}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-gray-700">Characters</p>
              <p className="text-3xl font-bold text-blue-600">{text.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    