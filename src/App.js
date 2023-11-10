import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './pages/Card.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
