import React from 'react';
import { Link } from 'react-router-dom';

const DynamicHeader = (props) => {
    const { strStadiumThumb, strTeamBadge } = props.team;
    return (
        <div className="row overflow-hidden m-0 " style={{ width: "100%", height: "300px" }}>
            <div className="card bg-dark text-white p-0 img-fluid border-0" >
                <img src={strStadiumThumb} height="100%" className="square card-img" alt="..." />
                <div className="card-img-overlay text-center mt-5">
                    <img src={strTeamBadge} width="15%" height="20%" className=" circle" alt="..." />
                    <div className=" m-5">
                        <Link to='/'><button type="button" className="btn btn-primary">All Teams</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicHeader;