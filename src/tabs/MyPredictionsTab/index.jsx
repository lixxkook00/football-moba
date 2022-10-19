import React from 'react'
import PredictionCart from '../../carts/PredictionCart'
import FormatAmount from '../../components/FormatAmount'
import './MyPredictionsTab.scss'

export default function MyPredictionsTab() {
  return (
    <div className="predictions-tab home">

        <div className="row">
            <div className="col-lg-7 col-md-12">
                <div className="predictions-tab-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <PredictionCart />
                        </div>

                        <div className="col-12">
                            <PredictionCart />
                        </div>

                        <div className="col-12">
                            <PredictionCart />
                        </div>

                        <div className="col-12">
                            <PredictionCart />
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-lg-5 col-md-12">
                <div className="block">
                    <div className="title">
                        WIN
                    </div>
                    <div className="centering">
                        <span className="value-complete">
                            + <FormatAmount amount={1000}/> KICKS
                        </span>
                    </div>
                </div>

                <div className="block">
                    <div className="title">
                        LOSE
                    </div>
                    <div className="centering">
                        <span className="value-fail">
                            - <FormatAmount amount={1000}/> KICKS
                        </span>
                    </div>
                </div>

                <div className="block">
                    <div className="centering">
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                        <div className="title">
                            RESTART
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
