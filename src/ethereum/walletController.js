import { connectWallet } from "./connectWallet";
import { contractAddress, contractToken, systemAddress } from "./contractGenerator";
import { Web3Provider } from "./web3Provider";


export const depositToWallet = async (amount) => {
    try {
        await connectWallet();
        const web3 = await Web3Provider();
        const tokenContract = await contractToken();
        const data = await tokenContract.methods['transfer'](systemAddress,web3.utils.toWei(amount.toString(), 'ether')).encodeABI();
        const transactionParameters = {
            // nonce: '0x00', // ignored by MetaMask
            // // gasPrice: '20000', // customizable by user during MetaMask confirmation.
            // gas: "0x50000",
            to: contractAddress, // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            // value: web3.utils.toHex(number), // Only required to send ether to the recipient from the initiating external account.
            data: data,
            chainId: window.ethereum.chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        return txHash;

    }
    catch (error) {
        if(error?.message) { 
            alert(error.message);
        }
        else { 
            alert(error);
        }
        window.location.reload();
    }
}

export const FIFABalance = async() => { 
    try {
        await connectWallet();
        const web3 = await Web3Provider();
        const tokenContract = await contractToken();
        const balance = await tokenContract.methods['balanceOf'](window.ethereum.selectedAddress).call();
        return web3.utils.fromWei(balance.toString(),'ether');
    }
    catch (error) {
        // if(error?.message) { 
        //     alert(error.message);
        // }
        // else { 
        //     alert(error);
        // }
        // window.location.reload();
    }
}