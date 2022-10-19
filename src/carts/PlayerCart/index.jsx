import React from 'react'
import './PlayerCart.scss'

export default function PlayerCart({type,level,hirePlayer}) {


  return (
    <div 
        className="player-cart block"
        style={{background: `#fff url(./images/${type}-bg.png) center center/contain no-repeat`}}
    >
        <div className="player-cart-level centering">
            <span className="value">
                {level}
            </span>
        </div>

        <div className="player-cart-img centering">
            <img src={`./images/${type}.png`} alt="" />
        </div>

        <div className="player-cart-hire centering " onClick={() => hirePlayer(type)}>
            <div className="primary-button">
                Hire Player
            </div>
        </div>
    </div>
  )
}
