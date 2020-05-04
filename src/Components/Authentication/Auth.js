import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { withTranslation } from 'react-i18next';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextInput } from "./SignUpLoginForm";
import { Link } from "react-router-dom";
import { LhFormValodation } from "../../Utils/FormValidation";
import "../../Assets/StyleModules/PortalTheme.css";

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onStep: 1,
            parms: "",
            login: {
                mobileNumber: "",
                pin: ""
            },
            signUp: {
                fullName: "",
                countryCode: "+91",
                mobileNumber: "",
                email: "",
                age: "",
                gender: ""
            },
            signupProcess: {
                otp: "",
                pin: "",
                confirmPin: ""
            },
            error:{
                mobileNumber: "",
                pin: "",
                signUp:{
                    fullName:'',
                    email:'',
                    mobileNumber:'',
                    age:''
                },
            },
        }
    }

    componentDidMount = () => {
        const str = this.props.match.params.id
        if(str === "home") {
            this.setState({
                parms: "/home"
            })
        }
        if(str === "Journalist") {
            this.setState({
                parms: `/give-help-form/${str}`
            })
        }
        else if (str === "NGO") {
            this.setState({
                parms: `/give-help-form/${str}`
            })
        }
        else if (str === "Lawyer") {
            this.setState({
                parms: `/give-help-form/${str}`
            })
        }
        else if (str === "Individual") {
            this.setState({
                parms: `/give-help-form/${str}`
            })
        }
        else if(str.startsWith("GH") || str.startsWith("LH")) {
            this.setState({
                parms: `/get-help-form/${str}`
            })
        }

        window.onpopstate=function() {
            window.location.reload()
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const signUpProps = nextProps.signUpResponse.signUp
        const otpProps = nextProps.signUpResponse.otpVerify
        const setPin = nextProps.signUpResponse.pinSet
        if (signUpProps.status === 200) {
            this.setState({
                onStep: 3
            })
        }
        if (otpProps.status === 200) {
            this.setState({
                onStep: 4
            })
        }
        if (setPin.status === 200) {
            this.props.history.push(this.state.parms)
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
        else if (name === 'fullName') {
            error.signUp.fullName = response;
            await this.setState({ error });
        }
        else if (name === 'email') {
            error.signUp.email = response;
            await this.setState({ error });
        }
        else if (name === 'signUpMobile') {
            error.signUp.mobileNumber = response;
            await this.setState({ error });
        }
        else if (name === 'age') {
            error.signUp.age = response;
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
        else if (name === 'fullName') {
            error.signUp.fullName = '';
            await this.setState({ error });
        }
        else if (name === 'email') {
            error.signUp.email = '';
            await this.setState({ error });
        }
        else if (name === 'signUpMobile') {
            error.signUp.mobileNumber = '';
            await this.setState({ error });
        }
        else if (name === 'age') {
            error.signUp.age = '';
            await this.setState({ error });
        }
    }

    signUpHandler = async(e) => {
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
        await this.setState({
            signUp: {
                ...this.state.signUp,
                [e.target.name]: e.target.value
            }
        })
    }

    otpHandler = (e) => {
        if(e.target.value.length === 6) e.target.blur()
        this.setState({
            signupProcess: {
                ...this.state.signupProcess,
                [e.target.name]: e.target.value
            }
        })
    }

    loginHandler = async(e) => {
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
        await this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        })
    }

    setPinHandler = (e) => {
        if(e.target.value.length === 6) e.target.blur()
        this.setState({
            signupProcess: {
                ...this.state.signupProcess,
                [e.target.name]: e.target.value
            }
        })
    }

    signUpSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullName: this.state.signUp.fullName,
            countryCode: this.state.signUp.countryCode,
            mobileNumber: this.state.signUp.mobileNumber,
            email: this.state.signUp.email,
            age: Number(this.state.signUp.age),
            gender: this.state.signUp.gender
        };
        this.props && this.props.signUpActionCall(data);
    };

    otpVerifySubmit = (e) => {
        e.preventDefault();
        const data = {
            mobileNumber: this.state.signUp.mobileNumber,
            otp: this.state.signupProcess.otp
        }
        this.props && this.props.otpActionCall(data)
    }

    setPinSubmit = (e) => {
        e.preventDefault();
        const data = {
            pin: this.state.signupProcess.pin,
            confirmPin: this.state.signupProcess.confirmPin
        }
        this.props && this.props.setPinActionCall(data)
    }

    loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            mobileNumber: this.state.login.mobileNumber,
            pin: this.state.login.pin
        }
        this.props && this.props.loginActionCall(data)
    }

    render() {
        localStorage.setItem("redirectUrl", this.state.parms)
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
                                                <div className="signup">
                                                    <h2 className="form-title">{this.props.i18n.language === "eng" ? "Login" : "लॉग इन"}</h2>
                                                    <div className="form-holder">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <TextInput
                                                                    type='text'
                                                                    className='auth-form-control'
                                                                    value={this.state.login.mobileNumber}
                                                                    name='mobileNumber'
                                                                    onChange={e => this.loginHandler(e)}
                                                                    maxlength={10}
                                                                    label={this.props.i18n.language === "eng" ? "Phone Number" : "फ़ोन नंबर"}
                                                                    error={this.state.error.mobileNumber}
                                                                    blur={() => this.blur('mobileNumber', this.state.login.mobileNumber)}
                                                                    focus={() => this.focus('mobileNumber')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <TextInput
                                                                    type='password'
                                                                    className='auth-form-control'
                                                                    value={this.state.login.pin}
                                                                    name='pin'
                                                                    onChange={e => this.loginHandler(e)}
                                                                    maxlength={6}
                                                                    label={this.props.i18n.language === "eng" ? "Pass Code" : "पास कोड"}
                                                                    error={this.state.error.pin}
                                                                    blur={() => this.blur('pin', this.state.login.pin)}
                                                                    focus={() => this.focus('pin')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <button className="auth-submit-btn" onClick={this.loginSubmit}>{this.props.i18n.language === "eng" ? "Login" : "लॉग इन"}</button>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 max-auto">
                                                                <div className="auth-form-vertical">
                                                                    <div className="auth-form-group">
                                                                        <Link to="/forgot"  className="forgot-passcode">{this.props.i18n.language === "eng" ? "Forgot Passcode" : "पासकोड भूल गए"}</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login slide-up">
                                                    <div className="center">
                                                        <h2 className="form-title" onClick={() => this.goToStep(2)}><span>{this.props.i18n.language === "eng" ? "or" : "या"}</span>{this.props.i18n.language === "eng" ? "Sign Up" : "रजिस्टर"}</h2>
                                                    </div>
                                                </div>
                                            </div> : 
                                            this.state.onStep === 2 ?
                                            <div className="form-structor">
                                                <div className="signup slide-up">
                                                    <h2 className="form-title" onClick={() => this.goToStep(1)}><span>{this.props.i18n.language === "eng" ? "or" : "या"}</span>{this.props.i18n.language === "eng" ? "Login" : "लॉग इन"}</h2>
                                                    <div className="form-holder-signup">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <TextInput
                                                                    type='text'
                                                                    className='auth-form-control'
                                                                    value={this.state.signUp.fullName}
                                                                    name='fullName'
                                                                    onChange={e => this.signUpHandler(e)}
                                                                    maxlength={20}
                                                                    label={this.props.i18n.language === "eng" ?"Full Name" : "पूरा नाम"}
                                                                    error={this.state.error.signUp.fullName}
                                                                    blur={() => this.blur('fullName', this.state.signUp.fullName)}
                                                                    focus={() => this.focus('fullName')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <TextInput
                                                                    type='text'
                                                                    className='auth-form-control'
                                                                    value={this.state.signUp.email}
                                                                    name='email'
                                                                    onChange={e => this.signUpHandler(e)}
                                                                    maxlength={30}
                                                                    label={this.props.i18n.language === "eng" ?"Email" : "ईमेल"}
                                                                    error={this.state.error.signUp.email}
                                                                    blur={() => this.blur('email', this.state.signUp.email)}
                                                                    focus={() => this.focus('email')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <div className="auth-form-group-min">
                                                                    <label className="auth-control-label-min"></label>
                                                                    <div className="auth-controls-min">
                                                                        <select className="auth-form-control-min" name="countryCode" onChange={(e) => this.signUpHandler(e)}>
                                                                            <option value="+91">{this.props.i18n.language === "eng" ? "India" : "भारत"}</option>
                                                                        </select>
                                                                        <span className="floating-label"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                                                                <TextInput
                                                                    type='text'
                                                                    className='auth-form-control'
                                                                    value={this.state.signUp.mobileNumber}
                                                                    name='mobileNumber'
                                                                    onChange={e => this.signUpHandler(e)}
                                                                    maxlength={10}
                                                                    label={this.props.i18n.language === "eng" ?"Phone Number" : "फ़ोन नंबर"}
                                                                    error={this.state.error.signUp.mobileNumber}
                                                                    blur={() => this.blur('signUpMobile', this.state.signUp.mobileNumber)}
                                                                    focus={() => this.focus('signUpMobile')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <div className="auth-form-group-min">
                                                                    <label className="auth-control-label-min"></label>
                                                                    <div className="auth-controls-min">
                                                                        <select className="auth-form-control-min" name="gender" onChange={(e) => this.signUpHandler(e)}>
                                                                            <option>{this.props.i18n.language === "eng" ? "Gender" : "लिंग"}</option>
                                                                            <option value="male">{this.props.i18n.language === "eng" ? "Male" : "पुरुष"}</option>
                                                                            <option value="female">{this.props.i18n.language === "eng" ? "Female" : "महिला"}</option>
                                                                        </select>
                                                                        <span className="floating-label"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                                                                <TextInput
                                                                    type='text'
                                                                    className='auth-form-control'
                                                                    value={this.state.signUp.age}
                                                                    name='age'
                                                                    onChange={e => this.signUpHandler(e)}
                                                                    maxlength={3}
                                                                    label={this.props.i18n.language === "eng" ?"Age" : "आयु"}
                                                                    error={this.state.error.signUp.age}
                                                                    blur={() => this.blur('age', this.state.signUp.age)}
                                                                    focus={() => this.focus('age')}
                                                                />
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
                                                                <button className="auth-submit-btn" onClick={this.signUpSubmit}>{this.props.i18n.language === "eng" ? "Sign Up" : "रजिस्टर"}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login">
                                                    <div className="center">
                                                        <h2 className="form-title"><span>{this.props.i18n.language === "eng" ? "or" : "या"}</span>{this.props.i18n.language === "eng" ? "Sign Up" : "रजिस्टर"}</h2>
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
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "Mobile Number" : "फ़ोन नंबर"} value={this.state.signUp.mobileNumber} readOnly />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "OTP" : "OTP"} value={this.state.signupProcess.otp} name="otp" onChange={(e) => this.otpHandler(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                                                <button className="auth-submit-btn" onClick={this.otpVerifySubmit}>Verify</button>
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
                                            this.state.onStep === 4 ?
                                            <div className="form-structor">
                                                <div className="signup slide-up">
                                                    <div className="form-holder-signup">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "PIN" : "पिन"} name="pin" value={this.state.signupProcess.pin} onChange={(e) => this.setPinHandler(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="otp-form-group">
                                                                    <div className="otp-controls">
                                                                        <input type="text" className="otp-form-control" placeholder={this.props.i18n.language === "eng" ? "Confirm Pin" : "पिन की पुष्टि करें"} name="confirmPin" value={this.state.signupProcess.confirmPin} onChange={(e) => this.setPinHandler(e)} />
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
        signUpActionCall: (data) => dispatch(actionCreator.SignUpActions(data)),
        otpActionCall: (data) => dispatch(actionCreator.OtpActions(data)),
        setPinActionCall: (data) => dispatch(actionCreator.SetPinAction(data)),
        loginActionCall: (data) => dispatch(actionCreator.LoginActions(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Auth));
