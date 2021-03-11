
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="container-fluid p-0" style={{ backgroundColor: "#EFEFEF"}}>
            <Header></Header>
            <div className="container">
                <div className="row d-flex justify-content-center align-item-center mt-5 pb-5">
                    {
                        teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Teams;