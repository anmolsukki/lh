import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { withTranslation } from 'react-i18next';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextInput } from "./SignUpLoginForm";
import { LhFormValodation } from "../../Utils/FormValidation";
import "../../Assets/StyleModules/PortalTheme.css";

class ForgotPasscode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onStep: 1,
            mobileNumber: "",
            otp: "",
            pin: "",
            confirmPin: "",
            error:{
                mobileNumber: ""
            }
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const data = nextProps.signUpResponse.forgotPin
        const otpData = nextProps.signUpResponse.resetPin
        const setPin = nextProps.signUpResponse.pinSet
        if(data.status === 200){
            this.setState({
                onStep: 2
            })
        }
        if (otpData.status === 200) {
            this.setState({
                onStep: 3
            })
        }
        if(setPin.status === 200) {
            this.props.history.push("/home")
        }
    }

    goToStep = (step) => {
        if(step)
            this.setState({
            onStep: step,
        }) 
    }

    blur = async (name, data) => {
        let response = LhFormValodation(name, data);
        let error = JSON.parse(JSON.stringify(this.state.error));
        if (name === 'mobileNumber') {
            error.mobileNumber = response;
            await this.setState({ error });
        }
        else if (name === 'pin') {
            error.pin = response;
            await this.setState({ error });
        }
    }

    focus = async name => {
        let error = JSON.parse(JSON.stringify(this.state.error));
        if (name === 'mobileNumber') {
            error.mobileNumber = '';
            await this.setState({ error });
        }
        else if (name === 'pin') {
            error.pin = '';
            await this.setState({ error });
        }
    }

    forgotChangeHandler = (e) => {
        const inputLength = e.target.value;
        if(inputLength.length > 0){   
            const nextLength = e.target.nextElementSibling;
            let addClass = 'auth-unfocus-label auth-unfocus';
            nextLength.className = addClass;
        }
        else {
            const nextLength = e.target.nextElementSibling;
            let addClass = 'floating-label';
            nextLength.className = addClass;
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    otpHandler = (e) => {
        if(e.target.value.length === 6) e.target.blur()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setPinHandler = (e) => {
        if(e.target.value.length === 6) e.target.blur()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    forgotSubmit = (e) => {
        e.preventDefault();
        const data = {
            mobileNumber: this.state.mobileNumber
        };
        this.props && this.props.forgotActionCall(data);
    }

    otpSubmit = (e) => {
        const data = {
            mobileNumber: this.state.mobileNumber,
            otp: this.state.otp
        }
        this.props && this.props.forgotPinOtpActionCall(data)
    }

    setPinSubmit = (e) => {
        e.preventDefault();
        const data = {
            pin: this.state.pin,
            confirmPin: this.state.confirmPin
        }
        this.props && this.props.setPinActionCall(data)
    }

    render() {
        return (
            <div>
                <ToastContainer autoClose={3000} />
                <div className="row clear-margins auth-card-margin fade-in">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto auth-bg">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="auth-desc">
                                    <h1 className="headings">{this.props.i18n.language === "eng" ? "Welcome to Lover’s Helpline" : "लवर्स हेल्पलाइन में आपका स्वागत है"}</h1>
                                    <p className="description">{this.props.i18n.language === "eng" ? "Its an initiative by Sakha for all the lovers out there!" : "यह सखा द्वारा सभी प्रेमियों के लिए एक पहल है!"}</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto auth-bg">
                                <div className="row">
                                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto">
                                        {this.state.onStep === 1 ?
                                            <div className="form-structor">
                                                <div className="signup slide-up">
                                                    <h2 className="form-title" onClick={() => this.goToStep(1)}><span>{this.props.i18n.language === "eng" ? "or" : "या"}</span>{this.props.i18n.language === "eng" ? "Login" : "लॉग इन"}</h2>
                                                    <div className="form-holder-signup-forgot">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <TextInput
                                                                    type='text'
                                                                    className='auth-form-control'
                                                                    value={this.state.mobileNumber}
                                                                    name='mobileNumber'
                                                                    onChange={e => this.forgotChangeHandler(e)}
                                                                    maxlength={20}
                                                                    label={this.props.i18n.language === "eng" ?"mobile Number" : "मोबाइल नंबर"}
                                                                    error={this.state.error.mobileNumber}
                                                                    blur={() => this.blur('mobileNumber', this.state.mobileNumber)}
                                                                    focus={() => this.focus('mobileNumber')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
                                                                <button className="auth-submit-btn" onClick={this.forgotSubmit}>{this.props.i18n.language === "eng" ? "Forgot" : "Forgot"}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login">
                                                    <div className="center">
                                                        <h2 className="form-title-forgot"><span>{this.props.i18n.language === "eng" ? "or" : "या"}</span>{this.props.i18n.language === "eng" ? "Forgot Passcode" : "पासकोड भूल गए"}</h2>
                                                    </div>
                                                </div>
                                            </div> :
                                            this.state.onStep === 2 ?
                                            <div className="form-structor">
                                                <div className="signup slide-up">
                                                    <div className="form-holder-signup">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "Mobile Number" : "फ़ोन नंबर"} value={this.state.mobileNumber} readOnly />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "OTP" : "OTP"} value={this.state.otp} name="otp" onChange={(e) => this.otpHandler(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                                                <button className="auth-submit-btn" onClick={this.otpSubmit}>Verify</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login">
                                                    <div className="center">
                                                        <h2 className="form-title"><span>or</span>Verify OTP</h2>
                                                    </div>
                                                </div>
                                            </div> :
                                            this.state.onStep === 3 ?
                                            <div className="form-structor">
                                                <div className="signup slide-up">
                                                    <div className="form-holder-signup">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "PIN" : "पिन"} name="pin" value={this.state.pin} onChange={(e) => this.setPinHandler(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "Confirm Pin" : "पिन की पुष्टि करें"} name="confirmPin" value={this.state.confirmPin} onChange={(e) => this.setPinHandler(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                                                <button className="auth-submit-btn" onClick={this.setPinSubmit}>Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login">
                                                    <div className="center">
                                                        <h2 className="form-title"><span>or</span>Set Pin</h2>
                                                    </div>
                                                </div>
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const signupData = state.CtrSignUp
    return {
        signUpResponse: signupData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        forgotActionCall: (data) => dispatch(actionCreator.ForgotActions(data)),
        forgotPinOtpActionCall: (data) => dispatch(actionCreator.forgotPinOtpAction(data)),
        setPinActionCall: (data) => dispatch(actionCreator.SetPinAction(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ForgotPasscode));
