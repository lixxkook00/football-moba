import Web3 from 'web3'
import { Web3Provider } from './web3Provider.js'

export async function listenEvent() {
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', async function (accounts) {
      window.location.reload()
    })
    window.ethereum.on('chainChanged', (chainId) => {
      // Handle the new chain.
      // Correctly handling chain changes can be complicated.
      // We recommend reloading the page unless you have good reason not to.
      window.location.reload()
    })
  }
}

export async function connectWallet() {
  if (window.ethereum) {
    try { 
      const web3 = await Web3Provider();
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const metamaskChainId = web3.utils.toBN(window.ethereum.chainId).toNumber()
      if (window.ethereum.selectedAddress) {
        return window.ethereum.selectedAddress;
      }
      return false;
    }
    catch(e) { 
      return false;
    }
  }
  else { 
    return false;
  }
}

export async function requestPermission() { 
  if (window.ethereum) {
    try { 
      const web3 = await Web3Provider();
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {}
          }
        ]
      });
      // const metamaskChainId = web3.utils.toBN(window.ethereum.chainId).toNumber()
      if (window.ethereum.selectedAddress) {
        return window.ethereum.selectedAddress;
      }
      return false;;
    }
    catch(e) { 
      return false;
    }
  }
  else { 
    return false;
  }
}