import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aether-os',
    title: 'AetherOS',
    subtitle: 'Spatial Web Desktop & Kinetic Window Manager',
    category: '3D Web',
    type: 'Concept Demo',
    description: 'A futuristic browser-based desktop environment featuring spatial depth, window tiling, hardware-accelerated fluid glass, and integrated web tools.',
    longDescription: 'AetherOS explores the future of web computing interfaces. Built entirely with modern frontend standards, it incorporates multi-window management, draggable workspace nodes, reactive glassmorphic shaders, and modular widgets powered by HTML5, CSS Grid, and WebGL.',
    tags: ['Three.js', 'React', 'TypeScript', 'Tailwind CSS', 'CSS Glassmorphism'],
    features: [
      'Multi-window draggable & resizable desktop layout system',
      'Dynamic WebGL ambient backdrop with procedural lighting shifts',
      'Integrated code sandbox, system monitor, and audio visualizer',
      'Keyboard shortcut command palette (Ctrl/Cmd + K)',
      'Sub-60fps fluid spring transitions using modern motion damping'
    ],
    techStack: [
      { name: 'TypeScript', icon: 'Code' },
      { name: 'Three.js', icon: 'Box' },
      { name: 'React 19', icon: 'Atom' },
      { name: 'Tailwind CSS', icon: 'Layers' },
      { name: 'Web Audio API', icon: 'Radio' }
    ],
    metrics: [
      { label: 'Bundle Footprint', value: 'Under 180kb gzipped' },
      { label: 'Frame Rate', value: 'Stable 60 FPS' },
      { label: 'Responsive Modes', value: 'Mobile Dock & Desktop' }
    ],
    accentColor: '#00E5FF',
    demoUrl: '#',
    githubUrl: 'https://github.com/pushkartanwer',
    previewType: '3d-canvas'
  },
  {
    id: 'chromavision-3d',
    title: 'ChromaVision 3D',
    subtitle: 'Real-Time PBR Material & Product Configurator',
    category: '3D Web',
    type: 'Interactive Showcase',
    description: 'An interactive 3D product showcase demonstrating physically based rendering (PBR), studio HDR reflections, dynamic metallic coatings, and exploded view inspection.',
    longDescription: 'Developed to showcase advanced WebGL and Three.js capabilities in high-fidelity e-commerce. Users can inspect intricate geometric components, toggle material finishes (brushed titanium, obsidian glass, anodized copper), explode layered assemblies, and inspect surface normals.',
    tags: ['Three.js', 'WebGL', 'PBR Materials', 'Interactive 3D', 'JavaScript'],
    features: [
      'MeshPhysicalMaterial shader pipeline with procedural studio lighting',
      'Smooth kinematic exploded-layer separation with zero garbage collection',
      'Real-time material finish swatches with roughness & metalness tuning',
      '360-degree orbital camera with frame-rate independent exponential damping',
      'Full touch & pointer gesture support on mobile devices'
    ],
    techStack: [
      { name: 'Three.js', icon: 'Box' },
      { name: 'WebGL 2.0', icon: 'Cpu' },
      { name: 'JavaScript ES6+', icon: 'FileCode' },
      { name: 'CSS3 Animation', icon: 'Sparkles' }
    ],
    metrics: [
      { label: 'Draw Calls', value: 'Optimized < 15 calls' },
      { label: 'Shader Stages', value: 'PBR + PMREM Studio' },
      { label: 'PBR Shaders', value: '100% Procedural' }
    ],
    accentColor: '#8B5CF6',
    demoUrl: '#',
    githubUrl: 'https://github.com/pushkartanwer',
    previewType: '3d-canvas'
  },
  {
    id: 'novacore-ai',
    title: 'NovaCore AI Studio',
    subtitle: 'Autonomous Agent Interface & Real-Time Telemetry',
    category: 'AI Tools',
    type: 'Concept Demo',
    description: 'A responsive developer workstation for orchestration, token streaming, vector node graphing, and live AI model interaction.',
    longDescription: 'Created as an exploration of AI-assisted frontend workflows and next-generation developer tooling. Provides structured prompt engineering workspaces, interactive parameter sliders (temperature, top_p), dynamic Markdown syntax highlighting, and responsive dark-mode telemetry panels.',
    tags: ['AI Assisted', 'React', 'TypeScript', 'Tailwind CSS', 'Data Flow'],
    features: [
      'Interactive vector node canvas showing pipeline connections',
      'Dynamic stream rendering with syntax-highlighted code blocks',
      'Parameter tuning cockpit for temperature, context window, and system roles',
      'Zero-dependency state store with optimistic UI updates',
      'Full responsive viewport support from phone screens to ultrawide displays'
    ],
    techStack: [
      { name: 'React', icon: 'Atom' },
      { name: 'TypeScript', icon: 'Code' },
      { name: 'Tailwind CSS', icon: 'Layers' },
      { name: 'Lucide Icons', icon: 'Compass' }
    ],
    metrics: [
      { label: 'Interaction Latency', value: '< 16ms render loop' },
      { label: 'Theme Architecture', value: 'CSS Variable Tokens' },
      { label: 'Responsive Breakpoints', value: '4 Fluid Tiers' }
    ],
    accentColor: '#38BDF8',
    demoUrl: '#',
    githubUrl: 'https://github.com/pushkartanwer',
    previewType: 'dashboard'
  },
  {
    id: 'hyperpulse-commerce',
    title: 'HyperPulse Luxury',
    subtitle: 'Ultra-Responsive Headless Commerce Experience',
    category: 'Responsive UI',
    type: 'Interactive Showcase',
    description: 'An editorial luxury fashion and tech commerce storefront built with sub-second page transitions, dynamic cart drawer, and kinetic typography.',
    longDescription: 'Demonstrates modern responsive web design standards: fluid typography with CSS clamp(), container queries, touch-first gesture navigation, micro-interactions, and accessible keyboard navigation without bloated UI dependencies.',
    tags: ['HTML5 Semantic', 'CSS Clamp()', 'Modern JS', 'Responsive Architecture'],
    features: [
      'Fluid typographic scale adapting seamlessly without jarring breakpoint jumps',
      'Instant slide-over shopping bag with client-side reactive state',
      'Curated editorial product grid with hover-activated video/3D previews',
      'Accessible focus rings, ARIA landmark tagging, and semantic document tree',
      'Lighthouse 98+ score design principles on Core Web Vitals'
    ],
    techStack: [
      { name: 'HTML5', icon: 'Globe' },
      { name: 'CSS3 / Modern Layouts', icon: 'Layout' },
      { name: 'JavaScript', icon: 'Zap' },
      { name: 'Tailwind CSS', icon: 'Sliders' }
    ],
    metrics: [
      { label: 'Mobile Score', value: '100% Responsive' },
      { label: 'Layout Shifts (CLS)', value: '0.00 CLS' },
      { label: 'Semantic Elements', value: '100% W3C Valid' }
    ],
    accentColor: '#F59E0B',
    demoUrl: '#',
    githubUrl: 'https://github.com/pushkartanwer',
    previewType: 'interactive-ui'
  },
  {
    id: 'voxel-forge',
    title: 'VoxelForge WebGL',
    subtitle: 'Procedural 3D Geometry & Shader Sandbox',
    category: '3D Web',
    type: 'Concept Demo',
    description: 'An in-browser procedural mesh generator allowing users to sculpt, twist, and deform geometric meshes using real-time mathematical formulas.',
    longDescription: 'A technical playground highlighting the power of Three.js BufferGeometry, vertex manipulation, and mathematical procedural shapes. Features custom normal generation, wireframe lattice overlays, and instant OBJ export.',
    tags: ['Three.js', 'Procedural Math', 'BufferGeometry', 'Creative Code'],
    features: [
      'Interactive parametric equations (Torus Knot, Mobius Strip, Lissajous curves)',
      'Live vertex count and triangle calculation counter',
      'Custom procedural canvas texture generator with anisotropy filtering',
      'Downloadable procedural geometry in standard OBJ format',
      'Keyboard camera navigation & orbit touch controls'
    ],
    techStack: [
      { name: 'Three.js', icon: 'Box' },
      { name: 'Mathematics', icon: 'Binary' },
      { name: 'TypeScript', icon: 'Code' }
    ],
    metrics: [
      { label: 'Geometry Engine', value: 'Dynamic BufferGeometry' },
      { label: 'Vertex Capacity', value: 'Up to 50k procedural verts' },
      { label: 'Export Formats', value: 'OBJ / JSON geometry' }
    ],
    accentColor: '#10B981',
    demoUrl: '#',
    githubUrl: 'https://github.com/pushkartanwer',
    previewType: 'code-preview'
  }
];
