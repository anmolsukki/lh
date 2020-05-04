import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "../../../Assets/StyleModules/PortalTheme.css";

class GiveHelp extends Component {

    render() {
        const { t } = this.props;
        return (
            <div className="fade-in drawer-home">
                <div className="row get-main-page">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"Journalist"}` : `lh-auth/${`Journalist`}` }}><img src="Images/jujournalist.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"Journalist"}` : `lh-auth/${`Journalist`}` }}><p>{t('categories.journalist')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"NGO"}` : `lh-auth/${`NGO`}` }}><img src="Images/jungo.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"NGO"}` : `lh-auth/${`NGO`}` }}><p>{t('categories.NGO')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"Lawyer"}` : `lh-auth/${`Lawyer`}` }}><img src="Images/julawyer.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"Lawyer"}` : `lh-auth/${`Lawyer`}` }}><p>{t('categories.lawyer')}</p></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card image-card">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"Individual"}` : `lh-auth/${`Individual`}` }}><img src="Images/juindividual.png" className="img-style" alt="Avatar" /></Link>
                        </div>
                        <div className="cards-container">
                            <Link to={{ pathname: localStorage.getItem('token') ? `/give-help-form/${"Individual"}` : `lh-auth/${`Individual`}` }}><p>{t('categories.Reg-individual')}</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(GiveHelp);
