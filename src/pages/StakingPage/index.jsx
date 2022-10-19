import React, { useEffect, useState } from 'react'
import { unstable_HistoryRouter, useLocation ,useSearchParams } from 'react-router-dom';
import OpenBoxTab from '../../tabs/OpenBoxTab'
import StakingTab from '../../tabs/StakingTab'
import './StakingPage.scss'

export default function StakingPage() {

    const [activeTab,setActiveTab] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();

    const handleQueryParams = (activeTab) => {
        if(activeTab === "box"){
            searchParams.set("tab","box")
        }else if(activeTab === "staking"){
            searchParams.set("tab","staking")
        }
        setSearchParams(searchParams);
    };

    useEffect(() => {
       const firstTab = searchParams.get("tab")

       setActiveTab(firstTab)
       
       if(firstTab===null){
            setActiveTab("staking")
       }
    },[])

    useEffect(() => {
       handleQueryParams(activeTab)
    },[activeTab])

    return (
        <div className="home staking">
            <div className="container">
                <div className="control centering">
                    <div className={`control-item primary-button ${activeTab === "staking" ? "active" : ""}`}  onClick={() => setActiveTab("staking")}>
                        Staking
                    </div>

                    <div className={`control-item primary-button ${activeTab === "box" ? "active" : ""}`} onClick={() => setActiveTab("box")}>
                        Mystery Box
                    </div>
                </div>

                {
                    activeTab === "staking"
                    &&
                    <StakingTab />
                }

                {
                    activeTab === "box"
                    &&
                    <OpenBoxTab />
                }
            </div>
        </div>
    )
}
