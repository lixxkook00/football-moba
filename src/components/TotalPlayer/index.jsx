import React from 'react'

export default function TotalPlayer({value}) {
  return (
    <div className="player-total block">
        <div className="nft-cart-title">
            Total Players :
        </div>
        <div className="nft-cart-value">
            <span className="value">
                {value}
            </span>
        </div>
    </div>
  )
}
