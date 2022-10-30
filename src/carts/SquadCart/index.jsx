import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleHealingPlayers } from '../../utils/handlePlayers'

export default function SquadCart({item,setLoading,navigate}) {

  const [currentID,setCrrentID] = useState(0)
  
  const healing = async (id) => {
    const result = await handleHealingPlayers(id,setLoading,navigate)
  }

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

        <div className="healing-btn" onClick={() => healing(item.id)}>
          Healing
        </div>
      </div>
    </div>
  )
}
