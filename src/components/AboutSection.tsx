import React, { useState } from 'react';
import { Terminal, Code2, Globe, Cpu, Sparkles, CheckCircle2, User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'ethos' | 'workflow'>('bio');

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-slate-800/80 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Developer Profile & Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Bridging the gap between clean code, responsive design, and 3D web art.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Hello! I'm <strong className="text-white font-medium">Pushkar Tanwar</strong>, a dedicated frontend web developer obsessed with the craft of building interactive, responsive, and visually memorable digital experiences.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              My engineering approach centers around core web standards: semantic <span className="text-slate-200 font-mono">HTML5</span> that ensures accessible hierarchy, modern <span className="text-slate-200 font-mono">CSS3/Tailwind</span> for fluid responsiveness without breakpoint glitches, and modern <span className="text-slate-200 font-mono">JavaScript / TypeScript</span> for snappy interactivity. To push the boundaries of what the web can be, I incorporate real-time 3D graphics via <span className="text-cyan-300 font-mono">Three.js</span> and harness <span className="text-purple-300 font-mono">AI-assisted workflows</span> to rapidly prototype and optimize complex architectures.
            </p>

            {/* Core Values / Beliefs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0B1020] border border-slate-800/90 space-y-1.5">
                <div className="text-cyan-400 text-xs font-mono font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Performance First
                </div>
                <p className="text-xs text-slate-400">
                  Sub-second loading, zero unnecessary DOM weight, and smooth 60 FPS animations on every device.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1020] border border-slate-800/90 space-y-1.5">
                <div className="text-purple-400 text-xs font-mono font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  Fluid Responsiveness
                </div>
                <p className="text-xs text-slate-400">
                  Calculated fluid layouts that adapt naturally across smartphones, foldables, tablets, and desktop displays.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Cockpit / Terminal */}
          <div className="lg:col-span-5 bg-[#0B1020] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-slate-300">pushkar-tanwar.config</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">SYSTEM READY</span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex border-b border-slate-800 bg-slate-900/50 p-1 gap-1">
              <button
                onClick={() => setActiveTab('bio')}
                className={`flex-1 py-1.5 text-xs font-mono rounded transition-colors ${
                  activeTab === 'bio'
                    ? 'bg-slate-800 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ whoami
              </button>
              <button
                onClick={() => setActiveTab('ethos')}
                className={`flex-1 py-1.5 text-xs font-mono rounded transition-colors ${
                  activeTab === 'ethos'
                    ? 'bg-slate-800 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ ethos
              </button>
              <button
                onClick={() => setActiveTab('workflow')}
                className={`flex-1 py-1.5 text-xs font-mono rounded transition-colors ${
                  activeTab === 'workflow'
                    ? 'bg-slate-800 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ ai-workflow
              </button>
            </div>

            {/* Tab Body Content */}
            <div className="p-6 font-mono text-xs text-slate-300 space-y-4 min-h-[280px]">
              {activeTab === 'bio' && (
                <div className="space-y-3">
                  <div className="text-cyan-400">&gt; pushkar.getIdentity()</div>
                  <div className="pl-3 border-l-2 border-slate-800 space-y-1 text-slate-300">
                    <div><span className="text-slate-500">Name:</span> Pushkar Tanwar</div>
                    <div><span className="text-slate-500">Role:</span> Frontend Web & 3D Developer</div>
                    <div><span className="text-slate-500">Specialties:</span> HTML5, CSS3, JavaScript, Responsive UI, AI Tools</div>
                    <div><span className="text-slate-500">Focus:</span> Interactive 3D Web & Modern SPA</div>
                    <div><span className="text-slate-500">Status:</span> Open for freelance and client engagements</div>
                  </div>
                </div>
              )}

              {activeTab === 'ethos' && (
                <div className="space-y-3">
                  <div className="text-purple-400">&gt; pushkar.getEthos()</div>
                  <p className="text-slate-300 leading-relaxed">
                    "I believe code should be as clean and disciplined behind the scenes as the interface appears on the screen. No unnecessary bloat, no broken mobile layouts, and no generic template aesthetic. Every pixel and interaction should have purpose."
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-[11px] pt-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Craftsmanship + Performance + Accessibility</span>
                  </div>
                </div>
              )}

              {activeTab === 'workflow' && (
                <div className="space-y-3">
                  <div className="text-emerald-400">&gt; pushkar.getAIAdvantage()</div>
                  <p className="text-slate-300 leading-relaxed">
                    "AI isn't a replacement for strong frontend fundamentals — it's an accelerator. I utilize modern LLM workflows for rapid component scaffolding, mathematical procedural modeling, test synthesis, and cross-browser edge case auditing, delivering production-grade work at 3x velocity."
                  </p>
                  <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                    ✓ Accelerated turnaround without sacrificing quality
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>LOCATION: GLOBAL REMOTE</span>
              <span className="text-cyan-400">STATUS: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
