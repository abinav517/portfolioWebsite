import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Reel from './components/pages/Reel';

function App() {
  return (
     <Router>
    <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/reel" element={<Reel />} />
          <Route path="/contact" element={<Contact />} />

      </Routes>
    <Footer /> 
    </Router>
  );
}

export default App;
