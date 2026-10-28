import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' UTC'
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#07080D] py-12 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-bold text-xs font-mono">
                PT
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                PUSHKAR TANWAR
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Frontend Web Developer // HTML • CSS • JavaScript • Three.js • AI Workflows
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#workflow" className="hover:text-cyan-400 transition-colors">Workflow</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors ml-auto md:ml-0"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>STUDIO TIME: {time || 'SYNCHRONIZING...'}</span>
          </div>

          <div>
            © {new Date().getFullYear()} Pushkar Tanwar. Designed & Coded with Web Standards.
          </div>
        </div>
      </div>
    </footer>
  );
};
