import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-between py-4 px-6 bg-[#03060c]/60 backdrop-blur-md border-b border-gray-900/40 transition-all duration-300">
      
      {/* Brand Identity Logo */}
      <div className="flex items-center space-x-2 text-xl font-bold tracking-tight text-white cursor-pointer">
        <span className="text-green-500 font-mono font-extrabold">&lt;&gt;</span>
        <span>Ekram</span>
      </div>
      
      {/* Center Links List */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium texblue-400">
        {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200">
            {item}
          </a>
        ))}
      </nav>

      {/* Resume Downloader Button */}
      <div>
        <a 
          href="/EKRAM-AHMED-CV.pdf" 
          download="EKRAM-AHMED-CV.pdf"
          className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 transform active:scale-95 shadow-md tracking-wide cursor-pointer no-underline"
        >
          Hire Me
        </a>
      </div>

    </header>
  );
}
