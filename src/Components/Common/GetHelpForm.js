import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withTranslation } from 'react-i18next';
import { TextInput } from "./GetGelpFormComp";
import { LhFormValodation } from "../../Utils/FormValidation";
import "../../Assets/StyleModules/PortalTheme.css";

class GetHelpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            gender: "",
            age: "",
            state: "",
            city: "",
            zipcode: "",
            country: "India",
            sex: "",
            relationshipStatus: "",
            occupation: "",
            contactNumber: "",
            alternateNumber: "",
            problemDescription: "",
            isLegal: null,
            error:{
                fullName:"",
                age:'',
                state: '',
                city:'',
                zipcode:'',
                occupation:'',
                contactNumber:"",
                alternateNumber:'',

            }
        }
    }

    getHelpFormHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async() => {
        var str = this.props.match.params.id;
        await this.setState({
            isLegal: str.startsWith("LH") ? true : false
        })
    }

    blur = async (name, data) => {
        console.log(name, data);
        let response = LhFormValodation(name, data);
        let error = JSON.parse(JSON.stringify(this.state.error));
        if (name === 'fullName') {
          error.fullName = response;
          await this.setState({ error });
        }
        else if (name === 'age') {
          error.age = response;
          await this.setState({ error });
        }
        else if (name === 'state') {
            error.state = response;
            await this.setState({ error });
        }
        else if (name === 'city') {
            error.city = response;
            await this.setState({ error });
        }
        else if (name === 'zipcode') {
            error.zipcode = response;
            await this.setState({ error });
        }
        else if (name === 'occupation') {
            error.occupation = response;
            await this.setState({ error });
        }
        else if (name === 'contactNumber') {
            error.contactNumber = response;
            await this.setState({ error });
        }
        else if (name === 'alternateNumber') {
            error.alternateNumber = response;
            await this.setState({ error });
        }
    };

    focus = async name => {
        let error = JSON.parse(JSON.stringify(this.state.error));
        if (name === 'fullName') {
          error.fullName = '';
          await this.setState({ error });
        }
        else if (name === 'age') {
          error.age = '';
          await this.setState({ error });
        }
        else if (name === 'state') {
            error.state = '';
            await this.setState({ error });
        }
        else if (name === 'city') {
            error.city = '';
            await this.setState({ error });
        }
        else if (name === 'zipcode') {
            error.zipcode = '';
            await this.setState({ error });
        }
        else if (name === 'occupation') {
            error.occupation = '';
            await this.setState({ error });
        }
        else if (name === 'contactNumber') {
            error.contactNumber = '';
            await this.setState({ error });
        }
        else if (name === 'alternateNumber') {
            error.alternateNumber = '';
            await this.setState({ error });
        }
    };

    getHelpFormSubmit = (e) => {
        e.preventDefault()
        const data = {
            fullName: this.state.fullName,
            gender: this.state.gender,
            age: this.state.age,
            state: this.state.state,
            city: this.state.city,
            zipcode: this.state.zipcode,
            country: this.state.country,
            sex: this.state.sex,
            relationshipStatus: this.state.relationshipStatus,
            occupation: this.state.occupation,
            contactNumber: this.state.contactNumber,
            alternateNumber: this.state.alternateNumber,
            problemDescription: this.state.problemDescription,
            category: this.props.match.params.id,
            isLegal: this.state.isLegal
        }
        this.props && this.props.legalHelpActionCall(data)
    }

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in">
                <ToastContainer autoClose={3000} />
                <div className="page-content-inner">
                    <div className="counselling-page-header">
                        <div className="main-title"><span>{t('form-controls.counselling-header')}</span></div>
                    </div>
                    <div className="form-vertical">
                        <div className="form-info">
                            <p>{t('form-controls.billing-info')}</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            mainClass="form-group"
                                            type='text'
                                            className='form-control'
                                            value={this.state.fullName}
                                            name='fullName'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={20}
                                            label={this.props.i18n.language === "eng" ? "Full Name" : "पूरा नाम"}
                                            error={this.state.error.fullName}
                                            blur={() => this.blur('fullName', this.state.fullName)}
                                            focus={() => this.focus('fullName')}
                                        />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Gender" : "लिंग"}</label>
                                            <div className="controls">
                                                <select className="form-control" name="gender" onChange={this.getHelpFormHandler}>
                                                    <option></option>
                                                    <option value="male">{this.props.i18n.language === "eng" ? "Male" : "पुरुष"}</option>
                                                    <option value="female">{this.props.i18n.language === "eng" ? "Female" : "महिला"}</option>
                                                    <option value="female">{this.props.i18n.language === "eng" ? "Other" : "अन्य"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='number'
                                            mainClass="form-group"
                                            className='form-control'
                                            value={this.state.age}
                                            name='age'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={3}
                                            label={this.props.i18n.language === "eng" ? "Age" : "आयु"}
                                            error={this.state.error.age}
                                            blur={() => this.blur('age', this.state.age)}
                                            focus={() => this.focus('age')}
                                        />
                                    </div>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='text'
                                            mainClass="form-group-min"
                                            className='form-control'
                                            value={this.state.state}
                                            name='state'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={30}
                                            label={this.props.i18n.language === "eng" ? "State" : "राज्य"}
                                            error={this.state.error.state}
                                            blur={() => this.blur('state', this.state.state)}
                                            focus={() => this.focus('state')}
                                        />
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='text'
                                            mainClass="form-group"
                                            className='form-control'
                                            value={this.state.city}
                                            name='city'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={30}
                                            label={this.props.i18n.language === "eng" ? "City" : "शहर"}
                                            error={this.state.error.city}
                                            blur={() => this.blur('city', this.state.city)}
                                            focus={() => this.focus('city')}
                                        />
                                    </div>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='number'
                                            mainClass="form-group-min"
                                            className='form-control'
                                            value={this.state.zipcode}
                                            name='zipcode'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={6}
                                            label={this.props.i18n.language === "eng" ? "Zip Code" : "पिन कोड"}
                                            error={this.state.error.zipcode}
                                            blur={() => this.blur('zipcode', this.state.zipcode)}
                                            focus={() => this.focus('zipcode')}
                                        />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Country" : "देश"}</label>
                                            <div className="controls">
                                                <select className="form-control" name="country" onChange={this.getHelpFormHandler}>
                                                    <option value="India">{this.props.i18n.language === "eng" ? "India" : "भारत"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Sexual Orientation" : "यौन अभिविन्यास"}</label>
                                            <div className="controls">
                                                <select className="form-control" name="sex" onChange={this.getHelpFormHandler}>
                                                    <option></option>
                                                    <option value="male">{this.props.i18n.language === "eng" ? "LGBTQ" : "समलैंगिक"}</option>
                                                    <option value="Female">{this.props.i18n.language === "eng" ? "Straight" : "सीधे"}</option>
                                                    <option value="Female">{this.props.i18n.language === "eng" ? "Other" : "अन्य"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Current Relationship Status" : "वर्तमान संबंध स्थिति"}</label>
                                            <div className="controls">
                                                <select className="form-control" name="relationshipStatus" onChange={this.getHelpFormHandler}>
                                                    <option></option>
                                                    <option value="Single">{this.props.i18n.language === "eng" ? "Single" : "अकेला"}</option>
                                                    <option value="Married">{this.props.i18n.language === "eng" ? "Married" : "विवाहित"}</option>
                                                    <option value="Complicated">{this.props.i18n.language === "eng" ? "Divorced" : "तलाकशुदा"}</option>
                                                    <option value="Complicated">{this.props.i18n.language === "eng" ? "Seprated" : "अलग"}</option>
                                                    <option value="Complicated">{this.props.i18n.language === "eng" ? "Live In" : "लिव-इन"}</option>
                                                    <option value="Complicated">{this.props.i18n.language === "eng" ? "Complicated" : "जटिल"}</option>
                                                    <option value="Complicated">{this.props.i18n.language === "eng" ? "In Relationship" : "रिश्ते में"}</option>
                                                    <option value="Complicated">{this.props.i18n.language === "eng" ? "Engaged" : "जटिल"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='text'
                                            mainClass="form-group"
                                            className='form-control'
                                            value={this.state.occupation}
                                            name='occupation'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={20}
                                            label={this.props.i18n.language === "eng" ? "Occupation" : "व्यवसाय"}
                                            error={this.state.error.occupation}
                                            blur={() => this.blur('occupation', this.state.occupation)}
                                            focus={() => this.focus('occupation')}
                                        />
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='number'
                                            mainClass="form-group"
                                            className='form-control'
                                            value={this.state.contactNumber}
                                            name='contactNumber'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={10}
                                            label={this.props.i18n.language === "eng" ? "Contact Number" : "संपर्क संख्या"}
                                            error={this.state.error.contactNumber}
                                            blur={() => this.blur('contactNumber', this.state.contactNumber)}
                                            focus={() => this.focus('contactNumber')}
                                        />
                                    </div>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <TextInput
                                            type='number'
                                            mainClass="form-group-min"
                                            className='form-control'
                                            value={this.state.alternateNumber}
                                            name='alternateNumber'
                                            onChange={this.getHelpFormHandler}
                                            maxlength={10}
                                            label={this.props.i18n.language === "eng" ? "Alternate Number" : "वैकल्पिक नंबर"}
                                            error={this.state.error.alternateNumber}
                                            blur={() => this.blur('alternateNumber', this.state.alternateNumber)}
                                            focus={() => this.focus('alternateNumber')}
                                            placeholder={this.props.i18n.language === "eng" ? "Alternate Number" : "वैकल्पिक नंबर"}
                                        />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label">{this.props.i18n.language === "eng" ? "Description of Problem" : "समस्या का विवरण"}</label>
                                            <div className="textare-controls-min">
                                                <textarea rows="5" className="form-textarea" value={this.state.problemDescription} name="problemDescription" onChange={this.getHelpFormHandler}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="control-label"></label>
                                            <div className="controls">
                                                <button className="button-control" onClick={this.getHelpFormSubmit}>{this.props.i18n.language === "eng" ? "Next" : "आगे बढ़े"}</button>
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
        legalHelpActionCall: (data) => dispatch(actionCreator.LegalHelpActions(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(GetHelpForm));
