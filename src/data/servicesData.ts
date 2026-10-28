import { ServicePackage } from '../types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'creative-3d',
    title: 'Interactive 3D & Creative Websites',
    tagline: 'Transform your brand into a cinematic digital destination.',
    iconName: 'Box',
    deliverables: [
      'Custom Three.js / WebGL real-time interactive canvas',
      'Physically-based materials (chrome, glass, matte finishes)',
      'Subtle pointer parallax, camera damping & particle fields',
      'Mobile-optimized performance with automatic GPU fallbacks',
      'Sound design / Web Audio integration (optional)'
    ],
    techFocus: ['Three.js', 'WebGL', 'GLSL Shaders', 'Motion', 'React'],
    idealFor: 'Tech startups, luxury brands, creative agencies, and flagship product launches wanting an unforgettable web presence.'
  },
  {
    id: 'frontend-engineering',
    title: 'Production Frontend Web Development',
    tagline: 'Clean, modern, and accessible code built on web standards.',
    iconName: 'Code',
    deliverables: [
      'Single Page Applications (SPA) built with React & TypeScript',
      'Semantic, clean HTML5 document hierarchy & ARIA accessibility',
      'Tailwind CSS design system integration and tokenized variables',
      'State management, API integration, and modular component hierarchy',
      'Comprehensive cross-browser and cross-device testing'
    ],
    techFocus: ['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'TypeScript', 'React'],
    idealFor: 'Businesses needing a rock-solid, production-ready web application or modern high-converting marketing website.'
  },
  {
    id: 'responsive-overhaul',
    title: 'Responsive Redesign & Web Vitals Polish',
    tagline: 'Mobile-first perfection with instantaneous loading speeds.',
    iconName: 'Smartphone',
    deliverables: [
      'Mobile-first responsive overhaul across all viewports',
      'Fluid typography (CSS clamp) and modern container queries',
      'Core Web Vitals tuning: zero layout shift (CLS), fast LCP',
      'Elimination of layout breakage and horizontal scroll leaks',
      'Touch-friendly gesture navigation and ergonomic mobile menus'
    ],
    techFocus: ['CSS Grid & Flexbox', 'Fluid Layouts', 'Core Web Vitals', 'Responsive Testing'],
    idealFor: 'Existing websites suffering from mobile formatting errors, sluggish load times, or dated layouts.'
  },
  {
    id: 'ai-prototyping',
    title: 'AI-Assisted Rapid Web Prototyping',
    tagline: 'Accelerating concepts into testable, high-fidelity web prototypes.',
    iconName: 'Cpu',
    deliverables: [
      'Fast-track interactive prototypes built in days, not months',
      'Intelligent developer workflows leveraging generative AI for rapid builds',
      'Interactive UI components with live mock data and reactive state',
      'Production-ready code architecture ready to scale',
      'Developer handoff documentation & clean Git repository'
    ],
    techFocus: ['AI-Augmented Dev', 'React / Vite', 'Rapid Component Scaffolding', 'Modern APIs'],
    idealFor: 'Founders, product leaders, and innovators who need to validate ideas and pitch investors with a tangible, interactive demo.'
  }
];

export interface ScopeOption {
  id: string;
  label: string;
  baseDays: number;
  description: string;
}

export const PROJECT_TYPES: ScopeOption[] = [
  { id: '3d-portfolio', label: 'Immersive 3D Experience / Hero', baseDays: 7, description: 'Custom Three.js interactive 3D centerpiece & animations' },
  { id: 'marketing-landing', label: 'High-Converting Landing Page', baseDays: 5, description: 'Responsive, clean, editorial web design with strong CTA' },
  { id: 'web-application', label: 'Full Frontend Web Application', baseDays: 14, description: 'Modular React/TypeScript app with interactive state and views' },
  { id: 'mobile-overhaul', label: 'Mobile Responsive Redesign', baseDays: 4, description: 'Fixing layout breakage, touch gestures, and performance' }
];

export const ADDON_FEATURES: { id: string; label: string; days: number }[] = [
  { id: 'interactive-3d-model', label: 'Custom 3D Object & Material Swatches', days: 3 },
  { id: 'dark-light-theme', label: 'Dynamic Multi-Theme System', days: 1 },
  { id: 'fluid-animations', label: 'Scroll-Triggered Motion & Transitions', days: 2 },
  { id: 'performance-audit', label: 'Sub-Second Core Web Vitals Optimization', days: 2 },
  { id: 'ai-integration', label: 'AI API / Smart Feature Integration', days: 3 }
];
