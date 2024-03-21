import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services'
import About from './pages/About'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
     <Router>
      <Navbar/>
        <Routes>
          <Route path ="/" element={<Home />} /> 
          <Route path ="/services" element={<Services />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/book" element={<Book />} />
          <Route path ="/contact" element={<Contact />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
