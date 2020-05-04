import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import "../../Assets/StyleModules/PortalTheme.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

class AboutCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parameter: "",
            conentShow: ""
        }
    }

    componentDidMount = () => {
        var str = this.props.match.params.id
        this.setState({
            parameter: str
        })
        if(str === "GH1") {
            this.setState({
                conentShow: "rp-prob"
            })
        }
        else if (str === "GH2") {
            this.setState({
                conentShow: "sex-prob"
            })
        }
        else if (str === "GH3") {
            this.setState({
                conentShow: "break-up"
            })
        }
        else if (str === "GH4") {
            this.setState({
                conentShow: "lgbtq"
            })
        }
        else if (str === "GH5") {
            this.setState({
                conentShow: "love-marriage"
            })
        }
        else if (str === "LH1") {
            this.setState({
                conentShow: "get-married"
            })
        }
        else if (str === "LH2") {
            this.setState({
                conentShow: "divorce"
            })
        }
        else if (str === "LH3") {
            this.setState({
                conentShow: "marriage-prob"
            })
        }
        else if (str === "LH4") {
            this.setState({
                conentShow: "live-in"
            })
        }
        else if (str === "LH5") {
            this.setState({
                conentShow: "legal-protection"
            })
        }
    }

    gotToForm = () => {
        if (localStorage.getItem("token")) {
            this.props.history.push(`/get-help-form/${this.state.parameter}`)
        }
        else {
            this.props.history.push(`/lh-auth/${this.state.parameter}`)
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in">
                <section>
                    <div className="row clear-margins">
                        {this.state.parameter === "GH1" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-gh1-bg clear-padings"></div> :
                        this.state.parameter === "GH2" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-gh3-bg clear-padings"></div> :
                        this.state.parameter === "GH3" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-gh2-bg clear-padings"></div> :
                        this.state.parameter === "GH4" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-gh4-bg clear-padings"></div> :
                        this.state.parameter === "GH5" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-gh5-bg clear-padings"></div> :
                        this.state.parameter === "LH1" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-lh1-bg clear-padings"></div> :
                        this.state.parameter === "LH2" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-lh2-bg clear-padings"></div> :
                        this.state.parameter === "LH3" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-lh3-bg clear-padings"></div> :
                        this.state.parameter === "LH4" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-lh4-bg clear-padings"></div> :
                        this.state.parameter === "LH5" ?
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-lh5-bg clear-padings"></div> : null
                        }
                    </div>
                    <Link to="#" className="home-more">Learn More</Link>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5 mx-auto">
                            {this.state.conentShow === "rp-prob" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Relationship Problem" : "संबंध समस्या"}</h1>
                                    <p className="description">{t('card-info.gh1-desc')}</p>
                                </div> :
                                this.state.conentShow === "sex-prob" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Sex Problems" : "सेक्स प्रॉब्लम"}</h1>
                                    <p className="description">{t('card-info.gh2-desc')}</p>
                                </div> :
                                this.state.conentShow === "break-up" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Break-up" : "ब्रेक-अप"}</h1>
                                    <p className="description">{t('card-info.gh3-desc')}</p>
                                </div> :
                                this.state.conentShow === "lgbtq" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Lesbian and Gay" : "समलैंगिक"}</h1>
                                    <p className="description">{t('card-info.gh4-desc')}</p>
                                </div> :
                                this.state.conentShow === "love-marriage" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Love marriage problem" : "लव मैरिज प्रॉब्लम"}</h1>
                                    <p className="description">{t('card-info.gh5-desc')}</p>
                                </div> :
                                this.state.conentShow === "get-married" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Get Married" : "शादी करना"}</h1>
                                    <p className="description">{t('card-info.lh1-desc')}</p>
                                </div> :
                                this.state.conentShow === "divorce" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Divorce" : "डाइवोर्स"}</h1>
                                    <p className="description">{t('card-info.lh2-desc')}</p>
                                </div> :
                                this.state.conentShow === "marriage-prob" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "After marriage problems" : "आफ़्टर मैरिज प्रॉब्लम"}</h1>
                                    <p className="description">{t('card-info.lh3-desc')}</p>
                                </div> :
                                this.state.conentShow === "live-in" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "Live-in relationship" : "लिव इन रिलेशनशिप"}</h1>
                                    <p className="description">{t('card-info.lh4-desc')}</p>
                                </div> :
                                this.state.conentShow === "legal-protection" ?
                                <div className="about-page">
                                    <h1 className="heading">{this.props.i18n.language === "eng" ? "How can lovers seek legal protection" : "प्रेमी क़ानूनी प्रोटेक्शन कैसे प्राप्त करें"}</h1>
                                    <p className="description">{t('card-info.lh5-desc')}</p>
                                </div> : null
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5 mb-5 mx-auto">
                            <div className="row clear-margins">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                                    <div className="text-center">
                                        <img src="icons/about-step1.png" alt="" className="step-border img-fluid" />
                                        <p className="about-step-num">{this.props.i18n.language === "eng" ? "Steps 1" : "चरण 1"}</p>
                                        <p className="about-step-desc">{this.props.i18n.language === "eng" ? "Identify Your Problem" : "अपनी समस्या को पहचानें"}</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                                    <div className="text-center">
                                        <img src="icons/about-step2.png" alt="" className="step-border img-fluid" />
                                        <p className="about-step-num">{this.props.i18n.language === "eng" ? "Steps 2" : "चरण 2"}</p>
                                        <p className="about-step-desc">{this.props.i18n.language === "eng" ? "Fill Your Details" : "अपना विवरण भरें"}</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                                    <div className="text-center">
                                        <img src="icons/about-step3.png" alt="" className="step-border img-fluid" />
                                        <p className="about-step-num">{this.props.i18n.language === "eng" ? "Steps 3" : "चरण 3"}</p>
                                        <p className="about-step-desc">{this.props.i18n.language === "eng" ? "Chose Counselling Duration & Pay" : "परामर्श अवधि चुनें और भुगतान"}</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mx-auto">
                                    <div className="text-center">
                                        <img src="icons/about-step4.png" alt="" className="step-border img-fluid" />
                                        <p className="about-step-num">{this.props.i18n.language === "eng" ? "Steps 4" : "चरण 4"}</p>
                                        <p className="about-step-desc">{this.props.i18n.language === "eng" ? "Receive Call & Select Timming" : "कॉल प्राप्त करें और टाइमिंग चुनें"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5 mb-5 mx-auto">
                            <div className="about-guide-theme">
                                <div className="row clear-margins">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-12 mt-5 mb-5 mx-auto">
                                        <div className="about-guide-dec"><p>{t('aboutPage.quotes')}</p></div>
                                        <div className="title text-right"><span>-</span>Sakha</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mb-5 text-center mx-auto">
                            <div className="help-info-try">
                                <button className="letstry" onClick={this.gotToForm}>{this.props.i18n.language === "eng" ? "Get Counselling" : "सलाह प्राप्त करें ->"}</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withTranslation()(AboutCard);
