import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const particleCount = 1400

    const array = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i += 1) {
      const index = i * 3

      array[index] = (Math.random() - 0.5) * 24
      array[index + 1] = (Math.random() - 0.5) * 16
      array[index + 2] = (Math.random() - 0.5) * 18
    }

    return array
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) {
      return
    }

    pointsRef.current.rotation.y += delta * 0.012
    pointsRef.current.rotation.x += delta * 0.003

    const time = state.clock.elapsedTime

    pointsRef.current.position.y =
      Math.sin(time * 0.08) * 0.12
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.022}
        color="#b6c5ff"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default ParticleField