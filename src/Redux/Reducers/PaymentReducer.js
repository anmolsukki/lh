import * as actionConstant from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    payReducer: [],
    isLoading: false,
    error: null
}

const PaymentReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstant.PAYMENT_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case actionConstant.PAYMENT_SUCCESS : 
        return {
            ...state,
            payReducer : action.data ? action.data : null,
            isLoading : false
        };
        case actionConstant.PAYMENT_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default PaymentReducer;
