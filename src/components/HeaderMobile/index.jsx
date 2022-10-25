import React , {useState,useEffect} from 'react'
import './HeaderMobile.scss'

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import {Link} from 'react-router-dom'

export default function HeaderMobile() {

    const [status,setStatus] = useState("home")

    // handle current page
    const [currentPage,setCurrentPage] = useState("")
    useEffect(() => {
        if(window.location.pathname==="/"){
            setCurrentPage("landing")
        }
    })

    const handleActiveItem = (name) => {
        setStatus(name)
    }

    useEffect(() => {
        if(window.location.pathname.split('/')[1] === ""){
            setStatus("home")
        }else if(window.location.pathname.split('/')[1] === "kick"){
            setStatus("penalty")
        }else{
            setStatus(window.location.pathname.split('/')[1])
        }
    },[])

    // Handle Modal Nav Moible
    const [stateNav, setStateNav] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }); 

    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >   
            <div>
                <div className="cart-title">
                    <a href="/" className="nav-logo">
                       <img src="/images/final-logo-2.png" alt="" />
                    </a>
                    <div className="cart-title-close">
                        <div className="clear-btn">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>

            {
                currentPage === "landing"
                ?
                    <>
                        <a href="#home" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-house"></i>
                            </div>
                            <div className="sidebar-item-name">
                                Home
                            </div>
                        </a>

                        <a href="#about" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-address-card"></i>
                            </div>
                            <div className="sidebar-item-name">
                                About
                            </div>
                        </a>

                        <a href="#nft" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                              <i className="fa-brands fa-hive"></i>
                            </div>
                            <div className="sidebar-item-name">
                                NFTs
                            </div>
                        </a>

                        <a href="#gameplay" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-gamepad"></i>
                            </div>
                            <div className="sidebar-item-name">
                                Gameplay
                            </div>
                        </a>


                        <a href="#tokenomic" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-coins"></i>
                            </div>
                            <div className="sidebar-item-name">
                                Tokenomic
                            </div>
                        </a>

                        <a href="#roadmap" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-map"></i>
                            </div>
                            <div className="sidebar-item-name">
                                Roadmap
                            </div>
                        </a>

                        <a href="#roadmap" className={`sidebar-item `}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-book"></i>
                            </div>
                            <a href={"https://whitepaper.mightyOBA.club"} className="sidebar-item-name">
                                Whitepaper
                            </a>
                        </a>
                    </>
                :
                <>
                    <Divider />

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
                            Team
                        </div>
                    </Link>

                    <Link to="/staking" className={`sidebar-item ${status==="staking" && "active"}`} onClick={() => handleActiveItem("staking")}>
                        <div className="sidebar-item-icon">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <div className="sidebar-item-name">
                            Staking
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

                    <Link to="/prediction" className={`sidebar-item ${status==="prediction" && "active"}`} onClick={() => handleActiveItem("prediction")}>
                        <div className="sidebar-item-icon">
                            <i className="fa-solid fa-gamepad"></i>
                        </div>
                        <div className="sidebar-item-name">
                            Prediction
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

                    <Link to="/dao" className={`sidebar-item ${status==="dao" && "active"}`} onClick={() => handleActiveItem("dao")}>
                        <div className="sidebar-item-icon">
                            <i className="fa-solid fa-book-open"></i>
                        </div>
                        <div className="sidebar-item-name">
                            DAO
                        </div>
                    </Link>
                </>
            }
            
            

        </Box>
    );

    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };

    return (
        <div className="header-mobile hide-on-pc">
            {/* Modal Nav Mobile Menu*/}
            <div className="header-mobile-wrap hide-on-pc">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="header-mobile">
                                <a href="/"  className="header-mobile-logo centering">
                                    <img className="img-height" src="/images/final-logo-2.png" alt="" />
                                </a>

                                <div className="header-mobile-icon">
                                    <i className="fa-solid fa-bars" onClick={toggleDrawerNav('left', true)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Drawer
                anchor={'left'}
                open={stateNav['left']}
                onClose={toggleDrawerNav('left', false)}
            >
                {modalCartNav('left')}
            </Drawer>
        </div>
    )
}
