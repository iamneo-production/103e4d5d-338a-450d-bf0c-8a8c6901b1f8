import React from "react"

interface DistributionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  data: Array<{ id: number; month: string; abbr: number; prediction: number; context: string }>
}

const DistributionCard = ({ data, heading, className }: DistributionCardProps) => {
  return (
    <>
      <h1 className="mb-1 font-poppins text-2xl text-white">{heading}</h1>
      <div
        className={
          "grid w-full grid-cols-1 justify-between gap-y-1 gap-x-1 md:grid-cols-3 lg:grid-cols-4 " +
          className
        }
      >
        {data.map((distribution, index) => {
          return (
            <div
              className="center flex-col rounded border border-white/50 bg-[#21212e] px-4 py-2 text-center text-white "
              key={distribution.id}
            >
              <h1>{distribution.prediction}</h1>
              <span className="text-white/50">{distribution.month}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DistributionCard
