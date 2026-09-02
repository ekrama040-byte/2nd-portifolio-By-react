import React, { useState, useEffect, useRef } from 'react';

// Reusable Info Block Card
function ContactInfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-4 bg-[#090d16] border border-gray-900 rounded-xl p-4 w-full transition-all duration-300 hover:border-green-500/10">
      <div className="w-10 h-10 rounded-lg bg-green-500/5 border border-green-500/10 flex items-center justify-center text-green-400 text-lg">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-xs font-medium tracking-wide uppercase">{label}</p>
        <p className="text-white text-sm font-semibold tracking-tight mt-0.5">{value}</p>
      </div>
    </div>
  );
}

// Reusable Social Icon Square Atom
function SocialLink({ icon, url, title }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer" 
      title={title}
      className="w-10 h-10 rounded-xl bg-[#090d16] border border-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500/10 hover:border-green-500/20 transition-all duration-200 text-base"
    >
      {icon}
    </a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Form Submitted Successfully:', formData);
    alert('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, 10);

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
      id="contact" 
      ref={sectionRef}
      className="relative z-10 pt-20 pb-24 border-t border-gray-900/60 w-full flex flex-col items-center transform opacity-0 translate-y-8 transition-all duration-500 ease-out will-change-[opacity,transform]"
    >
      
      {/* Centered Descriptive Content Section Header */}
      <div className="text-center max-w-xl mb-14 flex flex-col items-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
          Let's Work Together
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm font-normal tracking-wide max-w-sm">
          Have a project in mind? Let's discuss how we can bring your ideas to life.
        </p>
      </div>

      {/* Main Structural 2-Column Grid Wrapper */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 px-2 max-w-6xl items-start">
        
        {/* Left Column Container: Interactive Form Box Block */}
        <form 
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-[#090d16] border border-gray-900 rounded-2xl p-6 sm:p-8 flex flex-col space-y-5 shadow-2xl"
        >
          {/* Input 1: Name Field Layout */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-400 text-xs font-semibold tracking-wide">Name</label>
            <input 
              type="text" 
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#03060c] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors duration-200"
            />
          </div>

          {/* Input 2: Email Field Layout */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-400 text-xs font-semibold tracking-wide">Email</label>
            <input 
              type="email" 
              required
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#03060c] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors duration-200"
            />
          </div>

          {/* Input 3: Message Textarea Layout */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-400 text-xs font-semibold tracking-wide">Message</label>
            <textarea 
              rows="5"
              required
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#03060c] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors duration-200 resize-none"
            />
          </div>

          {/* Form Trigger Button */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 shadow-xl shadow-green-500/5 transform active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Send Message</span>
              <span className="text-xs">📐</span>
            </button>
          </div>
        </form>

        {/* Right Column Container: Contact Metadata Connections Block */}
        <div className="lg:col-span-5 flex flex-col space-y-8 lg:pl-4">
          
          <div className="space-y-3">
            <h3 className="text-white text-xl font-bold tracking-tight">Let's Connect</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
          </div>

          {/* Info Card Sub-list Block */}
          <div className="flex flex-col space-y-3 w-full">
            <ContactInfoCard icon="✉️" label="Email" value="ekrama040@gmail.com" />
            <ContactInfoCard icon="📍" label="Location" value="ADDIS ABABA, ETHIOPIA" />
          </div>

          {/* Social Array Frame Section */}
          <div className="space-y-3 pt-2">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Connect with me</p>
            <div className="flex items-center space-x-2">
              <SocialLink icon="🐙" url="https://github.com" title="GitHub Profile" />
              <SocialLink icon="💼" url="https://linkedin.com" title="LinkedIn Profile" />
              <SocialLink icon="🐦" url="https://twitter.com" title="Twitter Profile" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
