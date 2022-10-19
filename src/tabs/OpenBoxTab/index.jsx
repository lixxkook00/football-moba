import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ChooseBoxPopup from '../../pages/ChooseBoxPopup'
import { handleGetInforUser } from '../../utils/handleUsers'
import './OpenBoxTab.scss'

export default function OpenBoxTab() {

  const [activeBox,setActiveBox] = useState("")
  const [quantitySticket,setQuantitySticket] = useState(0)

  const navigate = useNavigate()

  // handle get total sticket
  const getInfor = async () => {
      const result = await handleGetInforUser(navigate)
      if(result !== ""){
        setQuantitySticket(result.data.special_ticket)
      }
  }

  useEffect(() => {
    getInfor()
  },[])


  // handle choose box
  const [chooseAlert,setChooseAlert] = useState(false)

  const handleChooseBox = () => {
    if(activeBox!==""){
      navigate(`/mysterybox?box=${activeBox.slice(-1)-1}`)
    }else{
      setChooseAlert(true)

      setTimeout(() => {
        setChooseAlert(false)
      },1500)
    }
  }

  return (
    <div className="home openbox">

      <ChooseBoxPopup state={chooseAlert} />

      <div className="row">

        <div className="col-12">
            <div className="header-item mb-4">
                <div className="header-item-icon">
                    <img src="./images/sticket.png" alt="" />
                </div>
                <div className="header-item-value text-overflowvalue">
                  {quantitySticket}
                </div>
            </div>
        </div>

        {
          quantitySticket===0
          ?
          
          <div className="openbox-noticket">
            I have no ticket for open Mystery Box
          </div>
          
          :

          <>
            

            <div className="col-md-4 col-6">
              <div className={`openbox-item openbox-item--1 ${activeBox === "openbox-item--1" ? "active" : ""}`} onClick={() => setActiveBox("openbox-item--1")}>
                <div className={`openbox-item-img openbox-item-img--1`}>
                  <img className="buzz-out-on-hover" src="./images/box-image.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className={`openbox-item openbox-item--2 ${activeBox === "openbox-item--2" ? "active" : ""}`} onClick={() => setActiveBox("openbox-item--2")}>
                <div className={`openbox-item-img openbox-item-img--2`}>
                  <img className="buzz-out-on-hover" src="./images/box-image.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className={`openbox-item openbox-item--3 ${activeBox === "openbox-item--3" ? "active" : ""}`} onClick={() => setActiveBox("openbox-item--3")}>
                <div className={`openbox-item-img openbox-item-img--3`}>
                  <img className="buzz-out-on-hover" src="./images/box-image.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className={`openbox-item openbox-item--4 ${activeBox === "openbox-item--4" ? "active" : ""}`} onClick={() => setActiveBox("openbox-item--4")}>
                <div className={`openbox-item-img openbox-item-img--4`}>
                  <img className="buzz-out-on-hover" src="./images/box-image.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className={`openbox-item openbox-item--5 ${activeBox === "openbox-item--5" ? "active" : ""}`} onClick={() => setActiveBox("openbox-item--5")}>
                <div className={`openbox-item-img openbox-item-img--5`}>
                  <img className="buzz-out-on-hover" src="./images/box-image.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className={`openbox-item openbox-item--6 ${activeBox === "openbox-item--6" ? "active" : ""}`} onClick={() => setActiveBox("openbox-item--6")}>
                <div className={`openbox-item-img openbox-item-img--6`}>
                  <img className="buzz-out-on-hover" src="./images/box-image.png" alt="" />
                </div>
              </div>
            </div>
            
            <div className="col-12 centering">
              <div className={`openbox-button centering ${activeBox !== "" ? "active" : ""}`} onClick={() => handleChooseBox()}>
                OPEN THIS BOX
              </div>
            </div>
          </>

        }

        
      </div>


    </div>
  )
}
