import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClaimableList from '../../components/ClaimableList'
import StakeModal from '../../Modals/StakeModal'
import LoadingScreen from '../../pages/LoadingScreen'
import { handleGetStakeInfor } from '../../utils/handleStaking'
import './StakingTab.scss'

export default function   StakingTab() {

  const [showModalStake,setShowModalStake] = useState(false)

  const [loading,setLoading] = useState(false)

  // infor
  // const [stakedTicket,setStakedTicket] = useState(0)
  const [stakedToken,setStakedToken] = useState(0)
  const [claimable,setClaimable] = useState(0)

  // claimable list
  const [claimableList,setClaimableList] = useState([])

  const navigate = useNavigate()

  const getInforStake = async () => {
    const result = await handleGetStakeInfor(setLoading,navigate)
    // console.log(result)
    if(result !== ""){
      // setStakedTicket(result.totalStakedTicket)
      setStakedToken(result.totalStakedToken)
      setClaimable(result.totalClaimable)
      setClaimableList(result.data)
    }
  }

  useEffect(() => {
    getInforStake()
  },[])

  return (
    <div className="staking-tab">

      <LoadingScreen state={loading} />

      <div className="row mt-4">
             {/* MY STAKING */}
            <div className="col-md-5 col-12 mt-2">
              <div className="block">
                <div className="title text-center mb-4">
                  My OBA Staking
                </div>

                <div className="row mt-2 mb-2">
                  {/* <div className="col-12">
                    <div className="reward-title">
                      TOTAL STAKED TICKET
                    </div>
                    <div className="reward-value value text-right">
                      {stakedTicket ? stakedTicket : 0} Tickets
                    </div>
                  </div> */}

                  <div className="col-12">
                    <div className="reward-title">
                      TOTAL STAKED TOKEN
                    </div>
                    <div className="reward-value value text-right">
                      {stakedToken ? stakedToken : 0} OBA
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="reward-title">
                      TOTAL CLAIMABLE
                    </div>
                    <div className="reward-value value text-right">
                      {claimable ? claimable : 0} OBA
                    </div>
                  </div>

                  <div className="col-12 mt-2">
                    <div className="primary-button" onClick={() => setShowModalStake(true)}>
                      Stake
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-12 mt-2">
              <ClaimableList data={claimableList}/>
            </div>
      </div>

      {/* MODAL */}
        <StakeModal 
          showModalStake={showModalStake} 
          setShowModalStake={setShowModalStake}
        />
    </div>
  )
}
