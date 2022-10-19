import React from 'react'

import {CanvasJSChart} from 'canvasjs-react-charts'


export default function CircleChart() {

    const options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        data: [{
            type: "doughnut",
            showInLegend: false,
            colorSet: "greenShades",
            indexLabel: "{name} {y}",
            indexLabelFontColor:"#fff",
            indexLabelFontWeight: "bold",
            indexLabelFontSize: 16,
            yValueFormatString: "#'%'",
            dataPoints: [
                { name:"Presale & Liquid",y: 36 ,color: "#566599"},
                { name:"Aidrop ", y: 2,color: "#AE7D99"},
                { name:"Marketing", y: 2 ,color: "#50CDA0"},
                { name:"Pool Reward",y: 60,color: "#941B42" }
            ]
        }]
    }
  return (
    <div className="circhart">
        <div className="free-chartjs">
            <img src="./images/final-logo.png" alt="" />
        </div>
        <CanvasJSChart options = {options}
        />
    </div>
  )
}
