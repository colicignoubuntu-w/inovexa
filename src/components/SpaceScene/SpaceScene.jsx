import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import ParticleField from './objects/ParticleField'
import OrbitalSystem from './objects/OrbitalSystem'
import LinearCube from './objects/LinearCube'
import VectorField from './objects/VectorField'
import CoordinatePlane from './objects/CoordinatePlane'

import SceneController from './SceneController'

import './SpaceScene.css'

function SceneContent() {
  const systemRef = useRef()

  return (
    <>
      <ambientLight intensity={0.5} />

      <ParticleField />

      <group ref={systemRef}>
        <OrbitalSystem />
      </group>

      <LinearCube />

      <CoordinatePlane />

      <VectorField />

      <SceneController
        targetRef={systemRef}
      />
    </>
  )
}

function SpaceScene() {
  return (
    <div className="space-scene">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}

export default SpaceScene