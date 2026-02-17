import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark border-t border-gray-800 py-12 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <Shield className="h-10 w-10 text-gray-600 hover:text-cyber-green transition-colors duration-500" />
          <h2 className="text-2xl font-bold text-white tracking-wider">RAJ HANSH</h2>
          <p className="text-gray-500 font-mono text-sm">Securing the digital world, one packet at a time.</p>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400 font-mono">
           <a href="#about" className="hover:text-cyber-green transition-colors">/About</a>
           <a href="#skills" className="hover:text-cyber-green transition-colors">/Skills</a>
           <a href="#projects" className="hover:text-cyber-green transition-colors">/Projects</a>
        </div>

        <div className="text-gray-600 text-xs border-t border-gray-800 pt-8 flex items-center justify-center gap-1">
          &copy; {new Date().getFullYear()} Raj Hansh. Built with React, Tailwind & <Heart size={12} className="text-red-500 inline" /> for Cyber Security.
        </div>
      </div>
    </footer>
  );
};

export default Footer;