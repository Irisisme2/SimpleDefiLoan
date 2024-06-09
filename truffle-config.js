module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rsktestnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://public-node.testnet.rsk.co"),
      network_id: 31,
      gas: 5500000,
      gasPrice: 60000000
    }
  }
};