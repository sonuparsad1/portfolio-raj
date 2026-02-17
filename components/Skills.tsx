import React from 'react';
import { Terminal, Globe, Database, Award, Lock, Code, Shield } from 'lucide-react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: ["Python", "C++", "JavaScript", "SQL", "Bash Scripting"]
    },
    {
      title: "Security Tools",
      icon: <Terminal className="w-6 h-6 text-cyber-green" />,
      skills: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Snort", "Nessus"]
    },
    {
      title: "Operating Systems",
      icon: <Database className="w-6 h-6 text-yellow-400" />,
      skills: ["Kali Linux", "Ubuntu Linux", "Windows Server", "Android"]
    },
    {
      title: "Networking Concepts",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      skills: ["TCP/IP", "OSI Model", "Subnetting", "DNS Security", "VPNs & Tunnels"]
    },
    {
      title: "Certifications",
      icon: <Award className="w-6 h-6 text-red-400" />,
      skills: ["CompTIA Security+", "Certified Ethical Hacker (In Progress)", "AWS Certified Cloud Practitioner"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-cyber-dark relative scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & <span className="text-cyber-green">Expertise</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive breakdown of my technical capabilities and certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                  <Shield size={12} className="text-cyber-green mr-2 opacity-50 group-hover:opacity-100" />
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