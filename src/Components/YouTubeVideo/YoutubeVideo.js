import React from "react";
import axios from "axios";
import "../../Assets/StyleModules/PortalTheme.css";

const APIKEY = "AIzaSyBxujbq_EZ3pWG2pJDpeF3dbFSx7ew-xoc"
const ChannelID = "UCkGuHlaIAyotWi2CeY8f44w"
const result = 50
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${ChannelID}&part=snippet,id&order=date&maxResults=${result}` 

class YoutUbes extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            resultYt: []
        }
    }

    VideoListing = () => {
        axios.get(finalURL)
        .then((response) => {
            const resultYt = response.data.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
            this.setState({
                resultYt
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    componentDidMount = () => {
        this.VideoListing()
    }

    render () {
        return (
            <div className="fade-in">
                <div className="row clear-margins">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
                        <div className="row clear-margins yt-banner-card">
                            <div className="youtubebanner"></div>
                        </div>
                    </div>
                    {this.state.resultYt.map((link ,i ) => {
                        return (
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
                                <div className="card yt-card">
                                <iframe className="video-style" src={link} title="reactjs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default YoutUbes;
