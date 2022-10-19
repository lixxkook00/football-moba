import swal from '@sweetalert/with-react';
import axios from 'axios'
import { getValueFromForm } from './handleUtils';

export async function handleGetMarketList(setLoading,navigate,setData,SET_MAINDATA,SETTOTALITEMFORPAGINATION) {
    const body = new FormData();

    const res= await axios.post('/marketplace/get-marketplace',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    setLoading(false)
                    setData(res.data.data)
                    SET_MAINDATA(res.data.data)
                    SETTOTALITEMFORPAGINATION(res.data.data)
                    return res.data.data
                }

                else { 
                    const errorMess = res;
                    setLoading(false)
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
                setLoading(false)
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
            else if (error?.response) {
                setLoading(false)
                return ""
            }
        }
    );       
    
    return res
}

export async function handleBuy(id,setLoading,navigate) {
    const body = new FormData();

    body.append("playerId", id)

    const res = await axios.post('/marketplace/buy-player',body)
    .then(
        function (response) {
            if(response.status) { 
                if(response.status === 201) {
                    setLoading(false)
                    swal(response.data.msg, '', 'success', 1000, false);
                    setTimeout(() => {
                        window.location.reload();
                    },1500)
                    return response.data
                }

                else { 
                    const errorMess = response;
                    setLoading(false)
                    swal(response.data.msg, '', 'error', 1000, false);
                    return response.data
                }
            }
            else { 
                alert("Error while connect to server !");
            }

        }
    )
    .catch(
    function (error) {
      //console.log('Show error notification!',error.response?.data?.msg)
       if (error?.response?.data?.code==="jwt_error") {
            sessionStorage.clear()
            setLoading(false)
            swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
            navigate("/login")
            return ""
        }
        else if (error?.response) {
            swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
            setLoading(false)
            return ""
        }
    }
  )
    return res
}

export async function handleSell(id,price,setLoading,navigate) {
    const body = new FormData();

    body.append("playerId", id)
    body.append("price", price)

    const res = await axios.post('/marketplace/sell-player',body)
    .then(
        function (response) {
            if(response.status) { 
                if(response.status === 201) {
                    setLoading(false)
                    swal(response.data.msg, '', 'success', 1000, false);
                    setTimeout(() => {
                        window.location.reload();
                    },1500)
                    return response.data
                }

                else { 
                    const errorMess = response;
                    setLoading(false)
                    swal(response.data.msg, '', 'error', 1000, false);
                    return response.data
                }
            }
            else { 
                alert("Error while connect to server !");
            }

        }
    )
    .catch(
    function (error) {
      //console.log('Show error notification!',error.response?.data?.msg)
       if (error?.response?.data?.code==="jwt_error") {
            sessionStorage.clear()
            setLoading(false)
            swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
            navigate("/login")
            return ""
        }
        else if (error?.response) {
            swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
            setLoading(false)
            return ""
        }
    }
  )
    return res
}

export async function handleCancelBuyPlayer(id,setLoading,navigate) {
    const body = new FormData();

    body.append("playerId", id)

    const res = await axios.post('/marketplace/delist-player',body)
    .then(
        function (response) {
            if(response.status) { 
                if(response.status === 201) {
                    setLoading(false)
                    swal(response.data.msg, '', 'success', 1000, false);
                    setTimeout(() => {
                        window.location.reload();
                    },1500)
                    return response.data
                }

                else { 
                    const errorMess = response;
                    // //console.log("loi ne",response)
                    setLoading(false)
                    swal(response.data.msg, '', 'error', 1000, false);
                    return response.data
                }
            }
            else { 
                alert("Error while connect to server !");
            }

        }
    )
    .catch(
    function (error) {
      //console.log('Show error notification!',error.response?.data?.msg)
       if (error?.response?.data?.code==="jwt_error") {
            sessionStorage.clear()
            setLoading(false)
            swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
            navigate("/login")
            return ""
        }
        else if (error?.response) {
            swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
            setLoading(false)
            return ""
        }
    }
  )
    return res
}
