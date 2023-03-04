import React, { useEffect, useState } from "react"
// @ts-ignore
import { csv } from "d3-request"
import { useRouter } from "next/router"
import { Map } from "react-map-gl"
import { Color } from "react-three-fiber"

import { HexagonLayer } from "@deck.gl/aggregation-layers/typed"
import { AmbientLight, LightingEffect, PointLight } from "@deck.gl/core/typed"
import DeckGL from "@deck.gl/react/typed"

import DataCard from "../../../components/city/data"
import Visualization from "../../../components/city/visualization"

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv"

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
})

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000],
})

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000],
})

const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 })

const material: any = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51],
}

const INITIAL_VIEW_STATE = {
  longitude: 0.00415727,
  latitude: 51.722395,
  zoom: 8,
  minZoom: 7,
  maxZoom: 15,
  pitch: 40.5,
  bearing: -27,
}

const MAP_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"

export const colorRange: any = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
]

function getTooltip({ object }: any) {
  if (!object) {
    return null
  }
  const lat = object.position[1]
  const lng = object.position[0]
  const count = object.points?.length

  return `\
  Longitude: ${Math.min(Number(lng * -10 * 79 + Math.random()), 80.23)}
  Latitude: ${Number((lat / 50) * 18)}
    Current ${count}
    `
}

const City = ({
  mapStyle = MAP_STYLE,
  radius = 1000,
  upperPercentile = 100,
  coverage = 1,
}: any) => {
  const router = useRouter()

  const [hexData, setHexData] = useState<any>(null)

  const { city } = router.query

  useEffect(() => {
    csv(DATA_URL, (error: any, response: any) => {
      if (!error) {
        const data = response.map((d: any) => [Number(d.lng), Number(d.lat)])
        const layers = [
          new HexagonLayer({
            id: "heatmap",
            colorRange,
            coverage,
            data,
            elevationRange: [0, 3000],
            elevationScale: data && data.length ? 50 : 0,
            extruded: true,
            getPosition: (d: any) => d,
            pickable: true,
            radius,
            upperPercentile,
            material,

            transitions: {
              elevationScale: 3000,
            },
          }),
        ]

        setHexData(layers)
      } else {
        console.log(error)
      }
    })
  }, [])

  return (
    <div className="relative h-screen">
      <DeckGL
        layers={hexData}
        effects={[lightingEffect]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        getTooltip={getTooltip}
      >
        <Map
          mapboxAccessToken={`pk.eyJ1IjoiY291bnRhaWdodCIsImEiOiJjaXo3ZTMyeTMwMDQ2MnFtcTB4MHprenQ3In0.hjGeliLdVnjN-3Sw2br62g`}
        />
      </DeckGL>
    </div>
  )
}

export default City
