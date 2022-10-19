import React , {useState} from 'react'
import './SignIn.scss'

import swal from '@sweetalert/with-react'

import LoadingScreen from '../LoadingScreen'

import {Link} from 'react-router-dom'

export default function ForgotPassword() {
    const [loading,setLoading] = useState(false)


    const handleForetPassword = async (e) => {
        // setLoading(true)
        
        // e.preventDefault()
        // const result = await forgetPassword(e)

        // if(result.data.status==200){
        //     setLoading(false)
        //     swal(result.data.message, '', 'success', 1000, false);
        // }else{
        //     setLoading(false)
        //     swal(result.data.message, '', 'error', 1000, false);
        // }
    }

    return (
        <div className="sign-up centering">
            <LoadingScreen state={loading}/>    

            <div className="container centering">
                <div className="body col-lg-5 col-md-6 col-12">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sign-up-title value-price">
                                Forgot Password
                            </div>
                        </div>
                        <div className="form-group-container col-xl-12">
                            <form className="form" id="signUpForm" onSubmit={(e) => handleForetPassword(e)}>
                                <div className="form-group">
                                    <div>
                                        <input 
                                            name="email" 
                                            placeholder="Email" 
                                            type="email" 
                                            id="email" 
                                            className="form-control" 
                                        />
                                    </div>
                                </div>

                                <div className="form-group-inline form-group">
                                    <div className="link">
                                        <span className="red-text">
                                            {/* {error} */}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn primary-button btn-block">
                                        <div className="text">GET CONFIRM EMAIL</div>
                                    </button>
                                </div>
                                <div className="tac form-group">
                                <Link className="link" to="/login">
                                    Login here &gt;
                                </Link>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
