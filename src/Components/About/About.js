import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Footer from '../Footer/Footer';
import { withTranslation } from 'react-i18next';
import 'font-awesome/css/font-awesome.min.css';
import "../../Assets/StyleModules/PortalTheme.css";

class About extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="fade-in">
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
                            <div className="about-img" >
                                <div className="about-mainpage">
                                    <h1 className="title">{this.props.i18n.language === "eng" ? "About Us" : "हमारे बारे में"}</h1>
                                    <p className="description">{this.props.i18n.language === "eng" ? "Its an initiative by Sakha for all the lovers out there!" : "यह सखा द्वारा सभी प्रेमियों के लिए एक पहल है!"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="home-more">Learn More</Link>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mx-auto">
                            <div className="about-page">
                                <h1 className="heading">{this.props.i18n.language === "eng" ? "About Sakha" : "सखा के बारे में"}</h1>
                                <p className="description">{t('aboutPage.believeOur1')}</p>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mx-auto">
                            <div className="about-page">
                                <h1 className="heading">{this.props.i18n.language === "eng" ? "About Lovers Helpline" : "लवर्स हेल्पलाइन बारे में"}</h1>
                                <p className="description">{t('aboutPage.aboutUs1')}</p>
                                <p className="description">{t('aboutPage.aboutUs2')}</p>
                                <p className="description">{t('aboutPage.aboutUs3')}</p>
                                <p className="description">{t('aboutPage.aboutUs4')}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mx-auto clear-padings">
                            <div className="row clear-margins">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row clear-margins">
                                        <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12 clear-padings">
                                            <div className="about-page">
                                                <h1 className="heading">{this.props.i18n.language === "eng" ? "Sakha's Work For Lovers" : "सखा का काम प्रेमी के लिए"}</h1>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 clear-padings">
                                            <div className="about-page">
                                                <p className="description">{t('aboutPage.sakha-works')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row clear-margins">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="card about-page-card">
                                                <Link to="#"><img src="Images/aboutThing1.jpg" className="img-style" alt="Avatar" /></Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="card about-page-card">
                                                <Link to="#"><img src="Images/aboutThing2.jpg" className="img-style" alt="Avatar" /></Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="card about-page-card">
                                                <Link to=""><img src="Images/aboutThing3.jpg" className="img-style" alt="Avatar" /></Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="card about-page-card">
                                                <Link to="#"><img src="Images/aboutThing4.jpg" className="img-style" alt="Avatar" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5 mx-auto">
                            <div className="row clear-margins">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-12 mx-auto">
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
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mb-5 mx-auto">
                            <div className="about-page">
                                <h1 className="heading">{this.props.i18n.language === "eng" ? "How Lovers Helpline Works" : "लवर्स हेल्पलाइन कैसे काम करती है"}</h1>
                                <p className="description">{t('aboutPage.how-work')}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default withTranslation()(About);
