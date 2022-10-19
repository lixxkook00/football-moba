import React, { useState } from 'react';
import './ClaimModal.scss'

import Modal from 'react-bootstrap/Modal';

export default function ClaimModal({showModalClaim,setShowModalClaim}) {

    const handleClose = () => setShowModalClaim(false);

    return (
        <div className="claim-modal">
            <Modal show={showModalClaim} onHide={handleClose}>
                <div className="modal-custom">
                    <div className="modal-custom-title text-center underline-block">
                        AMOUNT
                    </div>

                    <div className="modal-custom-content">
                        <div className="modal-custom-input d-flex">
                            <input type="text" placeholder="0"/>
                            <div className="modal-custom-btn centering">
                                <img src="./images/max.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="primary-button">
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
