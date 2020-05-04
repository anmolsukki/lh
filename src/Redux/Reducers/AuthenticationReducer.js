import * as actionConstant from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    signUp: [],
    otpVerify: [],
    pinSet: [],
    loginUser: [],
    forgotPin: [],
    resetPin: [],
    isLoading: false,
    error: null
}

const AuthenticationReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstant.SIGN_UP_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.SIGN_UP_SUCCESS : 
        return {
            ...state,
            signUp : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.SIGN_UP_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case actionConstant.OTP_VERIFY_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.OTP_VERIFY_SUCCESS : 
        return {
            ...state,
            otpVerify : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.OTP_VERIFY_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case actionConstant.SET_PIN_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.SET_PIN_SUCCESS : 
        return {
            ...state,
            pinSet : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.SET_PIN_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case actionConstant.LOGIN_USER_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.LOGIN_USER_SUCCESS : 
        return {
            ...state,
            loginUser : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.LOGIN_USER_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case actionConstant.FORGOT_PIN_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.FORGOT_PIN_SUCCESS : 
        return {
            ...state,
            forgotPin : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.FORGOT_PIN_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case actionConstant.RESET_PIN_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.RESET_PIN_SUCCESS : 
        return {
            ...state,
            resetPin : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.RESET_PIN_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default AuthenticationReducer;
