import React, { useState } from 'react';
import { HeroScene } from './components/3d/HeroScene';
import { SceneDock } from './components/3d/SceneDock';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SceneConfig } from './types';
import { Eye, ArrowDown, Sparkles } from 'lucide-react';

export default function App() {
  // 3D Scene Configuration State
  const [sceneConfig, setSceneConfig] = useState<SceneConfig>({
    geometry: 'chrome-core',
    finish: 'chrome',
    wireframe: false,
    rotationSpeed: 1.0,
    particles: true,
    bloom: false,
  });

  // Zen Mode: View 3D canvas unobstructed
  const [isZenMode, setIsZenMode] = useState(false);

  // Resume Modal State
  const [resumeOpen, setResumeOpen] = useState(false);

  // Pre-filled Scope from Services Estimator
  const [selectedScope, setSelectedScope] = useState<{
    projectType: string;
    addons: string[];
    estimatedDays: number;
  } | null>(null);

  const handleScopeSelected = (scope: {
    projectType: string;
    addons: string[];
    estimatedDays: number;
  }) => {
    setSelectedScope(scope);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const projElem = document.getElementById('projects');
    if (projElem) {
      projElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInitiateProject = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07080D] text-slate-100 overflow-x-hidden">
      {/* 1. Real-Time 3D WebGL Canvas Layer */}
      <div
        className={`fixed inset-0 z-0 pointer-events-auto transition-opacity duration-700 ${
          isZenMode ? 'opacity-100' : 'opacity-90'
        }`}
      >
        <HeroScene config={sceneConfig} />
      </div>

      {/* 2. Zen Mode Indicator & Exit Button */}
      {isZenMode && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 border border-slate-700 px-4 py-2 rounded-full text-xs font-mono text-cyan-300 backdrop-blur-md shadow-2xl flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>ZEN VIEW ACTIVE // 3D CANVAS FULLSCREEN</span>
          <button
            onClick={() => setIsZenMode(false)}
            className="px-2.5 py-0.5 rounded bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
          >
            Exit Zen
          </button>
        </div>
      )}

      {/* 3. Main Web Page Content (hidden when Zen Mode is toggled) */}
      <div
        className={`relative z-10 transition-opacity duration-500 ${
          isZenMode ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Navigation Bar */}
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onInitiateProject={handleInitiateProject}
        />

        {/* Hero Section (Text Overlay on 3D scene) */}
        <HeroSection
          onExploreWork={handleExploreWork}
          onInitiateProject={handleInitiateProject}
        />

        {/* Selected Projects & Demos */}
        <ProjectsSection onSelectProjectForEstimate={handleInitiateProject} />

        {/* Specialized Skills & Live Responsive Sandbox */}
        <SkillsSection />

        {/* About Pushkar & Interactive Terminal */}
        <AboutSection />

        {/* Services & Interactive Scope Estimator */}
        <ServicesSection onScopeSelected={handleScopeSelected} />

        {/* Disciplined Engineering Workflow */}
        <WorkflowSection />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection initialScope={selectedScope} />

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>

      {/* 4. Unified Bottom 3D Control Dock (Collapsible, Zero Viewport Occlusion) */}
      <SceneDock
        config={sceneConfig}
        onChange={setSceneConfig}
        onToggleZen={() => setIsZenMode(!isZenMode)}
        isZen={isZenMode}
      />

      {/* 5. Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onInitiateProject={() => {
          setResumeOpen(false);
          handleInitiateProject();
        }}
      />
    </div>
  );
}
