
import swal from '@sweetalert/with-react';
import axios from 'axios'
import { getValueFromForm } from './handleUtils';

export async function handleGetUserTransaction(navigate) {
    // e.preventDefault();

    const token = sessionStorage.getItem('token')

    const res = await axios.post('/users/get-transaction',{ headers: {"Authorization" : `Bearer ${token}`} })
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