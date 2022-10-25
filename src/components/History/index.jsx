import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleGetUserTransaction } from '../../utils/handleTransaction';
import FormatAmount from '../FormatAmount'
import './History.scss'

export default function History() {
    const [txHistory, setTxHistory] = useState([]);

    let navigate = useNavigate()


    useEffect(() => {
        async function load() {
            const listTx = await handleGetUserTransaction(navigate);
            if (listTx) {
                // console.log(listTx);
                await setTxHistory(listTx.data);
            }
        }
        load()
    }, [])


    // useEffect(() => {
    //     // console.log(txHistory)

    // }, [txHistory])


    return (
        <div className="history block">
            <div className="history-title title">
                History
            </div>
            <div className="history-wrapper">
                <table className="primary-table">
                    <tbody>
                        <tr className="primary-btn-bg">
                            <th>
                                Reward
                            </th>
                            <th>
                                From
                            </th>
                            <th>
                                Date
                            </th>
                        </tr>
                        {
                            txHistory ?
                                txHistory?.map((item, idx) => {
                                    // console.log('item',item)
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                {
                                                    item.method == "receive"
                                                        ?
                                                        <span className="value-complete">
                                                            + <FormatAmount amount={item.amount} />
                                                        </span>
                                                        :
                                                        <span className="value-fail">
                                                            - <FormatAmount amount={item.amount} />
                                                        </span>

                                                }

                                                OBA
                                            </td>

                                            <td>
                                                <span className="transaction">
                                                    {item.tx_type}
                                                </span>
                                            </td>

                                            <td>
                                                {item.create_at}
                                            </td>
                                        </tr>

                                    )
                                })
                                :
                                <tr>
                                    <td>
                                        <span className="value-complete">
                                            + <FormatAmount amount={50} />
                                        </span>

                                        OBA
                                    </td>

                                    <td>
                                        <span className="transaction">
                                            Match
                                        </span>
                                    </td>

                                    <td>
                                        11:30-22/7/2022
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
