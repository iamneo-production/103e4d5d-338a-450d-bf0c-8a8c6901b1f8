import React from "react"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/router"

import { cityData } from "../../../utils/constants/cities"

interface DataCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: keyof typeof cityData
  content: string
  preview: StaticImageData | null
}

const DataCard = ({ city, content, preview }: DataCardProps) => {
  const { push } = useRouter()

  if (typeof city === "number") {
    return <></>
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <span className="center">{cityData[city].iframe as React.ReactNode}</span>
      <div className="flex grow flex-col justify-between">
        <div className="">
          <h1 className="font-poppins text-3xl text-white">
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </h1>
          <p className="text-base text-white/50" dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
        <div className="mt-2 flex flex-col justify-between md:flex-row md:items-end">
          {preview && (
            <div className="w-64">
              <Image src={preview} alt={"city"} />
            </div>
          )}
          <button
            onClick={() => {
              push(`/city/${city}/visualize`)
            }}
            className="mt-2 mr-4 w-min rounded-lg border border-white bg-transparent px-4 py-2 text-white shadow-md outline-none ring-0 transition-all hover:bg-white hover:text-black"
          >
            Visualize
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataCard
