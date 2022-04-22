import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-contract-sizer';
import './tasks';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.5.17',
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  namedAccounts: {
    deployer: 0,
    poster: '0xd830A7413CB25FEe57f8115CD64E565B0Be466c3',
    admin: {
      hardhat: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
      mainnet: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
      avalanche: '0xf3472A93B94A17dC20F9Dc9D0D48De42FfbD14f4',
    },
    guardian: {
      hardhat: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
      mainnet: '0x9d960dAe0639C95a0C822C9d7769d19d30A430Aa',
      avalanche: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
    },
    timelock: {
      mainnet: '0x5b12f04e22384B01f42Ed14Da23eAcd21f14AC17',
    },
    nativeUsdAggregator: {
      hardhat: '0x5498BB86BC934c8D34FDA08E81D444153d0D06aD',
      avalanche: '0x0A77230d17318075983913bC2145DB16C7366156',
    },
    wrappedNative: {
      avalanche: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_TOKEN}`
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    polygon: {
      url: 'https://polygon-rpc.com',
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    fantom: {
      url: 'https://rpc.ftm.tools/',
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    }
  }
};

export default config;
