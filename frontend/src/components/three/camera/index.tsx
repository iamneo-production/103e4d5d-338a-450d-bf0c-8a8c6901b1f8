import { useEffect, useRef } from "react"
import { Vector3 } from "three"

import { useThree } from "@react-three/fiber"

const CustomCamera = function (props: any) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const { set, size } = useThree()
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height
      cameraRef.current.lookAt(new Vector3(0, 0, 0))
      cameraRef.current.updateProjectionMatrix()
    }
  }, [size, props])

  const parallax = (e: MouseEvent) => {
    const mouseTolerance = 0.001

    const centerX = window.innerWidth * 0.5
    const centerY = window.innerHeight * 0.5
    if (cameraRef.current) {
      cameraRef.current.position.x = -1 * (e.clientX - centerX) * mouseTolerance
      cameraRef.current.position.y = -1 * (e.clientY - centerY) * mouseTolerance
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", parallax)

    return () => window.removeEventListener("mousemove", parallax)
  }, [])

  useEffect(() => {
    // @ts-ignore
    set(() => ({ camera: cameraRef.current }))
  }, [set])

  return <perspectiveCamera ref={cameraRef} {...props} />
}

export default CustomCamera
