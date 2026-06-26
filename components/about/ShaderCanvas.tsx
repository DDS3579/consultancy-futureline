'use client';

import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MotionValue, useMotionValueEvent } from 'framer-motion';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform float u_scroll;
  varying vec2 vUv;

  void main() {
    vec3 navy = vec3(0.039, 0.145, 0.251);
    vec3 navyLight = vec3(0.073, 0.290, 0.427);
    vec3 gold = vec3(0.827, 0.627, 0.267);
    
    float baseIntensity = mix(0.12, 0.18, u_scroll);
    vec3 baseColor = mix(navy, navyLight, vUv.y);
    
    float lines = 0.0;
    for(float i = 0.0; i < 8.0; i++) {
      float speed = 0.05 * (i + 1.0);
      float offset = i * 0.12;
      float y = vUv.y + sin(vUv.x * 5.0 + u_time * speed + offset) * 0.05 + (i * 0.1);
      lines += smoothstep(0.005, 0.0, abs(vUv.y - y));
    }
    
    vec3 finalColor = mix(baseColor, gold, lines * baseIntensity);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface ShaderCanvasProps {
  scrollProgress: MotionValue<number>;
}

function ShaderPlane({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_scroll: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.u_time.value = clock.getElapsedTime();
      matRef.current.uniforms.u_scroll.value = scrollRef.current;
    }
  });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial 
        ref={matRef} 
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader} 
        uniforms={uniforms} 
      />
    </mesh>
  );
}

export function ShaderCanvas({ scrollProgress }: ShaderCanvasProps) {
  const scrollRef = useRef(0);

  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    scrollRef.current = latest;
  });

  return (
    <Canvas 
      orthographic 
      camera={{ zoom: 1, position: [0, 0, 100] }}
      dpr={[1, 2]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <ShaderPlane scrollRef={scrollRef} />
    </Canvas>
  );
}