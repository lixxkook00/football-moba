import swal from '@sweetalert/with-react';
import axios from 'axios'
import { connectWallet } from '../ethereum/connectWallet';
import { depositToWallet } from '../ethereum/walletController';
import { Web3Provider } from '../ethereum/web3Provider';
import { handleGetInforUser } from './handleUsers';

export async function handleWidthDraw(amount,faCode, setLoading, navigate, handleClose) {

     const body = new FormData();

        body.append("amount", amount)
        body.append("twofa", faCode)

        const res = await axios.post('/wallet/withdrawToken', body)
            .then(
                res => {
                    if (res.status) {
                        if (res.status === 201) {
                            swal(res.data.msg, '', 'success', 1000, false);
                            //console.log(res.data.msg)
                            setLoading(false)
                            handleClose()

                            setTimeout(() => {
                                window.location.reload()
                            }, 1500)

                            return ""
                        }
                        else {
                            const errorMess = res;
                            swal(res.data.msg, '', 'error', 1000, false);
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
                    if (error?.response?.data?.code === "jwt_error") {
                        sessionStorage.clear()
                        setLoading(false)
                        swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                        navigate("/login")
                        return error?.response;
                    }
                    else if (error?.response) {
                        setLoading(false)
                        swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
                        // setError(error?.response?.data?.msg)
                        return error?.response;
                    }
                }
            );
        setLoading(false)


    setLoading(false)
}


export async function beforeDeposit(amount, setLoading, navigate, handleClose) {
    const body = new FormData();
    body.append("amount", amount)
    const res = await axios.post('/wallet/checkDepositToken', body)
        .then(
            res => {
                // console.log('res', res);
                if (res.status) {
                    if (res.status === 200) {
                        return true
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }

            }
        )
        .catch(
            error => {
                if (error?.response?.data?.code === "jwt_error") {
                    sessionStorage.clear()
                    setLoading(false)
                    swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                    navigate("/login")
                    return false;
                }
                else if (error?.response) {
                    setLoading(false)
                    swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
                    // setError(error?.response?.data?.msg)
                    return false;
                }
            }
        );
    setLoading(false)
    return res;
}
export async function handleWidthDeposit(amount, setLoading, navigate, handleClose) {
    const body = new FormData();
    body.append("amount", amount)
    const res = await axios.post('/wallet/depositToken', body)
        .then(
            res => {
                // console.log('res', res);
                if (res.status) {
                    if (res.status === 201) {
                        swal(res.data.msg, '', 'success', 1000, false);
                        //console.log(res.data.msg)
                        setLoading(false)
                        handleClose()

                        setTimeout(() => {
                            window.location.reload()
                        }, 1500)
                        return ""
                    }
                    else {
                        const errorMess = res;
                        swal(res.data.msg, '', 'error', 1000, false);
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
                if (error?.response?.data?.code === "jwt_error") {
                    sessionStorage.clear()
                    setLoading(false)
                    swal(error?.response?.data?.msg, 'Please login again', 'error', 1000, false);
                    navigate("/login")
                    return error?.response;
                }
                else if (error?.response) {
                    setLoading(false)
                    swal(error?.response?.data?.msg, 'Please try again', 'error', 1000, false);
                    // setError(error?.response?.data?.msg)
                    return error?.response;
                }
            }
        );
    setLoading(false)
}



export async function handleConnectWallet(navigate) {
    try {
        const web3 = await Web3Provider();
        const walletConnect = await connectWallet();
        const user = await handleGetInforUser(navigate);
        // console.log('wallet connect', walletConnect);
        // console.log('user', user);
        if (!walletConnect || !user) {
            swal('You need connect metamask first !', 'Please try again', 'error', 1000, false);
            return false;
        }
        else if (!user?.data?.wallet || (user?.data?.wallet) != web3.utils.toChecksumAddress(walletConnect)) {
            swal("Connect wrongs, Please connect to the wallet associated with the account", 'Please try again', 'error', 1000, false);
            await window.ethereum._handleAccountsChanged(user?.data?.wallet);
            return false;
        }
        return true;
    }
    catch (error) {
        alert(error);
        return false;
    }

}

