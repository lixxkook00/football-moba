import React, { useEffect, useState } from 'react';

import LoadingScreen from '../../pages/LoadingScreen'
import { handleWidthDraw } from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import FootballPlayerCart from '../../carts/FootballPlayerCart';

export default function KickResultModal({showModalKickResult,setShowModalKickResult,kickData,id}) {

    const navigate = useNavigate()

    const handleClose = () => {
        window.location.href = `/kick?id=${id}`
        setShowModalKickResult(false);
    };

    return (
        <div className="claim-modal">
            <Modal show={showModalKickResult} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        PLAYER
                    </div>

                    <div className="centering">
                        <div className="result-kick">
                            <div className="result-kick-title">
                                {/* {kickData.msg} */}
                            </div>

                            {
                                kickData.result
                                    ?
                                    <div className="result-kick-boolean text-center value-complete">
                                        GOAL
                                    </div>
                                    :
                                    <div className="result-kick-boolean text-center value-fail">
                                        NO GOAL
                                    </div>

                            }


                            <div className="result-kick-reward value-gray text-center">
                                +{kickData.reward} OBA
                            </div>
                        </div>
                    </div>

                    <div className="primary-button" onClick={() => handleClose()}>
                        CLAIM
                    </div>
                </div>
                <div className="btn-close" onClick={() => handleClose()}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </Modal>
        </div>
    )
}
