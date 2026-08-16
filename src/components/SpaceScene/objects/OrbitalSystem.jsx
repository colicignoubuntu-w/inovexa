import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

function createEllipsePoints(radiusX, radiusY, segments = 160) {
  const points = []

  for (let i = 0; i <= segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radiusX,
        Math.sin(angle) * radiusY,
        0,
      ),
    )
  }

  return points
}

function Orbit({
  radiusX,
  radiusY,
  rotation,
  speed,
  planetSize = 0.045,
  offset = 0,
}) {
  const planetRef = useRef()

  const points = createEllipsePoints(radiusX, radiusY)

  useFrame((state) => {
    if (!planetRef.current) {
      return
    }

    const time =
      state.clock.elapsedTime * speed + offset

    planetRef.current.position.x =
      Math.cos(time) * radiusX

    planetRef.current.position.y =
      Math.sin(time) * radiusY
  })

  return (
    <group rotation={rotation}>
      <Line
        points={points}
        color="#6675ad"
        lineWidth={0.55}
        transparent
        opacity={0.28}
      />

      <mesh ref={planetRef}>
        <sphereGeometry args={[planetSize, 20, 20]} />

        <meshBasicMaterial
          color="#8ea2ff"
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  )
}

function OrbitalSystem() {
  const systemRef = useRef()
  const coreRef = useRef()

  useFrame((state, delta) => {
    if (systemRef.current) {
      systemRef.current.rotation.y += delta * 0.035

      systemRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.08) * 0.08
    }

    if (coreRef.current) {
      const pulse =
        1 +
        Math.sin(state.clock.elapsedTime * 1.4) *
          0.06

      coreRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <group
      ref={systemRef}
      position={[1.6, 0.1, 0]}
      rotation={[0.25, -0.25, 0]}
    >
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.16, 32, 32]} />

        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />

        <meshBasicMaterial
          color="#6877ff"
          transparent
          opacity={0.08}
        />
      </mesh>

      <Orbit
        radiusX={1.35}
        radiusY={1.35}
        rotation={[0.1, 0.2, 0]}
        speed={0.42}
        offset={0}
      />

      <Orbit
        radiusX={2.05}
        radiusY={0.9}
        rotation={[0.6, 0.2, 0.35]}
        speed={0.28}
        planetSize={0.055}
        offset={2}
      />

      <Orbit
        radiusX={2.8}
        radiusY={1.25}
        rotation={[-0.4, 0.45, -0.25]}
        speed={0.19}
        planetSize={0.04}
        offset={4}
      />

      <Orbit
        radiusX={3.6}
        radiusY={1.7}
        rotation={[0.7, -0.2, 0.2]}
        speed={0.12}
        planetSize={0.035}
        offset={1}
      />
    </group>
  )
}

export default OrbitalSystem