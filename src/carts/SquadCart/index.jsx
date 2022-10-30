import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SquadCart({item}) {

  const [currentID,setCrrentID] = useState(0)

  return (
    <div 
      className="col-lg-3 col-md-4 col-6" 
    >
      <div className={`marketplace-cart football-player-cart--${item.rarity}`} >

        <div className="football-player-cart-infor">
            <div className="football-player-cart-energy green">
                <i className="fa-solid fa-droplet"></i>
                {item.durability}
            </div>

            <div className="football-player-cart-energy">
              <i className="fa-solid fa-bolt"></i>
              {item.energy}
            </div>
        </div>

        <div className="football-player-cart-img">
          <img src={`./images/${item.image}`} alt="" />
        </div>

        <div className={`football-player-cart-rarity text-center rarity-${item.rarity}`}>
          <img src={`./images/${item.rarity}-button.png`} alt="" />
        </div>

        <div className="healing-btn">
          Healing
        </div>
      </div>
    </div>
  )
}
