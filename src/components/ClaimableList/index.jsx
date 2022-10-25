import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../pages/LoadingScreen';
import { handleClaimStake } from '../../utils/handleStaking';
import { handleGetUserTransaction } from '../../utils/handleTransaction';
import FormatAmount from '../FormatAmount'

export default function ClaimableList({data}) {
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const getDateLeft = (expired_day,current_day) => {
        const timeLeft = ((new Date(expired_day).getTime()) - new Date(current_day))/86400000

        if(timeLeft<0){
            return -1
        }else if(timeLeft<1){
            return "less than 1"
        }else{
            return timeLeft.toFixed(0)
        }
    }

    const claimTicket = async (ticketID) => {
        // console.log("ticketID", ticketID)
        setLoading(true)
        const result = await handleClaimStake(setLoading,navigate,ticketID)
        // console.log(result)
    }

    return (
        <div className="history block">

            <LoadingScreen state={loading} />
            <div className="history-title title">
                History
            </div>
            <div className="history-wrapper">
                {
                    data !== [] 
                    ?
                    <table className="primary-table">
                        <tbody>
                            <tr className="primary-btn-bg">
                                <th>
                                    Claimable
                                </th>
                                <th>
                                    Date Stake
                                </th>
                                <th>
                                    Token Stake
                                </th>
                                <th>
                                    Status
                                </th>
                            </tr>
                                {
                                    data?.map((item, idx) => {
                                    const newDate = (item.stake_at).split("T")[0]

                                    const timeLeft = getDateLeft(item.expired_day,item.current_day)

                                    return (
                                        <tr key={idx}>
                                            <td>
                                                <span className="value-complete">
                                                    <FormatAmount amount={item.debit} />
                                                </span>
                                                <span className="value">
                                                OBA
                                                </span>
                                            </td>

                                            <td>
                                                <span className="date-left">
                                                    {newDate}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="value">
                                                    <FormatAmount amount={item.token_stake} />
                                                    OBA
                                                </span>
                                            </td>

                                            <td>
                                                <span className="date-left">
                                                    {
                                                        timeLeft === -1
                                                        ?
                                                            <div className="primary-button" onClick={() => claimTicket(item.id)}>
                                                                Claim
                                                            </div>
                                                        :
                                                        `${timeLeft} day left`
                                                    }
                                                    
                                                </span>
                                            </td>
                                        </tr>

                                    )}
                                )
                                }
                        </tbody>
                    </table>
                    :
                    <div className="text-center">
                        no data
                    </div>
                }
                
            </div>
        </div>
    )
}
