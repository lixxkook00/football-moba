import React , { useEffect, useState } from 'react'
import History from '../../components/History'

import NFTCart from '../../carts/NFTCart'

import Reward from '../../components/Reward'

import ClaimModal from '../../Modals/ClaimModal'
import DepositModal from '../../Modals/DepositModal'

import LoadingScreen from '../LoadingScreen'
import { handleGetInforUser } from '../../utils/handleUsers'
import { useNavigate } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'
// import { handleGetPlayers } from '../../utils/handlePlayers'
// import { handleGetInforUser } from '../../utils/handleUsers'

export default function Home() {
    const [showModalClaim, setShowModalClaim] = useState(false);
    const [showModalDeposit, setShowModalDeposit] = useState(false);

    const [data,setData] = useState([])
    const [MAIN_DATA,SET_MAINDATA] = useState([])

    const [totalToken,setTotalToken] = useState(0)

    const [loading,setLoading] = useState(false)

    let navigate = useNavigate()

    const getUser = async () => {
        setLoading(true)
        const result = await handleGetInforUser(navigate)

        if(result !== ""){
            setLoading(false)
            setTotalToken(result.data.token)
        }
    }

    useEffect(() => {
        getUser()
    },[])

  return (
    <div className="home">
        <LoadingScreen state={loading} />
        <div className="container">

            <div className="row">
                <div className="col-md-5 col-12  mt-3">
                    <Reward setShowModalClaim={setShowModalClaim} setShowModalDeposit={setShowModalDeposit}/>
                </div>

                <div className="col-md-7 col-12 mt-3">
                    <History />
                </div>
            </div>
        </div>

        {/* MODAL */}
        <ClaimModal showModalClaim={showModalClaim} setShowModalClaim={setShowModalClaim} totalToken={totalToken}/>
        <DepositModal showModalDeposit={showModalDeposit} setShowModalDeposit={setShowModalDeposit}/>
    </div>
  )
}
