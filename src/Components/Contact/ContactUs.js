import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { withTranslation } from 'react-i18next';
import { TextInput } from "./COntactForm";
import { LhFormValodation } from "../../Utils/FormValidation";
import Footer from '../Footer/Footer';
import "../../Assets/StyleModules/PortalTheme.css";

class ContactUs extends Component {
    constructor() {
        super()
        this.state = {
            fullName: localStorage.getItem("token") ? localStorage.getItem("name") : "",
            mobileNumber: localStorage.getItem("token") ? localStorage.getItem("mobile") : "",
            email: "",
            subject: "",
            message: "",
            error: {
                FullName: '',
                Email: '',
                MobileNumber: '',
                Subject: '',
                Message: ''
            }
        }
    }

    contactUsHandler = (e) => {
        const inputLength = e.target.value;
        if(inputLength.length > 0){   
            const nextLength = e.target.nextElementSibling;
            let addClass = 'unfocus-label unfocus';
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

    ContactUsSubmit = (e) => {
        e.preventDefault()
        if(this.state.email.length < 1 || this.state.error.Email){
            toast.error("Plese fill correct email", {
                autoClose: 3000
            });
            return false;
        }
        const data = {
            fullName: this.state.fullName,
            mobileNumber: this.state.mobileNumber,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        this.props && this.props.contactUsActionCall(data)
    }


    blur = async (name, data) => {
        let response = LhFormValodation(name, data);
        let error = JSON.parse(JSON.stringify(this.state.error));
        if (name === 'fullName') {
            error.FullName = response;
            await this.setState({ error });
        }
        else if (name === 'email') {
            error.Email = response;
            await this.setState({ error });
        }
        else if (name === 'mobileNumber') {
            error.MobileNumber = response;
            await this.setState({ error });
        }
        else if (name === 'subject') {
            error.Subject = response;
            await this.setState({ error });
        }
        else if (name === 'message') {
            error.Message = response;
            await this.setState({ error });
        }
    };

    focus = async name => {
        let error = JSON.parse(JSON.stringify(this.state.error));
        if (name === 'fullName') {
            error.FullName = '';
            await this.setState({ error });
        }
        else if (name === 'email') {
            error.Email = '';
            await this.setState({ error });
        }
        else if (name === 'mobileNumber') {
            error.MobileNumber = '';
            await this.setState({ error });
        }
        else if (name === 'subject') {
            error.Subject = '';
            await this.setState({ error });
        }
        else if (name === 'message') {
            error.Message = '';
            await this.setState({ error });
        }
    };
    
    render() {
        const { t } = this.props;
        return (
            <div className="fade-in">
                <ToastContainer autoClose={3000} />
                <div className="row get-main-page">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <div className="contact-title"><span>{t('contact-form.contact-us')}</span></div>
                                    <div className="contact-sub-title"><p>{t('contact-form.contact-dec')}</p></div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                <div className="page-header">
                                    <div className="contact-detail-title"><img src="icons/phone-call.svg" alt="phone" /><span className="contact-details">+91 79858 99179</span></div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <div className="contact-detail-title"><img src="icons/mail.svg" alt="mail" /><span className="contact-details">lovershelpline2020@gmail.com</span></div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                <div className="page-header">
                                    <div className="contact-detail-title"><a href="https://www.facebook.com/lovershelplineofficial/"><img src="icons/fb.svg" alt="fb" /></a><a href="https://www.instagram.com/sakha_shashank?r=nametag"><img src="icons/insta.png" alt="twitter" className="icon-spacer" /></a><a href="https://www.youtube.com/channel/UCkGuHlaIAyotWi2CeY8f44w"><img src="icons/youtube.png" alt="twitter" className="icon-spacer" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextInput
                                    type='text'
                                    className='contact-form-control'
                                    value={this.state.fullName}
                                    name='fullName'
                                    onChange={e => this.contactUsHandler(e)}
                                    maxlength={20}
                                    label={this.props.i18n.language === 'eng' ? 'Name' : 'नाम'}
                                    error={this.state.error.FullName}
                                    blur={() => this.blur('fullName', this.state.fullName)}
                                    focus={() => this.focus('fullName')}
                                />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextInput
                                        type='text'
                                        className='contact-form-control'
                                        value={this.state.email}
                                        name='email'
                                        onChange={e => this.contactUsHandler(e)}
                                        maxlength={40}
                                        label={this.props.i18n.language === 'eng' ? 'Email' : 'ईमेल'}
                                        error={this.state.error.Email}
                                        blur={() => this.blur('email', this.state.email)}
                                        focus={() => this.focus('email')}
                                    />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextInput
                                    type='text'
                                    className='contact-form-control'
                                    value={this.state.mobileNumber}
                                    name='mobileNumber'
                                    maxlength={10}
                                    onChange={e => this.contactUsHandler(e)}
                                    label={ this.props.i18n.language === 'eng' ? 'Phone Number' : 'फ़ोन नंबर' }
                                    error={this.state.error.MobileNumber}
                                    blur={() => this.blur('mobileNumber', this.state.mobileNumber)}
                                    focus={() => this.focus('mobileNumber')}
                                />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextInput
                                    type='text'
                                    className='contact-form-control'
                                    value={this.state.subject}
                                    name='subject'
                                    onChange={e => this.contactUsHandler(e)}
                                    maxlength={40}
                                    label={this.props.i18n.language === 'eng' ? 'Subject' : 'विषय'}
                                    error={this.state.error.Subject}
                                    blur={() => this.blur('subject', this.state.subject)}
                                    focus={() => this.focus('subject')}
                                />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextInput
                                    type='text'
                                    className='contact-form-control'
                                    value={this.state.message}
                                    name='message'
                                    onChange={e => this.contactUsHandler(e)}
                                    maxlength={250}
                                    label={this.props.i18n.language === 'eng' ? 'Message' : 'संदेश'}
                                    error={this.state.error.Message}
                                    blur={() => this.blur('message', this.state.message)}
                                    focus={() => this.focus('message')}
                                />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mt-5">
                                <div className="contact-form-vertical">
                                    <div className="contact-form-group">
                                        <div className="contact-controls">
                                            <button value={t('contact-form.contact-us')} className="button-control" onClick={this.ContactUsSubmit}>Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const datas = state.CtrContactUs
    return {
        signUpResponse: datas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        contactUsActionCall: (data) => dispatch(actionCreator.ContactUsActions(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ContactUs));
