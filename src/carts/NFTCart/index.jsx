import React from 'react'
import './NFTCart.scss'

export default function NFTCart({quantity}) {
  return (
    <div className="nft-cart block">
        <div className="nft-cart-content">
            <div className="nft-cart-title">
                NFTs
            </div>
            <div className="nft-cart-value">
                <span className="value">
                    {quantity}
                </span>
            </div>
        </div>

        <div className="nft-cart-img">
            <img src="./images/1.png" alt="" />
        </div>

        <div className="nft-cart-img">
            <img src="./images/2.png" alt="" />
        </div>

        <div className="nft-cart-img">
            <img src="./images/3.png" alt="" />
        </div>

        <div className="nft-cart-img">
            <img src="./images/4.png" alt="" />
        </div>
    </div>
  )
}
