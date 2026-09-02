import React, { useEffect, useRef } from 'react';
import hero from '../assets/hero.png';

export default function Home() {
  const sectionRef = useRef(null);

  const stats = [
    { value: '1+', label: 'Years', subLabel: 'Experience' },
    { value: '22+', label: 'Projects', subLabel: 'Completed' },
    { value: '9+', label: 'Technologies', subLabel: '' },
    { value: '70%', label: 'Client', subLabel: 'Satisfaction' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15, // Triggers when 15% of the section enters the screen
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Triggers appearance almost instantly (10ms delay) after crossing the scroll threshold
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, 100);

          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-20 items-center transform opacity-0 translate-y-8 transition-all duration-500 ease-out will-change-[opacity,transform]"
    >
      
      {/* Left Content Column */}
      <div className="lg:col-span-7 flex flex-col space-y-6">
        
        {/* Status Capsule Badge */}
        <div className="inline-flex items-center space-x-2 bg-green-950/30 border border-green-500/20 px-4 py-1.5 rounded-full w-max">
          <span className="text-green-400 text-xs">⭐</span>
          <span className="text-xs font-semibold tracking-wide text-green-400 uppercase">
            React Developer & UI/UX Enthusiast | Based in ADDIS ABABA, ETHIOPIA
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-xl">
          FRONTEND DEV AND AI ENGINEER
        </h1>
        
        {/* Subtitle Text */}
        <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
          Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experiences.
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button className="px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 transform active:scale-95 shadow-lg">
            Get in Touch
          </button>
        </div>

        {/* Metrics Rows Grid */}
        <div className="grid grid-cols-4 gap-4 pt-12 border-t border-gray-800/60 max-w-xl">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-gray-500 tracking-normal leading-tight">
                {stat.label} {stat.subLabel && <br />} {stat.subLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Feature Column */}
      <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
        <div className="relative group w-full max-w-md rounded-2xl overflow-hidden border border-gray-800 bg-[#0e131f] shadow-2xl min-h-[450px]">
          
          {/* FIXED: Image source points directly to your public root folder asset */}
          <img 
            src={hero} 
            alt="Ekram Portrait Workspace" 
            className="w-full h-[450px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Tech Floating Drawer Menu */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-6 bg-black/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-xl text-lg">
            <span title="React" className="cursor-help hover:scale-125 transition-transform">⚛️</span>
            <span title="Node.js" className="cursor-help hover:scale-125 transition-transform">🟢</span>
            <span title="Tailwind" className="cursor-help hover:scale-125 transition-transform">🌊</span>
            <span title="JavaScript" className="cursor-help hover:scale-125 transition-transform">🟨</span>
          </div>

          {/* Decorative frame overlay */}
          <div className="absolute inset-0 border border-green-500/10 rounded-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
