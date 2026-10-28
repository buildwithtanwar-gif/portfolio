import React, { useState } from 'react';
import { X, ExternalLink, Github, Layers, Sparkles, CheckCircle2, Monitor, Smartphone, Tablet, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForEstimate?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProjectForEstimate,
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'architecture'>('overview');
  const [simulatorDevice, setSimulatorDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Simple interactive simulator demo inside modal
  const renderSimulatorContent = () => {
    if (project.previewType === '3d-canvas') {
      return (
        <div className="w-full h-80 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
            <span>WEBGL CONTEXT // ACTIVE</span>
            <span>SHADERS: MESH_PHYSICAL</span>
          </div>

          <div className="flex flex-col items-center justify-center my-auto text-center">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-400 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 opacity-80 blur-xs" />
            </div>
            <p className="mt-4 text-xs text-slate-300 font-mono">
              [PBR Material Pipeline: Procedural Reflection & Micro-Facets Active]
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400 border-t border-slate-900 pt-2">
            <div>ANTIALIAS: ON</div>
            <div>TONE MAPPING: ACES</div>
            <div>COLOR SPACE: SRGB</div>
          </div>
        </div>
      );
    }

    if (project.previewType === 'interactive-ui') {
      return (
        <div className="w-full bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSimulatorDevice('desktop')}
                className={`p-1.5 rounded ${simulatorDevice === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-500 hover:text-slate-300'}`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSimulatorDevice('tablet')}
                className={`p-1.5 rounded ${simulatorDevice === 'tablet' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-500 hover:text-slate-300'}`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSimulatorDevice('mobile')}
                className={`p-1.5 rounded ${simulatorDevice === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-500 hover:text-slate-300'}`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Responsive Mode: {simulatorDevice.toUpperCase()}
            </span>
          </div>

          {/* Interactive Responsive Shell */}
          <div className="flex justify-center bg-slate-900/50 p-4 rounded-lg overflow-hidden min-h-[220px]">
            <div
              className={`transition-all duration-300 bg-[#0B1020] border border-slate-800 rounded-lg p-3 text-left ${
                simulatorDevice === 'mobile'
                  ? 'w-[240px]'
                  : simulatorDevice === 'tablet'
                  ? 'w-[380px]'
                  : 'w-full'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
                <span className="text-[10px] font-bold text-cyan-400">HYPERPULSE // LUXE</span>
                <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">0.00 CLS</span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium">Fluid CSS Clamp Typography</p>
              <p className="text-[9px] text-slate-400 mt-1">Adapts with zero layout shifts and touch-ergonomic buttons.</p>
              <div className="mt-3 flex gap-1.5">
                <button className="text-[9px] bg-cyan-500 text-slate-950 font-bold px-2 py-1 rounded">Add to Bag</button>
                <button className="text-[9px] bg-slate-800 text-slate-300 px-2 py-1 rounded">Quick View</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default dashboard / AI tool preview
    return (
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>NOVACORE AGENT TELEMETRY</span>
        </div>
        <div className="py-4 space-y-2 text-[11px]">
          <div className="text-slate-400">&gt; Initializing token streaming pipeline...</div>
          <div className="text-emerald-400">&gt; Model response: 200 OK [Latency: 14ms]</div>
          <div className="text-purple-300">&gt; Vector embedding matrix loaded into client WebWorker</div>
          <div className="text-cyan-300">&gt; Reactive state update dispatched without re-render lag.</div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#0B1020] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {project.type}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-cyan-400">{project.subtitle}</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 gap-4 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === 'overview'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Overview & Highlights
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === 'simulator'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Simulator
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === 'architecture'
                  ? 'border-cyan-400 text-cyan-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Architecture & Metrics
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {project.longDescription}
              </p>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Key Engineering Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Interactive Simulator */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400 font-mono">
                Live interactive concept simulation demonstrating the component state and visual architecture:
              </p>
              {renderSimulatorContent()}
            </div>
          )}

          {/* Tab 3: Architecture & Metrics */}
          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics?.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 text-left"
                  >
                    <div className="text-[11px] font-mono text-slate-400 mb-1">{m.label}</div>
                    <div className="text-base font-bold text-cyan-300 font-display">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 text-xs text-slate-300 space-y-2">
                <span className="font-mono text-cyan-400 font-semibold block">Pushkar's Development Notes:</span>
                <p>
                  "This project exemplifies how modern web standards (semantic HTML5, modern CSS Grid/Flexbox, and hardware-accelerated WebGL) eliminate unnecessary dependencies while delivering fluid, 60fps responsive experiences."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            {onSelectProjectForEstimate && (
              <button
                onClick={() => {
                  onSelectProjectForEstimate(project.id);
                  onClose();
                }}
                className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
              >
                Request Similar Build
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
