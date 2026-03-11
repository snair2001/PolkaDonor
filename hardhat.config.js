

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Moonbase Alpha — Polkadot EVM-compatible testnet (Primary)
    moonbaseAlpha: {
      type: 'http',
      url: "https://rpc.api.moonbase.moonbeam.network",
      chainId: 1287,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },

    // Moonbeam Mainnet — Polkadot EVM-compatible mainnet
    moonbeam: {
      type: 'http',
      url: "https://rpc.api.moonbeam.network",
      chainId: 1284,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },

    // Moonriver — Kusama EVM-compatible (canary network)
    moonriver: {
      type: 'http',
      url: "https://rpc.api.moonriver.moonbeam.network",
      chainId: 1285,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};