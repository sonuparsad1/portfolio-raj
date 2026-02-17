import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Cybersecurity Intern",
      company: "SecureTech Solutions",
      period: "Jan 2023 - June 2023",
      description: [
        "Conducted weekly vulnerability assessments on internal networks using Nessus and OpenVAS.",
        "Assisted the SOC team in monitoring SIEM alerts and performing Level 1 incident response.",
        "Developed Python scripts to automate log analysis, reducing manual review time by 40%.",
        "Participated in red team exercises to simulate external attacks and identify security gaps."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-px w-8 bg-cyber-green"></span>
          <span className="text-cyber-green font-mono uppercase tracking-widest text-sm">Career Path</span>
          <span className="h-px w-8 bg-cyber-green"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Professional <span className="text-cyber-green">Experience</span></h2>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyber-green before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon/Dot on Timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-green bg-cyber-dark shadow-[0_0_10px_rgba(0,255,65,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} className="text-cyber-green" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cyber-gray p-6 rounded-xl border border-gray-800 hover:border-cyber-green transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h3 className="font-bold text-xl text-white">{exp.title}</h3>
                  <div className="flex items-center text-cyber-green text-sm font-mono mt-1 sm:mt-0">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="text-lg text-blue-400 font-medium mb-4">{exp.company}</div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400 text-sm">
                      <ChevronRight size={16} className="text-cyber-green mt-0.5 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;