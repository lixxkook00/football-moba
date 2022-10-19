import React from 'react'

import './NotFound404.scss'

import {Link} from 'react-router-dom'

export default function NotFound404() {
  return (
    <div className="notfound">
        <div className="notfound-img centering mb-4">
            <img src="./images/final-logo-2.png" alt="" />
        </div>
        <div className="notfound-title">
            404
        </div>
        <Link to="/home" className="notfound-back">
            BACK TO HOME
        </Link>
    </div>
  )
}
