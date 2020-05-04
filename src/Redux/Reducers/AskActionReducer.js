import * as actionConstant from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    contactUs: [],
    subscribe: [],
    isLoading: false,
    error: null
}

const AskActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstant.CONTACT_US_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.CONTACT_US_SUCCESS : 
        return {
            ...state,
            contactUs : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.CONTACT_US_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case actionConstant.SUBSCRIBE_NEWSLATER_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.SUBSCRIBE_NEWSLATER_SUCCESS : 
        return {
            ...state,
            subscribe : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.SUBSCRIBE_NEWSLATER_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default AskActionReducer;
