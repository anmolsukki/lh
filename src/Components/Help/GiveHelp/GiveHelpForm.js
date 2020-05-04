import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../../Redux/Actions/ActionTypes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withTranslation } from 'react-i18next';
import "../../../Assets/StyleModules/PortalTheme.css";

class GiveHelpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            helperGiverType: "",
            gender: "",
            age: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            degree: "",
            occupation: "",
            contactNumber: "",
            contactPerson: "",
            alternateNumber: "",
            position: "",
            experience: "",
            practiceLocation: "",
            contriubutionWays: "",
            category: "",
            registeredAddr: "",
            numOfVolunteer: "",
            description: "",
            photo: "will Submit later"
        }
    }

    componentDidMount = () => {
        var helperGiverType = this.props.match.params.id
        this.setState({
            helperGiverType
        })
    }

    formHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    giveHelpFormSubmit = (e) => {
        e.preventDefault();
        let data;
        if(this.state.helperGiverType === "Individual") {
            data = {
                fullName: this.state.fullName,
                helperGiverType: this.state.helperGiverType,
                gender: this.state.gender,
                age: this.state.age,
                state: this.state.state,
                city: this.state.city,
                zipcode: this.state.zipcode,
                country: this.state.country,
                degree: this.state.degree,
                contactNumber: this.state.contactNumber,
                alternateNumber: this.state.alternateNumber,
                workingFor: this.state.workingFor,
                position: this.state.position,
                experience: this.state.experience,
                contriubutionWays: this.state.contriubutionWays,
                photo: this.state.photo
            }
        }
        else if(this.state.helperGiverType === "NGO") {
            data = {
                fullName: this.state.fullName,
                helperGiverType: this.state.helperGiverType,
                category: this.state.category,
                city: this.state.city,
                zipcode: this.state.zipcode,
                country: this.state.country,
                registeredAddr: this.state.registeredAddr,
                contactNumber: this.state.contactNumber,
                alternateNumber: this.state.alternateNumber,
                contactPerson: this.state.contactPerson,
                numOfVolunteer: this.state.numOfVolunteer,
                description: this.state.description,
                website: this.state.website,
                photo: this.state.photo
            }
        }
        else if(this.state.helperGiverType === "Journalist") {
            data = {
                fullName: this.state.fullName,
                helperGiverType: this.state.helperGiverType,
                gender: this.state.gender,
                age: this.state.age,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                country: this.state.country,
                degree: this.state.degree,
                contactNumber: this.state.contactNumber,
                alternateNumber: this.state.alternateNumber,
                workingFor: this.state.workingFor,
                position: this.state.position,
                experience: this.state.experience,
                contriubutionWays: this.state.contriubutionWays,
                photo: this.state.photo
            }
        }
        else {
            data = {
                fullName: this.state.fullName,
                helperGiverType: this.state.helperGiverType,
                gender: this.state.gender,
                age: this.state.age,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                country: this.state.country,
                degree: this.state.degree,
                occupation: this.state.occupation,
                contactNumber: this.state.contactNumber,
                alternateNumber: this.state.alternateNumber,
                position: this.state.position,
                experience: this.state.experience,
                practiceLocation: this.state.practiceLocation,
                photo: this.state.photo
            }
        }
        this.props && this.props.giveHelpActionCall(data)
    }

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in">
                <ToastContainer autoClose={3000} />
                <div className="page-content-inner">
                    <div className="counselling-page-header">
                        {this.state.helperGiverType === "Individual" ? 
                            <div className="main-title"><span>{t('form.individual')}</span></div> :
                            this.state.helperGiverType === "NGO" ?
                                <div className="main-title"><span>{t('form.NGO')}</span></div> :
                            this.state.helperGiverType === "Journalist" ?
                                <div className="main-title"><span>{t('form.journalist')}</span></div> :
                            this.state.helperGiverType === "Lawyer" ?
                                <div className="main-title"><span>{t('form.lawyer')}</span></div> :
                            null
                        }
                    </div>
                    <div className="form-vertical">
                        <div className="form-info">
                            <p>{t('form.billing-info')}</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Full Name" : "पूरा नाम"}</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" value={this.state.fullName} name="fullName" onChange={this.formHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Category" : "वर्ग"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.category} name="category" onChange={this.formHandler} />
                                                </div>
                                            </div> : 
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Gender" : "लिंग"}</label>
                                                <div className="controls">
                                                    <select className="form-control" name="gender" onChange={this.formHandler}>
                                                        <option></option>
                                                        <option value="male">{this.props.i18n.language === "eng" ? "Male" : "पुरुष"}</option>
                                                        <option value="female">{this.props.i18n.language === "eng" ? "Female" : "महिला"}</option>
                                                        <option value="female">{this.props.i18n.language === "eng" ? "Other" : "अन्य"}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Most Active City" : "सक्रिय शहर"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.city} name="city" onChange={this.formHandler} />
                                                </div>
                                            </div> :
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "City" : "शहर"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.city} name="city" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group-min">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Zip Code" : "पिन कोड"}</label>
                                            <div className="controls">
                                                <input type="number" className="form-control" value={this.state.zipcode} name="zipcode" onChange={this.formHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Contact Number" : "संपर्क संख्या"}</label>
                                            <div className="controls">
                                                <input type="number" className="form-control" value={this.state.contactNumber} name="contactNumber" onChange={this.formHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group-min">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Alternate Number" : "वैकल्पिक नंबर"}</label>
                                            <div className="controls">
                                                <input type="number" className="form-control" value={this.state.alternateNumber} name="alternateNumber" onChange={this.formHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Country" : "देश"}</label>
                                            <div className="controls">
                                                <input type="name" className="form-control" value={this.state.country} name="country" onChange={this.formHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Registered Address" : "पंजीकृत पता"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.registeredAddr} name="registeredAddr" onChange={this.formHandler} />
                                                </div>
                                            </div> :
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "What degree you hold?" : "आप किस डिग्री को धारण करते हैं?"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.degree} name="degree" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                    {this.state.helperGiverType === "NGO" ?
                                        null :
                                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Age" : "आयु"}</label>
                                                <div className="controls">
                                                    <input type="number" className="form-control" value={this.state.age} name="age" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {this.state.helperGiverType === "NGO" ?
                                        null :
                                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group-min">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "State" : "राज्य"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.state} name="state" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Contact Person Name" : "संपर्क व्यक्ति का नाम"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.contactPerson} name="contactPerson" onChange={this.formHandler} />
                                                </div>
                                            </div> :
                                            this.state.helperGiverType === "Lawyer" ? 
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Occupation" : "व्यवसाय"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.occupation} name="occupation" onChange={this.formHandler} />
                                                </div>
                                            </div> :
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Working for?" : "के लिए काम?"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.occupation} name="occupation" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Number of active volunteers" : "सक्रिय स्वयंसेवकों की संख्या"}</label>
                                                <div className="controls">
                                                    <input type="number" className="form-control" value={this.state.numOfVolunteer} name="numOfVolunteer" onChange={this.formHandler} />
                                                </div>
                                            </div> :
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Position" : "स्थान"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.position} name="position" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            null :
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Experience" : "अनुभव"}</label>
                                                <div className="controls">
                                                    <input type="number" className="form-control" value={this.state.experience} name="experience" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            null :
                                            this.state.helperGiverType === "Lawyer" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Where you practice?" : "आप कहां अभ्यास करते हैं?"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.practiceLocation} name="practiceLocation" onChange={this.formHandler} />
                                                </div>
                                            </div> :
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "In what other ways you can contribute?" : "आप किन अन्य तरीकों से योगदान दे सकते हैं?"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.contriubutionWays} name="contriubutionWays" onChange={this.formHandler} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Description" : "विवरण"}</label>
                                                <div className="textare-controls-min">
                                                    <textarea rows="5" className="form-textarea" value={this.state.description} name="description" onChange={this.formHandler}></textarea>
                                                </div>
                                            </div> : 
                                            null
                                        }
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {this.state.helperGiverType === "NGO" ?
                                            <div className="form-group">
                                                <label className="control-label">{this.props.i18n.language === "eng" ? "Website link" : "वेबसाइट की लिंक"}</label>
                                                <div className="controls">
                                                    <input type="text" className="form-control" value={this.state.website} name="website" />
                                                </div>
                                            </div> : 
                                            null
                                        }
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label"></label>
                                            <div className="controls">
                                                <button className="button-control" onClick={this.giveHelpFormSubmit}>{this.props.i18n.language === "eng" ? "Next" : "आगे"}</button>
                                            </div>
                                        </div>
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
    const datas = state.CtrLegalHelp
    return {
        helpData: datas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        giveHelpActionCall: (data) => dispatch(actionCreator.GiveHelpActions(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(GiveHelpForm));
