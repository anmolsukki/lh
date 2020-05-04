import * as actionTypes from "../ActionTypes/ActonTypes";
import Apiurl from "../../../Config/ApiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { getHeaders } from "../Header/AuthHeader";

export const PaymentActions = (data) => {
    let url = Apiurl.concat("/payments");
    return async dispatch => {
        dispatch(actionTypes.PAY_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Payment successfully");
            dispatch(actionTypes.PAY_SUCCESS(res));
        })
        .catch(error => {
            console.log(error, "PAyment error");
            dispatch(actionTypes.PAY_ERROR(error));
            if(error.response){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};
