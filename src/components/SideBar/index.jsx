import React , { useState , useEffect } from 'react'
import './SideBar.scss'

import Socials from '../Socials'
import { Link, useNavigate } from 'react-router-dom'
import {handleLogout} from '../../utils/handleUsers'

export default function SideBar() {
    const [status,setStatus] = useState("home")

    let navigate = useNavigate()

    const handleActiveItem = (name) => {
        setStatus(name)
    }

    // catch active current tag
    useEffect(() => {
        if(window.location.pathname.split('/')[1] === ""){
            setStatus("home")
        }else if(window.location.pathname.split('/')[1] === "kick"){
            setStatus("penalty")
        }else{
            setStatus(window.location.pathname.split('/')[1])
        }
        
    },[])

  return (
    <div className="sidebar hidden-m-t">
        <div className="sidebar-logo">
            <a href="/">
                <img src="./images/final-logo-2.png" alt="" />
            </a>
        </div>

        <div className="sidebar-wrapper">
            <Link to="/home" className={`sidebar-item ${status==="home" && "active"}`} onClick={() => handleActiveItem("home")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-trophy"></i>
                </div>
                <div className="sidebar-item-name">
                    Home
                </div>
            </Link>

            <Link to="/players" className={`sidebar-item ${status==="players" && "active"}`} onClick={() => handleActiveItem("players")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-person-running"></i>
                </div>
                <div className="sidebar-item-name">
                    Players
                </div>
            </Link>

            <Link to="/penalty" className={`sidebar-item ${status==="penalty" && "active"}`} onClick={() => handleActiveItem("penalty")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-table-cells"></i>
                </div>
                <div className="sidebar-item-name">
                    Penalty
                </div>
            </Link>

            <Link to="/team" className={`sidebar-item ${status==="team" && "active"}`} onClick={() => handleActiveItem("team")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-users"></i>
                </div>
                <div className="sidebar-item-name">
                World Tournament
                </div>
            </Link>

            <Link to="/staking" className={`sidebar-item ${status==="staking" && "active"}`} onClick={() => handleActiveItem("staking")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-futbol"></i>
                </div>
                <div className="sidebar-item-name">
                    Staking
                </div>
            </Link>

            <Link to="/marketplace" className={`sidebar-item ${status==="marketplace" && "active"}`} onClick={() => handleActiveItem("marketplace")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-futbol"></i>
                </div>
                <div className="sidebar-item-name">
                    Marketplace
                </div>
            </Link>

            <Link to="/training" className={`sidebar-item ${status==="training" && "active"}`} onClick={() => handleActiveItem("training")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-bottle-water"></i>
                </div>
                <div className="sidebar-item-name">
                    Training
                </div>
            </Link>

            <Link to="/dao" className={`sidebar-item ${status==="dao" && "active"}`} onClick={() => handleActiveItem("dao")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-book-open"></i>
                </div>
                <div className="sidebar-item-name">
                    DAO
                </div>
            </Link>

            <Link to="/user" className={`sidebar-item ${status==="user" && "active"}`} onClick={() => handleActiveItem("user")}>
                <div className="sidebar-item-icon">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="sidebar-item-name">
                    Account
                </div>
            </Link>

            <div to="" className="sidebar-item" onClick={() => handleLogout(navigate)}>
                <div className="sidebar-item-icon">
                   <i className="fa-solid fa-right-from-bracket"></i>
                </div>
                <div className="sidebar-item-name">
                    Logout
                </div>
            </div>
        </div>

        <Socials />
        
    </div>
  )
}
