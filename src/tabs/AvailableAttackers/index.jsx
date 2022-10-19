import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PlayerCart from '../../carts/PlayerCart'
import HirePlayerModal from '../../Modals/HirePlayerModal'
import LoadingScreen from '../../pages/LoadingScreen'

import { handleHirePlayers } from '../../utils/handlePlayers'
import { handleGetServerConfig } from '../../utils/handleServerConfig'

export default function AvailableAttackers() {

  const [loading,setLoading] = useState(false)
  const [data,setData] = useState({})

  const [showModalHirePlayer,setShowModalHirePlayer] = useState(false)

  let navigate = useNavigate()

  const hirePlayer = async () => {
    setLoading(true)
    const result = await handleHirePlayers(setLoading,navigate,setData)
    if(result !== ""){
      await setShowModalHirePlayer(true)
    }
    await setData(result)
  }

  // get free hire player from server
  const [feeHire,setFreeHire] = useState(0)

  const getServerConfig = async () => {
        const result = await handleGetServerConfig(navigate,setLoading)
        await result.data.map((item) => {
            if(item.config_name==="hire_fee"){
                setFreeHire(item.config_value)
            }
        })
    }

  useEffect(() => {
    getServerConfig()
  },[])

  return (
    <div className="home">

      <LoadingScreen state={loading} />

      <div className="centering">
          <div className="primary-button hire-player" onClick={ () => hirePlayer()}>
            HIRE PLAYER
          </div>
          
      </div>

      <div className="fee text-center">
        Fee {feeHire} Kicks
      </div>

      <div className="available-wrapper">
        <div className="available-cart">
          <img src="./images/15.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/1.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/2.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/3.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/4.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/5.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/6.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/7.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/8.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/9.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/10.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/11.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/12.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/13.png" alt="" />
        </div>

        <div className="available-cart">
          <img src="./images/14.png" alt="" />
        </div>

        
      </div>
      
      <HirePlayerModal 
        showModalHirePlayer={showModalHirePlayer} 
        setShowModalHirePlayer={setShowModalHirePlayer} 
        data={data}
      />

    </div>
  )
}
