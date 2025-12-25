import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <ScrollToTop />
      
      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <Home scrollToSection={scrollToSection} />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About scrollToSection={scrollToSection} />
        </section>
        
        <section id="projects" className="scroll-mt-20">
          <Projects scrollToSection={scrollToSection} />
        </section>
        
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        
        <section id="resume" className="scroll-mt-20">
          <Resume scrollToSection={scrollToSection} />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;