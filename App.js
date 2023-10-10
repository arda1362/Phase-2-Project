import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import About from './components/About';
import CalcProvider from './context/CalcContext'; // Import the CalcProvider

function App() {
  return (
    <BrowserRouter>
      <CalcProvider> {/* Wrap the entire app in CalcProvider */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
     
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </CalcProvider> {/* Close the CalcProvider */}
    </BrowserRouter>
  );
}

export default App;
