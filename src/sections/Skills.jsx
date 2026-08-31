import React from 'react';

// Sub-component 1: Tech Icon Card
function TechCard({ name, svgPath, viewBox = "0 0 24 24" }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#070b12] border border-gray-900 rounded-2xl p-6 min-h-[140px] w-full transition-all duration-300 hover:border-green-500/20 hover:bg-[#090f19] group shadow-lg cursor-pointer">
      <div className="w-12 h-12 flex items-center justify-center text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-full h-full stroke-current fill-none stroke-2" viewBox={viewBox} xmlns="http://w3.org">
          {svgPath}
        </svg>
      </div>
      <span className="text-gray-400 font-medium text-xs sm:text-sm tracking-wide text-center group-hover:text-white transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

// Sub-component 2: Detailed Progress Skill Item Block
function DetailedSkillItem({ name, duration, percentage, levelTag, levelColor, icon }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-green-400 text-base">{icon}</span>
          <div>
            <h4 className="text-white text-sm font-bold tracking-tight leading-tight">{name}</h4>
            <p className="text-gray-500 text-[11px] font-medium mt-0.5">{duration}</p>
          </div>
        </div>
        <span className={`text-[10px] font-mono font-bold tracking-wide px-2.5 py-0.5 rounded-full border border-current bg-opacity-10 uppercase ${levelColor}`}>
          {levelTag}
        </span>
      </div>
      {/* Visual Tracking Progress Bar Line Slider */}
      <div className="w-full bg-[#03060c] h-1.5 rounded-full overflow-hidden border border-gray-900">
        <div 
          className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Main Component
export default function Skills() {
  const horizontalTech = [
    { name: 'React.js', viewBox: "0 0 24 24", svgPath: (<g strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" /><circle cx="12" cy="12" r="1" className="fill-current" /></g>) },
    { name: 'Next.js', viewBox: "0 0 24 24", svgPath: (<g strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M17 17.5L9.5 7h-1v10h1.5v-6.5L16.3 17c.2-.1.5-.3.7-.5zM15.5 7H17v6.5h-1.5z" className="fill-current stroke-none" /></g>) },
    { name: 'TypeScript', viewBox: "0 0 24 24", svgPath: (<g strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 10h4M11 10v7M15 13c0-1.5 2-1.5 2 0s-2 2-2 4" /></g>) },
    { name: 'Tailwind CSS', viewBox: "0 0 24 24", svgPath: (<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c-2.3 0-3.9 1.2-4.6 3.5 1-.8 2.1-1.1 3.5-.8.8.2 1.3.7 1.9 1.3 1 1 2.2 2.3 4.8 2.3 2.3 0 3.9-1.2 4.6-3.5-1 .8-2.1 1.1-3.5.8-.8-.2-1.3-.7-1.9-1.3-1-1-2.2-2.3-4.8-2.3zM6.5 12c-2.3 0-3.9 1.2-4.6 3.5 1-.8 2.1-1.1 3.5-.8.8.2 1.3.7 1.9 1.3 1 1 2.2 2.3 4.8 2.3 2.3 0 3.9-1.2 4.6-3.5-1 .8-2.1 1.1-3.5.8-.8-.2-1.3-.7-1.9-1.3-1-1-2.2-2.3-4.8-2.3z" />) },
    { name: 'Node.js', viewBox: "0 0 24 24", svgPath: (<path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 4.5l6 3.4v6.2l-6 3.4-6-3.4V9.9l6-3.4z" />) },
    { name: 'MongoDB', viewBox: "0 0 24 24", svgPath: (<path strokeLinecap="round" strokeLinejoin="round" d="M12 2s-5 4-5 9.5S10 19 12 22c2-3 5-7 5-10.5S12 2 12 2zm0 15c-1 0-2-1.5-2-4.5s1-4.5 2-4.5 2 1.5 2 4.5-1 4.5-2 4.5z" />) }
  ];

  return (
    <section id="skills" className="relative z-10 pt-20 pb-20 border-t border-gray-900/60 w-full flex flex-col items-center">
      
      {/* 1. Header Grid Row: Minimal Icon Grid Row */}
      <div className="text-center max-w-xl mb-12 flex flex-col items-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
          Tech Stack & Expertise
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm font-normal tracking-wide">
          Technologies I work with to build amazing products
        </p>
      </div>

      {/* Horizontal List Cards Row */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-2 max-w-6xl mb-24">
        {horizontalTech.map((tech, idx) => (
          <TechCard key={idx} name={tech.name} svgPath={tech.svgPath} viewBox={tech.viewBox} />
        ))}
      </div>


      {/* 2. Deep Categorized Metrics Dashboard Matrix Layout */}
      <div className="w-full max-w-6xl px-2 flex flex-col items-center">
        
        {/* Core Description Headers */}
        <div className="text-center max-w-xl mb-14 flex flex-col items-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full w-max mb-1">
            <span className="text-xs">⚙️</span>
            <span className="text-[10px] font-bold tracking-widest text-green-400 uppercase font-mono">My Expertise</span>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            Skills & Technologies
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm font-normal max-w-xs sm:max-w-none">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* 3-Column Content Box Breakdown Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Box Pillar 1: Frontend Development Container Column */}
          <div className="bg-[#090d16] border border-gray-900 rounded-2xl p-6 flex flex-col space-y-6 shadow-xl">
            <h4 className="text-gray-200 text-base font-extrabold tracking-tight border-l-2 border-green-500 pl-3 mb-1">
              Frontend Development
            </h4>
            <DetailedSkillItem name="React.js" duration="3+ years" percentage={95} levelTag="Expert" levelColor="text-green-400 border-green-500/30" icon="⚛️" />
            <DetailedSkillItem name="JavaScript" duration="4+ years" percentage={90} levelTag="Expert" levelColor="text-green-400 border-green-500/30" icon="🟨" />
            <DetailedSkillItem name="TypeScript" duration="2+ years" percentage={80} levelTag="Advanced" levelColor="text-emerald-400 border-emerald-500/30" icon="🔷" />
            <DetailedSkillItem name="Next.js" duration="2+ years" percentage={85} levelTag="Advanced" levelColor="text-emerald-400 border-emerald-500/30" icon="▲" />
          </div>

          {/* Box Pillar 2: Backend & APIs Container Column */}
          <div className="bg-[#090d16] border border-gray-900 rounded-2xl p-6 flex flex-col space-y-6 shadow-xl">
            <h4 className="text-gray-200 text-base font-extrabold tracking-tight border-l-2 border-green-500 pl-3 mb-1">
              Backend & APIs
            </h4>
            <DetailedSkillItem name="Node.js" duration="2+ years" percentage={75} levelTag="Intermediate" levelColor="text-emerald-500 border-emerald-500/20" icon="🟢" />
            <DetailedSkillItem name="REST APIs" duration="3+ years" percentage={85} levelTag="Advanced" levelColor="text-emerald-400 border-emerald-500/30" icon="🌐" />
          </div>

          {/* Box Pillar 3: Tools & Others Container Column */}
          <div className="bg-[#090d16] border border-gray-900 rounded-2xl p-6 flex flex-col space-y-6 shadow-xl">
            <h4 className="text-gray-200 text-base font-extrabold tracking-tight border-l-2 border-green-500 pl-3 mb-1">
              Tools & Others
            </h4>
            <DetailedSkillItem name="Git & GitHub" duration="4+ years" percentage={90} levelTag="Advanced" levelColor="text-emerald-400 border-emerald-500/30" icon="🐙" />
            <DetailedSkillItem name="Responsive Design" duration="3+ years" percentage={95} levelTag="Expert" levelColor="text-green-400 border-green-500/30" icon="📱" />
            <DetailedSkillItem name="Figma" duration="2+ years" percentage={70} levelTag="Intermediate" levelColor="text-emerald-500 border-emerald-500/20" icon="🎨" />
            <DetailedSkillItem name="Vite" duration="1+ years" percentage={85} levelTag="Advanced" levelColor="text-emerald-400 border-emerald-500/30" icon="⚡" />
          </div>

        </div>
      </div>

    </section>
  );
}
