import React , {useEffect, useState} from 'react'
import './Filter.scss'

export default function Filter({setFilterOption}) {

  const [idActive,setIdActive] = useState(0)

  useEffect(() => {
    if(idActive===0){
      setFilterOption("All")
    }
    if(idActive===1){
      setFilterOption("Common")
    }
    if(idActive===2){
      setFilterOption("Rare")
    }
    if(idActive===3){
      setFilterOption("Legend")
    }
    
  },[idActive])

  return (
     <div className="tabs-scroll mt-40">
        <div className="tabs-navs">
            <button onClick={() => setIdActive(0)} className="tabs-nav">
              All
            </button>
            
            <button onClick={() => setIdActive(1)} className="tabs-nav">
              Common
            </button>
            
            <button onClick={() => setIdActive(2)} className="tabs-nav">
              Rare
            </button>
            
            <button onClick={() => setIdActive(3)} className="tabs-nav">
              Legend
            </button>

          <div className="bg" style={{left: `${idActive * 25}%`, right:`${(4-idActive-1) * 25}%`}}></div>
        </div>
      </div>
  )
}
