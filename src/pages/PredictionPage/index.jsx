import React , { useState } from 'react'
import MyPredictionsTab from '../../tabs/MyPredictionsTab'
import PredictionsTab from '../../tabs/PredictionsTab'
import './Prediction.scss'

export default function PredictionPage() {

  const [activeTab,setActiveTab] = useState("predictions")

  return (
    <div className="prediction home">
      <div className="container">

        <div className="control centering">
            <div className={`control-item primary-button ${activeTab === "predictions" ? "active" : ""}`}  onClick={() => setActiveTab("predictions")}>
                Predictions
            </div>

            <div className={`control-item primary-button ${activeTab === "mypredictions" ? "active" : ""}`} onClick={() => setActiveTab("mypredictions")}>
                My Predictions
            </div>
        </div>

        {
          activeTab === "predictions"
          &&
          <PredictionsTab />
        }

        {
          activeTab === "mypredictions"
          &&
          <MyPredictionsTab />
        }

      </div>
    </div>
  )
}
