import React, { useEffect, useState } from 'react';
import './ClaimModal.scss'

import LoadingScreen from '../../pages/LoadingScreen'
import { handleWidthDeposit } from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { FIFABalance } from '../../ethereum/walletController';


export default function DepositModal({ showModalDeposit, setShowModalDeposit }) {
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => setShowModalDeposit(false);

    const widthDraw = async () => {
        setLoading(true)
        const result = await handleWidthDeposit(amount, setLoading, navigate, handleClose)
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
