import React , {useState,useEffect} from 'react'
import './HeaderMobile.scss'

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import {Link, useNavigate} from 'react-router-dom'
import { handleLogout } from '../../utils/handleUsers';

export default function HeaderMobile() {

    const [status,setStatus] = useState("home")

    let navigate = useNavigate()

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

            <>
                <Divider />

                <Link to="/" className={`sidebar-item ${status==="home" && "active"}`} onClick={() => handleActiveItem("home")}>
                    <div className="sidebar-item-icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="sidebar-item-name">
                        Home
                    </div>
                </Link>

                <Link to="/penalty" className={`sidebar-item ${status==="penalty" && "active"}`} onClick={() => handleActiveItem("penalty")}>
                    <div className="sidebar-item-icon">
                        <i className="fa-solid fa-gamepad"></i>
                    </div>
                    <div className="sidebar-item-name">
                        Play Game
                    </div>
                </Link>

                <Link to="/squad" className={`sidebar-item ${status==="players" && "active"}`} onClick={() => handleActiveItem("players")}>
                    <div className="sidebar-item-icon">
                        <i className="fa-solid fa-person-running"></i>
                    </div>
                    <div className="sidebar-item-name">
                        Squad
                    </div>
                </Link>
                
                <Link to="/players" className={`sidebar-item ${status==="team" && "active"}`} onClick={() => handleActiveItem("team")}>
                    <div className="sidebar-item-icon">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="sidebar-item-name">
                        Hire Player
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

                <Link to="/wallet" className={`sidebar-item ${status==="wallet" && "active"}`} onClick={() => handleActiveItem("wallet")}>
                    <div className="sidebar-item-icon">
                        <i className="fa-solid fa-wallet"></i>
                    </div>
                    <div className="sidebar-item-name">
                        Wallet
                    </div>
                </Link>

                <div to="/players" className='sidebar-item' onClick={() => handleLogout(navigate)}>
                    <div className="sidebar-item-icon">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </div>
                    <div className="sidebar-item-name">
                        Log out
                    </div>
                </div>
            </>
            
        
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
