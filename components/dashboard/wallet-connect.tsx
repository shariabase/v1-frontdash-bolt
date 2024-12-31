import { Button } from "@/components/ui/button"
import { useConnect } from "@/hooks/use-connect"
import { Wallet } from "lucide-react"

export function WalletConnect() {
  const { connect, isLoading } = useConnect()

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <Wallet className="h-12 w-12 text-primary" />
      <div>
        <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Connect your wallet to view your transactions and manage your assets
        </p>
      </div>
      <Button
        size="lg"
        className="w-full max-w-sm"
        onClick={() => connect("metamask")}
        disabled={isLoading}
      >
        <Wallet className="mr-2 h-5 w-5" />
        {isLoading ? "Connecting..." : "Connect Wallet"}
      </Button>
    </div>
  )
}