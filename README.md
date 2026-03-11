# Fan Funding Platform on Polkadot (Moonbase Alpha)

A decentralized fan funding platform built on the Polkadot ecosystem where creators can mint NFTs and receive direct funding from their supporters. Deployed on **Moonbase Alpha** — Moonbeam's EVM-compatible testnet parachain on Polkadot.

## 🚀 Deployed Contract

- **Network**: Moonbase Alpha (Polkadot EVM Testnet)
- **Contract Address**: `0xYOUR_CONTRACT_ADDRESS` _(update after deployment)_
- **Chain ID**: 1287
- **RPC URL**: https://rpc.api.moonbase.moonbeam.network
- **Block Explorer**: https://moonbase.moonscan.io
- **Faucet**: https://faucet.moonbeam.network/ (1.1 DEV tokens every 24 hours)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS, RainbowKit
- **Smart Contracts**: Solidity 0.8.20, Hardhat
- **Blockchain**: Moonbase Alpha (Polkadot Parachain — EVM-compatible)
- **Wallet**: MetaMask (fully supported)
- **Storage**: IPFS via Pinata
- **Native Token**: DEV (testnet)

## 📦 Installation

```bash
npm install --legacy-peer-deps
```

## 🔧 Development

```bash
npm run dev
```

## 📜 Compile & Deploy Contract

```bash
# Compile the Solidity contract
npx hardhat compile

# Deploy to Moonbase Alpha
node scripts/deploy.js
```

## 🌐 Vercel Deployment

The app is deployed on Vercel. Set these environment variables in Vercel dashboard:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed contract address on Moonbase Alpha |
| `NEXT_PUBLIC_RPC_URL` | `https://rpc.api.moonbase.moonbeam.network` |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect Project ID |
| `PINATA_JWT` | Pinata JWT for IPFS uploads |
| `PRIVATE_KEY` | Wallet private key (for deployment scripts only) |

### Auto-Deploy with GitHub

1. Create a GitHub repo and push this project
2. In Vercel → Import Git Repository → Select the repo
3. Add the environment variables above
4. Every `git push` to `main` triggers automatic deployment

