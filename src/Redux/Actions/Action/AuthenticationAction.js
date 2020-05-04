import * as actionTypes from "../ActionTypes/ActonTypes";
import Apiurl from "../../../Config/ApiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import history from '../HistoryAction/ActionHistory';
import { getHeaders } from "../Header/AuthHeader";

export const SignUpActions = (data) => {
    let url = Apiurl.concat("/users/signup");
    return async dispatch => {
        dispatch(actionTypes.REGISTER_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(false)})
        .then(res => {
            console.log(res, "Sign-Up successfully");
            dispatch(actionTypes.REGISTER_SUCCESS(res));
            if(res.status){
                toast.success(res.data.message, {
                    autoClose: 3000
                });
            }
        })
        .catch(error => {
            console.log(error, "Sign-Up error");
            dispatch(actionTypes.REGISTER_ERROR(error));
            if(error.response.data.message) {
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};

export const OtpActions = (data) => {
    let url = Apiurl.concat("/users/signup-verify");
    return async dispatch => {
        dispatch(actionTypes.OTP_CHECK_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(false)})
        .then(res => {
            console.log(res, "OTP Verify successfully");
            dispatch(actionTypes.OTP_CHECK_SUCCESS(res));
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.data.fullName);
            localStorage.setItem("mobile", res.data.data.mobileNumber);
            if(res.status) {
                toast.success(res.data.message, {
                    autoClose: 3000
                });
            }
        })
        .catch(error => {
            console.log(error, "OTP Verify error");
            dispatch(actionTypes.OTP_CHECK_ERROR(error));
            if(error.response.data.message) {
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};

export const SetPinAction = (data) => {
    let url = Apiurl.concat("/users/set-pin");
    return async dispatch => {
        dispatch(actionTypes.PIN_SET_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "PIN Set successfully");
            dispatch(actionTypes.PIN_SET_SUCCESS(res));
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.data.fullName);
            localStorage.setItem("mobile", res.data.data.mobileNumber);
            if(res.status) {
                toast.success(res.data.message, {
                    autoClose: 3000
                });
            }
        })
        .catch(error => {
            console.log(error, "PIN Set error");
            dispatch(actionTypes.PIN_SET_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};

export const LoginActions = (data) => {
    let url = Apiurl.concat("/users/login");
    return async dispatch => {
        dispatch(actionTypes.USER_LOGIN_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "User Login successfully");
            dispatch(actionTypes.USER_LOGIN_SUCCESS(res));
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.data.fullName);
            localStorage.setItem("mobile", res.data.data.mobileNumber);
            if(res.status === 200) {
                toast.success(res.data.message, {
                    autoClose: history.push(localStorage.getItem("redirectUrl"))
                });
            }
            else {
                toast.error("Something went wrong!", {
                    autoClose: 3000
                });
            }
        })
        .catch(error => {
            console.log(error, "User Login error");
            dispatch(actionTypes.USER_LOGIN_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};

export const ForgotActions = (data) => {
    let url = Apiurl.concat("/users/forgot-pin");
    return async dispatch => {
        dispatch(actionTypes.PIN_FORGOT_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Forgot successfully");
            dispatch(actionTypes.PIN_FORGOT_SUCCESS(res));
            if(res.status === 200) {
                toast.success(res.data.message, {
                    autoClose: 3000
                });
            }
            else{
                toast.error("Something Went Wrong!", {
                    autoClose: 3000
                })
            }
        })
        .catch(error => {
            console.log(error, "Forgot error");
            dispatch(actionTypes.PIN_FORGOT_ERROR(error));
            if(error.response.data.message){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};

export const forgotPinOtpAction = (data) => {
    let url = Apiurl.concat("/users/reset-pin");
    return async dispatch => {
        dispatch(actionTypes.PIN_RESET_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Forgot successfully");
            dispatch(actionTypes.PIN_RESET_SUCCESS(res));
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.data.fullName);
            localStorage.setItem("mobile", res.data.data.mobileNumber);
            if (res.status === 200) {
                toast.success(res.data.message, {
                    autoClose: 3000
                });
            }
            else{
                toast.error("Something Went Wrong!", {
                    autoClose: 3000
                })
            }
        })
        .catch(error => {
            console.log(error, "Forgot error");
            dispatch(actionTypes.PIN_RESET_ERROR(error));
            if(error.response.data.message){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};
