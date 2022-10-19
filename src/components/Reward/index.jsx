import React,{useState} from 'react'
import './Reward.scss'

import FormatAmount from '../FormatAmount'
import {handleGetInforUser} from '../../utils/handleUsers'
import { useNavigate } from 'react-router-dom'
import { FIFABalance } from '../../ethereum/walletController'

export default function Reward({setShowModalClaim,setShowModalDeposit}) {

    const [walletAddress,setWalletAddress] = useState(sessionStorage.getItem('addressWallet'))
    const [balance,setBalance] = useState(0)
    const [balanceToken,setBalanceToken] = useState(0);
    
    let navigate = useNavigate()

    const getInfor = async () => {
        const result = await handleGetInforUser(navigate)
        const tokenBalance = await FIFABalance();
        await setBalanceToken(tokenBalance)
        await setBalance(result.data.token)
    }

    if(sessionStorage.getItem('token')){
        getInfor()
    }

  return (
        <div className="reward">
            <div className="block">
                <div className="title text-center">
                    Wallet
                </div>
            
                <div className="reward-item">
                    <div className="reward-title">
                        Total Balance
                    </div>
                    <div className="reward-value value">
                        <FormatAmount amount={balance}/> KICKS
                    </div>
                </div>

                <div className="reward-item">
                    <div className="reward-title">
                        {/* Total Rewards */}
                    </div>
                    <div className="reward-value value">
                        {/* <FormatAmount amount={100000}/> FIFA */}
                    </div>
                </div>

                {/* <div className="reward-item">
                    <div className="reward-title">
                        Claimable Rewards
                    </div>
                    <div className="reward-value value">
                        <FormatAmount amount={600000000}/> FIFA
                    </div>
                </div> */}

                <div className="centering">
                    <div className="primary-button" onClick={() => setShowModalClaim(true)}>
                        Claim
                    </div>
                </div>

                <div className="centering mt-2">
                    <div className="primary-button" onClick={() => setShowModalDeposit(true)}>
                        Deposit
                    </div>
                </div>
            </div>
        </div>
    )
}
