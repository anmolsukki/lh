import * as actionTypes from "../ActionTypes/ActonTypes";
import Apiurl from "../../../Config/ApiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import history from '../HistoryAction/ActionHistory';
import swal from 'sweetalert';
import { getHeaders } from "../Header/AuthHeader";

export const ContactUsActions = (data) => {
    let url = Apiurl.concat("/queries");
    return async dispatch => {
        dispatch(actionTypes.CONTACT_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Contact Us successfully");
            dispatch(actionTypes.CONTACT_SUCCESS(res));
            if(res.status === 200){
                swal({
                    title: "Success",
                    icon: "success",
                    dangerMode: false,
                    button: "OK"
                })
                .then((result => {
                    if(result) {
                        history.push("/home")
                    }
                }));
            }
        })
        .catch(error => {
            console.log(error, "Contact Us error");
            dispatch(actionTypes.CONTACT_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};

export const SubscribeNewslatter = (data) => {
    let url = Apiurl.concat("/newsletter");
    return async dispatch => {
        dispatch(actionTypes.SUBSCRIBE_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Subscribe successfully");
            dispatch(actionTypes.SUBSCRIBE_SUCCESS(res));
            toast.success(res.data.message, {
                autoClose: 3000
            });
        })
        .catch(error => {
            console.log(error, "Subscribe error");
            dispatch(actionTypes.SUBSCRIBE_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};
