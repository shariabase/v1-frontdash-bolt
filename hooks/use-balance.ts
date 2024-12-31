import { useState } from "react"

export function useBalance() {
  const [data] = useState({
    formatted: "1.234",
    symbol: "ETH"
  })

  return { data }
}