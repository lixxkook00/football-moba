import React , { useState } from 'react'
import './FootballPlayerCart.scss'

import { handleBuy } from '../../utils/handleMarketplace'

import LoadingScreen from '../../pages/LoadingScreen'
import FormatAmount from '../../components/FormatAmount'
import { useNavigate } from 'react-router-dom'

export default function MarketplaceCart({data}) {
  
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const buy = async (id) => {
    setLoading(true)
    const result = await handleBuy(id,setLoading,navigate)
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

        <div className={`football-player-cart-rarity text-center rarity-${data?.rarity}`}>
          {
            data?.rarity
          }
        </div>

        <div className="marketplace-cart-date">
          {
            data.create_at.split('T')[0]
          }
        </div>

         <div className="marketplace-cart-date">
          {
            data.create_at.split('T')[1].split(".000Z")[0]
          }
        </div>

        <div className="marketplace-cart-price centering" onClick={() => buy(data?.id)}>
          <span className="value-price">
            <FormatAmount amount={data?.price} />OBA
          </span>
        </div>
      </div>
    </div>
  )
}
