import React from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Globe, Cpu, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onInitiateProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onInitiateProject,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-20 sm:pb-24 pointer-events-none select-none">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Futuristic Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 backdrop-blur-md mb-6 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-mono text-slate-300">
              pushkar.tanwar <span className="text-cyan-400">~/frontend-specialist</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-[11px] font-mono text-purple-400">Web 3D & Responsive</span>
          </div>

          {/* Primary Editorial Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white mb-6">
            Architecting <br />
            <span className="text-gradient-cyan-purple">Interactive 3D</span> <br />
            & Modern Web Experiences
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
            I am <strong className="text-white font-medium">Pushkar Tanwar</strong> — a frontend web developer dedicated to building high-performance, responsive websites and tactile WebGL experiences using HTML, modern CSS, JavaScript, and AI-assisted workflows.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
            <button
              onClick={onExploreWork}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              <span>Explore Selected Work</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onInitiateProject}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 text-white font-medium text-sm backdrop-blur-md transition-all active:scale-95"
            >
              <span>Initiate Project</span>
              <span className="text-xs text-cyan-400 font-mono">→</span>
            </button>
          </div>

          {/* Core Technical Pillars Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-10 pt-8 border-t border-slate-800/60 max-w-2xl">
            <div className="flex items-center gap-2 text-slate-300">
              <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-slate-400">Semantic</span>
                <span className="text-xs font-semibold text-white">HTML5 & CSS3</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-slate-400">Real-Time</span>
                <span className="text-xs font-semibold text-white">Three.js & 3D</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-slate-400">Fluid</span>
                <span className="text-xs font-semibold text-white">Mobile-First</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Cpu className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-slate-400">Next-Gen</span>
                <span className="text-xs font-semibold text-white">AI-Assisted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Interaction Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Interactive 3D Engine: Drag or move mouse to orient canvas</span>
        </div>

        <button
          onClick={onExploreWork}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="Scroll to projects"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider">Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
};
