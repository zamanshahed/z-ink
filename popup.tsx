import { useState } from "react"

import "./style.css"

import Branding from "~components/Branding"
import CommonButton from "~components/CommonButton"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="bg-[#1E1E26] text-[#77A6A3] p-3 w-[400px] h-[250px]">
      <div className="flex items-start justify-between">
        <Branding />
        <CommonButton label="Add Link" />
      </div>
    </div>
  )
}

export default IndexPopup
