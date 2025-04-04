"use client";

import { useRef } from "react";

import { Icosahedron } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;

    // Gentle floating motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

    // Smooth rotation
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef} position={[1.5, 0, 0]}>
      {/* Main wireframe icosahedron */}
      <Icosahedron
        ref={meshRef}
        args={[1.8, 1]} // Reduced size, kept detail level
        position={[0, 0, 0]}
      >
        <meshPhongMaterial
          color="#6C1FD9"
          emissive="#4D00B4"
          emissiveIntensity={0.6}
          specular="#fff"
          shininess={80}
          wireframe
          wireframeLinewidth={1.5}
        />
      </Icosahedron>
      {/* Inner glow */}
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshPhongMaterial
          color="#8F45E8"
          emissive="#6C1FD9"
          emissiveIntensity={0.4}
          transparent
          opacity={0.15}
        />
      </mesh>
      {/* Outer glow */}
      <mesh>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshPhongMaterial
          color="#4D00B4"
          emissive="#320070"
          emissiveIntensity={0.2}
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

export function IcosahedronScene() {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-background-1/30 to-background-1/70">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 75,
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} />
        <RotatingIcosahedron />
      </Canvas>
    </div>
  );
}
