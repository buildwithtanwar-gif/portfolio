import React, { useState } from 'react';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Box, Layers, Terminal, Sparkles, Code2, Globe } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProjectForEstimate?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProjectForEstimate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', '3D Web', 'Web Apps', 'Responsive UI', 'AI Tools'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Engineered Work & Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Projects & Experiments
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              A curated selection of interactive 3D environments, responsive web systems, and AI-assisted web tools designed and coded by Pushkar Tanwar.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0B1020]/80 p-1.5 rounded-xl border border-slate-800/80 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative bg-[#0B1020]/90 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer overflow-hidden"
            >
              {/* Subtle accent glow line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                }}
              />

              {/* Card Meta & Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
                      {project.type}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1} // 0{PROJECTS.length}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Feature Highlights Bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-400 font-mono">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tags & Metrics Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800/80 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 group-hover:underline">
                  <span>View Details & Demo</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Concept Project Notice as mandated by brief */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>
              TRANSPARENCY NOTE: Concept projects are identified as interactive demos showcasing architecture, 3D math, and frontend design skills.
            </span>
          </div>
          <span className="text-slate-500">Built by Pushkar Tanwar</span>
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProjectForEstimate={onSelectProjectForEstimate}
        />
      )}
    </section>
  );
};
