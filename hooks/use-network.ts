import { useState } from "react"

export function useNetwork() {
  const [chain] = useState({
    id: 1,
    name: "Ethereum",
    blockExplorers: {
      default: {
        url: "https://etherscan.io"
      }
    }
  })

  return { chain }
}