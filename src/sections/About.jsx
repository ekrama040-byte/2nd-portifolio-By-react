import React from 'react';

// Modular Card Sub-component
function FeatureCard({ icon, title, description, badge }) {
  return (
    <div className="relative group bg-[#090d16] border border-gray-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-green-500/30 shadow-xl flex flex-col justify-between">
      <div>
        <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      {badge && (
        <div className="mt-6 pt-4 border-t border-gray-800/50 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{badge.label}</span>
          <span className="text-sm font-bold text-green-400">{badge.value}</span>
        </div>
      )}
    </div>
  );
}

export default function About() {
  const metrics = [
    { value: '45+', label: 'Happy Clients' },
    { value: '2.5K+', label: 'Code Commits' },
    { value: '500+', label: 'GitHub Stars' },
  ];

  return (
    <section id="about" className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-24 items-start">
      
      {/* Left Column: Profile Narrative Block */}
      <div className="lg:col-span-6 flex flex-col space-y-6">
        
        {/* Functional Pill Tag */}
        <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full w-max">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-bold tracking-wide text-green-400 uppercase font-mono">
            &lt;/&gt; Full-Stack Developer
          </span>
        </div>

        {/* Heading Statements */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-xl">
          Crafting Digital Experiences That Matter
        </h1>
        
        {/* Detailed Paragraph Run */}
        <div className="space-y-4 text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
          <p>
            I'm a passionate React developer with over 1 year of experience building scalable, performant web applications. I specialize in creating intuitive user interfaces that combine beautiful design with exceptional functionality.
          </p>
          <p>
            My expertise spans the entire frontend ecosystem: from React to JavaScript and modern CSS frameworks. I'm committed to writing clean, maintainable code and staying current with the latest web technologies.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new design trends.
          </p>
        </div>

        {/* Core Analytics Counter Sub-matrix */}
        <div className="flex items-center space-x-12 pt-10 border-t border-gray-900 max-w-lg">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="text-3xl font-extrabold text-white tracking-tight border-l-2 border-green-500 pl-3">
                {metric.value}
              </span>
              <span className="text-xs font-medium text-gray-500 tracking-wide uppercase pl-3">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* FIXED: Formatted wrapper div container + fixed path URL */}
        <div className="pt-4">
          <a 
            href="/EKRAM-AHMED -CV.pdf" 
            download="EKRAM-AHMED-CV.pdf"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 transform active:scale-95 shadow-md tracking-wide cursor-pointer no-underline"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column: Features & Competency Metric Grid */}
      <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-4">
        
        {/* Main Top Span Highlight Card Block */}
        <div className="sm:col-span-2">
          <FeatureCard 
            icon="⚡"
            title="Expertise"
            description="Specialized in building scalable web applications with modern technologies and best industry architecture paradigms."
          />
        </div>

        {/* Lower Grid Block Left */}
        <FeatureCard 
          icon="🧩"
          title="Clean Code"
          description="Writing highly maintainable, thoroughly documented codebases designed to scale efficiently."
          badge={{ label: "Client Satisfaction", value: "100%" }}
        />

        {/* Lower Grid Block Right */}
        <FeatureCard 
          icon="📥"
          title="Performance"
          description="Optimizing applications for lightning-fast speeds and efficient memory overhead allocation profiles."
          badge={{ label: "Support Availability", value: "24/7" }}
        />

        {/* Delivery Horizontal Span Performance Metrics Overlay */}
        <div className="sm:col-span-2 bg-gradient-to-r from-green-950/20 to-transparent border border-green-500/10 p-5 rounded-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🚀</span>
            <span className="text-sm font-semibold text-gray-300">Guaranteed Fast Delivery Times</span>
          </div>
          <span className="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full uppercase tracking-wider font-mono">
            Fast
          </span>
        </div>

      </div>
    </section>
  );
}
