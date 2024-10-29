import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Hori from './components/ServicesShowCaseSection'; // No need for Hori now
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import ClientLogo from './components/ClientLogo';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Hori />
      <Contact />
      <Blogs />
      <ClientLogo />
      <Footer />
    </div>
  );
}

export default App;
