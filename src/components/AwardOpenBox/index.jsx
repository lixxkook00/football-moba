import React from 'react'
import './AwardOpenBox.scss'

export default function AwardOpenBox({reward}) {

    return (
        <div className="award-result">
            {
                reward?.type === "Lucky"
                &&
                <div className="award-result-item award-result-item--lucky centering">
                    <img src="./images/goodluck.png" alt="" />
                </div>
            }

            {
                reward?.type === "Token"
                &&
                <div className="award-result-item">
                    <div className="token">
                        <div className="token-img centering">
                            <img src="./images/token-kichs.png" alt="" />
                        </div>
                        <div className="token-value centering mt-2">
                            <span className="value-price">
                                + 200 OBA
                            </span>
                        </div>
                    </div>
                </div>
            }

            {       
                reward.type === "Player"
                &&
                <div className="award-result-item award-result-item--player">
                    <div className={`football-player-cart football-player-cart--${reward?.rarity} `} >

                        <div className="football-player-cart-infor">
                            <div className="football-player-cart-energy green">
                                <i className="fa-solid fa-droplet"></i>
                                {reward?.durability}
                            </div>

                            <div className="football-player-cart-energy">
                            <i className="fa-solid fa-bolt"></i>
                            {reward?.energy}
                            </div>
                        </div>

                        <div className="football-player-cart-img">
                        <img src={`./images/${reward?.image}`} alt="" />
                        </div>

                        <div className={`football-player-cart-rarity text-center rarity-${reward?.rarity}`}>
                        <img src={`./images/${reward?.rarity}-button.png`} alt="" />
                        </div>
                        
                    </div>
                </div>
            }


        </div>
    )
}
