import React, { useState } from 'react'
import './StartScreen.scss'

export default function StartScreen({setAudioState}) {

    const [state,setState] = useState(true)

    const handleStart = () => {
        setAudioState(true)
        setState(false)
    }

    return (
        <>
            {
                state
                &&
                <div className="start">
                    <div className="start-wrapper">
                        <div className="start-logo">
                            <img src="./images/start-logo.png" alt="" />
                        </div>

                        <div className="buy-button start-button centering mt-5" onClick={() => handleStart()}>
                            <img src="./images/start-button.png" alt="" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
