import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

function LinearCube() {
  const groupRef = useRef()

  const vertices = useMemo(
    () => [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],

      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ],
    [],
  )

  const edges = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],

      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],

      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return
    }

    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight

    /*
      0 = HERO
      1 = ABOUT
    */
    const progress = THREE.MathUtils.clamp(
      scrollY / viewportHeight,
      0,
      1,
    )

    /*
      ============================
      POSIÇÃO
      ============================

      HERO:
      cubo à esquerda envolvendo o título

      ABOUT:
      cubo muda de posição e acompanha
      o próximo título
    */

    const heroPosition = new THREE.Vector3(
      -2.0,
      0.1,
      -0.5,
    )

    const aboutPosition = new THREE.Vector3(
      -1.6,
      -0.15,
      -0.8,
    )

    const targetPosition = new THREE.Vector3()
      .lerpVectors(
        heroPosition,
        aboutPosition,
        progress,
      )

    groupRef.current.position.x =
      THREE.MathUtils.damp(
        groupRef.current.position.x,
        targetPosition.x,
        3.5,
        delta,
      )

    groupRef.current.position.y =
      THREE.MathUtils.damp(
        groupRef.current.position.y,
        targetPosition.y,
        3.5,
        delta,
      )

    groupRef.current.position.z =
      THREE.MathUtils.damp(
        groupRef.current.position.z,
        targetPosition.z,
        3.5,
        delta,
      )

    /*
      ============================
      ESCALA
      ============================
    */

    const heroScale = new THREE.Vector3(
      2.25,
      1.55,
      1.25,
    )

    const aboutScale = new THREE.Vector3(
      2.15,
      1.45,
      1.2,
    )

    const targetScale = new THREE.Vector3()
      .lerpVectors(
        heroScale,
        aboutScale,
        progress,
      )

    groupRef.current.scale.x =
      THREE.MathUtils.damp(
        groupRef.current.scale.x,
        targetScale.x,
        4,
        delta,
      )

    groupRef.current.scale.y =
      THREE.MathUtils.damp(
        groupRef.current.scale.y,
        targetScale.y,
        4,
        delta,
      )

    groupRef.current.scale.z =
      THREE.MathUtils.damp(
        groupRef.current.scale.z,
        targetScale.z,
        4,
        delta,
      )

    /*
      ============================
      ROTAÇÃO CONTÍNUA
      ============================
    */

    const time = state.clock.elapsedTime

    const rotationX =
      0.18 +
      progress * 0.5 +
      Math.sin(time * 0.25) * 0.04

    const rotationY =
      time * 0.075 +
      progress * Math.PI * 0.6

    const rotationZ =
      -0.12 +
      progress * 0.35 +
      Math.sin(time * 0.2) * 0.03

    groupRef.current.rotation.x =
      THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        rotationX,
        3,
        delta,
      )

    groupRef.current.rotation.y =
      THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        rotationY,
        3,
        delta,
      )

    groupRef.current.rotation.z =
      THREE.MathUtils.damp(
        groupRef.current.rotation.z,
        rotationZ,
        3,
        delta,
      )

    /*
      ============================
      TRANSFORMAÇÃO LINEAR
      ============================

      Conforme descemos para Sobre,
      o cubo sofre cisalhamento.

      matriz:

      | 1   h   0 |
      | 0   1   0 |
      | 0   0   1 |
    */

    const shear =
      Math.sin(progress * Math.PI) * 0.35

    groupRef.current.children.forEach((child) => {
      if (!child.userData.originalPosition) {
        return
      }

      const original =
        child.userData.originalPosition

      child.position.x =
        original.x +
        original.y * shear
    })
  })

  return (
    <group ref={groupRef}>
      {edges.map(([start, end], index) => {
        const startPoint =
          vertices[start]

        const endPoint =
          vertices[end]

        return (
          <Line
            key={`edge-${index}`}
            points={[
              startPoint,
              endPoint,
            ]}
            color="#8195ff"
            lineWidth={0.65}
            transparent
            opacity={0.25}
          />
        )
      })}

      {vertices.map((vertex, index) => (
        <mesh
          key={`vertex-${index}`}
          position={vertex}
          userData={{
            originalPosition: {
              x: vertex[0],
              y: vertex[1],
              z: vertex[2],
            },
          }}
        >
          <sphereGeometry
            args={[
              0.025,
              10,
              10,
            ]}
          />

          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export default LinearCube