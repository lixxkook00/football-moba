import React from 'react'

export default function KickGoal({setCurrentSide,currentSide}) {
  return (
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
  )
}
