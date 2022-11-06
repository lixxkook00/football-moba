import React from 'react'

export default function DemoPlayerKick({currentCartMain}) {
  return (
    <div className="demo centering">
        <div className={`football-player-cart football-player-cart--${currentCartMain?.rarity} active`} >

            <div className="football-player-cart-infor">
                <div className="football-player-cart-energy green">
                    <i className="fa-solid fa-droplet"></i>
                    {currentCartMain?.durability}
                </div>

                <div className="football-player-cart-energy">
                <i className="fa-solid fa-bolt"></i>
                {currentCartMain?.energy}
                </div>
            </div>

            <div className="football-player-cart-img">
            <img src={`./images/${currentCartMain?.image}`} alt="" />
            </div>

            <div className={`football-player-cart-rarity text-center rarity-${currentCartMain?.rarity}`}>
                <img src={`./images/${currentCartMain?.rarity}-button.png`} alt="" />
            </div>
        </div>
    </div>
  )
}
