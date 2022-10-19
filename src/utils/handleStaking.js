import swal from '@sweetalert/with-react';
import axios from 'axios'
// import { getValueFromForm } from './handleUtils';

export async function handleGetStakeInfor(setLoading,navigate) {

    const body = new FormData();

    const res= await axios.post('/staking/get-staking',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    return res.data
                }

                else { 
                    const errorMess = res;
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
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                // setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
            else if (error?.response) {
                // setLoading(false)
                return ""
            }
        }
    );       
    setLoading(false)
    return res
}

export async function handleStake(setLoading,navigate) {

    const body = new FormData();

    const res= await axios.post('/staking/stake-token',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 201) {
                    swal(res.data.msg, res.data.claim, 'success', 1000, false);
                    setTimeout(() => {
                        window.location.reload()
                    },1500)
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
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                // setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
            else if (error?.response) {
                // setLoading(false)
                swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
                return ""
            }
        }
    );       
    setLoading(false)
    return res
}

export async function handleClaimStake(setLoading,navigate,sticketID) {

    const body = new FormData();
    body.append("ticketId", sticketID)

    const res= await axios.post('/staking/claim-stake',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    swal(res.data.msg, res.data.claim, 'success', 1000, false);
                    setTimeout(() => {
                        window.location.reload()
                    },1500)
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
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                // setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
            else if (error?.response) {
                // setLoading(false)
                return ""
            }
        }
    );       
    setLoading(false)
    return res
}

export async function handleOpenBox(setLoading,navigate,position) {

    const body = new FormData();
    body.append("position", position)

    const res= await axios.post('/staking/open-chest',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    // swal(res.data.msg, res.data.claim, 'success', 1000, false);
                    // setTimeout(() => {
                    //     window.location.reload()
                    // },1500)
                    setLoading(false)
                    // console.log("this award hereeeeee : ",res.data)
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
            if (error?.response?.data?.code==="jwt_error") {
                sessionStorage.clear()
                // setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
            else if (error?.response) {
                // setLoading(false)
                return ""
            }
        }
    );       
    setLoading(false)
    return res
}