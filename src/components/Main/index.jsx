import React from 'react'
import './Main.scss'

import Header from '../Header'
import Router from '../../routers/Router'

export default function Main() {

  let audio = new Audio("./musics/Start-Sound.mp3")

  return (
    <div className="main">
        
        <Header />

        <Router audio={audio}/>

    </div>
  )
}
