import React from 'react';
import { User, Cpu, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Visual Decoration */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-cyber-gray p-8 rounded-lg border border-gray-800">
            <div className="font-mono text-sm text-gray-500 mb-4 border-b border-gray-800 pb-2 flex justify-between">
              <span>raj_profile.json</span>
              <span>READ_ONLY</span>
            </div>
            <pre className="text-sm md:text-base text-gray-300 overflow-x-auto">
              <code>{`{
  "name": "Raj Hansh",
  "degree": "B.Tech",
  "major": "Cyber Security",
  "status": "Open to Work",
  "location": "India",
  "interests": [
    "Ethical Hacking",
    "Cloud Security",
    "Digital Forensics"
  ],
  "certification": "CompTIA Security+"
}`}</code>
            </pre>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-cyber-green"></span>
            <span className="text-cyber-green font-mono uppercase tracking-widest text-sm">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Defending Data with <span className="text-cyber-green">Code & Strategy</span></h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a passionate Cyber Security enthusiast holding a B.Tech degree. My journey in technology is driven by a curiosity to understand how systems work and, more importantly, how they can be secured against malicious actors.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            With a strong foundation in network protocols, cryptography, and secure coding practices, I aim to contribute to organizations by identifying vulnerabilities and implementing robust security measures. I am constantly learning and adapting to the ever-evolving threat landscape.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-cyber-gray/50 rounded border border-gray-800 flex flex-col items-center text-center hover:border-cyber-green transition-colors">
              <User className="text-blue-400 mb-2" />
              <h3 className="text-white font-bold">Problem Solver</h3>
              <p className="text-xs text-gray-500 mt-1">Analytical Approach</p>
            </div>
            <div className="p-4 bg-cyber-gray/50 rounded border border-gray-800 flex flex-col items-center text-center hover:border-cyber-green transition-colors">
              <ShieldCheck className="text-cyber-green mb-2" />
              <h3 className="text-white font-bold">Security First</h3>
              <p className="text-xs text-gray-500 mt-1">Proactive Defense</p>
            </div>
            <div className="p-4 bg-cyber-gray/50 rounded border border-gray-800 flex flex-col items-center text-center hover:border-cyber-green transition-colors">
              <Cpu className="text-purple-400 mb-2" />
              <h3 className="text-white font-bold">Tech Savvy</h3>
              <p className="text-xs text-gray-500 mt-1">Modern Tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;