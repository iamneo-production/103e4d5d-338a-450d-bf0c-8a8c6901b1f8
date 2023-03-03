import React from "react"

interface VisualizationProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: string
}

const Visualization = ({ className, data, ...props }: VisualizationProps) => {
  return (
    <div
      className={
        "center flex-col justify-between gap-6 rounded border-t-4 border-t-blue-400 bg-[#21212e] px-4 py-2 text-white " +
        className
      }
    >
      <span className="text-xs text-gray-500/75">Head</span>
      <div className="center flex-col">
        <h1 className="font-poppins text-3xl">Value</h1>
        <p className="text-base text-gray-400">content</p>
      </div>
      <span className="text-xs text-green-400">Foot</span>
    </div>
  )
}

export default Visualization
