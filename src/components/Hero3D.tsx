import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
    }
  });
  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[0.6, 64, 64]} position={position}>
        <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.1} metalness={0.8} />
      </Sphere>
    </Float>
  );
}

function CodeCube() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef}>
        <Box args={[1.6, 1.6, 1.6]}>
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe={false}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.15}
          />
        </Box>
        <Box args={[1.6, 1.6, 1.6]}>
          <meshStandardMaterial color="#22d3ee" wireframe metalness={1} roughness={0} transparent opacity={0.6} />
        </Box>
      </group>
    </Float>
  );
}

function RingSystem() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ring1.current) ring1.current.rotation.z = state.clock.elapsedTime * 0.4;
    if (ring2.current) ring2.current.rotation.x = state.clock.elapsedTime * 0.3;
  });
  return (
    <>
      <Torus ref={ring1} args={[2.2, 0.02, 16, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} metalness={1} />
      </Torus>
      <Torus ref={ring2} args={[1.8, 0.015, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} metalness={1} />
      </Torus>
    </>
  );
}

function ParticleField() {
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#22d3ee" transparent opacity={0.6} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#3b82f6" />
      <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />

      <CodeCube />
      <RingSystem />
      <ParticleField />
      <FloatingOrb position={[3, 1.5, -1]} color="#0284c7" speed={0.7} />
      <FloatingOrb position={[-3, -1, -2]} color="#0e7490" speed={0.5} />
    </Canvas>
  );
}
