import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FootballPlayerCart from '../../carts/FootballPlayerCart'
import PlayerCart from '../../carts/PlayerCart'
import WorkingCart from '../../carts/WorkingCart'
import SellModal from '../../Modals/SellModal'


export default function WorkingAttackers({data}) {
  const [currentCart,setCurrentCart] = useState("")

  const [showModalSell,setShowModalSell] = useState(false)

  return (
      <div className="home">
        <div className="wrapper-content row mt-20">

            {
              data
              ?
              <div className="centering w-100">
                <span className="text-center value">
                  Empty
                </span>
              </div>
              :
              data?.map((item,index) => {
                if(item.is_selling===0){
                  return (
                    <WorkingCart 
                      key={index}
                      data={item}
                      setShowModalSell={setShowModalSell}
                      setCurrentCart={setCurrentCart}
                    />
                  ) 
                }
              })
            }

        </div>

        <SellModal showModalSell={showModalSell} setShowModalSell={setShowModalSell} currentCart={currentCart}/>
    </div>
  )
}
