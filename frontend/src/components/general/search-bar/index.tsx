import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { FaSearch } from "react-icons/fa"

import cities from "../../../utils/constants/cities"

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  decoration?: string
  inputDecoration?: string
}

const SearchBar = ({
  decoration,
  inputDecoration,
  onChange,
  className,
  ...props
}: SearchBarProps) => {
  const router = useRouter()

  const inputFieldRef = useRef<React.LegacyRef<HTMLInputElement> | undefined>(undefined)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      // @ts-ignore
      inputFieldRef.current?.focus()
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // adilabad
    if (cities.includes(search.toLowerCase())) {
      router.push(`/city/${search}`)
    }

    setSearch("")
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={
          "center h-[60px] flex-row rounded-full bg-white p-1 text-[#07051a] transition-all duration-300 " +
          className +
          " " +
          (isOpen ? "px-2" : "w-[60px]")
        }
      >
        <input
          type="search"
          ref={inputFieldRef as React.LegacyRef<HTMLInputElement>}
          onChange={(e) => {
            setSearch(e.target.value)
            onChange?.(e)
          }}
          className={
            `bg-transparent text-black/75 outline-none ring-0 transition-all duration-300 ` +
            inputDecoration +
            " " +
            (isOpen ? "ml-2 w-full opacity-100" : "w-0 translate-x-10 opacity-0")
          }
          required
          {...props}
        />
        <span
          onClick={handleToggle}
          className="center border-1 z-10 min-h-[50px] min-w-[50px] cursor-pointer overflow-hidden rounded-full border-solid border-white bg-black/20 p-3"
        >
          <FaSearch className={"h-6 w-6 text-black " + decoration} />
        </span>
      </form>
    </>
  )
}

export default SearchBar
