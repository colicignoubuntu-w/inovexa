import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

function createArrow(direction, length) {
  const dir =
    new THREE.Vector3(...direction)
      .normalize()

  const end =
    dir.clone()
      .multiplyScalar(length)

  const reference =
    Math.abs(dir.y) < 0.9
      ? new THREE.Vector3(0, 1, 0)
      : new THREE.Vector3(1, 0, 0)

  const side =
    new THREE.Vector3()
      .crossVectors(dir, reference)
      .normalize()
      .multiplyScalar(0.11)

  const back =
    dir.clone()
      .multiplyScalar(length - 0.24)

  return {
    line: [
      new THREE.Vector3(0, 0, 0),
      end,
    ],

    headA: [
      end,
      back.clone().add(side),
    ],

    headB: [
      end,
      back.clone().sub(side),
    ],
  }
}

function VectorArrow({
  direction,
  length,
  color,
  opacity,
}) {
  const arrow = useMemo(
    () =>
      createArrow(
        direction,
        length,
      ),
    [direction, length],
  )

  return (
    <group>
      <Line
        points={arrow.line}
        color={color}
        lineWidth={1}
        transparent
        opacity={opacity}
      />

      <Line
        points={arrow.headA}
        color={color}
        lineWidth={1}
        transparent
        opacity={opacity}
      />

      <Line
        points={arrow.headB}
        color={color}
        lineWidth={1}
        transparent
        opacity={opacity}
      />
    </group>
  )
}

function VectorField() {
  const groupRef = useRef()

  const vectors = useMemo(
    () => [
      {
        direction: [1, 0, 0],
        length: 2,
        color: '#67e8f9',
        opacity: 0.85,
      },

      {
        direction: [0, 1, 0],
        length: 1.8,
        color: '#a5b4fc',
        opacity: 0.8,
      },

      {
        direction: [0, 0, 1],
        length: 1.65,
        color: '#818cf8',
        opacity: 0.8,
      },

      {
        direction: [1, 1, 0],
        length: 1.25,
        color: '#94a3b8',
        opacity: 0.25,
      },

      {
        direction: [-1, 1, 0],
        length: 1.1,
        color: '#94a3b8',
        opacity: 0.22,
      },
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return
    }

    const servicesSection =
      document.getElementById('servicos')

    if (!servicesSection) {
      return
    }

    const rect =
      servicesSection.getBoundingClientRect()

    const viewportHeight =
      window.innerHeight

    const sectionCenter =
      rect.top +
      rect.height / 2

    const distance =
      Math.abs(
        sectionCenter -
        viewportHeight / 2,
      )

    const visibility =
      THREE.MathUtils.clamp(
        1 -
          distance /
            (viewportHeight * 0.9),
        0,
        1,
      )

    /*
      Vetores ficam do lado direito.
    */

    const targetX =
      THREE.MathUtils.lerp(
        4.7,
        3.35,
        visibility,
      )

    const targetY =
      THREE.MathUtils.lerp(
        -2.2,
        -1.05,
        visibility,
      )

    const targetZ =
      THREE.MathUtils.lerp(
        -5,
        -1.7,
        visibility,
      )

    groupRef.current.position.x =
      THREE.MathUtils.damp(
        groupRef.current.position.x,
        targetX,
        3,
        delta,
      )

    groupRef.current.position.y =
      THREE.MathUtils.damp(
        groupRef.current.position.y,
        targetY,
        3,
        delta,
      )

    groupRef.current.position.z =
      THREE.MathUtils.damp(
        groupRef.current.position.z,
        targetZ,
        3,
        delta,
      )

    const targetScale =
      0.5 +
      visibility * 0.55

    groupRef.current.scale.x =
      THREE.MathUtils.damp(
        groupRef.current.scale.x,
        targetScale,
        4,
        delta,
      )

    groupRef.current.scale.y =
      THREE.MathUtils.damp(
        groupRef.current.scale.y,
        targetScale,
        4,
        delta,
      )

    groupRef.current.scale.z =
      THREE.MathUtils.damp(
        groupRef.current.scale.z,
        targetScale,
        4,
        delta,
      )

    /*
      Rotação suave
    */

    groupRef.current.rotation.x =
      THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -0.2 +
          visibility * 0.25,
        3,
        delta,
      )

    groupRef.current.rotation.y =
      THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        -0.5 +
          visibility * 0.7,
        3,
        delta,
      )

    groupRef.current.rotation.z =
      THREE.MathUtils.damp(
        groupRef.current.rotation.z,
        0.1 +
          Math.sin(
            state.clock.elapsedTime *
              0.2,
          ) *
            0.03,
        3,
        delta,
      )

    /*
      Pequena transformação linear
      enquanto Serviços está no centro.

      [x']   [1  k  0][x]
      [y'] = [0  1  0][y]
      [z']   [0  0  1][z]
    */

    const shear =
      visibility *
      Math.sin(
        state.clock.elapsedTime *
          0.35,
      ) *
      0.16

    groupRef.current.scale.x +=
      shear * 0.0008

    groupRef.current.visible =
      visibility > 0.03
  })

  return (
    <group
      ref={groupRef}
      position={[4.7, -2.2, -5]}
      scale={[0.5, 0.5, 0.5]}
    >
      {vectors.map(
        (vector, index) => (
          <VectorArrow
            key={index}
            direction={
              vector.direction
            }
            length={
              vector.length
            }
            color={
              vector.color
            }
            opacity={
              vector.opacity
            }
          />
        ),
      )}

      <mesh>
        <sphereGeometry
          args={[0.065, 18, 18]}
        />

        <meshBasicMaterial
          color="#ffffff"
        />
      </mesh>

      <Line
        points={Array.from(
          { length: 100 },
          (_, index) => {
            const angle =
              (index / 99) *
              Math.PI *
              2

            return [
              Math.cos(angle) * 1.15,
              Math.sin(angle) * 1.15,
              0,
            ]
          },
        )}
        color="#6366f1"
        lineWidth={0.4}
        transparent
        opacity={0.12}
      />
    </group>
  )
}

export default VectorField