import React from 'react';
import { Layers, Sparkles, Smartphone, Cpu, ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Architectural Blueprint & Semantic Foundation',
      description:
        'Before rendering pixels, establish a bulletproof semantic HTML structure, strict TypeScript interfaces, and accessible ARIA landmark hierarchy.',
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      tag: 'HTML5 & Standards',
    },
    {
      number: '02',
      title: 'Visual Craft, 3D Canvas & Kinetic Motion',
      description:
        'Develop real-time Three.js viewports, procedural PBR materials, and frame-rate independent spring damping for a tactile, cinematic feel.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      tag: 'Three.js & Motion',
    },
    {
      number: '03',
      title: 'Mobile-First Responsive Hardening',
      description:
        'Iterate across mobile phones, tablets, and wide monitors. Implement fluid CSS clamp scales and touch gesture controls with zero layout shifts.',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      tag: 'Responsive & a11y',
    },
    {
      number: '04',
      title: 'AI-Assisted Optimization & Fast Delivery',
      description:
        'Leverage generative AI tooling to audit edge cases, synthesize test suites, streamline build bundles, and guarantee sub-second load times.',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      tag: 'AI Workflows & QA',
    },
  ];

  return (
    <section id="workflow" className="relative py-24 sm:py-32 border-t border-slate-800/80 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Development Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            How Great Web Experiences Are Built
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A systematic, disciplined engineering process marrying timeless web standards with futuristic 3D graphics and modern AI acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#0B1020]/90 border border-slate-800/90 relative flex flex-col justify-between group hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {step.icon}
                  </div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 mb-2">
                  {step.tag}
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>STAGE 0{idx + 1}</span>
                <span className="text-slate-400">DISCIPLINED CRAFT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
