"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useConnect } from "@/hooks/use-connect"
import { Wallet, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function WalletConnect() {
  const [error, setError] = useState<string | null>(null)
  const { connect, isLoading } = useConnect({
    onError: (err) => setError(err.message),
  })

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">Connect Wallet</h2>
        <p className="text-sm text-muted-foreground">
          Connect your wallet to access additional features
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="grid gap-4">
          <Button
            size="lg"
            className="w-full"
            onClick={() => connect("metamask")}
            disabled={isLoading}
          >
            <Wallet className="mr-2 h-5 w-5" />
            {isLoading ? "Connecting..." : "Connect MetaMask"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={() => connect("walletconnect")}
            disabled={isLoading}
          >
            <img
              src="/walletconnect.svg"
              alt="WalletConnect"
              className="mr-2 h-5 w-5"
            />
            {isLoading ? "Connecting..." : "WalletConnect"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}