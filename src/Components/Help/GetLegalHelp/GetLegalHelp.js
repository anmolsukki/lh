import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "../../../Assets/StyleModules/PortalTheme.css";

class GetLegalHelp extends Component {

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in drawer-home">
                <div className="row get-main-page">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`LH1`}`}}><img src="Images/lcmarry.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"LH1"}` : `lh-auth/${`LH1`}` }}><p>{t('categories.marry')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`LH2`}`}}><img src="Images/lcdivorce.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"LH2"}` : `lh-auth/${`LH2`}` }}><p>{t('categories.divorce')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`LH3`}`}}><img src="Images/lclivein.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"LH3"}` : `lh-auth/${`LH3`}` }}><p>{t('categories.liveIn')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`LH4`}`}}><img src="Images/lcprotection.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"LH4"}` : `lh-auth/${`LH4`}` }}><p>{t('categories.protection')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`LH5`}`}}><img src="Images/lccomplicated.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"LH5"}` : `lh-auth/${`LH5`}` }}><p>{t('categories.seek-protection')}</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(GetLegalHelp);
