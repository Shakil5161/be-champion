import React from 'react';
import Facebook from '../../img/Facebook.png';
import Twitter from '../../img/Twitter.png';
import YouTube from '../../img/YouTube.png';
import './SocialIcon.css'
const SocialIcon = (props) => {
    const { strFacebook, strTwitter, strYoutube } = props.team;
    return (
        <div className="social-icon">
            <a href={"http://"+strFacebook} target="_blank">
                <img src={Facebook} alt="" srcset="" />
            </a>
            <a href={"http://"+strTwitter} target="_blank">
                <img src={Twitter} alt="" srcset="" />
            </a>
            <a href={"http://"+strYoutube} target="_blank">
                <img src={YouTube} alt="" srcset="" />
            </a>
        </div>
    );
};


export default SocialIcon;