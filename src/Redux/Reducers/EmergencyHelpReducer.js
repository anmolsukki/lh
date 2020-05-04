import * as actionConstant from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    emergencyHelp: [],
    isLoading: false,
    error: null
}

const GetLegalHelpReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstant.EMERGENCY_HELP_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.EMERGENCY_HELP_SUCCESS : 
        return {
            ...state,
            emergencyHelp : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.EMERGENCY_HELP_ERROR : 
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
