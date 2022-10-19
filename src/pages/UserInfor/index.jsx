import React , { useState } from 'react'
import './UserInfor.scss'

import Account from '../../components/Account'
import ChangePassword from '../../components/ChangePassword'

export default function UserInfor() {

    const [activeTab,setActiveTab] = useState("account")

    return (
        <div className="home">
            <div className="userinfor">
                <div className="control centering">
                    <div className={`control-item primary-button ${activeTab === "account" ? "active" : ""}`}  onClick={() => setActiveTab("account")}>
                        Account
                    </div>

                    <div className={`control-item primary-button ${activeTab === "changePass" ? "active" : ""}`} onClick={() => setActiveTab("changePass")}>
                        Change Password
                    </div>
                </div>
            </div>

            {
                activeTab === "account"
                &&
                <Account />
            }

            {
                activeTab === "changePass"
                &&
                <ChangePassword />
            }

        </div>
    )
}
