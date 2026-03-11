"use client";

import * as React from "react";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider, http } from "wagmi";
import { type Chain } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const moonbaseAlpha = {
  id: 1287,
  name: 'Moonbase Alpha',
  nativeCurrency: {
    decimals: 18,
    name: 'DEV',
    symbol: 'DEV',
  },
  rpcUrls: {
    default: { http: ['https://rpc.api.moonbase.moonbeam.network'] },
    public: { http: ['https://rpc.api.moonbase.moonbeam.network'] },
  },
  blockExplorers: {
    default: { name: 'Moonscan', url: 'https://moonbase.moonscan.io' },
  },
  testnet: true,
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: "Fan Donation Platform",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "",
  chains: [moonbaseAlpha],
  wallets: [
    {
      groupName: "Preferred",
      wallets: [metaMaskWallet],
    },
  ],
  transports: {
    [moonbaseAlpha.id]: http(process.env.NEXT_PUBLIC_RPC_URL || "https://rpc.api.moonbase.moonbeam.network"),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
