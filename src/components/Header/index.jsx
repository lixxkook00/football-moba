import React, { useState } from 'react'
import './Header.scss'

import FormatAmount from '../FormatAmount'

import {handleGetInforUser} from '../../utils/handleUsers'
import { useNavigate } from 'react-router-dom'
import { FIFABalance } from '../../ethereum/walletController'

export default function Header() {

    const [walletAddress,setWalletAddress] = useState(sessionStorage.getItem('addressWallet'))
    const [balance,setBalance] = useState(0)
    const [balanceToken,setBalanceToken] = useState(0);
    const [ticket,setTicket] = useState(0);
    
    let navigate = useNavigate()

    const getInfor = async () => {
        const result = await handleGetInforUser(navigate)
        const tokenBalance = await FIFABalance();
        await setBalanceToken(tokenBalance)
        if(result !== ""){
            await setBalance(result?.data?.token)
            await setTicket(result?.data?.special_ticket)
        }
    }

    if(sessionStorage.getItem('token')){
        getInfor()
    }

    return (
        <div className="container">
            <header className="header row">
                <div className="col-lg-3 col-md-12  hidden-m-t">    
                    <div className="header-item">
                        <div className="header-item-icon">
                            <img src="./images/wallet.png" alt="" />
                        </div>
                        <div className="header-item-value wallet-address">
                            {walletAddress}
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12">
                    <div className="header-item">
                        <div className="header-item-icon">
                            <img src="./images/sticket.png" alt="" />
                        </div>
                        <div className="header-item-value text-overflow value">
                            {ticket}
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12">
                    <div className="header-item">
                        <div className="header-item-icon">
                            <img src="./images/token-kicks-red.png" alt="" />
                        </div>
                        <div className="header-item-value text-overflow value">
                            <FormatAmount amount={balance}/>
                        </div>
                    </div>
                </div>

    
                <div className="col-lg-3 col-md-12">
                    <div className="header-item">
                        <div className="header-item-icon">
                            <img src="./images/token-kichs.png" alt="" />
                        </div>
                        <div className="header-item-value text-overflow value">
                            <FormatAmount amount={balanceToken ? balanceToken : 0}/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
