import React from 'react';
import { Terminal, Lock, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
      
      <div className="text-center z-10 max-w-4xl px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-gray border border-cyber-green/30 text-cyber-green text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          System Status: SECURE
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-blue-500">Raj Hansh</span>
        </h1>

        <div className="h-8 md:h-12 mb-8">
          <p className="text-xl md:text-2xl text-gray-400 font-mono terminal-cursor">
            B.Tech Cyber Security Professional
          </p>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Safeguarding digital landscapes through offensive and defensive security strategies. 
          Specializing in vulnerability assessment, penetration testing, and secure infrastructure design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#projects" className="px-8 py-3 bg-cyber-green text-black font-bold rounded hover:bg-green-400 transition-colors flex items-center gap-2">
            <Terminal size={20} />
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-gray-600 text-white rounded hover:border-cyber-green hover:text-cyber-green transition-colors flex items-center gap-2">
            <Lock size={20} />
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="#" className="hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
            <Linkedin size={24} />
          </a>
          <a href="mailto:raj@example.com" className="hover:text-red-400 transition-colors hover:scale-110 transform duration-200">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-cyber-green/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;