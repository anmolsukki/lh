import * as actionConstant from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    legalHelp: [],
    isLoading: false,
    error: null
}

const GetLegalHelpReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstant.GET_LEGAL_HELP_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.GET_LEGAL_HELP_SUCCESS : 
        return {
            ...state,
            legalHelp : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.GET_LEGAL_HELP_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default GetLegalHelpReducer;
