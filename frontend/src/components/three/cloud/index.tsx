/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react"
import { AdditiveBlending, Mesh } from "three"
import { TextureLoader } from "three/src/loaders/TextureLoader"

import { useLoader } from "@react-three/fiber"

import { PUBLIC_URL } from "../../../utils/constants/variables"

const Cloud = function (props: any) {
  const cloudRef = useRef<Mesh>(null)

  useEffect(() => {
    // ..
  }, [])

  const textureMap = useLoader(TextureLoader, `${PUBLIC_URL}/model/earth_cloud.png`)
  return (
    <mesh {...props} ref={cloudRef}>
      <sphereGeometry args={[5.1, 40, 40]}></sphereGeometry>
      <meshPhongMaterial
        map={textureMap}
        transparent
        opacity={1}
        blending={AdditiveBlending}
      ></meshPhongMaterial>
    </mesh>
  )
}

export default Cloud
