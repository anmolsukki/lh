import React from "react";
import DefaultLayout from "../Containers";

const Home = React.lazy(() => import("../Components/Home/HomePage"));

const SignuoLogin = React.lazy(() => import("../Components/Authentication/Auth"));
const Forgot = React.lazy(() => import("../Components/Authentication/ForgotPasscode"));
const ContactUs = React.lazy(() => import("../Components/Contact/ContactUs"));
const OrderHistory = React.lazy(() => import("../Components/OrderHistory/OrderHistory"));

const GetTelePhonicHelp = React.lazy(() => import("../Components/Help/GetTelephonicHelp/GetTelePhonicHelp"));
const GetLegalHelp = React.lazy(() => import("../Components/Help/GetLegalHelp/GetLegalHelp"));
const GiveHelp = React.lazy(() => import("../Components/Help/GiveHelp/GiveHelp"));
const EmergencyHelp = React.lazy(() => import("../Components/Help/EmergencyHelp/EmergencyHelp"));
const YoutubeVideo = React.lazy(() => import("../Components/YouTubeVideo/YoutubeVideo"));
const About = React.lazy(() => import("../Components/About/About"));

const AboutCard = React.lazy(() => import("../Components/Common/AboutCard"));
const GetHelpForm = React.lazy(() => import("../Components/Common/GetHelpForm"));
const GiveHelpForm = React.lazy(() => import("../Components/Help/GiveHelp/GiveHelpForm"));
const PricingHelp = React.lazy(() => import("../Components/Common/PricingHelp"));

const routes = [
    { path: "/", name: "Main", component: DefaultLayout, exact: true },
  
    { path: "/home", name: "Home", component: Home, exact: true },

    { path: "/lh-auth/:id", name: "Signup Login", component: SignuoLogin, exact: true },
    { path: "/forgot", name: "Forgot", component: Forgot, exact: true },
    { path: "/contact-us", name: "Contact Us", component: ContactUs, exact: true },
    { path: "/order", name: "Order History", component: OrderHistory, exact: true, isPrivate: true },

    { path: "/get-telephonic-help", name: "Get TelePhonic Help", component: GetTelePhonicHelp, exact: true },
    { path: "/get-legal-help", name: "Get Legal Help", component: GetLegalHelp, exact: true },
    { path: "/give-help", name: "Give Help", component: GiveHelp, exact: true },
    { path: "/emergency-help", name: "Emergency Help", component: EmergencyHelp, exact: true },
    { path: "/yt-video", name: "Youtube Video", component: YoutubeVideo, exact: true },
    { path: "/about", name: "About", component: About, exact: true },

    { path: "/about-help/:id", name: "About Card", component: AboutCard, exact: true },
    { path: "/get-help-form/:id", name: "Get Help Form", component: GetHelpForm, exact: true, isPrivate: true },
    { path: "/give-help-form/:id", name: "Give Help Form", component: GiveHelpForm, exact: true, isPrivate: true },
    { path: "/pricing/:id", name: "Pricing", component: PricingHelp, exact: true, isPrivate: true }
];

export default routes;
