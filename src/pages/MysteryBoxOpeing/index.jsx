import React, { useEffect, useRef, useState } from 'react'

import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { handleOpenBox } from '../../utils/handleStaking';

import AwardOpenBox from '../../components/AwardOpenBox';
import LoadingScreen from '../LoadingScreen'

import './MysteryBoxOpeing.scss'

export default function MysteryBoxOpeing() {
    // USE REF
    const readyVideo = useRef("");
    const openingVideo = useRef("");

    // NAVIGATE
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    // STATE
    const [loading,setLoading] = useState(false)
    const [isOpenVideoReady,setIsOpenVideoReady] = useState(false)
    const [award,setAward] = useState(false)
    const [stateVideo,setStateVideo] = useState("ready")

    const [mutedState,setMutedState] = useState(false)

    const [awardInfor,setAwardInfor] = useState({})

    const [closeOpeing,setCloseOpeing] = useState("")

    const [openedList,setOpenedList] = useState([])


    const handleVideoReady = async (ref,action) => {
        if(action === "ready"){
            setLoading(false)
            ref?.current?.play()
        }

        if(action === "open"){
            const result = await handleOpenBox(setLoading,navigate,searchParams.get("box"))

            await ref?.current?.play()
            await setAwardInfor(result.reward)
            await setOpenedList(result.another)
            // console.log(result.reward)
            
            setTimeout(() => {
                setAward(true)
                setIsOpenVideoReady(true)
            },800)
        }
    }

    // handle button open status
    const [buttonState,setButtonState] = useState(true)

    const handleOpen = async () => {
        setLoading(true)
        setStateVideo("opening");
        setButtonState(false)
    }

    const handleClose = () => {
        if(openedList.length>0){
            setCloseOpeing("close")
        }else{
            navigate("/staking?tab=box")
        }
    }

    useEffect(() => {
        setLoading(true)

        // hanlde this shit bug ios
        var userAgent = window.navigator.userAgent;
        let browserName = "";

        if(userAgent.match(/chrome|chromium|crios/i)){
            browserName = "chrome";
        }else if(userAgent.match(/firefox|fxios/i)){
            browserName = "firefox";
        }  else if(userAgent.match(/safari/i)){
            browserName = "safari";
        }else if(userAgent.match(/opr\//i)){
            browserName = "opera";
        } else if(userAgent.match(/edg/i)){
            browserName = "edge";
        }else{
            browserName="No browser detection";
        }
        
        if (
            userAgent.match(/iPad/i)   || 
            userAgent.match(/iPhone/i) || 
            ( 
                userAgent.match(/Mac OS/i) 
                && 
                browserName==="safari" 
            )
        ) {
            // alert("shit ios")
            setMutedState(true)
        }

    },[])

    

  return (
    <div className="mystery-box-opeing">

        <LoadingScreen state={loading}/>
        
        <div className="mystery-box-opeing-boxs mt-5">
            <Link to="/staking?tab=box" className="kick-back">
                <i className="fa-solid fa-angle-left"></i>
                <span className="value">BACK</span>
            </Link>

            <div className="container">
                <div className="row">
                    {
                        openedList?.map((item,index) => {
                            return (
                                <div key={index} className="col-md-4 col-12">
                                    <div 
                                        className={`openbox-item openbox-item--${index} ${searchParams.get("box")==index ? "active" : ""}`}>
                                        <div className={`openbox-item-img openbox-item-img--${index}`}>
                                            <img src="./images/box-opened-image.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="openbox-result centering">
                                        <AwardOpenBox reward={item}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        <div className={`mystery-box-opeing-result ${closeOpeing}`}>

            <div className="mystery-box-opeing-result-close"  onClick={() => handleClose("close")}>
                <i className="fa-solid fa-circle-xmark"></i>
            </div>

            <div className="mystery-box-opeing-result-video centering">

                {
                    stateVideo === "ready"
                    &&
                    <video
                        controls={false} 
                        width="100%" 
                        height="100%" 
                        onLoadedData={() => handleVideoReady(readyVideo,"ready")}
                        ref={readyVideo} 
                        playsInline={true}
                        muted={mutedState}
                    >
                        <source src={`./videos/box-ready.mp4`} type="video/mp4"/>
                    </video>
                }

                {
                    stateVideo === "opening"
                    &&
                    <video
                        controls={false} 
                        width="100%" 
                        height="100%" 
                        onLoadedData={() => handleVideoReady(openingVideo,"open")}
                        ref={openingVideo} 
                        playsInline={true}
                        muted={mutedState}
                    >
                        <source src={`./videos/box-opening.mp4`} type="video/mp4"/>
                    </video>
                }
                
            </div>
            {
                award
                &&
                <div className="award centering">
                   <div className="award-block">
                        <AwardOpenBox reward={awardInfor}/>
                    </div>
                </div>
            }

            {
                buttonState
                &&
                <div className="mystery-box-opeing-result-button"  onClick={() => handleOpen()}>
                    <img src="./images/open-box-button.png" alt="" />
                </div>
            }


            {
                isOpenVideoReady
                &&
                <div className="mystery-box-opeing-result-button"  onClick={() => handleClose()}>
                    <img src="./images/open-box-button.png" alt="" />
                </div>
            }

        </div>

    </div>
  )
}
