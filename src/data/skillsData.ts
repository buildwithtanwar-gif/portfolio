import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'core-frontend',
    name: 'Core Frontend & Web Standards',
    description: 'Mastery over the fundamental pillars of the open web, crafted with semantic integrity and clean architectural hierarchy.',
    skills: [
      {
        name: 'HTML5 & Semantic Markup',
        level: 95,
        experience: 'Specialization',
        highlight: 'Accessible document structure, ARIA landmarks, SEO optimization, and modern Web APIs.',
        tags: ['Semantic DOM', 'Accessibility (a11y)', 'SEO Ready', 'Web Audio / Canvas'],
        codeSnippet: `<!-- Accessible & Semantic Structure -->
<main role="main" aria-label="Creative Showcase">
  <article class="project-card" aria-labelledby="proj-title">
    <header class="card-meta">
      <span class="badge" aria-label="Category">3D Web</span>
      <h3 id="proj-title">AetherOS Spatial</h3>
    </header>
  </article>
</main>`
      },
      {
        name: 'CSS3 & Modern Layout Systems',
        level: 94,
        experience: 'Specialization',
        highlight: 'Tailwind CSS, CSS Grid, Flexbox, fluid typography (clamp), container queries, and hardware-accelerated animations.',
        tags: ['Tailwind CSS', 'CSS Grid', 'Container Queries', 'Sub-pixel Animations'],
        codeSnippet: `/* Fluid Responsive Typography & Glassmorphism */
.editorial-title {
  font-size: clamp(2rem, 5vw + 1rem, 5.5rem);
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #00E5FF, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`
      },
      {
        name: 'JavaScript (ES6+) & TypeScript',
        level: 92,
        experience: 'Specialization',
        highlight: 'Modern asynchronous JavaScript, modular patterns, type safety, DOM performance, and clean reactive architectures.',
        tags: ['TypeScript', 'ESNext', 'Async/Await', 'Event Delegation', 'Object Pooling'],
        codeSnippet: `// High-Performance Pointer Velocity & Lerp Math
const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

// Damped orbital rotation without frame stutters
targetRotation.x = THREE.MathUtils.damp(currentRotation.x, mouse.y * 0.4, 4.5, delta);`
      }
    ]
  },
  {
    id: '3d-creative',
    name: 'Interactive 3D & Creative Coding',
    description: 'Transforming flat browser viewports into tactile, immersive three-dimensional spatial environments.',
    skills: [
      {
        name: 'Three.js & WebGL',
        level: 88,
        experience: 'Creative Specialty',
        highlight: 'MeshPhysicalMaterial PBR, procedural geometries, PMREM environment mapping, and 60fps interactive render loops.',
        tags: ['Three.js', 'PBR Shaders', 'BufferGeometry', 'Lighting Rigs', 'Scene Hierarchy'],
        codeSnippet: `// Procedural PBR Chrome Centerpiece
const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.95,
  roughness: 0.12,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  reflectivity: 0.95,
});
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;`
      },
      {
        name: 'Kinetic Motion & Animation',
        level: 90,
        experience: 'Creative Specialty',
        highlight: 'Spring kinematics, scroll-driven interactions, page transitions, and subtle micro-feedback.',
        tags: ['Motion / Framer', 'Spring Physics', 'Scroll Observers', 'SVG Morphing'],
        codeSnippet: `// Spring-Damped Transition Hook
const springConfig = {
  stiffness: 120,
  damping: 18,
  mass: 0.8
};`
      }
    ]
  },
  {
    id: 'responsive-perf',
    name: 'Responsive Architecture & Performance',
    description: 'Engineering resilient websites that look impeccable and respond instantly across mobile phones, tablets, laptops, and ultra-wide screens.',
    skills: [
      {
        name: 'Responsive & Touch-First Design',
        level: 96,
        experience: 'Specialization',
        highlight: 'Mobile-first workflows, touch gesture ergonomics, adaptive navigation, and zero-compromise responsive layouts.',
        tags: ['Mobile First', 'Touch Ergonomics', 'Dynamic Viewport (dvh)', 'Breakpoints'],
        codeSnippet: `/* Zero-Overflow Responsive Shell */
.viewport-container {
  min-height: 100dvh;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  padding: clamp(1rem, 3vw, 3rem);
}`
      },
      {
        name: 'Core Web Vitals & Web Performance',
        level: 90,
        experience: 'Production Craft',
        highlight: 'LCP/FID/CLS optimization, code splitting, asset preloading, paint containment, and low memory footprint.',
        tags: ['Zero CLS', 'Asset Compression', 'Low Draw Calls', 'Tree-Shaking'],
        codeSnippet: `// Passive Event Listeners for Jitter-Free Scrolling
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('touchmove', handleTouch, { passive: true });`
      }
    ]
  },
  {
    id: 'ai-modern-workflow',
    name: 'AI-Assisted Web Development & Modern Tooling',
    description: 'Leveraging cutting-edge AI technologies and rapid developer workflows to engineer superior software at accelerated velocities.',
    skills: [
      {
        name: 'AI-Assisted Engineering Workflow',
        level: 92,
        experience: 'Modern Edge',
        highlight: 'Harnessing generative AI & LLM tooling for architectural ideation, algorithm optimization, automated edge-case testing, and rapid prototype scaffolding.',
        tags: ['LLM Augmentation', 'Rapid Prototyping', 'Prompt Engineering for Code', 'AI-Assisted QA'],
        codeSnippet: `// AI-Augmented Workflow Pipeline
// 1. Conceptualize architecture & reactive data model
// 2. Co-pilot complex math / procedural 3D formulas with AI
// 3. Hand-craft and refine high-polish UI & accessibility
// 4. Validate cross-browser performance and Core Web Vitals`
      },
      {
        name: 'Modern Tooling & Version Control',
        level: 90,
        experience: 'Standard Practice',
        highlight: 'Git, GitHub, Vite bundling, npm ecosystem, ESLint, TypeScript compilation, and modern CI/CD deployment.',
        tags: ['Git / GitHub', 'Vite', 'TypeScript', 'Module Bundlers'],
        codeSnippet: `// Vite Optimized Fast Production Build
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { target: 'esnext', minify: 'esbuild' }
});`
      }
    ]
  }
];
