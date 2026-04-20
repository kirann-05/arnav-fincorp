"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, MeshTransmissionMaterial } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, -2]} scale={1.5}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial 
          thickness={0.5} 
          roughness={0.1} 
          transmission={0.9} 
          ior={1.2} 
          chromaticAberration={0.05} 
          backside={true}
          color="#ff8a00"
        />
      </mesh>
      
      <mesh position={[-2.5, -1, -1]} scale={0.8}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshTransmissionMaterial 
          thickness={0.5} 
          roughness={0.1} 
          transmission={0.9} 
          ior={1.5} 
          chromaticAberration={0.05} 
          backside={true}
          color="#ff6b00"
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ff6b00" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5e00ff" />
        
        <PresentationControls 
          global 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <AbstractShape />
        </PresentationControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Scene3D;
