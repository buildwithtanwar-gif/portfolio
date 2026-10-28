export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: '3D Web' | 'Web Apps' | 'Responsive UI' | 'AI Tools';
  type: 'Concept Demo' | 'Interactive Showcase' | 'Open Source' | 'Design System';
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  techStack: { name: string; icon: string }[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  demoUrl?: string;
  githubUrl?: string;
  previewType: '3d-canvas' | 'interactive-ui' | 'code-preview' | 'dashboard';
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // percentage
  experience: string;
  highlight: string;
  tags: string[];
  codeSnippet?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  deliverables: string[];
  techFocus: string[];
  idealFor: string;
}

export type SceneGeometryType = 'chrome-core' | 'quantum-knot' | 'orbital-rings' | 'faceted-crystal';
export type SceneMaterialFinish = 'chrome' | 'cyber-cyan' | 'obsidian' | 'holo-gold';

export interface SceneConfig {
  geometry: SceneGeometryType;
  finish: SceneMaterialFinish;
  wireframe: boolean;
  rotationSpeed: number;
  particles: boolean;
  bloom: boolean;
}
