import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skillsData';
import { SkillCategory, SkillItem } from '../types';
import { Code2, Sparkles, Terminal, CheckCircle2, ChevronRight, Copy, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>(SKILL_CATEGORIES[0].id);
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILL_CATEGORIES[0].skills[0]);
  const [copied, setCopied] = useState(false);

  // Responsive interactive testing slider state
  const [testViewportWidth, setTestViewportWidth] = useState<number>(768);

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === selectedCatId) || SKILL_CATEGORIES[0];

  const handleCopyCode = () => {
    if (activeSkill?.codeSnippet) {
      navigator.clipboard.writeText(activeSkill.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-slate-800/80 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-purple-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Specialized Skills & Technical Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Engineering websites with deep focus on semantic HTML5 structure, modern responsive CSS layouts, performance-optimized JavaScript, 3D spatial rendering, and modern AI-augmented workflows.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCatId(cat.id);
                setActiveSkill(cat.skills[0]);
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedCatId === cat.id
                  ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#0B1020]/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                Category
              </div>
              <div
                className={`text-sm sm:text-base font-bold font-display ${
                  selectedCatId === cat.id ? 'text-white' : 'text-slate-300'
                }`}
              >
                {cat.name.split('&')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Dual-Panel Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Skills in Category */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 mb-2 px-1">
              {currentCategory.description}
            </div>

            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeSkill?.name === skill.name
                    ? 'bg-slate-900/90 border-cyan-400/80 shadow-md shadow-cyan-400/10'
                    : 'bg-[#0B1020]/80 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-semibold text-white text-base">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                    {skill.experience}
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-light mb-3">
                  {skill.highlight}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Code Snippet & Interactive Inspector */}
          <div className="lg:col-span-7 bg-[#0B1020] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  pt-spec // {activeSkill?.name}
                </span>
              </div>

              {activeSkill?.codeSnippet && (
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs overflow-x-auto bg-[#07080D]/90 text-cyan-300 leading-relaxed border-b border-slate-800/80">
              <pre className="whitespace-pre-wrap">{activeSkill?.codeSnippet || '// High-performance frontend implementation'}</pre>
            </div>

            {/* Live Interactive Responsive Inspector Widget */}
            <div className="p-5 bg-slate-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Live Responsive Scaling Simulator
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  Viewport: {testViewportWidth}px
                </span>
              </div>

              {/* Viewport Width Slider */}
              <input
                type="range"
                min="320"
                max="1280"
                value={testViewportWidth}
                onChange={(e) => setTestViewportWidth(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />

              {/* Dynamic Responsive Preview Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Computed Output:</div>
                <div
                  className="font-display font-bold text-white transition-all duration-150"
                  style={{
                    fontSize: `${Math.max(14, Math.min(32, testViewportWidth / 28))}px`,
                    letterSpacing: '-0.03em',
                  }}
                >
                  Pushkar Tanwar — Responsive Architecture
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  CSS Clamp formula smoothly scales typography without sudden layout jumps across 320px–1280px.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
