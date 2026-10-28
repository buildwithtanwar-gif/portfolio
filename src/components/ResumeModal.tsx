import React, { useState } from 'react';
import { X, Mail, Download, Copy, Check, Printer, ExternalLink, Code2, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInitiateProject: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onInitiateProject }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pushkartanwer46@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#0B1020] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono text-slate-300">PUSHKAR TANWAR // CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-300 print:bg-white print:text-black">
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                PUSHKAR TANWAR
              </h1>
              <p className="text-sm font-mono text-cyan-400 mt-0.5">
                Frontend Web Developer & 3D Web Specialist
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Specialized in HTML5, Modern CSS, JavaScript, Responsive Web Architecture & AI-Assisted Workflows
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-cyan-300 text-left sm:text-right"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>pushkartanwer46@gmail.com</span>
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Available for Global Remote Engagements</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Frontend web developer with deep expertise in standard-compliant, accessible HTML5, responsive CSS3 architectures, modern JavaScript/TypeScript, and interactive 3D WebGL via Three.js. Proven ability to architect high-performance, mobile-first web applications and interactive spatial websites from concept to production. Actively incorporates AI-assisted workflows to accelerate prototyping velocity while maintaining handcrafted, pixel-perfect engineering standards.
            </p>
          </div>

          {/* Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-mono text-white font-semibold block mb-1.5">
                  Core Frontend & Layout
                </span>
                <p className="text-slate-400 leading-normal">
                  HTML5 (Semantic Hierarchy, ARIA a11y, SEO standards), CSS3, Tailwind CSS, CSS Grid, Flexbox, Fluid clamp() typography, Container Queries, CSS Variables.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-mono text-white font-semibold block mb-1.5">
                  Interactive 3D & Graphics
                </span>
                <p className="text-slate-400 leading-normal">
                  Three.js, WebGL 2.0, Physically Based Rendering (PBR / MeshPhysicalMaterial), PMREM environment lighting, procedural buffer geometries, 60fps render loops.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-mono text-white font-semibold block mb-1.5">
                  Scripting & Frameworks
                </span>
                <p className="text-slate-400 leading-normal">
                  JavaScript (ES6+), TypeScript, React, Vite, Async programming, DOM APIs, Canvas 2D, Web Audio API, Motion / Spring kinematics.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-mono text-white font-semibold block mb-1.5">
                  Workflow & AI Acceleration
                </span>
                <p className="text-slate-400 leading-normal">
                  AI-assisted rapid prototyping, LLM prompt engineering for algorithmic coding, Git/GitHub version control, Core Web Vitals optimization, zero layout shift (CLS).
                </p>
              </div>
            </div>
          </div>

          {/* Featured Engineering Demonstrations */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
              Key Engineering Demonstrations
            </h2>
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-sm">AetherOS — Spatial Web Desktop</span>
                  <span className="text-cyan-400 font-mono">Concept Demo</span>
                </div>
                <p className="text-slate-400 mb-2">
                  Engineered a multi-window draggable browser desktop with hardware-accelerated fluid glass, dynamic WebGL ambient backdrops, and keyboard command palette with sub-60fps fluid spring transitions.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Tech: Three.js, React, TypeScript, Tailwind CSS, Web Audio API
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-sm">ChromaVision 3D — Real-Time PBR Configurator</span>
                  <span className="text-purple-400 font-mono">Interactive Showcase</span>
                </div>
                <p className="text-slate-400 mb-2">
                  Built an interactive 3D product showcase utilizing Three.js MeshPhysicalMaterial shaders, procedural studio reflections, exploded-assembly mechanics, and touch-first orbital camera damping.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Tech: Three.js, WebGL 2.0, JavaScript ES6+, PBR Shaders
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-sm">HyperPulse Luxe — Headless Responsive Storefront</span>
                  <span className="text-emerald-400 font-mono">Responsive Showcase</span>
                </div>
                <p className="text-slate-400 mb-2">
                  Crafted an ultra-fast responsive e-commerce experience achieving 0.00 Cumulative Layout Shift (CLS) with fluid clamp typography, container queries, and mobile gesture navigation.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Tech: HTML5 Semantic, Modern CSS, JavaScript, Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            Direct Contact: <span className="text-cyan-300">pushkartanwer46@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onInitiateProject();
              }}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              Initiate Project with Pushkar
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-800 text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
