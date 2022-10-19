import React ,{useState , useEffect} from 'react'

import {handleGetInforUser} from '../../utils/handleUsers'
import { useNavigate } from 'react-router-dom';

export default function Account() {

    let navigate = useNavigate();

    const [inforUser,setInforUser] = useState()

    const handleGetInfor = async () => {
        const result = await handleGetInforUser(navigate)
        await setInforUser(result)
    }

    useEffect(() => {
        handleGetInfor()
    },[])

    return (
        <div className="acount">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="userinfor-title">
                            Acount
                        </div>
                    </div>
                    <div className="col-xl-12 centering">
                        <form className="form user-form" id="signUpForm">
                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Email:
                                    </div>
                                    <input 
                                        placeholder="Email" 
                                        type="text" 
                                        id="email" 
                                        className="form-control"
                                        value={inforUser?.data.email}    
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Name:
                                    </div>
                                    <input 
                                        placeholder="Name" 
                                        type="text" 
                                        id="firstname" 
                                        className="form-control"
                                        value={inforUser?.data.name}     
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Wallet Address:
                                    </div>
                                    <input 
                                        placeholder="Wallet Address" 
                                        type="text" 
                                        id="lastname" 
                                        className="form-control"
                                        value={inforUser?.data.wallet}     
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Confirm Email Status:
                                    </div>
                                    <div className="form-control">

                                        {
                                            inforUser?.verifyInfo === "0"
                                            ?
                                                <div className="confirm-email not">
                                                    <i className="fa-solid fa-circle-exclamation"></i>
                                                    <div className="confirm-email-title">
                                                        Please confirm your email
                                                    </div>
                                                </div>
                                            :
                                                <div className="confirm-email complete">
                                                    <i className="fa-solid fa-circle-check"></i>
                                                    <div className="confirm-email-title">
                                                        Your Email has already been confirmed.
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>

                            

                            <div className="form-group-inline form-group">
                                <div className="link">
                                    <span className="red-text">
                                        
                                    </span>
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">
                                    <div className="text">SUBMIT</div>
                                </button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
