import React , {useState} from 'react'
import './Login.scss'

import swal from '@sweetalert/with-react'

import {Link , useNavigate} from 'react-router-dom'
import { handleRegister } from '../../utils/handleUsers'
import LoadingScreen from '../LoadingScreen'

export default function SignUp() {

    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

    let navigate = useNavigate()

    const handleSignUp = async (e) => {
        const result = await handleRegister(e,setError,setLoading,navigate,swal)
    }

  return (
    <div className="sign-up centering">

        <LoadingScreen state={loading} />

        <div className="container centering">
            <div className="body col-lg-5 col-md-6 col-12">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sign-up-title">
                            <span className="value-price">
                                Register
                            </span>
                        </div>
                    </div>
                    <div className="form-group-container col-xl-12">
                        <form className="form" id="signUpForm" onSubmit={(e) => handleSignUp(e)}>
                            <div className="form-group">
                                <div>
                                    <input placeholder="Name" type="text" id="name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input placeholder="Email" type="text" id="email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input name="password" placeholder="Password" type="password" id="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input name="passwordAgain" placeholder="Password (Again)" type="password" id="passwordAgain" className="form-control" />
                                </div>
                            </div>


                            <div className="form-group">
                                <div>
                                    <input placeholder="Wallet" type="text" id="wallet" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group-inline form-group">
                                <div className="link">
                                    <span className="red-text">
                                        {error}
                                    </span>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="primary-button">
                                    <span className="value-gray">
                                        register
                                    </span>
                                </button>
                            </div>
                            <div className="text-center form-group text-white">
                                Already Registered?&nbsp;
                                <Link className="link" to="/login">
                                    Sign in here &gt;
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
