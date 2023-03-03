import React, { useEffect, useState } from "react"

import DataCard from "../../../components/city/data"
import Visualization from "../../../components/city/visualization"
import { cityData } from "../../../utils/constants/cities"

const City = ({ className }: any) => {
  const [current, setCurrent] = useState<keyof typeof cityData>("adilabad")

  return (
    <div className="center min-h-screen bg-black/75">
      <div className="flex w-2/3 flex-col rounded bg-white/10 px-4 py-2 shadow-md">
        <div className="flex w-full justify-center">
          <div className="mb-3 w-full">
            <select
              data-te-select-init
              className="w-full rounded bg-white/50 px-4 py-2 outline-none"
              onChange={(e) => setCurrent(e.target.value)}
              value={current}
            >
              {Object.keys(cityData).map((city, index) => {
                const current = cityData[city]
                if (!current) return <></>
                return (
                  <option
                    key={current.id}
                    value={current.name}
                    className="capitalize text-black/50"
                  >
                    {current.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Visualization />
          <Visualization />
        </div>
        <div className="mb-6 grid">
          <DataCard
            city={current}
            heading={"Heading"}
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet omnis necessitatibus
                      consectetur, ad molestiae quidem! Placeat, quis tempora voluptate sunt, dicta doloremque
                      tenetur cumque officiis amet alias repellat odit sequi velit repellendus dolore veniam.
                      Perferendis deleniti labore similique. Omnis vel cumque eveniet ullam voluptatem commodi
                      fuga consequatur ex voluptas tempora, sequi, saepe, ad in? Nihil accusantium odio
                      repudiandae cumque, assumenda aspernatur possimus. Quae ratione saepe ex. Labore incidunt
                      sint aspernatur quisquam ea aut ut fugiat modi iusto, praesentium adipisci, recusandae optio
                      veniam alias tempora molestias veritatis autem? Id laboriosam atque unde officia architecto
                    `}
          />
        </div>
      </div>
    </div>
  )
}

export default City
