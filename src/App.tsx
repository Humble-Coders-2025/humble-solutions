import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/home';
import Services from './assets/pages/Services';
import Portfolio from './assets/pages/Portfolio';
import Blogs from './assets/pages/Blogs';
import AboutUs from './assets/pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/humble-solutions/" element={<Home />} />
        <Route path="/humble-solutions/services" element={<Services />} />
        <Route path="/humble-solutions/portfolio" element={<Portfolio />} />
        <Route path="/humble-solutions/blogs" element={<Blogs />} />
        <Route path="/humble-solutions/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
