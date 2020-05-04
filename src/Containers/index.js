import React, { Suspense, Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import routes from '../Config/Router';
import { PrivateRoute } from '../Config/PrivateRoute';
import "./index.css";

class Main extends Component {
    constructor (props) {
        super (props)
        this.state = {
            drawerSelected: false,
            screenWidth: 0
        }
    }

    loading = () => <div>Loading...</div>;

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ screenWidth: window.innerWidth });
    }

    gotoHome = () => {
        this.props.history.push("/home")
        window.location.reload()
    }

    openNav = () => {
        if(this.state.screenWidth <= 767) {
            document.getElementById("mySidebar").style.width = "100%";
        }
        else {
            document.getElementById("mySidebar").style.width = "260px";
            document.getElementById("main").style.marginLeft = "260px";
        }
        if(this.props.history.location.pathname === "/home") {
            this.props.history.push("about")
        }
        else {
            this.props.history.push(this.props.location.pathname)
        }
        this.setState({
            drawerSelected: !this.state.drawerSelected
        })
    }

    closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        if(this.props.history.location.pathname === "/about") {
            this.props.history.push("/home")
        }
        else {
            this.props.history.push(this.props.location.pathname)
        }
        this.setState({
            drawerSelected: !this.state.drawerSelected
        })
    }

    handleDrawerClick = () => {
        if(this.state.screenWidth <= 767) {
            this.closeNav()
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="sidenav">
                    { this.state.screenWidth <= 767 ?
                        <div>
                            <span className="lh-name" onClick={this.gotoHome}>{t('heading.name')}</span>
                        </div> :
                        <Link to="/home"><div className="abc"><div id="logo-img" onClick={this.gotoHome}></div></div></Link>
                    }
                    { this.state.drawerSelected === false ?
                        <div className="hamburger-position">
                            <button className="openbtn" onClick={this.openNav}>
                                <div className="hamburger-menu"></div>
                                <div className="hamburger-menu"></div>
                                <div className="hamburger-menu"></div>
                            </button>
                        </div> :
                        <div className="hamburger-position">
                            <button className="closebtn" onClick={this.closeNav}>
                                <div className="line-first"></div>
                                <div className="line-second"></div>
                            </button>
                        </div>
                    }
                </div>
                <div id="mySidebar" className="sidebar">
                    {this.state.drawerSelected === true ?
                        <div>
                            <p className={`${this.state.drawerSelected === true ? "lh-header-fade" : ""}`}>{this.props.i18n.language === "eng" ? "Lovers" : "लवर्स"}{this.props.i18n.language === "eng" ? <span style={{color:"#ffffff"}}>&nbsp;HelpLine</span> : <span style={{color:"#ffffff"}}>&nbsp;हेल्पलाइन</span>}</p>
                            <ul className="nav-menu">
                            <li className={`${this.state.drawerSelected === true ? "nav-option" : ""}`}><Link to={{ pathname: "/about" }} className={this.props.location.pathname === "/about" ? "nav-option active" : ""} onClick={this.handleDrawerClick}>{t('nav-option.about')}</Link></li>
                                <li className={`${this.state.drawerSelected === true ? "nav-option" : ""}`}><Link to={{ pathname: "/get-telephonic-help" }} className={this.props.location.pathname === "/get-telephonic-help" ? "nav-option active" : ""} onClick={this.handleDrawerClick}>{t('nav-option.telephonic-help')}</Link></li>
                                <li className={`${this.state.drawerSelected === true ? "nav-option" : ""}`}><Link to={{ pathname: "/get-legal-help" }} className={this.props.location.pathname === "/get-legal-help" ? "nav-option active" : ""} onClick={this.handleDrawerClick}>{t('nav-option.get-legal-help')}</Link></li>
                                <li className={`${this.state.drawerSelected === true ? "nav-option" : ""}`}><Link to={{ pathname: "/yt-video" }} className={this.props.location.pathname === "/yt-video" ? "nav-option active" : ""} onClick={this.handleDrawerClick}>{t('nav-option.video-advice')}</Link></li>
                                <li className={`${this.state.drawerSelected === true ? "nav-option" : ""}`}><Link to={{ pathname: "/emergency-help" }} className={this.props.location.pathname === "/emergency-help" ? "nav-option active" : ""} onClick={this.handleDrawerClick}>{t('nav-option.emergency-help')}</Link></li>
                                <li className={`${this.state.drawerSelected === true ? "nav-option" : ""}`}><Link to={{ pathname: "/give-help" }} className={this.props.location.pathname === "/give-help" ? "nav-option active" : ""} onClick={this.handleDrawerClick}>{t('nav-option.give-help')}</Link></li>
                            </ul>
                        </div> : null
                    }
                </div>
                <Container fluid className="main-container">
                    <Suspense fallback={this.loading()}>
                        <Switch>
                            { routes.map((route, idx) => {
                                if(route.isPrivate) {
                                    return <PrivateRoute
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        component={route.component}
                                    />
                                }
                                return route.component ? (
                                    <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => ( <route.component {...props} /> )} />
                                ) : (null)
                            })}
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Suspense>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(Main);
