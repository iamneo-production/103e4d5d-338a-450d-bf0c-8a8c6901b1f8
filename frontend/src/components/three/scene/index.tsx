/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef, useState } from "react"
import { folder, useControls } from "leva"
import { SpotLightHelper } from "three"

import { useHelper } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { isMobile as detectMobile } from "../../../utils/functions/isMobile"
import Camera from "../camera"
import Cloud from "../cloud"
import Controls from "../controls"
import Earth from "../earth"
import Particles from "../particles"

const spotlightConfig: any = {
  showHelper: {
    value: false,
  },
  intensity: {
    value: 2,
    min: 0,
    max: 3,
  },
  color: {
    value: "#ffffff",
  },
  position: {
    value: [-26, 11, -11],
  },
  angle: {
    value: 0.2,
    min: 0,
    max: 1,
  },
  castShadow: {
    value: false,
  },
  penumbra: {
    value: 0.4,
    min: 0,
    max: 1,
  },
  distance: {
    value: 58,
    min: 0,
    max: 300,
  },
  decay: {
    value: 1,
    min: 0,
    max: 2,
  },
}

const Scene = function (props: any) {
  const mouse = useRef([0, 0])

  const earthGrounpRef = useRef<THREE.Group>(null)
  const spotLightRef = useRef<any>(null)

  const [isMobile, setIsMobile] = useState(false)
  // const spotlightProp = useControls({
  //   spotLight: folder(spotlightConfig),
  // })

  // useHelper(spotLightRef, spotlightProp.showHelper && SpotLightHelper)

  const spotlightProp = {
    intensity: 0.7,
    color: "#fff",
    position: [-12, 3, -15],
    angle: 0.65,
    castShadow: false,
    penumbra: 0.65,
    distance: 140,
    decay: 2.0,
  }

  useEffect(() => {
    setIsMobile(detectMobile())
  }, [])

  useFrame((state, delta) => {
    if (earthGrounpRef.current) {
      earthGrounpRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <Camera position={[0, 0, -35]} fov={40} near={0.1} far={1000} name={"per-camera"}>
        {/* @ts-ignore */}
        <spotLight ref={spotLightRef} {...spotlightProp}></spotLight>
      </Camera>
      <ambientLight intensity={0.8} color={"#393939"}></ambientLight>
      <Suspense fallback={null}>
        <group ref={earthGrounpRef}>
          <Earth postion={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} />
          <Cloud />
        </group>
        <Controls />
      </Suspense>
      <Particles count={isMobile ? 500 : 2000} mouse={mouse} />
    </>
  )
}

export default Scene
