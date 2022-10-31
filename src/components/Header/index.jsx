import React, { useEffect, useState } from 'react'
import './Header.scss'

import FormatAmount from '../FormatAmount'

import {handleGetInforUser, handleLogout} from '../../utils/handleUsers'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const [walletAddress,setWalletAddress] = useState(sessionStorage.getItem('addressWallet'))
    const [infor,setInfor] = useState(0)
    const [balanceToken,setBalanceToken] = useState(0);
    
    let navigate = useNavigate()

    const getInfor = async () => {
        const result = await handleGetInforUser(navigate)
        // const tokenBalance = await FIFABalance();
        // await setBalanceToken(tokenBalance)
        if(result !== ""){
            await setInfor(result?.data)
        }
    }

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            getInfor()
        }
    },[])

    return (
        <div className="container">
            <header className="header row">
                <div className="col-lg-2 col-md-12">
                    <div className="d-flex align-items-center">
                        <div className="header-item justify-content-between">
                            <div className="d-flex align-items-center h-100">
                                <div className="header-item-icon">
                                   <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="text-overflow value">
                                    {
                                        infor?.username
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="d-flex align-items-center">
                        <div className="header-item justify-content-between">
                            <div className="d-flex align-items-center h-100">
                                <div className="header-item-icon">
                                    <img src="./images/token-kichs.png" alt="" />
                                </div>
                                <div className="header-item-value text-overflow value">
                                    <FormatAmount amount={infor?.token ? infor?.token : 0}/>
                                </div>
                            </div>
                            <Link to='/wallet' className="header-item-plus">
                                <i className="fa-solid fa-circle-plus"></i>
                            </Link>
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
