import React from 'react'
import PredictionCart from '../../carts/PredictionCart'
import './PredictionsTab.scss'

export default function PredictionsTab() {
  return (
    <div className="predictions-tab home">
        <div className="predictions-tab-slide">
            <PredictionCart />
        </div>

        <div className="row">
            <div className="col-md-6 col-12">
                <PredictionCart />
            </div>

            <div className="col-md-6 col-12">
                <PredictionCart />
            </div>

            <div className="col-md-6 col-12">
                <PredictionCart />
            </div>

            <div className="col-md-6 col-12">
                <PredictionCart />
            </div>
        </div>
    </div>
  )
}
