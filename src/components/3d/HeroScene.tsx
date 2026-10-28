import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { SceneConfig } from '../../types';

interface HeroSceneProps {
  config: SceneConfig;
  className?: string;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ config, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const configRef = useRef<SceneConfig>(config);
  configRef.current = config;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect software WebGL safely
    const isSoftwareGl = (() => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 2. Initialize Three.js Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080d, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 3. Renderer configuration
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Procedural Studio PMREM Environment Map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envRoom = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(envRoom, 0.04).texture;
    pmremGenerator.dispose();

    // 5. Lighting Setup (Key Light, Cool Rim, Warm Accent)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const cyanPointLight = new THREE.PointLight(0x00e5ff, 4.0, 15);
    cyanPointLight.position.set(-4, 3, 3);
    scene.add(cyanPointLight);

    const purplePointLight = new THREE.PointLight(0xa855f7, 4.5, 15);
    purplePointLight.position.set(4, -3, 2);
    scene.add(purplePointLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 0.8);
    scene.add(hemiLight);

    // 6. Sculptural Procedural Composite Group (3-12 parts)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Master Materials based on config
    const getMaterial = (finish: string, wireframe: boolean) => {
      let color = 0xffffff;
      let metalness = 0.95;
      let roughness = 0.12;
      let clearcoat = 1.0;
      let clearcoatRoughness = 0.1;

      if (finish === 'cyber-cyan') {
        color = 0x00e5ff;
        metalness = 0.85;
        roughness = 0.18;
      } else if (finish === 'obsidian') {
        color = 0x111827;
        metalness = 0.4;
        roughness = 0.08;
        clearcoat = 1.0;
      } else if (finish === 'holo-gold') {
        color = 0xf59e0b;
        metalness = 0.96;
        roughness = 0.15;
      }

      return new THREE.MeshPhysicalMaterial({
        color,
        metalness,
        roughness,
        clearcoat,
        clearcoatRoughness,
        reflectivity: 0.95,
        wireframe,
      });
    };

    // Sub-parts:
    // 1. Central Core Mesh (Sphere, Torus Knot, Ring, or Crystal)
    const sphereGeo = new THREE.SphereGeometry(1.6, 64, 64);
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32, 2, 3);
    const ringsGeo = new THREE.TorusGeometry(1.7, 0.28, 32, 100);
    const crystalGeo = new THREE.IcosahedronGeometry(1.7, 1);

    const centerMesh = new THREE.Mesh(
      config.geometry === 'quantum-knot'
        ? knotGeo
        : config.geometry === 'orbital-rings'
        ? ringsGeo
        : config.geometry === 'faceted-crystal'
        ? crystalGeo
        : sphereGeo,
      getMaterial(config.finish, config.wireframe)
    );
    mainGroup.add(centerMesh);

    // 2. Gimbal Outer Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.045, 16, 120);
    const ring1Mat = new THREE.MeshPhysicalMaterial({
      color: 0x94a3b8,
      metalness: 0.92,
      roughness: 0.25,
      clearcoat: 0.6,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    mainGroup.add(ring1Mesh);

    // 3. Gimbal Outer Ring 2 (Perpendicular tilt)
    const ring2Geo = new THREE.TorusGeometry(2.7, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.3,
      clearcoat: 0.8,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = Math.PI / 2.8;
    ring2Mesh.rotation.y = Math.PI / 4;
    mainGroup.add(ring2Mesh);

    // 4. Kinetic Satellite Orbiters (Small faceted diamond markers)
    const satelliteGroup = new THREE.Group();
    const satGeo = new THREE.OctahedronGeometry(0.18, 0);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.35,
    });

    const satCount = 6;
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.45;
      sat.position.set(Math.cos(angle) * radius, (Math.sin(angle * 2) * 0.45), Math.sin(angle) * radius);
      sat.scale.setScalar(0.7 + (i % 2) * 0.4);
      satellites.push(sat);
      satelliteGroup.add(sat);
    }
    mainGroup.add(satelliteGroup);

