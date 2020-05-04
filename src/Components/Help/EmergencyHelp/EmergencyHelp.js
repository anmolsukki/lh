import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../../Redux/Actions/ActionTypes/index";
import { withTranslation } from 'react-i18next';
import "../../../Assets/StyleModules/PortalTheme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EmergencyHelp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            phone: "",
            idNumber: "",
            location: "",
            voiceMsg: "",
            textMsg: "",
            file: "",
            disableSubmit: true
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const data = nextProps.emergencyData.emergencyHelp
        if(data.status === 201) {
            var element = document.getElementsByClassName("emergency-unfocus-label");
            for(var i=0;i<element.length;i++){
                element[i].classList.remove("emergency-unfocus-label.emergency-unfocus");
                element[i].classList.add("floating-label");
            }
            this.setState({
                fullName: "",
                phone: "",
                idNumber: "",
                location: "",
                textMsg: ""
            })
        }
    }

    emergencyHelpHandler = (e) => {
        const inputLength = e.target.value;
        if(inputLength.length > 0){   
            const nextLength = e.target.nextElementSibling;
            let addClass = 'emergency-unfocus-label emergency-unfocus';
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

    checkDisclaimer = async() => {
        await this.setState({
            voiceMsg: !this.state.voiceMsg
        });
    }

    idUpload = async(e) => {
        await this.setState({
            file: e.target.files[0]
        })
    }

    emergencyHelpSubmit = (e) => {
        e.preventDefault()
        const data = {
            fullName: this.state.fullName,
            phone: this.state.phone,
            idNumber: this.state.idNumber,
            location: this.state.location,
            textMsg: this.state.textMsg,
            idCard: this.state.file
        }
        this.props && this.props.emergencyHelpActionCall(data)
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="row get-main-page">
                    <ToastContainer autoClose={3000} />
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto ehelp-theme topmargin">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mt-5 mx-auto">
                                <div className="ehelp-theme">
                                    <h1 className="main-page-heading">{t('nav-option.emergency-help')}</h1>
                                    <p className="emergency-desc">{t('form.emergency-desc')}</p>
                                </div>
                            </div>
                            <div id="etop-form" className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <input type="text" className="emergency-form-control" value={this.state.fullName} name="fullName" onChange={(e) => this.emergencyHelpHandler(e)} />
                                                    <span className="floating-label">{this.props.i18n.language === "eng" ? "Full Name" : "पूरा नाम"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <input type="text" className="emergency-form-control" value={this.state.idNumber} name="idNumber" onChange={(e) => this.emergencyHelpHandler(e)} />
                                                    <span className="floating-label">{this.props.i18n.language === "eng" ? "ID Proof" : "आईडी प्रमाण"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <input type="text" className="emergency-form-control" value={this.state.phone} name="phone" onChange={(e) => this.emergencyHelpHandler(e)} />
                                                    <span className="floating-label">{this.props.i18n.language === "eng" ? "Phone Number" : "फ़ोन नंबर"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <input type="text" className="emergency-form-control" value={this.state.location} name="location" onChange={(e) => this.emergencyHelpHandler(e)} />
                                                    <span className="floating-label">{this.props.i18n.language === "eng" ? "Location" : "स्थान"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <input type="text" className="emergency-form-control" value={this.state.textMsg} name="textMsg" onChange={(e) => this.emergencyHelpHandler(e)} />
                                                    <span className="floating-label">{this.props.i18n.language === "eng" ? "Text Message" : "पाठ संदेश"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <label className="custom-file-upload-emergency counselling-file"><input type="file" className="emergency-form-control" onChange={this.idUpload} />{this.state.file ? this.state.file.name : this.props.i18n.language === "eng" ? "Upload Your Id Proof +" : "अपना आईडी प्रमाण अपलोड करें +" }</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="emergency-form-vertical">
                                            <div className="emergency-form-group">
                                                <div className="emergency-controls">
                                                    <input type="checkbox" checked={this.state.voiceMsg} onChange={(e) => this.checkDisclaimer(e)} />
                                                    <span style={{fontSize: "12px", marginLeft: "5px"}}>{this.props.i18n.language === "eng" ? "Make sure you provide correct details and in emergency situations only as police may contact you." : "सुनिश्चित करें कि आपने सही विवरण प्रदान किया है और केवल आपातकालीन स्थितियों में। पुलिस आपसे संपर्क कर सकती है"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row get-main-page">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto"></div>
                            <div id="ebottom-form" className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mx-auto">
                                <div style={{cursor: "pointer"}} className="e-contact text-center" onClick={this.emergencyHelpSubmit}>
                                    {this.state.voiceMsg ? 
                                        <button className="emergency-submit">{t('contact-form.contact-us')}</button> :
                                        <button className="emergency-submit" disabled={this.state.disableSubmit}>{t('contact-form.contact-us')}</button>
                                    }
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
    const datas = state.CtrEmergencyHelp
    return {
        emergencyData: datas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        emergencyHelpActionCall: (data) => dispatch(actionCreator.EmergencyHelpActions(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(EmergencyHelp));
