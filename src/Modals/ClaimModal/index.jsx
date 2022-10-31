import React, { useEffect, useState } from 'react';
import './ClaimModal.scss'

import LoadingScreen from '../../pages/LoadingScreen'
import {handleWidthDraw} from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import { confirmAlert ,onClose } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import FormatAmount from '../../components/FormatAmount';

export default function ClaimModal({showModalClaim,setShowModalClaim,totalToken}) {

    const [amount,setAmount] = useState(0);
    const [faCode,setFaCode] = useState("");
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => {
        setShowModalClaim(false);
        setAmount("")
        setFaCode("")
    }
    
    const widthDraw = async () => {
        setLoading(true)
        const result = await handleWidthDraw(amount,setLoading,navigate,handleClose)
    }
    // get free hire player from server

    const calcClaimValue = (price,percent,max) =>{
        if(parseInt(price)>max){
            return "Amount larger than maximum claimable"
        }else{
            return parseInt(price)*(parseInt(percent)/100)
        }
    } 

    // const [feeClaim,setFreeClaim] = useState(50)

    // handle claimable
    const claim = () => {
        confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='custom-ui'>
                    <div className='custom-ui-title'>Confirm Claim</div>

                    <div className='custom-ui-desc'>
                        Claimable is &nbsp; 
                        <span className="value">
                            {
                                isNaN(calcClaimValue(amount,100,totalToken))
                                ?
                                    calcClaimValue(amount,100,totalToken)
                                :
                                <FormatAmount amount={calcClaimValue(amount,100,totalToken)} />
                            }
                        </span>
                        <span className="value">
                            OBA
                        </span>
                        {/* with Fee is &nbsp;
                        <span className="value">
                            {
                                feeClaim
                            }
                            %
                        </span> */}
                    </div>

                    <div className="primary-button mt-1" onClick={() => widthDraw()}>
                        Claim
                    </div>
                    
                    <div 
                        className="primary-button mt-1" 
                        onClick={() => {
                            onClose()
                        }}
                    >
                        Cancel
                    </div>
                </div>
                );
            }
        });
    };

    return (
        <div className="claim-modal">
            <LoadingScreen state={loading} />
            <Modal show={showModalClaim} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        AMOUNT
                    </div>

                    <div className="modal-custom-content">
                        <div className="modal-custom-input d-flex">
                            <input 
                                type="number" 
                                placeholder="0"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="modal-custom-btn centering" onClick={() => setAmount(totalToken)}>
                                Max
                            </div>
                        </div>
                    </div>

                    <div className="modal-custom-content">
                        <div className="modal-custom-input d-flex">
                            <input 
                                type="text" 
                                placeholder="2FA Code"
                                value={faCode}
                                onChange={(e) => setFaCode(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div 
                        className="primary-button" 
                        onClick={
                            () => {
                                claim()
                                // setAmount("")
                            }
                        }>
                        CLAIM
                    </div>
                </div>
                <div 
                    className="btn-close" 
                    onClick={
                        () => {
                            handleClose()
                        }
                    }
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </Modal>
        </div>
    )
}
