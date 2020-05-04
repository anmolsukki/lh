import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { withTranslation } from 'react-i18next';
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/StyleModules/PortalTheme.css";

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            email: ""
        }
    }

    subscribeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    subscribeSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email
        }
        this.props && this.props.subscribeActionCall(data)
    }

    render() {
        return (
            <div className="fade-in">
                <ToastContainer autoClose={3000} />
                <footer id="footer">
                    <div className="footer-widget">
                        <div className="container footer-sizes">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 mt-5 mb-4 footer-mob">
                                    <div className="single-widget">
                                        <h2>{this.props.i18n.language === "eng" ? "Company" : "कंपनी"}</h2><hr style={{backgroundColor: "#73a5ba"}}/>
                                        <ul className="nav nav-pills nav-stacked footer-sub-title">
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "About" : "हमारे बारे में"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "How we work" : "हम कैसे काम करते हैं"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Contact Us" : "संपर्क करें"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "FAQ" : "सामान्य प्रश्न"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Terms & Condition" : "नियम व शर्त"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Privacy Policy" : "गोपनीयता नीति"}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 mt-5">
                                    <div className="single-widget">
                                        <h2>{this.props.i18n.language === "eng" ? "Phone Counselling" : "टेलीफ़ोनिक परामर्श"}</h2><hr style={{backgroundColor: "#73a5ba"}}/>
                                        <ul className="nav nav-pills nav-stacked footer-sub-title">
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Relationship Problem" : "संबंध समस्या"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Sex-Related Problem" : "सेक्स संबंधी समस्या"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Break-up Therapy" : "ब्रेक अप समस्या"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "LGBTQ Counselling" : "समलैंगिक परामर्श"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Love Marriage Problem" : "प्रेम विवाह में समस्या"}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 mt-5">
                                    <div className="single-widget">
                                        <h2>{this.props.i18n.language === "eng" ? "Legal Counselling" : "कानूनी परामर्श"}</h2><hr style={{backgroundColor: "#73a5ba"}}/>
                                        <ul className="nav nav-pills nav-stacked footer-sub-title">
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Get Married" : "विवाह संबंधीत समस्या"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Divorce" : "तलाक संबंधीत समस्या"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "After marriage problems" : "शादी के बाद समस्या"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Live-in relationship" : "लिव-इन संबंध"}</Link></li>
                                            <li><Link to="#">{this.props.i18n.language === "eng" ? "Legal protection" : "कानूनी सुरक्षा"}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 mt-5 mb-5">
                                    <div className="single-widget">
                                        <h2>Subscribe Now</h2><hr style={{backgroundColor: "#73a5ba"}}/>
                                        <form action="#" className="searchform">
                                            <input type="text" value={this.state.email} name="email" onChange={this.subscribeHandler} placeholder="Your email" />
                                            <button className="btn" onClick={this.subscribeSubmit}>Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
		        </footer>
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
        subscribeActionCall: (data) => dispatch(actionCreator.SubscribeNewslatter(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Footer));
