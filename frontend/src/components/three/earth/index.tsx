/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react"
import { Color, Mesh } from "three"
import { TextureLoader } from "three/src/loaders/TextureLoader"

import { useFrame, useLoader } from "@react-three/fiber"

import { useIsSmall } from "../../../hooks/useMediaQuery"
import { PUBLIC_URL } from "../../../utils/constants/variables"

import GlowMesh from "./glow-mesh"

const Earth = function (props: any) {
  const earthMesh = useRef<Mesh>(null)
  const match = useIsSmall()

  const [textureMap, textureBumpMap, textureSpecMap] = useLoader(TextureLoader, [
    `${PUBLIC_URL}/model/earth.jpg`,
    `${PUBLIC_URL}/model/earth_bump.jpg`,
    `${PUBLIC_URL}/model/earth_spec.jpg`,
  ])

  return (
    <mesh {...props} ref={earthMesh} scale={!match ? [1, 1, 1] : [2, 2, 2]}>
      <sphereGeometry args={[5, 40, 40]}></sphereGeometry>
      <meshPhongMaterial
        transparent
        map={textureMap}
        bumpMap={textureBumpMap}
        bumpScale={0.15}
        specularMap={textureSpecMap}
        specular={new Color("#909090")}
        shininess={5}
        attach={"material"}
      ></meshPhongMaterial>
      <GlowMesh scale={!match ? [1, 1, 1] : [1.2, 1.2, 1.2]}></GlowMesh>
    </mesh>
  )
}

export default Earth
