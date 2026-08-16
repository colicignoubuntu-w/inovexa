import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function SceneController({ targetRef }) {
  const { camera } = useThree()

  const scrollTarget = useRef(0)
  const scrollCurrent = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight

      if (maxScroll <= 0) {
        scrollTarget.current = 0
        return
      }

      scrollTarget.current =
        window.scrollY / maxScroll
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useFrame((state, delta) => {
    scrollCurrent.current = THREE.MathUtils.damp(
      scrollCurrent.current,
      scrollTarget.current,
      4,
      delta,
    )

    const scroll = scrollCurrent.current

    /*
      ================================
      MOVIMENTO DA CÂMERA
      ================================
    */

    const cameraZ =
      8 -
      scroll * 4.8

    const cameraX =
      Math.sin(scroll * Math.PI * 2) * 0.8

    const cameraY =
      scroll * -1.2

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      cameraX,
      3,
      delta,
    )

    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      cameraY,
      3,
      delta,
    )

    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      cameraZ,
      3,
      delta,
    )

    camera.lookAt(0, 0, 0)

    /*
      ================================
      TRANSFORMAÇÃO DO SISTEMA
      ================================
    */

    if (!targetRef?.current) {
      return
    }

    const object = targetRef.current

    /*
      Rotação progressiva conforme scroll
    */

    object.rotation.x =
      scroll * Math.PI * 1.3

    object.rotation.y =
      scroll * Math.PI * 2.2

    object.rotation.z =
      Math.sin(scroll * Math.PI * 3) * 0.45

    /*
      Escala
    */

    const scale =
      1 +
      Math.sin(scroll * Math.PI) * 0.35

    object.scale.set(
      scale,
      scale,
      scale,
    )

    /*
      Pequeno deslocamento espacial
    */

    object.position.x =
      THREE.MathUtils.lerp(
        1.6,
        -0.4,
        scroll,
      )

    object.position.y =
      THREE.MathUtils.lerp(
        0.1,
        -0.8,
        scroll,
      )

    /*
      Movimento contínuo independente do scroll
    */

    object.rotation.y +=
      state.clock.elapsedTime * 0.0004
  })

  return null
}

export default SceneController