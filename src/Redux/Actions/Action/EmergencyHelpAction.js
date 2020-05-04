import * as actionTypes from "../ActionTypes/ActonTypes";
import Apiurl from "../../../Config/ApiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { getHeaders } from "../Header/AuthHeader";

export const EmergencyHelpActions = (data) => {
    let url = Apiurl.concat("/emergency-help");
    return async dispatch => {
        dispatch(actionTypes.EMERGENCY_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Emergency Help Request successfully");
            dispatch(actionTypes.EMERGENCY_SUCCESS(res));
            if (res.status === 201) {
                toast.info("Submitted!", {
                    autoClose: 3000
                });
            }
        })
        .catch(error => {
            console.log(error, "Emergency Help Request error");
            dispatch(actionTypes.EMERGENCY_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};
