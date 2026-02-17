import React from 'react';
import { Terminal, Lock, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const mailToLink = "mailto:rhansh33@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Raj%2C%0A%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20connect%20regarding%20an%20opportunity.";

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex flex-col items-center relative pb-10">
      
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 max-w-4xl px-4 w-full">
        
        {/* Profile Image */}
        <div className="relative mb-8 group mt-8 md:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-blue-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            {/* Note: Ensure a file named 'profile.jpg' exists in your public/root folder */}
            <img 
              src="/profile.jpg" 
              alt="Raj Hansh" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-cyber-dark ring-2 ring-cyber-green/50 shadow-2xl bg-cyber-gray"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop";
              }}
            />
        </div>

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
          <a href="https://github.com/rajhansh23" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rajhansh94/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
            <Linkedin size={24} />
          </a>
          <a href={mailToLink} className="hover:text-red-400 transition-colors hover:scale-110 transform duration-200">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="pt-12 pb-4 animate-bounce text-cyber-green/50 z-10">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;