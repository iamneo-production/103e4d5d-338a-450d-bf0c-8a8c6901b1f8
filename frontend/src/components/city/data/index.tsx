import React from "react"
import { useRouter } from "next/router"

import { cityData } from "../../../utils/constants/cities"

interface DataCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: keyof typeof cityData
  heading: string
  content: string
}

const DataCard = ({ city, heading, content }: DataCardProps) => {
  const { push } = useRouter()

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <span className="center">{cityData[city].iframe as React.ReactNode}</span>
      <div className="flex grow flex-col justify-between">
        <div className="">
          <h1 className="font-poppins text-3xl text-white">{heading}</h1>
          <p className="text-base text-gray-300/50">{content}</p>
        </div>
        <div className="text-right">
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
