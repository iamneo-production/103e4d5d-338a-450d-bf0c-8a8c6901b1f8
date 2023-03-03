import React from "react"

import { cityData } from "../../../utils/constants/cities"

interface DataCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: keyof typeof cityData
  heading: string
  content: string
}

const DataCard = ({ city, heading, content }: DataCardProps) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <span className=""></span>
      {cityData[city].iframe as React.ReactNode}
      <div className="grow">
        <h1 className="font-poppins text-3xl text-white">{heading}</h1>
        <p className="text-base text-gray-300/50">{content}</p>
      </div>
    </div>
  )
}

export default DataCard
