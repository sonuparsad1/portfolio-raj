import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceSection from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-cyber-green selection:text-cyber-dark relative overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(rgba(13,17,23,0.9),rgba(13,17,23,0.9)),url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 pointer-events-none" />
      
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 max-w-7xl pt-20">
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;