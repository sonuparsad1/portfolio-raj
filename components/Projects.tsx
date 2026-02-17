import React from 'react';
import { Github, ExternalLink, FolderLock, UserCircle } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Network Intrusion Detection System",
      description: "Built a lightweight NIDS using Python and Snort to detect anomaly traffic patterns and potential intrusions in real-time. The system logs alerts to a secure local database.",
      role: "Lead Developer",
      tech: ["Python", "Snort", "Scapy", "SQLite"],
      github: "#",
    },
    {
      id: 2,
      title: "Secure E2E Chat App",
      description: "A real-time messaging application featuring End-to-End Encryption (E2EE) using AES-256 and RSA key exchange protocols ensuring total privacy between users.",
      role: "Full Stack Engineer",
      tech: ["React", "Node.js", "Socket.io", "Web Crypto API"],
      github: "#"
    },
    {
      id: 3,
      title: "PhishGuard Extension",
      description: "Browser extension that analyzes URL patterns and page content in real-time to detect potential phishing attempts using a lightweight Machine Learning model.",
      role: "ML Engineer",
      tech: ["JavaScript", "TensorFlow.js", "HTML/CSS"],
      github: "#",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-cyber-green"></span>
            <span className="text-cyber-green font-mono uppercase tracking-widest text-sm">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured <span className="text-cyber-green">Projects</span></h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-cyber-green font-mono hover:text-white transition-colors mt-4 md:mt-0">
          View all on GitHub <Github size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-cyber-gray rounded-xl overflow-hidden border border-gray-800 hover:border-cyber-green transition-all duration-300 group flex flex-col shadow-lg">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
               {/* Abstract tech background */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 via-gray-900 to-black"></div>
               <FolderLock className="text-gray-600 w-16 h-16 group-hover:text-cyber-green transition-colors duration-500 transform group-hover:scale-110" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">{project.title}</h3>
              
              <div className="flex items-center gap-2 mb-4 text-xs text-gray-400 bg-gray-800/50 w-fit px-2 py-1 rounded">
                <UserCircle size={14} className="text-blue-400" />
                <span className="font-mono">Role: {project.role}</span>
              </div>

              <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-cyber-green bg-cyber-green/10 px-2 py-1 rounded border border-cyber-green/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-800 pt-4">
                {project.github && (
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-mono hover:underline decoration-cyber-green">
                    <Github size={16} /> Source Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-mono hover:underline decoration-blue-500">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <a href="#" className="inline-flex items-center gap-2 text-cyber-green font-mono hover:text-white transition-colors">
          View all on GitHub <Github size={16} />
        </a>
      </div>
    </section>
  );
};

export default Projects;