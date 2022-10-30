import React, { useState } from 'react'
import './Header.scss'

import FormatAmount from '../FormatAmount'

import {handleGetInforUser, handleLogout} from '../../utils/handleUsers'
import { useNavigate } from 'react-router-dom'
import { FIFABalance } from '../../ethereum/walletController'

export default function Header() {

    const [walletAddress,setWalletAddress] = useState(sessionStorage.getItem('addressWallet'))
    const [balance,setBalance] = useState(0)
    const [balanceToken,setBalanceToken] = useState(0);
    
    let navigate = useNavigate()

    const getInfor = async () => {
        const result = await handleGetInforUser(navigate)
        const tokenBalance = await FIFABalance();
        await setBalanceToken(tokenBalance)
        if(result !== ""){
            await setBalance(result?.data?.token)
        }
    }

    if(sessionStorage.getItem('token')){
        getInfor()
    }

    return (
        <div className="container">
            <header className="header row">
                <div className="col-lg-3 col-md-12">
                    <div className="d-flex align-items-center">
                        <div className="header-item">
                            <div className="header-item-icon">
                                <img src="./images/token-kichs.png" alt="" />
                            </div>
                            <div className="header-item-value text-overflow value">
                                <FormatAmount amount={balance ? balance : 0}/>
                            </div>
                        </div>

                        <div className="header-logout centering hidden-m-t" onClick={() => handleLogout(navigate)}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
