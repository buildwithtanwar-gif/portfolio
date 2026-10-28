import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Eye, RotateCw, Sparkles, Grid, Sliders, Maximize2 } from 'lucide-react';
import { SceneConfig, SceneGeometryType, SceneMaterialFinish } from '../../types';

interface SceneDockProps {
  config: SceneConfig;
  onChange: (newConfig: SceneConfig) => void;
  onToggleZen?: () => void;
  isZen?: boolean;
}

export const SceneDock: React.FC<SceneDockProps> = ({
  config,
  onChange,
  onToggleZen,
  isZen = false,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  // Keyboard shortcut 'H' to toggle dock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'h' || e.key === 'H') {
        setCollapsed((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const geometries: { id: SceneGeometryType; label: string }[] = [
    { id: 'chrome-core', label: 'Core Sphere' },
    { id: 'quantum-knot', label: 'Torus Knot' },
    { id: 'orbital-rings', label: 'Orbital Ring' },
    { id: 'faceted-crystal', label: 'Crystal Poly' },
  ];

  const finishes: { id: SceneMaterialFinish; label: string; color: string }[] = [
    { id: 'chrome', label: 'Chrome', color: '#e2e8f0' },
    { id: 'cyber-cyan', label: 'Cyan', color: '#00e5ff' },
    { id: 'obsidian', label: 'Obsidian', color: '#1e293b' },
    { id: 'holo-gold', label: 'Gold', color: '#f59e0b' },
  ];

  const speeds = [0.5, 1.0, 1.8];

  return (
    <div
      className={`fixed z-30 bottom-4 left-1/2 -translate-x-1/2 w-[94vw] max-w-[820px] transition-all duration-300 ease-out select-none ${
        collapsed ? 'translate-y-[calc(100%-36px)]' : 'translate-y-0'
      }`}
    >
      {/* Top Toggle Tab */}
      <div className="flex justify-center -mb-px">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-slate-400 hover:text-cyan-400 bg-slate-900/95 border border-slate-800 border-b-0 rounded-t-lg backdrop-blur-md transition-colors shadow-lg"
          title="Toggle 3D Controls (Press H)"
        >
          {collapsed ? (
            <>
              <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Show 3D Engine Controls</span>
              <kbd className="hidden sm:inline-block px-1 py-0.2 text-[9px] bg-slate-800 text-slate-300 rounded border border-slate-700">H</kbd>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              <span>Hide Controls</span>
              <kbd className="hidden sm:inline-block px-1 py-0.2 text-[9px] bg-slate-800 text-slate-400 rounded border border-slate-700">H</kbd>
            </>
          )}
        </button>
      </div>

      {/* Main Glass Dock */}
      <div className="bg-[#0B1020]/95 border border-slate-800/80 rounded-2xl p-2.5 sm:p-3 shadow-2xl backdrop-blur-xl text-xs text-slate-300 flex flex-col gap-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-2">
          {/* Geometries */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mr-1 flex items-center gap-1">
              <Sliders className="w-3 h-3 text-cyan-400" />
              Mesh
            </span>
            <div className="flex bg-slate-950/70 p-0.5 rounded-lg border border-slate-800/60">
              {geometries.map((g) => (
                <button
                  key={g.id}
                  onClick={() => onChange({ ...config, geometry: g.id })}
                  className={`px-2 py-1 text-[11px] rounded transition-all font-medium ${
                    config.geometry === g.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Finishes */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mr-1">Finish</span>
            <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800/60">
              {finishes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => onChange({ ...config, finish: f.id })}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-all ${
                    config.finish === f.id
                      ? 'bg-slate-800 text-white border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={f.label}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block border border-slate-600"
                    style={{ backgroundColor: f.color }}
                  />
                  <span className="hidden sm:inline text-[10px]">{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Row: Toggles, Speed & Zen */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* Wireframe toggle */}
            <button
              onClick={() => onChange({ ...config, wireframe: !config.wireframe })}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[11px] transition-colors ${
                config.wireframe
                  ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                  : 'bg-slate-950/50 border-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span>Wireframe</span>
            </button>

            {/* Particle Dust toggle */}
            <button
              onClick={() => onChange({ ...config, particles: !config.particles })}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[11px] transition-colors ${
                config.particles
                  ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                  : 'bg-slate-950/50 border-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Particles</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Speed Selector */}
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <RotateCw className="w-3 h-3 text-slate-500 hidden sm:inline" />
              <span className="text-[10px] font-mono text-slate-500">Speed:</span>
              <div className="flex bg-slate-950/60 rounded p-0.5 border border-slate-800/60">
                {speeds.map((s) => (
                  <button
                    key={s}
                    onClick={() => onChange({ ...config, rotationSpeed: s })}
                    className={`px-1.5 py-0.5 text-[10px] rounded ${
                      config.rotationSpeed === s
                        ? 'bg-slate-800 text-cyan-300 font-mono'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            {/* Zen Mode Button */}
            {onToggleZen && (
              <button
                onClick={onToggleZen}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors ${
                  isZen
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
                title="Zen View: Hide website content to inspect pure 3D canvas"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">{isZen ? 'Exit Zen' : 'Zen 3D'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
