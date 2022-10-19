import axios from 'axios'

export async function handleGetServerConfig(navigate,setLoading) {
    // e.preventDefault();

    const token = sessionStorage.getItem('token')

    const res = await axios.post('/admin/get-configs',{ headers: {"Authorization" : `Bearer ${token}`} })

    .then(
        res => {
            if(res.status) {
                if(res.status === 200) {
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
    
    setLoading(false)
    return res
}