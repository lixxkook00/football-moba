import React , { useState } from 'react'
import './FootballPlayerCart.scss'

import { handleBuy } from '../../utils/handleMarketplace'

import LoadingScreen from '../../pages/LoadingScreen'
import FormatAmount from '../../components/FormatAmount'
import { useNavigate } from 'react-router-dom'

export default function WorkingCart({data,setShowModalSell,setCurrentCart}) {
  
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const sell = async () => {
    setCurrentCart(data)
    setShowModalSell(true)
  }

  return (
    <div className="col-lg-3 col-md-4 col-6">
      <LoadingScreen state={loading} />
      <div className={`marketplace-cart football-player-cart--${data?.rarity}`} >

        <div className="football-player-cart-infor">
            <div className="football-player-cart-energy green">
                <i className="fa-solid fa-droplet"></i>
                {data?.durability}
            </div>

            <div className="football-player-cart-energy">
              <i className="fa-solid fa-bolt"></i>
              {data?.energy}
            </div>
        </div>

         <div className="football-player-cart-img">
          <img src={`./images/${data?.image}`} alt="" />
        </div>

        <div className="football-player-cart-img">
          <img src={`./images/${data?.rarity}-button.png`} alt="" />
        </div>

        {/* <div className="sell-button centering" onClick={() => sell()}>
          <span className="">
            SELL
          </span>
        </div> */}
      </div>
    </div>
  )
}
