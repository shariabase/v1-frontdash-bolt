import { useState, useCallback } from "react"

export function useAccount() {
  const [address, setAddress] = useState<string>("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")
  const [isConnected, setIsConnected] = useState(false)

  const disconnect = useCallback(() => {
    setAddress("")
    setIsConnected(false)
  }, [])

  return {
    address,
    isConnected,
    disconnect
  }
}