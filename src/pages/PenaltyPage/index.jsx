import React , { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FootballPlayerCart from '../../carts/FootballPlayerCart'
import PenaltyCart from '../../carts/PenaltyCart'
import Filter from '../../components/Filter'
import TotalPlayer from '../../components/TotalPlayer'
import { handleGetPlayers } from '../../utils/handlePlayers'
import { handleFilter } from '../../utils/handleUtils'
import './PenaltyPage.scss'

export default function PenaltyPage() {

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
    handleFilter(filterOption,MAIN_DATA,setData)
  },[filterOption])

  return (
    <div className="home penalty">
        <div className="container">
            <TotalPlayer value={MAIN_DATA ? MAIN_DATA.length : 0} />

            <Filter setFilterOption={setFilterOption}/>

            <div className="wrapper-content row mt-20">
              {
                data?.map((item,index) => {
                  if(item.is_selling===0){
                    return (
                      <PenaltyCart 
                        item={item}
                        key={index}
                      />
                    ) 
                  }
                })
              }
            </div>
          {/* 
            <div className="centering">
              <Link to={`/kick?id=${currentCart}`} className={`penalty-button primary-button ${currentCart!==""? "active" : ""}`}>
                Choose
              </Link>
            </div> 
          */}
        </div>
    </div>
  )
}