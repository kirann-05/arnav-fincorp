import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Float, Environment, ContactShadows, PresentationControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const CreditCard = () => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.current.x * 0.2, 0.1)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.current.y * 0.2, 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <RoundedBox args={[3.37, 2.12, 0.05]} radius={0.1} smoothness={10}>
          <meshPhysicalMaterial 
            color="#111111" 
            metalness={0.9} 
            roughness={0.1} 
            clearcoat={1} 
            clearcoatRoughness={0.1}
          />
        </RoundedBox>

        {/* Card Chip */}
        <mesh position={[-1.1, 0.3, 0.03]}>
          <planeGeometry args={[0.5, 0.4]} />
          <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.2} />
        </mesh>
        
        {/* Glow Element inside card */}
        <mesh position={[0.8, 0, 0.03]}>
          <circleGeometry args={[0.5, 32]} />
          <meshBasicMaterial color="#FF6B00" transparent opacity={0.6} />
        </mesh>

        {/* Card Text */}
        <Text position={[-1.3, -0.2, 0.03]} fontSize={0.15} color="#ffffff" anchorX="left" maxWidth={3}>
          4000 1234 5678 9010
        </Text>
        <Text position={[-1.3, -0.6, 0.03]} fontSize={0.1} color="#ffffff" anchorX="left">
          ARNAV FINCORP
        </Text>
        <Text position={[1.3, -0.6, 0.03]} fontSize={0.1} color="#ffffff" anchorX="right">
          VALID THRU 12/28
        </Text>
      </mesh>
    </Float>
  )
}

const BackgroundShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2, 1, -2]} scale={0.8}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial color="#FF6B00" metalness={0.5} roughness={0.2} transmission={0.9} thickness={1} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2, -1.5, -3]} scale={1}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshPhysicalMaterial color="#8B5CF6" metalness={0.5} roughness={0.1} transmission={0.9} thickness={0.5} />
        </mesh>
      </Float>
    </>
  )
}

const FloatingCard3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <spotLight position={[-10, -10, 10]} angle={0.3} penumbra={1} intensity={2} color="#FF6B00" />
        
        <BackgroundShapes />
        
        <PresentationControls 
          global 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 6, Math.PI / 6]} 
          azimuth={[-Math.PI / 6, Math.PI / 6]} 
          config={{ mass: 2, tension: 400, friction: 30 }}
          snap={{ mass: 4, tension: 400, friction: 50 }}
        >
          <CreditCard />
        </PresentationControls>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default FloatingCard3D
