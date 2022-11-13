import React , {useState} from 'react'
import './Login.scss'

import { Link , useNavigate } from 'react-router-dom'

import { handleLogIn } from '../../utils/handleUsers'
import LoadingScreen from '../LoadingScreen'

export default function Login() {

    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

    const [typePass,setTypePass] = useState("password")

    const toggleTypePass = () => {
        if(typePass==="password"){
            setTypePass("text")
        }else if(typePass==="text"){
            setTypePass("password")
        }
    }

    let navigate = useNavigate();

    const handleSS = async (e) => {
        setLoading(true)
        const result = await handleLogIn(e,setError,setLoading,navigate)
    }

  return (
    <div className="sign-up centering">

        <LoadingScreen state={loading} />

        <div className="container centering">
            <div className="body col-lg-5 col-md-6 col-12">
                <div className="row">
                    {/* <div className="col-xl-12">
                        <div className="sign-up-title value-price">
                            Sign In
                        </div>
                    </div> */}
                    <div className="form-group-container col-xl-12">
                        <form className="form" id="signUpForm" onSubmit={(e) => handleSS(e)}>
                            <div className="form-group">
                                <div>
                                    <input 
                                        placeholder="Username" 
                                        type="text" 
                                        id="email" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="password-block">
                                    <input 
                                        name="password" 
                                        placeholder="Password" 
                                        type={typePass}
                                        id="password" 
                                        className="form-control" 
                                    />
                                    <div className="password-block-icon" onClick={() => toggleTypePass()}>
                                        <i className="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="form-group-inline form-group">
                                <Link className="link text-white" to="/forgot-password">
                                    Forgot Password?
                                </Link>
                            </div> */}

                            <div className="form-group-inline form-group">
                                <div className="link">
                                    <span className="red-text">
                                        {error}
                                    </span>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="primary-button">
                                   SIGN IN
                                </button>
                            </div>

                            {/* <Link to="/loginwallet" className="form-group centering">
                                <button type="submit" className="primary-button">
                                    <span className="value-gray">
                                         SIGN IN WITH WALLET
                                    </span>
                                </button>
                            </Link> */}

                            {/* <div className="text-center text-white form-group">
                                No Account?&nbsp;
                                <Link className="link" to="/signup">
                                    Sign up here &gt;
                                </Link>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
