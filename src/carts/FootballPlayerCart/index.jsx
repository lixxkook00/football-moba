import React, { useState } from 'react'
import './FootballPlayerCart.scss'
export default function FootballPlayerCart({item,setCurrentCart,currentCart}) {

  const [currentID,setCrrentID] = useState(0)

  return (
    <div 
      className="col-lg-3 col-md-4 col-6" 
      onClick={() => setCurrentCart(item.id)}
    >
      <div className={`football-player-cart football-player-cart--${item.rarity} ${currentCart===item.id ? "active" : ""}`} >

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
        
      </div>
    </div>
  )
}
