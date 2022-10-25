import React , {useEffect, useState} from 'react'
import './PlayersPage.scss'

import AvailableAttackers from '../../tabs/AvailableAttackers'
import WorkingAttackers from '../../tabs/WorkingAttackers'
import TotalPlayer from '../../components/TotalPlayer'

import { handleGetPlayers } from '../../utils/handlePlayers'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen'
import OnMarket from '../../tabs/OnMarket'

export default function PlayersPage() {

    const [loading,setLoading] = useState(false)

    const [data,setData] = useState([])

    let navigate = useNavigate()

    // const getUser = async () => {
    //     setLoading(true)
    //     const result = await handleGetPlayers(setLoading,navigate,setData)
    // }

    // useEffect(() => {
    //     getUser()
    // },[])

    const [activeTab,setActiveTab] = useState("available")

  return (
    <div className="home">
        <div className="container">

            <LoadingScreen state={loading} />

            <TotalPlayer value={data?.length ? data.length : 0}/>

            <div className="control centering">
                <div className={`control-item primary-button ${activeTab === "available" ? "active" : ""}`}  onClick={() => setActiveTab("available")}>
                    Available Players
                </div>

                <div className={`control-item primary-button ${activeTab === "working" ? "active" : ""}`} onClick={() => setActiveTab("working")}>
                    Working Players
                </div>

                <div className={`control-item primary-button ${activeTab === "onmarket" ? "active" : ""}`} onClick={() => setActiveTab("onmarket")}>
                    On Market
                </div>
            </div>

            {
                activeTab === "available"
                &&
                <AvailableAttackers />
            }

            {
                activeTab === "working"
                &&
                <WorkingAttackers data={data}/>
            }

            {
                activeTab === "onmarket"
                &&
                <OnMarket data={data}/>
            }

        </div>
    </div>
  )
}
