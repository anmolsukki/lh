import * as actionConstant from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    giveHelp: [],
    isLoading: false,
    error: null
}

const GetLegalHelpReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstant.GIVE_HELP_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.GIVE_HELP_SUCCESS : 
        return {
            ...state,
            giveHelp : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.GIVE_HELP_ERROR : 
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
