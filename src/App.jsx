// src/App.jsx (Tidak banyak berubah dari yang terakhir)
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import Home from "./Halaman/Home.jsx";
import About from "./Halaman/About.jsx";
import Project from "./Halaman/Project.jsx";
import Contact from "./Halaman/Contact.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import ScrollUp from "./component/ScrollUp.jsx";

AOS.init();
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-pattern-white-abstract bg-cover bg-center bg-fixed"
      >
        <Navbar />
        <div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ScrollUp />
    </Router>
  );
};
export default App;