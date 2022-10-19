import React, { useEffect } from 'react'
import './StartAudio.scss'

export default function StartAudio({state,setState}) {
    return (
        <div className="start-audio" onClick={() => setState(!state)}>
            <img src={`./images/audio-button-${state}.png`} alt="" />
        </div>
    )
}
