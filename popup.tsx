import { useState } from "react"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="bg-[#1E1E26] text-[#77A6A3] p-3 w-[400px] h-[250px]">
      <div className="text-2xl font-bold">Binary in my blood!</div>
    </div>
  )
}

export default IndexPopup
