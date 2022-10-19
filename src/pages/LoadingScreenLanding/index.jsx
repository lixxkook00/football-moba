import React from 'react'
import './LoadingScreenLanding.scss'

export default function LoadingScreenLanding({state}) {
  return (
    <>
        {
            state
            &&
            <div className="loading-landing">
                <img src="./images/final-logo-2.png" alt="" />
                <img src="./images/loading.gif" alt="" />
            </div>
        }
    </>
  )
}
