import Web3 from "web3";
// import {getServerConfig} from "../Api/serverConfig"

export const Web3Provider = async () => {
    const rpcUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545';
    //    const {rpcUrl} = await getServerConfig();
    // console.log('rpcUrl',rpcUrl);
    const result = new Web3(rpcUrl);
    return result;
}