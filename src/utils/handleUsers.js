
import swal from '@sweetalert/with-react';
import axios from 'axios'
import { getValueFromForm } from './handleUtils';

export async function handleChangePassword(e,setError,setLoading,navigate) {
    e.preventDefault();

    const email = getValueFromForm(e,"email")
    const passWord = getValueFromForm(e,"password")

    const body = new FormData();

    body.append("email", email)
    body.append("password", passWord)

    const res= await axios.post('/users/login',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    sessionStorage.setItem('token',res.data.token)
                    sessionStorage.setItem('addressWallet',res.data.user.wallet)
                    
                    setError("")
                    setLoading(false)
                    navigate("/home")
                    return ""
                }

                else { 
                    const errorMess = res;
                    setError(errorMess)
                    setLoading(false)
                    return errorMess
                }
            }
            else { 
                alert("Error while connect to server !");
            }
            
        }
    )
    .catch(
        error => {
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return error?.response;
            }
            else if (error?.response) {
                setLoading(false)
                setError(error?.response?.data?.msg)
                return error?.response;
            }
        }
    );       
    
    
}

export async function handleGetInforUser(navigate) {
    // e.preventDefault();

    const token = sessionStorage.getItem('token')

    const res = await axios.post('/users/get-user',{ headers: {"Authorization" : `Bearer ${token}`} })

    .then(
        res => {
            if(res.status) {
                if(res.status === 200) {
                    // setLoading(false)
                    // //console.log("dkm iunfoir",res.data)
                    return res.data
                }
                else { 
                    const errorMess = res;
                    // setLoading(false)
                    return ""
                }
            }
            else { 
                alert("Error while connect to server !");
            }
        }
    )
    .catch(
        error => {
            // TokenExpiredError
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                // swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
        }
    );
    
    return res
}

export async function handleLogIn(e,setError,setLoading,navigate) {
    e.preventDefault();

    let email = getValueFromForm(e,"email")
    const passWord = getValueFromForm(e,"password")

    // hack motherfucker er
    if(email === "admin"){
        email = "admin@gmail.com"
    }

    const body = new FormData();

    body.append("email", email)
    body.append("password", passWord)

    const res= await axios.post('/users/login',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    sessionStorage.setItem('token',res.data.token)
                    sessionStorage.setItem('addressWallet',res.data.user.wallet)
                    
                    setError("")
                    setLoading(false)
                    window.location.href = "/"
                    return ""
                }

                else { 
                    const errorMess = res;
                    setError(errorMess)
                    setLoading(false)
                    return errorMess
                }
            }
            else { 
                alert("Error while connect to server !");
            }
            
        }
    )
    .catch(
        error => {
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return error?.response;
            }
            else if (error?.response) {
                setLoading(false)
                setError(error?.response?.data?.msg)
                return error?.response;
            }
        }
    );       
    
    
}

export async function handleLoginWallet(e,setError,setLoading,navigate) {
    e.preventDefault();

    const wallet = getValueFromForm(e,"wallet")
    const passWord = getValueFromForm(e,"password")

    const body = new FormData();

    body.append("wallet", wallet)
    body.append("password", passWord)

    //console.log(wallet,passWord)

    const res= await axios.post('/users/login-wallet',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    // set value to sessionStorage
                    sessionStorage.setItem('token',res.data.token)
                    sessionStorage.setItem('addressWallet',res.data.user.wallet)

                    // clear error message
                    setError("")

                    setLoading(false)

                    // redirect to home page
                    navigate("/home")
                    return ""
                }

                else { 
                    const errorMess = res;
                    setError(errorMess)
                    setLoading(false)
                    return errorMess
                }
            }
            else { 
                alert("Error while connect to server !");
            }
            
        }
    )
    .catch(
        error => {
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return error?.response;
            }
            if (error?.response) {
                setLoading(false)
                setError(error?.response?.data?.msg)
                return error?.response;
            }
        }
    );       
    
}

export function handleLogout(navigate){
    sessionStorage.clear()
    navigate("/login")
}

export async function handleRegister(e,setError,setLoading,navigate,swal) {
    e.preventDefault();

    const name = getValueFromForm(e,"name")
    const email = getValueFromForm(e,"email")
    const password = getValueFromForm(e,"password")
    const confirmPassword = getValueFromForm(e,"passwordAgain")
    const wallet = getValueFromForm(e,"wallet")

    const body = new FormData();

    body.append("name", name)
    body.append("email", email)
    body.append("password", password)
    body.append("confirmPassword", confirmPassword)
    body.append("wallet", wallet)

    //console.log(email,password)

    const res= await axios.post('/users/register',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 201) {
                    setError("")
                    setLoading(false)

                    swal('Sign up Complete!! ', 'Check your email for confirm code', 'success', 1000, false);

                    // Redirect    
                    setTimeout(() => {
                        navigate("/login");
                    },1500)
                    return ""
                }

                else { 
                    const errorMess = res;
                    setError(errorMess)
                    setLoading(false)
                    return errorMess
                }
            }
            else { 
                alert("Error while connect to server !");
            }
            
        }
    )
    .catch(
        error => {
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return error?.response;
            }
            if (error?.response) {
                setLoading(false)
                setError(error?.response?.data?.msg)
                return error?.response;
            }
        }
    );       
    
}