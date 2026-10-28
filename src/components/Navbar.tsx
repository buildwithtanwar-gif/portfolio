import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onInitiateProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onInitiateProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080D]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Pushkar Tanwar Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-bold text-sm tracking-wider font-mono shadow-md group-hover:scale-105 transition-transform">
            PT
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              PUSHKAR TANWAR
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Frontend & 3D Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0B1020]/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Static Available Status Badge (no pulsating dots as per design skill) */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-[11px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Available for Hire</span>
          </div>

          {/* Resume Modal trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          {/* Project CTA */}
          <button
            onClick={onInitiateProject}
            className="group flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-md hover:shadow-cyan-500/20 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07080D]/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 mb-1">
              <span className="text-[11px] font-mono text-slate-500 uppercase">Navigation</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-[10px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Available</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-3 border-t border-slate-800/60 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-800 bg-slate-900 text-xs text-slate-200"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Pushkar's Resume</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onInitiateProject();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs shadow-md"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
