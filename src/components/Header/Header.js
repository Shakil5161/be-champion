import React from 'react';
import Stadium from '../../img/stadium.jpg';
const Header = () => {
    return (
        <div>
            <div className="bg-dark text-white" >
                <img src={Stadium} height="250px" width="100%" className="" alt="..."/>
                    <div className="card-img-overlay text-center mt-5">
                        <h1 className="card-title mt-5 text-uppercase">Be Champion</h1>
                    </div>
            </div>
        </div>
    );
};

export default Header;