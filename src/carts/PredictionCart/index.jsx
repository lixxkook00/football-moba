import React from 'react'
import './PredictionCart.scss'

export default function PredictionCart() {
  return (
    <div className="prediction-cart block">
        <div className="prediction-cart-time text-center">
            12h - 20/10/2022
        </div>
        <div className="prediction-cart-wrapper">
            <div className="prediction-cart-team">
                <div className="prediction-cart-flag">
                    <img src="./images/JP.png" alt="" />
                </div>
                <div className="prediction-cart-num block-red">
                    0
                </div>
            </div>

            <div className="prediction-cart-vs centering">
                <img src="./images/vs.png" alt="" />
            </div>

            <div className="prediction-cart-team">
                <div className="prediction-cart-flag">
                    <img src="./images/France.png" alt="" />
                </div>
                <div className="prediction-cart-num block-red">
                    0
                </div>
            </div>
        </div>
        
    </div>
  )
}
