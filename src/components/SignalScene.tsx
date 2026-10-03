import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'
import { useTheme } from '../context/ThemeContext'

function SignalRing({
  radius,
  color,
  speed,
  tilt,
}: {
  radius: number
  color: string
  speed: number
  tilt: number
}) {
  const ref = useRef<Mesh>(null)

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed
  })

  return (
    <mesh ref={ref} rotation={[tilt, 0.2, 0]}>
      <torusGeometry args={[radius, 0.018, 16, 128]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.55}
        roughness={0.35}
        metalness={0.2}
      />
    </mesh>
  )
}

function SignalCore({ color }: { color: string }) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.scale.setScalar(1 + Math.sin(t * 2.2) * 0.06)
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.35, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

function SceneContent() {
  const { theme } = useTheme()
  const green = theme === 'dark' ? '#4fd8a0' : '#0d9f6e'
  const amber = theme === 'dark' ? '#e8a33d' : '#c47d18'

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 2, 4]} intensity={1.2} color={green} />
      <pointLight position={[-3, -1, 2]} intensity={0.6} color={amber} />
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}>
        <SignalCore color={green} />
        <SignalRing radius={0.85} color={green} speed={0.35} tilt={0.4} />
        <SignalRing radius={1.15} color={amber} speed={-0.22} tilt={-0.55} />
        <SignalRing radius={1.45} color={green} speed={0.15} tilt={0.9} />
      </Float>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export default function SignalScene() {
  return (
    <div className="h-full w-full min-h-[260px]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, 3.4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
