import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 1115;

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;




const core = {
  chainId: 1115,
  name: 'Core',
  currency: 'tCORE',
  explorerUrl: 'https://scan.test.btcs.network/',
  rpcUrl: import.meta.env.VITE_INFURA_RPC
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [core],
  projectId: import.meta.env.VITE_PROJECT_ID,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#427142',
    '--w3m-color-mix-strength': '40',
    '--w3m-border-radius-master': '10'
  }
})
