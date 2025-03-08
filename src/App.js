import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
<<<<<<< HEAD
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
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
=======
import About from './pages/about';

function App() {
  return (

    <>

{/* <Navbar title = "TextUtils" AboutText = " About TextUtils"></Navbar>

<div className="container">
<TextForm heading = "Enter the text to analyse"></TextForm>

</div> */}
<About></About>
    </>
>>>>>>> 7cf65a9a34d987fcba9028e49f598b4e285179be
  );
}

export default App;
