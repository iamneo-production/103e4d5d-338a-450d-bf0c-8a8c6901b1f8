import React from "react"

const SearchIcon = ({ className, fill }: Icon) => {
  return (
    <svg
      className={className}
      fill={fill || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      xmlSpace="preserve"
    >
      <path d="M11.854 21.854c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.588-8-8-8z" />
      <path d="M26.146 27.146a.997.997 0 0 1-.707-.293l-7.694-7.694a.999.999 0 1 1 1.414-1.414l7.694 7.694a.999.999 0 0 1-.707 1.707z" />
    </svg>
  )
}

export default SearchIcon
