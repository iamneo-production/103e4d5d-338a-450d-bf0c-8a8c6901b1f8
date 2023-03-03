import React from "react"

interface VisualizationProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    value: string
    content: string
  }
  head?: string
  footer?: string
  footerDecoration?: string
}

const Visualization = ({
  className,
  head,
  footer,
  data,
  footerDecoration = "text-green-400",
  ...props
}: VisualizationProps) => {
  return (
    <div
      className={
        "center flex-col justify-between gap-6 rounded border-t-4 bg-[#21212e] px-4 py-2 text-white " +
        (data?.content === "Satisfactory" && " border-t-green-500") +
        " " +
        className
      }
      {...props}
    >
      <span className="text-xs text-gray-500/75">{head}</span>
      <div className="center flex-col">
        <h1 className="font-poppins text-3xl">{data?.value}</h1>
        <p className={"text-base " + (data?.content === "Satisfactory" && " text-green-500")}>
          {data?.content}
        </p>
      </div>
      <span className={"text-xs " + footerDecoration}>{footer}</span>
    </div>
  )
}

export default Visualization