    // 5. Subtle Floating Depth Particle Dust (BufferGeometry)
    const particleCount = isSoftwareGl ? 80 : 260;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 18;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom tiny glowing round point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(0, 229, 255, 1)');
      grad.addColorStop(0.4, 'rgba(139, 92, 246, 0.45)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTex = new THREE.CanvasTexture(canvas);
    particleTex.colorSpace = THREE.SRGBColorSpace;

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Ground Ambient Shadow / Glow Plane (Grounded Contact)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const radGrad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      radGrad.addColorStop(0, 'rgba(0, 229, 255, 0.18)');
      radGrad.addColorStop(0.5, 'rgba(7, 8, 13, 0.8)');
      radGrad.addColorStop(1, 'rgba(7, 8, 13, 0)');
      sCtx.fillStyle = radGrad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -3.2;
    scene.add(shadowPlane);

    // 7. Mouse and Interactive Pointer Motion
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // 8. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Pre-allocate zero-GC math helpers
    const clock = new THREE.Clock();
    let frameId = 0;

    // 9. High Performance Render Loop with Frame-Rate Independent Damping
    const tick = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();
      const currentConfig = configRef.current;

      // Exponential damping on pointer influence
      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.targetX, 4.0, delta);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.targetY, 4.0, delta);

      // Base rotation governed by speed config
      const speed = currentConfig.rotationSpeed;
      mainGroup.rotation.y += 0.35 * speed * delta;
      mainGroup.rotation.x = THREE.MathUtils.damp(
        mainGroup.rotation.x,
        mouse.y * 0.45 + Math.sin(elapsed * 0.8) * 0.08,
        3.5,
        delta
      );
      mainGroup.rotation.z = THREE.MathUtils.damp(
        mainGroup.rotation.z,
        -mouse.x * 0.45,
        3.5,
        delta
      );

      // Gentle floating levitation
      mainGroup.position.y = Math.sin(elapsed * 1.2) * 0.18;

      // Gimbal independent counter-rotations
      ring1Mesh.rotation.x += 0.5 * speed * delta;
      ring1Mesh.rotation.y += 0.25 * speed * delta;
      ring2Mesh.rotation.z -= 0.4 * speed * delta;
      ring2Mesh.rotation.x -= 0.15 * speed * delta;

      // Satellites orbiting
      satelliteGroup.rotation.y -= 0.6 * speed * delta;
      satelliteGroup.rotation.x = Math.sin(elapsed * 0.6) * 0.2;

      for (let i = 0; i < satellites.length; i++) {
        const sat = satellites[i];
        sat.rotation.x += delta * 1.8;
        sat.rotation.y += delta * 2.2;
      }

      // Particles gentle drift
      if (currentConfig.particles) {
        particleSystem.visible = true;
        particleSystem.rotation.y += 0.03 * delta;
        particleSystem.rotation.x = Math.sin(elapsed * 0.1) * 0.05;
      } else {
        particleSystem.visible = false;
      }

      // Camera parallax tilt
      camera.position.x = THREE.MathUtils.damp(camera.position.x, mouse.x * 0.6, 2.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, mouse.y * 0.4, 2.5, delta);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    // Dynamic geometry & material updates without unmounting
    const updateGeometryAndMaterial = () => {
      const cfg = configRef.current;

      // Update Center Geometry
      if (cfg.geometry === 'quantum-knot' && centerMesh.geometry !== knotGeo) {
        centerMesh.geometry = knotGeo;
      } else if (cfg.geometry === 'orbital-rings' && centerMesh.geometry !== ringsGeo) {
        centerMesh.geometry = ringsGeo;
      } else if (cfg.geometry === 'faceted-crystal' && centerMesh.geometry !== crystalGeo) {
        centerMesh.geometry = crystalGeo;
      } else if (cfg.geometry === 'chrome-core' && centerMesh.geometry !== sphereGeo) {
        centerMesh.geometry = sphereGeo;
      }

      // Update Material
      const newMat = getMaterial(cfg.finish, cfg.wireframe);
      centerMesh.material = newMat;
    };

    const interval = setInterval(updateGeometryAndMaterial, 120);

    // 10. Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(interval);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Three resources
      sphereGeo.dispose();
      knotGeo.dispose();
      ringsGeo.dispose();
      crystalGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      satGeo.dispose();
      particleGeo.dispose();
      shadowGeo.dispose();

      ring1Mat.dispose();
      ring2Mat.dispose();
      satMat.dispose();
      particleMat.dispose();
      shadowMat.dispose();
      particleTex.dispose();
      shadowTex.dispose();

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Centerpiece Canvas"
    />
  );
};
