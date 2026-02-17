import React from 'react';
import { Github, ExternalLink, UserCircle, Terminal, Cloud } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Cyber Security Lab Practice",
      description: "Hands-on practice with Linux tools, networking commands, reconnaissance techniques, and system security concepts. Focused on practical application of security fundamentals.",
      role: "Security Researcher",
      tech: ["Linux", "Networking", "Security Tools"],
    },
    {
      id: 2,
      title: "Cloud & DevOps Learning Projects",
      description: "Practicing cloud deployment concepts, containerization, and DevOps workflows for scalable infrastructure. Building resilient systems using modern cloud technologies.",
      role: "DevOps Engineer",
      tech: ["AWS", "Docker", "DevOps"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-cyber-gray rounded-xl overflow-hidden border border-gray-800 hover:border-cyber-green transition-all duration-300 group flex flex-col shadow-lg">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
               {/* Abstract tech background */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 via-gray-900 to-black"></div>
               {project.id === 2 ? (
                 <Cloud className="text-gray-600 w-16 h-16 group-hover:text-blue-400 transition-colors duration-500 transform group-hover:scale-110" />
               ) : (
                 <Terminal className="text-gray-600 w-16 h-16 group-hover:text-cyber-green transition-colors duration-500 transform group-hover:scale-110" />
               )}
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
                {!project.github && !project.link && (
                  <span className="text-gray-600 text-sm font-mono italic">Internal / Lab Project</span>
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