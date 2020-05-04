import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "../../../Assets/StyleModules/PortalTheme.css";

class GetTelephonicHelp extends Component {

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in drawer-home">
                <div className="row get-main-page">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`GH1`}`}}><img src="Images/pcrp.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"GH1"}` : `lh-auth/${`GH1`}` }}><p>{t('categories.relation-prob')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`GH2`}`}}><img src="Images/pcsp.png" className="img-fluid img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"GH2"}` : `lh-auth/${`GH2`}` }}><p>{t('categories.love-making-prob')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`GH3`}`}}><img src="Images/pcbm.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"GH3"}` : `lh-auth/${`GH3`}` }}><p>{t('categories.move-on')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`GH4`}`}}><img src="Images/pclgbtq.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"GH4"}` : `lh-auth/${`GH4`}` }}><p>{t('categories.lgbtq-advice')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{pathname: `about-help/${`GH5`}`}}><img src="Images/pcco.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/get-help-form/${"GH5"}` : `lh-auth/${`GH5`}` }}><p>{t('categories.complicated')}</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(GetTelephonicHelp);
