import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import "../../Assets/StyleModules/PortalTheme.css";

class OrderHistory extends Component {
    render() {
        return (
            <div>
                <div className="counselling-page-header">
                    <div className="main-title"><span>{this.props.i18n.language === "eng" ? "Order History" : "आदेश इतिहास"}</span></div>
                </div>
                <div className="row">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mx-auto">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                <div>
                                    <p className="abc">Item Full Name</p>
                                    <p className="xyz">Descriptions of item</p>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                                <p className="abc">Item Full Name</p>
                                <p className="xyz">Descriptions of item</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(OrderHistory);
