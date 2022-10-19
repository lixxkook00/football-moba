import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../../pages/LoadingScreen'
import { handleCancelBuyPlayer } from '../../utils/handleMarketplace'
import './OnMarketCart.scss'

export default function OnMarketCart({item,setCurrentCart,currentCart}) {

  const [loading,setLoading] = useState(false)

  let navigate = useNavigate()

  const cancel = async (id) => {
    setLoading(true)
    const result = await handleCancelBuyPlayer(id,setLoading,navigate)
  }

  return (
    <div 
      className="col-lg-3 col-md-4 col-6" 
      onClick={() => setCurrentCart(item.id)}
    >

      <LoadingScreen state={loading} />
      <div className={`football-player-cart-injured football-player-cart--${item.rarity} ${currentCart===item.id ? "active" : ""}`} >

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

        <div className={`football-player-cart-rarity text-center`}>
          <img src={`./images/${item.rarity}-button.png`} alt="" />
        </div>

        <div className="primary-cancel" onClick={() => cancel(item.id)}>
          Cancel
        </div>
      </div>
    </div>
  )
}
