import React, { useEffect, useState } from 'react';
import './ClaimModal.scss'

import LoadingScreen from '../../pages/LoadingScreen'
import {handleWidthDraw} from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { handleStake } from '../../utils/handleStaking';
import { handleGetServerConfig } from '../../utils/handleServerConfig';

export default function StakeModal({showModalStake,setShowModalStake}) {
    const [loading,setLoading] = useState(false)

    const stake = async () => {
        const result = await handleStake(setLoading,navigate)
        if(result !== "") {
            setShowModalStake(false)
        }
        // console.log(result)
    }

    const navigate = useNavigate()

    const handleClose = () => setShowModalStake(false);

    // get stake free player from server
    const [stakeHire,setStakeHire] = useState(0)

    const getServerConfig = async () => {
        const result = await handleGetServerConfig(navigate,setLoading)
        await result.data.map((item) => {
            if(item.config_name==="stake_price"){
                setStakeHire(item.config_value)
            }
        })
    }

    useEffect(() => {
        getServerConfig()
    },[])

    return (
        <div className="claim-modal">

            <LoadingScreen state={loading} />

            <Modal show={showModalStake} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        Stake
                    </div>

                    <div className="text-center mt-2">
                        Fee {stakeHire} Kicks
                    </div>
                    
                    <div className="d-flex mt-3">
                        <div 
                            className="primary-button" 
                            onClick={() => handleClose()}
                        >
                            CANCEL
                        </div>

                        <div 
                            className="primary-button" 
                            onClick={() => stake()}
                        >
                            STAKE
                        </div>
                    </div>
                </div>
                <div 
                    className="btn-close" 
                    onClick={() => handleClose()}
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </Modal>
        </div>
    )
}
