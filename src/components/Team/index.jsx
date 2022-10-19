import React from 'react'
import './Team.scss'

import FormatAmount from '../FormatAmount'

export default function Team({quantity}) {
  return (
        <div className="team">
            <div className="block">
                <div className="title">
                    Team
                </div>
            
                <div className="team-item">
                    <div className="team-title">
                        Your NTFs
                    </div>
                    <div className="team-value value">
                       {quantity}
                    </div>
                </div>

                <div className="team-item">
                    <div className="team-title">
                        EveryDay Rewards
                    </div>
                    <div className="team-value value">
                        <FormatAmount amount={300}/> KICKS
                    </div>
                </div>

                <div className="team-item">
                    <div className="team-title">
                        Your Rewards
                    </div>
                    <div className="team-value value">
                        <FormatAmount amount={300}/> KICKS
                    </div>
                </div>
            </div>
        </div>
    )
}
