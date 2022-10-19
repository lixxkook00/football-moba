import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FootballPlayerCart from '../../carts/FootballPlayerCart'
import Filter from '../../components/Filter'
import TotalPlayer from '../../components/TotalPlayer'
import { handleGetPlayers } from '../../utils/handlePlayers'
import { handleFilter } from '../../utils/handleUtils'
import './TeamPages.scss'

export default function TeamPages() {

  const [currentCart,setCurrentCart] = useState("")

  const [loading,setLoading] = useState(false)

  const [data,setData] = useState([])
  const [MAIN_DATA,SET_MAINDATA] = useState([])

  const [filterOption,setFilterOption] = useState("all")

  let navigate = useNavigate()

  const getUser = async () => {
    setLoading(true)
    const result = await handleGetPlayers(setLoading,navigate,setData,SET_MAINDATA)
  }

  useEffect(() => {
      getUser()
  },[])

  useEffect(() => {
    // console.log(filterOption)
    handleFilter(filterOption,MAIN_DATA,setData)
  },[filterOption])

  return (
    <div className="team home">
        <div className="container">
            <TotalPlayer value={MAIN_DATA.length} />

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <Filter setFilterOption={setFilterOption}/>

                     <div className="wrapper-content row mt-20">
                      {
                        data?.map((item,index) => {
                          return (
                            <FootballPlayerCart 
                              item={item}
                              key={index}
                              currentCart={currentCart}
                              setCurrentCart={setCurrentCart}
                            />
                          ) 
                        })
                      }
                    </div>

                </div>

                <div className="col-lg-12 col-md-12">
                    <div className="centering">
                      <div className="team-pitch centering">
                        <img src="./images/pitch.png" alt="" />
                      </div>
                    </div>
                </div>
            </div>

          <div className="centering">
            <Link to="/kick" className={`penalty-button primary-button `}>
              Match
            </Link>
          </div>

        </div>
    </div>
  )
}
