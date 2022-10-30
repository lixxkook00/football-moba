import React from 'react'
import { Link } from 'react-router-dom'
import './MenuPage.scss'

export default function MenuPage() {
  return (
    <div className="menu">
        <div className="meun-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <Link to='squad' className="menu-item">
                            <div className="centering">
                                <img src="./images/icon04.png" alt="" />
                            </div>

                            <div className="menu-item-name text-center">
                                SQUAD
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-6">
                        <Link to='penalty' className="menu-item menu-item-l">
                            <div className="centering">
                                <img src="./images/icon02.png" alt="" />
                            </div>

                            <div className="menu-item-name text-center">
                                PLAYGAME
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-6">
                        <Link to="players" className="menu-item menu-item-l">
                            <div className="centering">
                                <img src="./images/icon01.png" alt="" />
                            </div>

                            <div className="menu-item-name text-center">
                                HIRE PLAYER
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-6">
                        <Link to="marketplace" className="menu-item">
                            <div className="centering">
                                <img src="./images/icon03.png" alt="" />
                            </div>

                            <div className="menu-item-name text-center">
                                MARKET
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
