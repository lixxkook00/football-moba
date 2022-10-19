import React, { useEffect, useState } from 'react';
import './ClaimModal.scss'

import LoadingScreen from '../../pages/LoadingScreen'
import {handleWidthDraw} from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { connectWallet, requestPermission } from '../../ethereum/connectWallet';
import { handleGetServerConfig } from '../../utils/handleServerConfig';

import { confirmAlert ,onClose } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import FormatAmount from '../../components/FormatAmount';

export default function ClaimModal({showModalClaim,setShowModalClaim,totalToken}) {

    const [amount,setAmount] = useState(0);
    const [account,setAccount] = useState("");
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => setShowModalClaim(false);
    
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
        const result = await handleWidthDraw(amount,setLoading,navigate,handleClose)
    }

    const handleAccountChange = async () => { 
        await requestPermission();
    }

    // get free hire player from server

    const calcClaimValue = (price,percent,max) =>{
        if(price>max){
            return "Amount larger than maximum claimable"
        }else{
            return price*(parseInt(percent)/100)
        }
    } 

    const [feeClaim,setFreeClaim] = useState(0)

    const getServerConfig = async () => {
        const result = await handleGetServerConfig(navigate,setLoading)
        await result.data.map((item) => {
            if(item.config_name==="claim_fee"){
                setFreeClaim(item.config_value)
            }
        })
    }

    useEffect(() => {
        getServerConfig()
    },[])

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
                            <FormatAmount amount={calcClaimValue(amount,feeClaim,totalToken)} />
                        </span>
                        <span className="value">
                            KICKS
                        </span>
                        with Fee is &nbsp;
                        <span className="value">
                            {
                                feeClaim
                            }
                            %
                        </span>
                    </div>

                    <div className="primary-button mt-1" onClick={() => onClose()}>
                        Cancel
                    </div>
                    <div className="primary-button mt-1" onClick={() => widthDraw()}>
                        Claim
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
                            <div className="modal-custom-btn centering" onClick={() => setAmount(totalToken)}>
                                MAX
                            </div>
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
