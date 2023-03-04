import React from "react"

interface DistributionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  data: { id: number; month: string; predictions: Array<number> }
}

const DailyDistributionCard = ({ data, heading, className }: DistributionCardProps) => {
  console.log(data?.predictions)
  return (
    <>
      <h1 className="mb-1 font-poppins text-2xl text-white">{heading}</h1>
      <div
        className={
          "grid w-full grid-cols-1 justify-between gap-y-1 gap-x-1 md:grid-cols-3 lg:grid-cols-4 " +
          className
        }
      >
        {data?.predictions?.map((distribution, index) => {
          return (
            <div
              className="center flex-col rounded border border-white/50 bg-[#21212e] px-4 py-2 text-center text-white "
              key={distribution}
            >
              <h1>{distribution.toFixed(3)}</h1>
              <span className="text-white/50">{`${data.month.slice(0, 3)} ${index + 1}`}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DailyDistributionCard
