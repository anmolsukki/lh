import * as actionTypes from "../ActionTypes/ActonTypes";
import Apiurl from "../../../Config/ApiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import history from '../HistoryAction/ActionHistory';
import { getHeaders } from "../Header/AuthHeader";

export const LegalHelpActions = (data) => {
    let url = Apiurl.concat("/counselling");
    return async dispatch => {
        dispatch(actionTypes.LEGAL_HELP_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Help Request successfully");
            dispatch(actionTypes.LEGAL_HELP_SUCCESS(res));
            if (res.status === 201) {
                toast.info("Submitted!", {
                    autoClose: 1000,
                    onClose: () => history.push(`/pricing/${res.data.data.data._id}`)
                });
            }
        })
        .catch(error => {
            console.log(error, "Help Request error");
            dispatch(actionTypes.LEGAL_HELP_ERROR(error));
            if(error.response.status){
                toast.error(error.response.data.message, {
                    autoClose: 3000
                });
            }
        });
    };
};
