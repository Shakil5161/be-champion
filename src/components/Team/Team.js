import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Team = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
    return (
        <div className="card text-center m-2 p-2" style={{ width: "16rem", height: "350px"}}>
            <img src={strTeamBadge} height="50%" class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{strTeam}</h5>
                <p className="card-text">Sports Type: {strSport}</p>
                <Link to={"/team-details/"+idTeam}><button className="btn btn-primary">Explore<FontAwesomeIcon className="pt-1" icon={faArrowRight} /></button></Link>
            </div>
        </div>
    );
};

export default Team;