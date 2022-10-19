import React, { useEffect, useState } from 'react';
import './ClaimModal.scss'

import LoadingScreen from '../../pages/LoadingScreen'
import {handleWidthDraw} from '../../utils/handleWallet';

import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import {handleSell} from '../../utils/handleMarketplace'

export default function SellModal({showModalSell,setShowModalSell,currentCart}) {

    const [amount,setAmount] = useState(0)

    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => setShowModalSell(false);
 
    const sell = async (id) => {
        const result = await handleSell(id,amount,setLoading,navigate)
    }

    return (
        <div className="claim-modal">
            <LoadingScreen state={loading} />
            <Modal show={showModalSell} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        Sell Item
                    </div>

                    <div className="centering mt-4">
                        <div className={`football-player-cart football-player-cart--${currentCart.rarity} `} >
                            <div className="football-player-cart-infor">
                                <div className="football-player-cart-energy green">
                                    <i className="fa-solid fa-droplet"></i>
                                    {currentCart.durability}
                                </div>

                                <div className="football-player-cart-energy">
                                <i className="fa-solid fa-bolt"></i>
                                {currentCart.energy}
                                </div>
                            </div>

                            <div className="football-player-cart-img">
                            <img src={`./images/${currentCart.image}`} alt="" />
                            </div>

                            <div className={`football-player-cart-rarity text-center rarity-${currentCart.rarity}`}>
                            {
                                currentCart.rarity
                            }
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
                        </div>
                    </div>
                    
                    <div 
                        className="primary-button" 
                        onClick={() => sell(currentCart.id) }>
                        SELL
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
