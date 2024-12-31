"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function TokenImport() {
  const [isImporting, setIsImporting] = useState(false)
  const [tokenAddress, setTokenAddress] = useState("")

  const handleImport = async () => {
    if (!tokenAddress) {
      toast.error("Please enter a token address")
      return
    }
    
    setIsImporting(true)
    try {
      // Simulate token import
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success("Token imported successfully")
      setTokenAddress("")
    } catch (error) {
      toast.error("Failed to import token")
    } finally {
      setIsImporting(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Enter token address"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        className="max-w-xs"
      />
      <Button onClick={handleImport} disabled={isImporting}>
        {isImporting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <PlusCircle className="mr-2 h-4 w-4" />
        )}
        Add Token
      </Button>
    </div>
  )
}