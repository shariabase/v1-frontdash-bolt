"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAccount } from "@/hooks/use-account"
import { useBalance } from "@/hooks/use-balance"
import { useNetwork } from "@/hooks/use-network"
import { Copy, ExternalLink, Power } from "lucide-react"
import { toast } from "sonner"

export function WalletInfo() {
  const { address, disconnect } = useAccount()
  const { data: balance } = useBalance()
  const { chain } = useNetwork()

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    toast.success("Address copied to clipboard")
  }

  const openExplorer = () => {
    if (chain?.blockExplorers?.default?.url) {
      window.open(`${chain.blockExplorers.default.url}/address/${address}`)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Connected Wallet</h2>
            <p className="text-sm text-muted-foreground">
              Manage your wallet connection
            </p>
          </div>
          <Badge variant="outline" className="capitalize">
            {chain?.name || "Unknown Network"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Address</span>
            <div className="flex items-center gap-2">
              <span className="font-mono">{shortenAddress(address)}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={copyAddress}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={openExplorer}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Balance</span>
            <span className="font-mono">
              {balance?.formatted} {balance?.symbol}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Chain ID</span>
            <span className="font-mono">{chain?.id}</span>
          </div>
        </div>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => disconnect()}
        >
          <Power className="mr-2 h-4 w-4" />
          Disconnect Wallet
        </Button>
      </CardContent>
    </Card>
  )
}