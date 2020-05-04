import React, { Component } from 'react';
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import 'font-awesome/css/font-awesome.min.css';
import Footer from "../Footer/Footer";
import "../../Assets/StyleModules/PortalTheme.css";

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hinglish: false
        }
    }

    handleLanguageChange = (lang) => {
        i18next.changeLanguage(lang)
    }

    logOutHandler = () => {
        window.localStorage.clear();
    }

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in">
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
                            <div className="bg-img">
                                <div className="row clear-margins">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="home-btn-group text-center">
                                            <label className="switch">
                                                <input type="checkbox" checked={this.props.i18n.language === "eng" ? true : false}
                                                onChange={this.props.i18n.language === "eng" ? ()=>this.handleLanguageChange("hin") : () => this.handleLanguageChange("eng")} />
                                                <div className="slider"></div>
                                            </label>
                                            <Link to="/contact-us" className="btn">{this.props.i18n.language === "eng" ? "Contact" : "संपर्क करें"}</Link>
                                            {localStorage.getItem('token') ?
                                                <div className="user-dropdown btn">
                                                    <img src="icons/user-icon.svg" alt="user" className="user-dropbtn img-fluid" />
                                                    <div className="dropdown-content">
                                                        <Link to="#">{this.props.i18n.language === "eng" ? "Profile" : "प्रोफ़ाइल"}</Link>
                                                        {/* <Link to="/order">{this.props.i18n.language === "eng" ? "Order History" : "आदेश इतिहास"}</Link> */}
                                                        <Link to="#" onClick={this.logOutHandler}>{this.props.i18n.language === "eng" ? "Sign Out" : "लॉग आउट"}</Link>
                                                    </div>
                                                </div> : 
                                                <Link to={{ pathname: localStorage.getItem('token') ? `/home${"home"}` : `lh-auth/${`home`}` }} className="btn">{this.props.i18n.language === "eng" ? "Log In" : "लॉग इन"}</Link>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 social-section">
                                        <ul className="home-social-icon">
                                            <li><img src="icons/followus.png" alt="fb" className="icon-spacer" /></li>
                                            <li><img src="icons/line.png" alt="fb" className="icon-spacer" /></li>
                                            <li><a href="https://www.facebook.com/lovershelplineofficial/" rel="noopener noreferrer" target="_blank"><img src="icons/fb.svg" alt="fb" className="icon-spacer" /></a></li>
                                            <li><a href="https://www.instagram.com/sakha_shashank?r=nametag" rel="noopener noreferrer" target="_blank"><img src="icons/insta.png" alt="twitter" className="icon-spacer" /></a></li>
                                            <li><a href="https://www.youtube.com/channel/UCkGuHlaIAyotWi2CeY8f44w" rel="noopener noreferrer" target="_blank"><img src="icons/youtube.png" alt="twitter" className="icon-spacer" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="about-homepage">
                                        <h1 className="lh-heading">{this.props.i18n.language === "eng" ? "Lovers Helpline" : "लवर्स हेल्पलाइन"}</h1>
                                        <p className="desc-note">{t('heading.head-desc')}</p>
                                        {/* <div className="fab"> + </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="home-more">Learn More</Link>
                </section>
                <section className="youtube-sec-not">
                    <div className="row clear-margins" style={{backgroundColor: "#303030"}}>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="featured-video-main">
                                <div className="title text-center"><span>{this.props.i18n.language === "eng" ? "Featured Videos" : "प्रदर्शित वीडियोज़"}</span></div>
                                <div className="description text-center"><p>{this.props.i18n.language === "eng" ? "Videos By Lovers HelpLine" : "लवर्स हेल्पलाइन वीडियो"}</p></div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card-yt">
                                <div className="slider">
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/0h5coBKQOzU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/UgrSXrbD7LE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/6tWPRZHQnyo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/a395-qHfSKo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/D6kYntxsJmU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/oFSUA1I78Zo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/zsSMoFydhU4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/Hh0vrRAgw_8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="item">
                                        <iframe width="560" className="homepage-yt-card" height="315" title="yt" src="https://www.youtube.com/embed/F4GfQvyAsVI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                            <div className="explore-all-btn">
                                <Link to="/yt-video" style={{textDecoration: "none"}}><button className="explore">{this.props.i18n.language === "eng" ? "Explore All" : "सभी देखें"}</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row clear-margins">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5 insperation-bg">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="insperation-main">
                                        <div className="title text-center"><span>{this.props.i18n.language === "eng" ? "Blog & Videos" : "ब्लॉग और वीडियो"}</span></div>
                                        <div className="description text-center"><p>{this.props.i18n.language === "eng" ? "Meanwhile you can browse our videos and blogs" : "इस बीच आप हमारे वीडियो और ब्लॉग देख सकते हैं"}</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div className="card-groups">
                                                    <div className="card">
                                                        <a href="https://www.facebook.com/lovershelplineofficial/videos/503417913563701/" target="_blank" rel="noopener noreferrer">
                                                            <div className="insperations-card-sec">
                                                                <img src="Images/news1.png" alt="news1" className="img-fluid news-cuts" />
                                                                <div className="description">
                                                                    <div className="title"><span>View</span></div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div className="card-groups">
                                                    <div className="card">
                                                        <a href="https://www.facebook.com/lovershelplineofficial/videos/549359005907656/" target="_blank" rel="noopener noreferrer">
                                                            <div className="insperations-card-sec">
                                                                <img src="Images/news3.png" alt="news1" className="news-cuts" />
                                                                <div className="description">
                                                                    <div className="title"><span>View</span></div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div className="card-groups">
                                                    <div className="card">
                                                        <a href="https://www.facebook.com/lovershelplineofficial/videos/302783457348501/" target="_blank" rel="noopener noreferrer">
                                                            <div className="insperations-card-sec">
                                                                <img src="Images/news2.png" alt="news1" className="news-cuts" />
                                                                <div className="description">
                                                                    <div className="title"><span>View</span></div>
                                                                </div>
                                                        </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div className="card-groups">
                                                    <div className="card">
                                                        <a href="https://www.facebook.com/lovershelplineofficial/videos/2643764705741086/" target="_blank" rel="noopener noreferrer">
                                                            <div className="insperations-card-sec">
                                                                <img src="Images/news4.png" alt="news1" className="news-cuts" />
                                                                <div className="description">
                                                                    <div className="title"><span>View</span></div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div className="card-groups">
                                                    <div className="card">
                                                        <a href="https://www.facebook.com/lovershelplineofficial/videos/2487123704873892/" target="_blank" rel="noopener noreferrer">
                                                            <div className="insperations-card-sec">
                                                                <img src="Images/news5.png" alt="news1" className="news-cuts" />
                                                                <div className="description">
                                                                    <div className="title"><span>View</span></div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div className="card-groups">
                                                    <div className="card">
                                                        <a href="https://www.facebook.com/lovershelplineofficial/videos/558860541563823/" target="_blank" rel="noopener noreferrer">
                                                            <div className="insperations-card-sec">
                                                                <img src="Images/news6.png" alt="news1" className="news-cuts" />
                                                                <div className="description">
                                                                    <div className="title"><span>View</span></div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                                                <div className="explore-all-btn text-center">
                                                    <a href="https://www.facebook.com/lovershelplineofficial/" className="fb-explore-all" target="_blank" rel="noopener noreferrer"><button className="explore-blog">{this.props.i18n.language === "eng" ? "View All" : "सभी देखें"}</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-class">
                    <div className="row clear-margins">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 clear-padings youtube-sec-not">
                                    <div className="home-featured-main">
                                        <img src="Images/fr.png" alt="" className="img-fluid" style={{position: "absolute", width: "100%", height: "100%"}} />
                                        <div className="title"><span>{t('homepage.how-work')}</span></div>
                                        <div className="description"><p>{t('homepage.how-work-desc')}</p></div>
                                        <Link to={{ pathname: localStorage.getItem('token') ? `/home${"home"}` : `lh-auth/${`home`}` }}><button className="subscribe">{this.props.i18n.language === "eng" ? "SIGN UP" : "रजिस्टर"}</button></Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" style={{background: "#FFFFFF"}}>
                                    <div className="header-featured">
                                        <div className="header"><span>{this.props.i18n.language === "eng" ? "Our Process" : "हमारी प्रक्रिया"}</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="featured-header-note">
                                                <div className="dates"><p>{this.props.i18n.language === "eng" ? "Step 1" : "चरण 1"}</p></div>
                                                <div className="description"><span>{t('homepage.featured-step1')}</span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="featured-header-note">
                                                <div className="dates"><p>{this.props.i18n.language === "eng" ? "Step 2" : "चरण 2"}</p></div>
                                                <div className="description"><span>{t('homepage.featured-step2')}</span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="featured-header-note">
                                                <div className="dates"><p>{this.props.i18n.language === "eng" ? "Step 3" : "चरण 3"}</p></div>
                                                <div className="description"><span>{t('homepage.featured-step3')}</span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 pb-3">
                                            <div className="featured-header-note">
                                                <div className="dates"><p>{this.props.i18n.language === "eng" ? "Step 4" : "चरण 4"}</p></div>
                                                <div className="description"><span>{t('homepage.featured-step4')}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
			    </section>
                <section className="youtube-sec-not">
                    <div className="row clear-margins">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="insperation-main">
                                <div className="title text-center"><span>{this.props.i18n.language === "eng" ? "Our Team" : "हमारी टीम"}</span></div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card-yt">
                                <div className="slider">
                                    <div className="item">
                                        <div className="item-inner">
                                            <img src="Images/team1.png" alt="" />
                                            <h4>Milan Kuchhal, (Advocate)</h4>
                                            <p>B.A. LL.B. (Hon’s)</p>
                                            <p className="our-desc">Experience of appearance before the Delhi High Court, National Commission, National Company Law Tribunal, District & Session Courts, Labor Courts and other quasi-Judicial bodies.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-inner">
                                            <img src="Images/team2.png" alt="" />
                                            <h4>Niyati Dave</h4>
                                            <p>M.com in Financial Accountancy.</p>
                                            <p className="our-desc">Until and unless love is not respected in a society there won’t be any kind of gender equality and the society would be a thriving place for misogyny and misandry.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-inner">
                                            <img src="Images/team3.png" alt="" />
                                            <h4>Jijith Haridasan</h4>
                                            <p>Software Engineer</p>
                                            <p className="our-desc">These kinds of movement will help the lovers tackle their issue regarding their relationship,problems they face in society etc</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-inner">
                                            <img src="Images/team4.png" alt="" />
                                            <h4>Bhardvaj Patel</h4>
                                            <p>Diploma in Designing.</p>
                                            <p className="our-desc">This is a place were guidance would be given to lovers on what to do or how to approach a situation if they are stuck with a problem.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-inner">
                                            <img src="Images/team5.png" alt="" />
                                            <h4>Divya Bhatai</h4>
                                            <p>(Managing Director, Spiritually Genius Pvt Ltd)</p>
                                            <p className="our-desc">Lovers helpline is a concept which is very much required in today’s time.When Love is not respected enough in this society ,it would be a norm in a society where lovers are criticised as just immature idiots who falls for bodily pleasures.</p>
                                        </div>
                                    </div>
                                </div>
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

export default withTranslation()(HomePage);
