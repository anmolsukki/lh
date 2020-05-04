import * as actionConstant from "../ActionConstant/ActionConstant";

// Authentication
export const REGISTER_INIT = () => ({ type: actionConstant.SIGN_UP_INIT });
export const REGISTER_SUCCESS = data => ({ type: actionConstant.SIGN_UP_SUCCESS, data: data });
export const REGISTER_ERROR = data => ({ type: actionConstant.SIGN_UP_ERROR, data: data });

export const OTP_CHECK_INIT = () => ({ type: actionConstant.OTP_VERIFY_INIT });
export const OTP_CHECK_SUCCESS = data => ({ type: actionConstant.OTP_VERIFY_SUCCESS, data: data });
export const OTP_CHECK_ERROR = data => ({ type: actionConstant.OTP_VERIFY_ERROR, data: data });

export const PIN_SET_INIT = () => ({ type: actionConstant.SET_PIN_INIT });
export const PIN_SET_SUCCESS = data => ({ type: actionConstant.SET_PIN_SUCCESS, data: data });
export const PIN_SET_ERROR = data => ({ type: actionConstant.SET_PIN_ERROR, data: data });

export const USER_LOGIN_INIT = () => ({ type: actionConstant.LOGIN_USER_INIT });
export const USER_LOGIN_SUCCESS = data => ({ type: actionConstant.LOGIN_USER_SUCCESS, data: data });
export const USER_LOGIN_ERROR = data => ({ type: actionConstant.LOGIN_USER_ERROR, data: data });

export const PIN_FORGOT_INIT = () => ({ type: actionConstant.FORGOT_PIN_INIT });
export const PIN_FORGOT_SUCCESS = data => ({ type: actionConstant.FORGOT_PIN_SUCCESS, data: data });
export const PIN_FORGOT_ERROR = data => ({ type: actionConstant.FORGOT_PIN_ERROR, data: data });

export const PIN_RESET_INIT = () => ({ type: actionConstant.RESET_PIN_INIT });
export const PIN_RESET_SUCCESS = data => ({ type: actionConstant.RESET_PIN_SUCCESS, data: data });
export const PIN_RESET_ERROR = data => ({ type: actionConstant.RESET_PIN_ERROR, data: data });

// Ask Query
export const CONTACT_INIT = () => ({ type: actionConstant.CONTACT_US_INIT });
export const CONTACT_SUCCESS = data => ({ type: actionConstant.CONTACT_US_SUCCESS, data: data });
export const CONTACT_ERROR = data => ({ type: actionConstant.CONTACT_US_ERROR, data: data });

export const SUBSCRIBE_INIT = () => ({ type: actionConstant.SUBSCRIBE_NEWSLATER_INIT });
export const SUBSCRIBE_SUCCESS = data => ({ type: actionConstant.SUBSCRIBE_NEWSLATER_SUCCESS, data: data });
export const SUBSCRIBE_ERROR = data => ({ type: actionConstant.SUBSCRIBE_NEWSLATER_ERROR, data: data });

// Legal Help
export const LEGAL_HELP_INIT = () => ({ type: actionConstant.GET_LEGAL_HELP_INIT });
export const LEGAL_HELP_SUCCESS = data => ({ type: actionConstant.GET_LEGAL_HELP_SUCCESS, data: data });
export const LEGAL_HELP_ERROR = data => ({ type: actionConstant.GET_LEGAL_HELP_ERROR, data: data });

// Give Help
export const GIVE_LH_INIT = () => ({ type: actionConstant.GIVE_HELP_INIT });
export const GIVE_LH_SUCCESS = data => ({ type: actionConstant.GIVE_HELP_SUCCESS, data: data });
export const GIVE_LH_ERROR = data => ({ type: actionConstant.GIVE_HELP_ERROR, data: data });

// Emergency Help
export const EMERGENCY_INIT = () => ({ type: actionConstant.EMERGENCY_HELP_INIT });
export const EMERGENCY_SUCCESS = data => ({ type: actionConstant.EMERGENCY_HELP_SUCCESS, data: data });
export const EMERGENCY_ERROR = data => ({ type: actionConstant.EMERGENCY_HELP_ERROR, data: data });

// Payment Help
export const PAY_INIT = () => ({ type: actionConstant.PAYMENT_INIT });
export const PAY_SUCCESS = data => ({ type: actionConstant.PAYMENT_SUCCESS, data: data });
export const PAY_ERROR = data => ({ type: actionConstant.PAYMENT_ERROR, data: data });