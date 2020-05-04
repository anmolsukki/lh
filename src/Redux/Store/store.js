import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AuthenticationReducer from "../Reducers/AuthenticationReducer";
import ContactUsReducer from "../Reducers/AskActionReducer";
import LegalHelpReducer from "../Reducers/GetLegalHelpReducer";
import EmergencyHelpReducer from "../Reducers/EmergencyHelpReducer";
import GiveHelpReducer from "../Reducers/GiveHelpReducer";
import PaymentReducer from "../Reducers/PaymentReducer"

const reducer = combineReducers({
    CtrSignUp: AuthenticationReducer,
    CtrContactUs: ContactUsReducer,
    CtrLegalHelp: LegalHelpReducer,
    CtrEmergencyHelp: EmergencyHelpReducer,
    CtrGiveHelp: GiveHelpReducer,
    CtrPayment: PaymentReducer
});

const logger = store => {
    return next => {
        return action => {
            // console.log("[Middleware] dispatching", action);
            const result = next(action);
            // console.log("[Middleware] next state", store.getState());
            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
