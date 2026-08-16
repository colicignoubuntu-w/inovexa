import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

function CoordinatePlane() {
  const groupRef = useRef()

  const gridLines = useMemo(() => {
    const lines = []

    const size = 3.2
    const divisions = 10
    const step = (size * 2) / divisions

    for (let i = 0; i <= divisions; i += 1) {
      const position = -size + i * step

      lines.push({
        start: [-size, position, 0],
        end: [size, position, 0],
      })

      lines.push({
        start: [position, -size, 0],
        end: [position, size, 0],
      })
    }

    return lines
  }, [])

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

    /*
      0 = fora da seção
      1 = centro da seção
    */

    const sectionCenter =
      rect.top + rect.height / 2

    const distanceFromCenter =
      Math.abs(
        sectionCenter -
        viewportHeight / 2,
      )

    const visibility =
      THREE.MathUtils.clamp(
        1 -
          distanceFromCenter /
            (viewportHeight * 0.9),
        0,
        1,
      )

    /*
      Escala suave
    */

    const targetScale =
      0.45 +
      visibility * 0.45

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
      Fica no canto inferior esquerdo
    */

    const targetX =
      THREE.MathUtils.lerp(
        -4.4,
        -3.2,
        visibility,
      )

    const targetY =
      THREE.MathUtils.lerp(
        -2.7,
        -1.85,
        visibility,
      )

    const targetZ =
      THREE.MathUtils.lerp(
        -5,
        -2.2,
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

    /*
      Inclinação
    */

    const targetRotationX =
      Math.PI * 0.36

    const targetRotationY =
      Math.PI * 0.1 +
      visibility * 0.25

    const targetRotationZ =
      -0.12 +
      Math.sin(
        state.clock.elapsedTime * 0.15,
      ) * 0.03

    groupRef.current.rotation.x =
      THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotationX,
        3,
        delta,
      )

    groupRef.current.rotation.y =
      THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotationY,
        3,
        delta,
      )

    groupRef.current.rotation.z =
      THREE.MathUtils.damp(
        groupRef.current.rotation.z,
        targetRotationZ,
        3,
        delta,
      )

    /*
      Esconde completamente longe de Serviços
    */

    groupRef.current.visible =
      visibility > 0.03
  })

  return (
    <group
      ref={groupRef}
      position={[-4.4, -2.7, -5]}
      scale={[0.45, 0.45, 0.45]}
    >
      {gridLines.map((line, index) => (
        <Line
          key={index}
          points={[
            line.start,
            line.end,
          ]}
          color="#64748b"
          lineWidth={0.35}
          transparent
          opacity={0.11}
        />
      ))}

      {/* Eixo X */}
      <Line
        points={[
          [-3.7, 0, 0],
          [3.7, 0, 0],
        ]}
        color="#67e8f9"
        lineWidth={0.9}
        transparent
        opacity={0.68}
      />

      {/* Eixo Y */}
      <Line
        points={[
          [0, -3.7, 0],
          [0, 3.7, 0],
        ]}
        color="#a5b4fc"
        lineWidth={0.9}
        transparent
        opacity={0.62}
      />

      {/* Eixo Z */}
      <Line
        points={[
          [0, 0, -2.8],
          [0, 0, 2.8],
        ]}
        color="#818cf8"
        lineWidth={0.9}
        transparent
        opacity={0.6}
      />

      {/* Origem */}
      <mesh>
        <sphereGeometry
          args={[0.06, 16, 16]}
        />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Círculo de referência */}
      <Line
        points={Array.from(
          { length: 100 },
          (_, index) => {
            const angle =
              (index / 99) *
              Math.PI *
              2

            return [
              Math.cos(angle) * 1.7,
              Math.sin(angle) * 1.7,
              0,
            ]
          },
        )}
        color="#818cf8"
        lineWidth={0.4}
        transparent
        opacity={0.15}
      />
    </group>
  )
}

export default CoordinatePlane