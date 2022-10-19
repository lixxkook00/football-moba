import React,{useState,useEffect,useRef} from 'react'
import './SuperVipSlider.scss'

export default function SuperVipSlider() {
  const [percent,setPercent] = useState(0)

  const sliderComponent = useRef();

    useEffect(() => {
      const hanldeSlider = () => {
        let distanceFromTop = sliderComponent.current?.getBoundingClientRect?.().y;
        let heightComponents = sliderComponent.current?.clientHeight;

        let thisArea = distanceFromTop+heightComponents

        if(thisArea<=heightComponents && thisArea >0){
              setPercent(100-((thisArea/heightComponents)*100))
              // console.log(100-((thisArea/heightComponents)*100)+"%")
          }
      }

      // clean up code
      window.removeEventListener('scroll', hanldeSlider);
      window.addEventListener('scroll', hanldeSlider, { passive: true });
      
      return () => window.removeEventListener('scroll', hanldeSlider);
    }, [percent]);

  return (
    <div className="super-slider" ref={sliderComponent}>

      {/* SLIDER */}
      <div className="super-slider-content">
        <div 
          className="super-slider-content-wrap" 
          style={{
            transform: `translateX(${-63+percent}%)`
          }}>
          {/* ---- */}
          <div className="super-slider-img">
            <img src="./images/NFT - 01.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 02.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 03.png" alt="" />
          </div>
          <div className="super-slider-img">
           <img src="./images/NFT - 04.png" alt="" />
          </div>
          {/* ---- */}
          <div className="super-slider-img">
            <img src="./images/NFT - 05.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 06.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 07.png" alt="" />
          </div>
          <div className="super-slider-img">
           <img src="./images/NFT - 08.png" alt="" />
          </div>
          {/* ---- */}
          <div className="super-slider-img">
            <img src="./images/NFT - 09.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 10.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 11.png" alt="" />
          </div>
          <div className="super-slider-img">
           <img src="./images/NFT - 12.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 13.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 14.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 15.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 16.png" alt="" />
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="super-slider-content">
        <div className="super-slider-content-wrap super-slider-content-wrap-reverse" style={{transform: `translateX(${5-percent}%)`,transformStyle: 'preserve-3d'}}>
          <div className="super-slider-img">
            <img src="./images/NFT - 01.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 02.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 03.png" alt="" />
          </div>
          <div className="super-slider-img">
           <img src="./images/NFT - 04.png" alt="" />
          </div>
          {/* ---- */}
          <div className="super-slider-img">
            <img src="./images/NFT - 05.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 06.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 07.png" alt="" />
          </div>
          <div className="super-slider-img">
           <img src="./images/NFT - 08.png" alt="" />
          </div>
          {/* ---- */}
          <div className="super-slider-img">
            <img src="./images/NFT - 09.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 10.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 11.png" alt="" />
          </div>
          <div className="super-slider-img">
           <img src="./images/NFT - 12.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 13.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 14.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 15.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/NFT - 16.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
