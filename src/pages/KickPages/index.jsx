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

    // useEffect(() => {
    //     if(id===""){
    //         window.location.href='/penalty'
    //     }
    //     else{
    //         getInforPlayer(id)
    //     }

    // },[])

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
        // alert("video loaded")
        // console.log(ref?.current);
        ref?.current?.click()

         /* fix ios autoplay mp4 video */
        Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
            get: function () {
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
            }
        });

        document.querySelector('.App').addEventListener('click touchstart', function () {
            const videoElement = ref?.current;
            alert('run')
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play();
            }
        });

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

    const fakeKick = () => {
        if(currentSide !== ""){
            setIsRunning(false)
            setLoading(true)

            setStateVideo(true)

            console.log("power",powerPercent)

            if(window.innerWidth < 740){
                if(powerPercent > 80){
                    setUrlVideo(`miss-${currentSide}-over-mobile.mp4`)
                    console.log(`miss-${currentSide}-over-mobile.mp4`)
                }
                else if(powerPercent < 30){
                    setUrlVideo(`miss-${currentSide}-mobile.mp4`)
                }
                else{
                    setUrlVideo(`goal-${currentSide}-mobile.mp4`)
                }
            }else{
                if(powerPercent > 80){
                    setUrlVideo(`miss-${currentSide}-over.mp4`)
                    console.log(`miss-${currentSide}-over.mp4`)
                }
                else if(powerPercent < 30){
                    setUrlVideo(`miss-${currentSide}.mp4`)
                }
                else{
                    setUrlVideo(`goal-${currentSide}.mp4`)
                }
            } 
        }
    }

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

            }
        }
    }

    // handle show award
    const [award,setAward] = useState("")

    // Hole to kick event
    const [powerPercent,serPowerPercent] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    const myInterval = useRef();

    useEffect(() => {
        if(powerPercent > 100){
            fakeKick()
            clearInterval(myInterval.current );
            myInterval.current  = null;
        }
    },[powerPercent])

    useEffect(() => {
        if (isRunning) {
            myInterval.current  = setInterval(() => {
                serPowerPercent(powerPercent => powerPercent + 1)
            }, 10);
        } else {
            clearInterval(myInterval.current );
            myInterval.current  = null;
        }
    }, [isRunning]);

    const handeHold = (e) => {
        e.preventDefault();
        setIsRunning(true)
    }

    const handeFinish = () => {
        // console.log("kick now in", powerPercent);
        fakeKick()
    }

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

                        <div className={`kick-goal-side-block`} >
                            <div 
                                className={`kick-goal-side-item kick-goal-arrow kick-goal-arrow-left-up kick-goal-side-in centering ${currentSide === "left-up" ? "active" : ""}`} 
                                onClick={() => setCurrentSide("left-up")}
                            >
                                <img src="./images/arrow-kick.png" alt="" />
                            </div>

                            <div 
                                className={`kick-goal-side-item kick-goal-arrow kick-goal-arrow-left-down kick-goal-side-in kick-goal-side-block centering ${currentSide === "left-down" ? "active" : ""}`} 
                                onClick={() => setCurrentSide("left-down")}
                            >
                                <img src="./images/arrow-kick.png" alt="" />
                            </div>
                        </div>

                        <div 
                            className={`kick-goal-side-item kick-goal-side-block centering ${currentSide === "center" ? "active" : ""}`} 
                            onClick={() => setCurrentSide("center")}
                        >
                            <i className="fa-solid fa-arrows-to-dot"></i>
                        </div>

                        <div className={`kick-goal-side-block`} >
                            <div 
                                className={`kick-goal-side-item kick-goal-arrow kick-goal-arrow-right-up kick-goal-side-in centering ${currentSide === "right-up" ? "active" : ""}`} 
                                onClick={() => setCurrentSide("right-up")}
                            >
                                <img src="./images/arrow-kick.png" alt="" />
                            </div>

                            <div 
                                className={`kick-goal-side-item kick-goal-arrow kick-goal-arrow-right-down kick-goal-side-in kick-goal-side-block centering ${currentSide === "right-down" ? "active" : ""}`} 
                                onClick={() => setCurrentSide("right-down")}
                            >
                                <img src="./images/arrow-kick.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* STRENG PROCESS */}
                <div className="progress-bar-container">
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-indicator" style={{width: `${powerPercent}%`}}></div>
                    </div>
                </div>


                <div className="kick-button centering">
                    <div 
                        className="menu-item-name" 
                        onMouseDown={handeHold}
                        onTouchStart={(e) => handeHold(e)}

                        onMouseUp={handeFinish} 
                        onTouchEnd={handeFinish}
                    >
                        Hold to kick - 1 <i className="fa-solid fa-bolt"></i>
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
                            // muted={mutedState}
                            muted
                            autoPlay={true}
                            // onloadeddata={() => alert("Loaded video by loadedData...")}
                            // preload="metadata"
                            webkit-playsinline="webkit-playsinline"
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
                        + {award?.amount} OBA
                    </div>
                </div>

            </div>

            {/* <KickResultModal showModalKickResult={showModalKickResult} setShowModalKickResult={setShowModalKickResult} kickData={kickData} id={id}/> */}
        </div>
    )
}
