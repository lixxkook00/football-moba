import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FootballPlayerCart from '../../carts/FootballPlayerCart'
import OnMarketCart from '../../carts/OnMarketCart'
import PlayerCart from '../../carts/PlayerCart'
import CommingSoonPage from '../../pages/CommingSoonPage'
import LoadingScreen from '../../pages/LoadingScreen'

import { handleHealingPlayers } from '../../utils/handlePlayers'


export default function OnMarket({data}) {

  const [currentCart,setCurrentCart] = useState("")

  return (
      <div className="home">
        <div className="wrapper-content row mt-20">
            {/* {
              data?.map((item,index) => {
                if(item.is_selling === 1){
                  return (
                    <OnMarketCart 
                      item={item}
                      key={index}
                      setCurrentCart={setCurrentCart}
                      currentCart={currentCart}
                    />
                  ) 
                }
              })
            } */}
            <CommingSoonPage />
        </div>
    </div>
  )
}
