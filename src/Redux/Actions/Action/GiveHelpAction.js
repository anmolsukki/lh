import * as actionTypes from "../ActionTypes/ActonTypes";
import Apiurl from "../../../Config/ApiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { getHeaders } from "../Header/AuthHeader";

export const GiveHelpActions = (data) => {
    let url = Apiurl.concat("/give-help");
    return async dispatch => {
        dispatch(actionTypes.GIVE_LH_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Give Help Request successfully");
            dispatch(actionTypes.GIVE_LH_SUCCESS(res));
            if (res.status === 201) {
                toast.info("Information Submitted!", {
                    autoClose: 2000,
                    onClose: () => window.location.reload()
                });
            }
        })
        .catch(error => {
            console.log(error, "Give Help Request error");
            dispatch(actionTypes.GIVE_LH_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};
