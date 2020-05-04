import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/StyleModules/PortalTheme.css";

class PricingHelp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.match.params.id
        })
    }

    componentWillReceiveProps = (nextProps) => {
        const datas = nextProps.paymentData.payReducer
        if(datas.status === 200) {
            // window.open(datas.data.data.paymentLink, '_blank');
            window.location.replace(datas.data.data.paymentLink)
        }
    }

    bookServices = (data) => {
        const values = data
        const priceData = {
            amount: values,
            counselling: this.state.id
        }
        this.props && this.props.paymentActionCall(priceData)
    }

    render() {
        return (
            <div className="fade-in">
                <ToastContainer autoClose={3000} />
                <div className="page-content-inner">
                    <div className="counselling-page-header">
                        <div className="main-title"><span>{this.props.i18n.language === "eng" ? "Pricing" : "मूल्य निर्धारण"}</span></div>
                        <div className="sub-title"><p>{this.props.i18n.language === "eng" ? "Chose Payment Method Below" : "नीचे भुगतान विधि चुनें"}</p></div>
                    </div>
                </div>
                <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-11 col-sm-12 col-12 mt-5 mb-5 mx-auto">
                            <div className="row clear-margins">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mx-auto">
                                    <div className="row clear-margins">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 mx-auto">
                                            <div className="price-card-theme">
                                                <div className="title"><span>{this.props.i18n.language === "eng" ? "Short Discussion" : "संक्षिप्त चर्चा"}</span></div>
                                                <div className="price"><sup><i className="fa fa-inr" aria-hidden="true"></i></sup>500</div>
                                                <div className="per-month"><p>{this.props.i18n.language === "eng" ? "For 15 Minutes" : "15 मिनट्स के लिए"}</p></div>
                                                <div className="row clear-margins">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-12 mt-5 mx-auto">
                                                        <div className="price-card-dec"><p>{this.props.i18n.language === "eng" ? "You will get telephonic conselling for 15 mins" : "आपको 15 मिनट के लिए टेलीफ़ोनिक कॉन्सिलिंग मिलेगी"}</p></div>
                                                    </div>
                                                    <div className="col-xl-10 col-lg-12 col-md-12 col-sm-10 col-12 mx-auto">
                                                        <div className="row clear-margins">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-7 col-12 mx-auto">
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "One to one Counselling" : "वन टू वन काउंसलिंग"}</span></div>
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "Time slot will be discussed" : "समय स्लॉट पर चर्चा की जाएगी"}</span></div>
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "Privacy will be maintained" : "गोपनीयता बनाए रखी जाएगी"}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-11 col-lg-11 col-md-9 col-sm-9 col-11 mx-auto borders">
                                                        <div className="price-select text-center">
                                                            <button className="btn" onClick={() => this.bookServices(500)}>{this.props.i18n.language === "eng" ? "Book Now" : "अभी बुक करें"}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mx-auto">
                                    <div className="row clear-margins">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 mx-auto">
                                            <div className="price-card-theme">
                                                <div className="title"><span>{this.props.i18n.language === "eng" ? "Long Discussion" : "लंबी चर्चा"}</span></div>
                                                <div className="price"><sup><i className="fa fa-inr" aria-hidden="true"></i></sup>800</div>
                                                <div className="per-month"><p>{this.props.i18n.language === "eng" ? "For 30 Minutes" : "30 मिनट के लिए"}</p></div>
                                                <div className="row clear-margins">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-12 mt-5 mx-auto">
                                                        <div className="price-card-dec"><p>{this.props.i18n.language === "eng" ? "You will get telephonic conselling for 30 mins" : "आपको 30 मिनट के लिए टेलीफ़ोनिक कॉन्सिलिंग मिलेगी"}</p></div>
                                                    </div>
                                                    <div className="col-xl-10 col-lg-12 col-md-12 col-sm-10 col-10 mx-auto">
                                                        <div className="row clear-margins">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-7 col-12 mx-auto">
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "One to one Counselling" : "वन टू वन काउंसलिंग"}</span></div>
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "Time slot will be discussed" : "समय स्लॉट पर चर्चा की जाएगी"}</span></div>
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "Privacy will be maintained" : "गोपनीयता बनाए रखी जाएगी"}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-11 col-lg-11 col-md-9 col-sm-9 col-11 mx-auto borders">
                                                        <div className="price-select text-center">
                                                            <button className="btn" onClick={() => this.bookServices(800)}>{this.props.i18n.language === "eng" ? "Book Now" : "अभी बुक करें"}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mx-auto">
                                    <div className="row clear-margins">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 mx-auto">
                                            <div className="price-card-theme">
                                                <div className="title"><span>{this.props.i18n.language === "eng" ? "Complex Discussion" : "जटिल चर्चा"}</span></div>
                                                <div className="price"><sup><i className="fa fa-inr" aria-hidden="true"></i></sup>1000</div>
                                                <div className="per-month"><p>{this.props.i18n.language === "eng" ? "For 45 Minutes" : "45 मिनट के लिए"}</p></div>
                                                <div className="row clear-margins">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-12 mt-5 mx-auto">
                                                        <div className="price-card-dec"><p>{this.props.i18n.language === "eng" ? "You will get telephonic conselling for 45 mins" : "आपको 45 मिनट के लिए टेलीफ़ोनिक कॉन्सिलिंग मिलेगी"}</p></div>
                                                    </div>
                                                    <div className="col-xl-10 col-lg-12 col-md-12 col-sm-10 col-10 mx-auto">
                                                        <div className="row clear-margins">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-7 col-12 mx-auto">
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "One to one Counselling" : "वन टू वन काउंसलिंग"}</span></div>
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "Time slot will be discussed" : "समय स्लॉट पर चर्चा की जाएगी"}</span></div>
                                                                <div className="event"><span>{this.props.i18n.language === "eng" ? "Privacy will be maintained" : "गोपनीयता बनाए रखी जाएगी"}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-11 col-lg-11 col-md-9 col-sm-9 col-11 mx-auto borders">
                                                        <div className="price-select text-center">
                                                            <button className="btn" onClick={() => this.bookServices(1000)}>{this.props.i18n.language === "eng" ? "Book Now" : "अभी बुक करें"}</button>
                                                        </div>
                                                    </div>
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
    const datas = state.CtrPayment
    return {
        paymentData: datas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        paymentActionCall: (data) => dispatch(actionCreator.PaymentActions(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(PricingHelp));
