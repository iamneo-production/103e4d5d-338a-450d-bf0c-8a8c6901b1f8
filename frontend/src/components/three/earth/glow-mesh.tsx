/* eslint-disable react/no-unknown-property */
import { useRef } from "react"
import { folder, useControls } from "leva"
import { AdditiveBlending, BackSide, Color } from "three"

import "../glow/shader"

const GlowMesh = function (props: any) {
  const glowRef = useRef<any>(null)

  // const { pVal, cVal, color } = useControls({
  //   glow: folder({
  //     pVal: { value: 8.4, max: 10, min: 0 },
  //     cVal: { value: 0.35, max: 2, min: 0 },
  //     color: { value: "#1e296f" },
  //   }),
  // })

  return (
    <mesh ref={glowRef} {...props}>
      <sphereGeometry args={[5, 40, 40]}></sphereGeometry>
      {/*@ts-ignore */}
      <glowShaderMaterial
        attach="material"
        // c={cVal || 0.35}
        // p={pVal || 8.4}
        // glowColor={new Color(color || "#1e296f")}
        c={0.4}
        p={8.5}
        glowColor={new Color("#1e296f")}
        transparent={true}
        depthWrite={false}
        blending={AdditiveBlending}
        side={BackSide}
      />
    </mesh>
  )
}

export default GlowMesh
