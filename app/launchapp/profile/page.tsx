"use client"

import { ProfileForm } from "@/components/profile/profile-form"
import { WalletConnect } from "@/components/profile/wallet-connect"
import { WalletInfo } from "@/components/profile/wallet-info"
import { useAccount } from "@/hooks/use-account"

export default function ProfilePage() {
  const { isConnected } = useAccount()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account information and wallet connection
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProfileForm />
        {isConnected ? <WalletInfo /> : <WalletConnect />}
      </div>
    </div>
  )
}