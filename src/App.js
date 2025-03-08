import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import About from './components/About';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider>
      <Router>
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
          <Navbar title="TextUtils" AboutText="About TextUtils" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-utils" element={
              <div className="container mx-auto px-4 py-8">
                <TextForm heading="Enter the text to analyse" />
              </div>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
