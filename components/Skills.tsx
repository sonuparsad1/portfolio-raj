import React from 'react';
import { Terminal, Code, Shield, Cloud } from 'lucide-react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: ["C++", "Java", "Python", "HTML & CSS", "JavaScript"]
    },
    {
      title: "Tools & OS",
      icon: <Terminal className="w-6 h-6 text-yellow-400" />,
      skills: ["Linux", "Git & GitHub", "Command Line Interface"]
    },
    {
      title: "Security & Networking",
      icon: <Shield className="w-6 h-6 text-cyber-green" />,
      skills: ["Networking Basics", "Cyber Security Fundamentals", "Ethical Hacking"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      skills: ["Docker", "AWS", "Cloud Computing", "DevOps Basics"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-cyber-dark relative scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & <span className="text-cyber-green">Expertise</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A robust technical foundation spanning software development, cloud infrastructure, and cybersecurity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-cyber-gray p-6 rounded-lg border border-gray-800 hover:border-cyber-green/50 transition-all hover:transform hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">{cat.title}</h3>
            </div>
            <ul className="space-y-3">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-2 opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_5px_#00ff41] transition-all"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;