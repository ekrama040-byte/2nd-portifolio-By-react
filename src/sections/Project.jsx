import React, { useState } from 'react';

// Individual Project Card Sub-component
function ProjectCard({ title, description, image, tags, category, demoUrl, githubUrl }) {
  return (
    <div className="group bg-[#090d16] border border-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-500/20 shadow-xl flex flex-col h-full">
      
      {/* Mockup Image Display Container Area */}
      <div className="relative w-full aspect-video bg-[#03060c] overflow-hidden border-b border-gray-900">
        <img 
          src={image} 
          alt={`${title} Preview Mockup`} 
          className="w-full h-full object-cover brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
        />
        
        {/* Floating Category Tag Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-wider font-mono">
          {category}
        </div>
      </div>

      {/* Narrative Context Details Information Block */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="space-y-3">
          <h4 className="text-white text-lg font-bold tracking-tight group-hover:text-green-400 transition-colors duration-200">
            {title}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Action Footers Container Layer */}
        <div className="mt-6 pt-4 border-t border-gray-900 flex items-center justify-between">
          {/* Tech Stack Indicator Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] font-semibold text-gray-500 bg-gray-900 px-2 py-0.5 rounded-md border border-gray-800">
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive Redirect Button Group Trays */}
          <div className="flex items-center space-x-2">
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              title="Live Demo Preview"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-200"
            >
              🔗
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              title="View Source Code Repository"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-200"
            >
              🐙
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

// Main Component
export default function Project() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { id: 'All', label: 'All', icon: '🟢' },
    { id: 'Web Apps', label: 'Web Apps', icon: '🌐' },
    { id: 'UI Components', label: 'UI Components', icon: '🧩' },
    { id: 'Full Stack', label: 'Full Stack', icon: '⚡' }
  ];

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping application with real-time payment handling system integrations, secure checkouts, and clean state pipelines.",
      image: "https://unsplash.com",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool featuring drag-and-drop kanban boards, live user update logging, and granular user settings boards.",
      image: "https://unsplash.com",
      tags: ["React", "Tailwind", "Firebase"],
      category: "Web Apps",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Component Library System",
      description: "Comprehensive React UI kit configured with over 50+ lightweight layout primitives optimized for atomic theme token deployments.",
      image: "https://unsplash.com",
      tags: ["React", "TypeScript", "Tailwind"],
      category: "UI Components",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  // Dynamic filter computing rule properties
  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeTab);

  return (
    <section id="projects" className="relative z-10 pt-20 pb-20 border-t border-gray-900/60 w-full flex flex-col items-center">
      
      {/* Structural Central Text Content Header Block */}
      <div className="text-center max-w-xl mb-12 flex flex-col items-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full w-max mb-1">
          <span className="text-xs">💼</span>
          <span className="text-[10px] font-bold tracking-widest text-green-400 uppercase font-mono">My Work</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
          Featured Projects
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm font-normal tracking-wide">
          Showcasing my best work and achievements
        </p>
      </div>

      {/* Filter Link Action Menu Bar Tray Element Rows */}
      <div className="flex flex-wrap items-center justify-center gap-2 bg-[#090d16] p-1.5 rounded-2xl border border-gray-900 max-w-xl mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-5 py-2 text-xs font-semibold rounded-xl transition-all duration-300 select-none ${
              activeTab === tab.id
                ? 'bg-green-500/10 text-green-400 border border-green-500/20 shadow-lg shadow-green-500/5'
                : 'text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <span className="text-xs">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Results Presentation Card Matrix Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 max-w-6xl">
        {filteredProjects.map((project, idx) => (
          <ProjectCard 
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            category={project.category}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

    </section>
  );
}
