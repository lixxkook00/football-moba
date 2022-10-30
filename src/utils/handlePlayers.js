import swal from '@sweetalert/with-react';
import axios from 'axios'
// import { getValueFromForm } from './handleUtils';

export async function handleGetPlayerbyID(setLoading,navigate,id,setCurrentCartMain) {

    const body = new FormData();

    const res= await axios.post('/players/get-players',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    res?.data?.data?.map((item) => {
                        // console.log('res.data.data',res.data.data)
                        if(item.id === parseInt(id)){
                            setCurrentCartMain(item)
                            return item
                        }
                    })
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

export async function handleGetPlayers(setLoading,navigate,setData,SET_MAINDATA) {

    const body = new FormData();

    const res= await axios.post('/players/get-players',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 200) {
                    setData(res.data.data)
                    SET_MAINDATA(res.data.data)
                    return res.data.data
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
                swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                navigate("/login")
                return ""
            }
            else if (error?.response) {
                return ""
            }
        }
    );       
    setLoading(false)
    return res
}

export async function handleHirePlayers(setLoading,navigate) {

    const body = new FormData();

    const res= await axios.post('/players/hire-players',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status === 201) {
                    setLoading(false)
                    // swal(res.data.msg, "", 'success', 1000, false);
                    return res.data.result
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
                swal(error?.response?.data?.msg, '', 'error', 1000, false);
                return ""
            }
        }
    );       
    
    return res
}

export async function handleKick(id,setLoading,navigate,powerPercent) {
    const body = new FormData();

    body.append("playerId", id)
    body.append("power", powerPercent)

    const res = await axios.post('/players/process-kick',body)
    .then(
        function (response) {
            if(response.status) { 
                if(response.status === 201) {
                    // setLoading(false)
                    // swal(response.data.msg, '', 'success', 1000, false);
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

export async function handleHealingPlayers(id,setLoading,navigate) {

    const body = new FormData();

    body.append("playerId", id)

    const res= await axios.post('/players/healing-player',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status == 201) {
                    setLoading(false)
                    swal(res.data.msg, 'Fee 100 OBA', 'success', 1000, false);

                    setTimeout(() => {
                        window.location.reload();
                    },1500)

                    return res.data
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
                swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
                return ""
            }
        }
    );       
    
    return res
}

export async function handleReEnergyPlayers(id,setLoading,navigate) {

    const body = new FormData();

    body.append("playerId", id)

    const res= await axios.post('/players/re-energy',body)
    .then(
        res => {
            if(res.status) { 
                if(res.status == 201) {
                    setLoading(false)
                    swal(res.data.msg, 'Fee 500 OBA', 'success', 1000, false);

                    setTimeout(() => {
                        window.location.reload();
                    },1500)
                    return res.data
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
                swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
                return ""
            }
        }
    );       
    
    return res
}