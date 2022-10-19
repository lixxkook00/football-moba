import React, { useEffect } from 'react'
import './ChooseBoxPopup.scss'

export default function ChooseBoxPopup({state}) {

  return (
    <>
        {
            state
            &&
            <div className="choose-box">
              <div className="choose-box-content">
                Choose a box to open
              </div>
            </div>
        }
    </>
  )
}
