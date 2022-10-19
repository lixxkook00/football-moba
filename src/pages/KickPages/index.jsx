import React ,{useEffect, useRef, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import KickResultModal from '../../Modals/KickResultModal'
import { handleKick , handleGetPlayerbyID } from '../../utils/handlePlayers'
import LoadingScreen from '../LoadingScreen'
import './KickPages.scss'

export default function KickPages() {

    const [loading,setLoading] = useState(false)

    const [showModalKickResult,setShowModalKickResult] = useState()
    const [kickData,setKickData] = useState({})

    const [currentCartMain,setCurrentCartMain] = useState({})

    // get infro by ID
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');

    let navigate = useNavigate()

    const getInforPlayer = async (id) => {
        setLoading(true)
        const result = await handleGetPlayerbyID(setLoading,navigate,id,setCurrentCartMain)
    }

    useEffect(() => {
        if(id===""){
            window.location.href='/penalty'
        }
        else{
            getInforPlayer(id)
        }

    },[])

    // handle back
    const back = () => {
        window.location.reload()
    }

    // handle choose side
    const [currentSide,setCurrentSide] = useState("")

    // handle kich and show video result
    const readyVideo = useRef("");
    const [resultAward,setResultAward] = useState("")

    const [stateVideo, setStateVideo] = useState(false)
    const [urlVideo,setUrlVideo] = useState("")

    const handleVideoReady = async (ref) => {
        alert("oke ne")
        ref?.current?.play()
        setLoading(false)
        setTimeout(() => {
            setAward({
                "result":resultAward?.result,
                "title":resultAward?.msg,
                "amount":resultAward?.reward
            })
        },1500)
    
    }

    const [mutedState,setMutedState] = useState(false)

    const kick = async () => {
        if(currentSide !== ""){
            setLoading(true)
            const result = await handleKick(currentCartMain.id,setLoading,navigate)
            let url = ""
    
            if(result !==""){
                // console.log("width nef ",window.innerWidth)

                // get url video
                if(window.innerWidth > 740){
                    if(result.result){
                        url = `goal-${currentSide}-${Math.floor(Math.random() * 2)+1}.mp4`
                    }else{
                        url = `miss-${currentSide}.mp4`
                    }
                }else{
                    if(result.result){
                        url = `goal-${currentSide}-${Math.floor(Math.random() * 2)+1}-mobile.mp4`
                    }else{
                        url = `miss-${currentSide}-mobile.mp4`
                    }
                }
    
                // play this video
                setResultAward(result)
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
                    if(window.innerWidth < 740){
                        if(result.result){
                            url = `goal-${currentSide}-${Math.floor(Math.random() * 2)+1}-mobile-muted.mp4`
                        }else{
                            url = `miss-${currentSide}-mobile-muted.mp4`
                        }
                    }

                    setMutedState(true)
                }   

                setUrlVideo(url)

                // alert(`./videos/${url}`)

                setStateVideo(true)

            }
        }
    }

    // fix this shit bux ios mobile trash
    // useEffect(() => {
    //     console.log("stateVideo",readyVideo.current)
    // },[stateVideo])

    // handle show award
    const [award,setAward] = useState("")

  return (
    <div className="home kick centering">
        <div className="kick-wrapper">

            <LoadingScreen state={loading} />

            <Link to="/penalty" className="kick-back">
                <i className="fa-solid fa-angle-left"></i>
                <span className="value">
                    BACK
                </span>
            </Link>

            <div className="demo centering">
                <div className={`football-player-cart football-player-cart--${currentCartMain?.rarity} active`} >

                    <div className="football-player-cart-infor">
                        <div className="football-player-cart-energy green">
                            <i className="fa-solid fa-droplet"></i>
                            {currentCartMain?.durability}
                        </div>

                        <div className="football-player-cart-energy">
                        <i className="fa-solid fa-bolt"></i>
                        {currentCartMain?.energy}
                        </div>
                    </div>

                    <div className="football-player-cart-img">
                    <img src={`./images/${currentCartMain?.image}`} alt="" />
                    </div>

                    <div className={`football-player-cart-rarity text-center rarity-${currentCartMain?.rarity}`}>
                        <img src={`./images/${currentCartMain?.rarity}-button.png`} alt="" />
                    </div>
                </div>
            </div>

            <div className="kick-goal">
                <img src="./images/khungthanh02.png" alt="" />

                <div className="kick-goal-side">
                    <div className={`kick-goal-side-item centering ${currentSide === "left" ? "active" : ""}`} onClick={() => setCurrentSide("left")}>
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </div>
                    <div className={`kick-goal-side-item centering ${currentSide === "center" ? "active" : ""}`} onClick={() => setCurrentSide("center")}>
                        <i className="fa-solid fa-arrows-to-dot"></i>
                    </div>
                    <div className={`kick-goal-side-item centering ${currentSide === "right" ? "active" : ""}`} onClick={() => setCurrentSide("right")}>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                </div>

            </div>

            <div className="kick-button centering">
                <div className="primary-button" onClick={() => kick()}>
                    Choose side to kick - 1 <i className="fa-solid fa-bolt"></i>
                </div>
            </div>

            {/* result video*/}
            {
                stateVideo === true
                &&
                <div className="kick-result centering">
                    <video
                        controls={false} 
                        width="100%" 
                        height="100%" 
                        onLoadedData={() => handleVideoReady(readyVideo)}
                        ref={readyVideo} 
                        playsInline={true}
                        muted={mutedState}
                        // onloadeddata={() => alert("Loaded video by loadedData...")}
                        // preload="metadata"
                        // webkit-playsinline="true"
                    >
                        <source src={`./videos/${urlVideo}`} type="video/mp4"/>
                    </video>
                    <div className="kick-result-close primary-button" onClick={() => back()}>
                        BACK
                    </div>
                </div>
            }
            
            {/* pop up reward */}
            <div className={`kick-award ${award !=="" ? "active" : ""}`}>
                <div className={`kick-award-title ${award?.result}`}>
                    {
                        award?.result
                        ?
                        "GOAL"
                        :
                        "NO GOAL"
                    }
                </div>
                <div className={`kick-award-amount value-complete`}>
                    + {award?.amount} KICKS
                </div>
            </div>

        </div>

        {/* <KickResultModal showModalKickResult={showModalKickResult} setShowModalKickResult={setShowModalKickResult} kickData={kickData} id={id}/> */}
    </div>
  )
}
