import { useState, useCallback } from "react"

interface UseConnectOptions {
  onError?: (error: Error) => void
}

export function useConnect({ onError }: UseConnectOptions = {}) {
  const [isLoading, setIsLoading] = useState(false)

  const connect = useCallback(async (connector: "metamask" | "walletconnect") => {
    setIsLoading(true)
    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate random error
      if (Math.random() > 0.7) {
        throw new Error("Failed to connect wallet")
      }
      
      // Success
    } catch (error) {
      onError?.(error as Error)
    } finally {
      setIsLoading(false)
    }
  }, [onError])

  return {
    connect,
    isLoading
  }
}