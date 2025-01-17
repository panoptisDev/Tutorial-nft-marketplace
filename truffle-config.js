//PanoptisDev Truffle-config
require('dotenv').config();

const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 1337, //ganache
      network_id: "*" // Match any network id
    },
    polygon: {
      provider: new HDWalletProvider(mnemonic, process.env.POLYGON_RPC),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: new HDWalletProvider(mnemonic, process.env.POLYGON_MUMBAI_RPC),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    telos: {
      provider: new HDWalletProvider(mnemonic, process.env.TELOS_RPC),
      network_id: 40,
      confirmations: 4,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    telostest: {
      provider: new HDWalletProvider(mnemonic, process.env.TELOS_TEST_RPC),
      network_id: 41,
      confirmations: 4,
      timeoutBlocks: 2000,
      skipDryRun: true
    }

  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    polygonscan: process.env.POLYGONSCAN_API_KEY,
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8.3",
      optimizer: {
        enabled: true,
        runs: 200
      },
      // evmVersion: "petersburg"
    }
  }
}
