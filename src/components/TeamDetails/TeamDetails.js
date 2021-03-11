import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { faFlag, faFutbol, faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import male from '../../img/male.png';
import female from '../../img/female.png';
import './TeamDetails.css'
import SocialIcon from '../SocialIcon/SocialIcon';
import DynamicHeader from '../DynamicHeader/DynamicHeader';

const TeamDetails = () => {
    const teamId = useParams();
    const idTeam = teamId.teamId;
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])
    const { strTeam, strCountry, strGender, intFormedYear, strSport, strDescriptionEN, strStadiumDescription } = team;
    
    return (
        <div className="container-fluid p-0" style={{ backgroundColor: "#3B4DB6", color: "#FFFFFF" }}>
            <DynamicHeader team={team}></DynamicHeader>
            <div className="container">
                <div className="row pt-5" >
                    <div className="card mb-3 p-2 team-details border-0">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{strTeam}</h4>
                                    <p className="card-text"><FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />Founded: {intFormedYear}</p>
                                    <p className="card-text"><FontAwesomeIcon className="me-2" icon={faFlag} />Country: {strCountry}</p>
                                    <p className="card-text"><FontAwesomeIcon className="me-2" icon={faFutbol} />Sport Type: {strSport}</p>
                                    <p className="card-text"><FontAwesomeIcon className="me-2" icon={faMars} />Gender: {strGender}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {
                                    strGender === 'Male' ? <img src={male} width="100%" height="100%" alt="..." /> : <img src={female} width="100%" height="100%" alt="..." />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{color: 'lightGray'}}>
                    <p>{strDescriptionEN}</p>
                    <br />
                    <br />
                    <p>{strStadiumDescription}</p>
                </div>
                <SocialIcon team={team}></SocialIcon>
            </div>
        </div>
    );
};

export default TeamDetails;