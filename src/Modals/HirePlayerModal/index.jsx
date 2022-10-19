import React, { useEffect, useState } from 'react';

import LoadingScreen from '../../pages/LoadingScreen'
import {handleWidthDraw} from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import FootballPlayerCart from '../../carts/FootballPlayerCart';

export default function HirePlayerModal({showModalHirePlayer,setShowModalHirePlayer,data}) {

    const navigate = useNavigate()

    const handleClose = () => {
        setShowModalHirePlayer(false);
         window.location.reload()
    }    

    return (
        <div className="claim-modal">
            <Modal show={showModalHirePlayer} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        PLAYER
                    </div>

                    <div className="centering">
                        <div className={`football-player-cart football-player-cart--${data?.rarity} mt-3 mb-2`} >
                            <div className="football-player-cart-energy">
                            <i className="fa-solid fa-bolt"></i>
                            {data?.energy}
                            </div>

                            <div className="football-player-cart-img">
                                <img src={`./images/${data?.image}`} alt="" />
                            </div>

                            <div className="football-player-cart-name text-center">
                            {
                                data?.role === "goal_keeper"
                                ?
                                "Goal keeper"
                                :
                                data?.role
                            }
                            </div>

                            <div className={`football-player-cart-rarity text-center rarity-${data?.rarity}`}>
                                <img src={`./images/${data?.rarity}-button.png`} alt="" />
                            </div>
                        </div>
                    </div>
                        
                    <div className="primary-button" onClick={() => window.location.reload()}>
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
