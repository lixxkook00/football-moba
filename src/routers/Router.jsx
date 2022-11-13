import React  , { useEffect, useState } from 'react'

import { Route,Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CommingSoonPage from '../pages/CommingSoonPage';

import HomePage from '../pages/HomePage'
import KickPages from '../pages/KickPages';
import Login from '../pages/Login';
import LoginWallet from '../pages/LoginWallet';
import MarketplacePage from '../pages/MarketplacePage';
import PenaltyPage from '../pages/PenaltyPage';
import PlayersPage from '../pages/PlayersPage';
import SignUp from '../pages/SignUp';
// import TeamPages from '../pages/TeamPages';
import UserInfor from '../pages/UserInfor';
import MysteryBoxOpeing from '../pages/MysteryBoxOpeing';

import ForgotPassword from '../pages/ForgotPassword';
import StakingPage from '../pages/StakingPage';
import NotFound404 from '../pages/NotFound404';
import MenuPage from '../pages/MenuPage';
import SquadPage from '../pages/SquadPage';

export default function Router({audio}) {

  let navigate = useNavigate();

  useEffect(() => {

    const url = window.location.pathname.split('/')[1]

    if(
      sessionStorage.getItem('token') === null
      &&
      url !== "login" 
      && 
      url !== "signup" 
      && 
      url !== "loginwallet"
      && 
      url !== "forgot-password"
    ){
      navigate("/login") 
    }
  })

  return (
    <div className="content mt-50 hidden-scroll-bar">

        <Routes>

          <Route exact path="/" element={<MenuPage />} />

          <Route path="/wallet" element={<HomePage/>} />
          
          <Route path="/players" element={<PlayersPage />} />

          <Route path="/penalty" element={<PenaltyPage />} />

          <Route path="/squad" element={<SquadPage />} />

          <Route path="/kick" element={<KickPages />} />

          <Route path="/team" element={<CommingSoonPage />} />

          <Route path="/training" element={<CommingSoonPage />} />

          <Route path="/marketplace" element={<CommingSoonPage />} />

          <Route path="/mysterybox" element={<MysteryBoxOpeing />} />

          <Route path="/dao" element={<CommingSoonPage />} />

          <Route path="/staking" element={<StakingPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/loginwallet" element={<LoginWallet />} />

          <Route path="/user" element={<UserInfor />} />
          
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound404 />} />

      </Routes>
    </div>
  )
}
