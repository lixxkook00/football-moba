import React ,{useEffect, useRef, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import DemoPlayerKick from '../../components/DemoPlayerKick'
import KickGoal from '../../components/KickGoal'
import KickResultModal from '../../Modals/KickResultModal'
import { getUrlVideo } from '../../utils/handleKick'
import { handleKick , handleGetPlayerbyID } from '../../utils/handlePlayers'
import LoadingScreen from '../LoadingScreen'
import './KickPages.scss'

export default function KickPages() {

    const [loading,setLoading] = useState(false)

    // const [showModalKickResult,setShowModalKickResult] = useState()
    const [alertKick,setAlertKick] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAlertKick(false)
        },1000)
    },[alertKick])

    const [currentCartMain,setCurrentCartMain] = useState({})

    // get infor by ID
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
        setLoading(false)
        ref?.current?.play().catch(error => {
            console.error("Error attempting to play", error);
        });

        /* fix ios autoplay mp4 video */
        Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
            get: function () {
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
            }
        });

        document.querySelector('.App').addEventListener('click touchstart', function () {
            const videoElement = ref?.current;
            // alert('run')
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                // console.log("oke");
                videoElement.play();
            }
        });

        
        setTimeout(() => {
            setAward({
                "result":resultAward?.result, 
                "title":resultAward?.msg,
                "amount":resultAward?.reward
            })
        },2000)
    }

    const fakeKick = async () => {
        if(currentSide !== ""){
            setIsRunning(false)
            setLoading(true)

            // get result
            const result = await handleKick(currentCartMain.id,setLoading,navigate,powerPercent)

            // get url
            let url = getUrlVideo(result,powerPercent,currentSide)

            // play video result
            setUrlVideo(url)
            setStateVideo(true)
            setResultAward(result)
        }
    }

    // handle show award
    const [award,setAward] = useState("")

    // Hold to kick event
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
            }, 7);
        } else {
            clearInterval(myInterval.current );
            myInterval.current  = null;
        }
    }, [isRunning]);

    const handeHold = (e) => {
        if(currentSide !== ""){
            e.preventDefault();
            setIsRunning(true)
        }
        else{
            setAlertKick(true)
        }
    }

    const handeFinish = () => {
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

                <DemoPlayerKick currentCartMain={currentCartMain}/>

                <KickGoal setCurrentSide={setCurrentSide} currentSide={currentSide} />

                {/* STRENG PROCESS */}
                <div className="progress-bar-container">
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-indicator" style={{width: `${powerPercent}%`}}></div>
                    </div>
                </div>


                <div className="kick-button centering">
                    <div 
                        className="menu-item-name" 
                        onMouseDown={(e) => handeHold(e)}
                        onTouchStart={(e) => handeHold(e)}

                        onMouseUp={handeFinish} 
                        onTouchEnd={handeFinish}
                    >
                        Hold to kick - 1 <i className="fa-solid fa-bolt"></i>
                    </div>
                </div>

                {/* result video */}
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
                            playsInline
                            muted
                            autoPlay={true} 
                            data-autoplay=""
                            preload="auto"
                            webkit-playsinline="webkit-playsinline"
                            src={`./videos/${urlVideo}`}
                        >
                            {/* <source src={`./videos/${urlVideo}`} type="video/mp4"/> */}
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

            {/* alert choose side */}
            {
                alertKick
                &&
                <div className="alert-side centering">
                    choose the side before kicking the ball
                </div>
            }
        </div>
    )
}
