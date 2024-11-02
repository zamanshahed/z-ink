import React from "react"

type Props = {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export default function CommonButton({
  label = "",
  onClick = () => {},
  disabled = false
}: Props) {
  return (
    <button
      className="text-white bg-[#77A6A3] px-3 py-[5px] rounded-md font-bold"
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  )
}
