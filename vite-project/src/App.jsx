import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Menu } from './Components/Menu';
import Footer from './Components/Footer';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      
<Footer/>
    </Router>
  );
}

export default App;
