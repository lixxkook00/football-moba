import React, { useEffect, useState } from 'react';
import './ClaimModal.scss'

import LoadingScreen from '../../pages/LoadingScreen'
import { handleWidthDeposit } from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { connectWallet, requestPermission } from '../../ethereum/connectWallet';
import { FIFABalance } from '../../ethereum/walletController';


export default function DepositModal({ showModalDeposit, setShowModalDeposit }) {

    const [account,setAccount] = useState("");
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => setShowModalDeposit(false);

    useEffect(() => { 
        async function load() { 
            const accountConnect = await connectWallet();
            if(accountConnect) { 
                // console.log('web3',window.ethereum);
                setAccount(accountConnect)
            }
        }
        load();
    },[account]);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', async function (accounts) {
                setAccount(window.ethereum.selectedAddress);
            })
        }
    },[])


    const widthDraw = async () => {
        setLoading(true)
        const result = await handleWidthDeposit(amount, setLoading, navigate, handleClose)
    }

    const handleAccountChange = async () => { 
        await requestPermission();
    }

    // get balancetoken
    const getBalance = async () => {
        const result = await FIFABalance()
        setAmount(parseFloat(result).toFixed(2))
    }


    return (
        <div className="claim-modal">
            <LoadingScreen state={loading} />
            <Modal show={showModalDeposit} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        DEPOSIT
                    </div>

                    <div className="modal-custom-content">
                        <div className="modal-custom-input d-flex">
                            <span className="value ml-3">
                                Wallet : 
                            </span>
                            <input
                                type="number"
                                placeholder={account}
                                disabled
                            // value={''}
                            // onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="modal-custom-btn centering" onClick={handleAccountChange} >
                                CHANGE
                            </div>
                        </div>
                    </div>


                    <div className="modal-custom-content">
                        <div className="modal-custom-input d-flex">
                            <input
                                type="number"
                                placeholder="0"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="modal-custom-btn centering" onClick={() => getBalance()}>
                                MAX
                            </div>
                        </div>
                    </div>

                    <div
                        className="primary-button"
                        onClick={
                            () => {
                                widthDraw()
                                setAmount("")
                            }
                        }
                    >
                        DEPOSIT
                    </div>
                </div>
                <div
                    className="btn-close"
                    onClick={
                        () => {
                            handleClose()
                            setAmount("")
                        }
                    }
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </Modal>
        </div>
    )
}
