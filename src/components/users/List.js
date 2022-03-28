import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { useRouteMatch } from "react-router-dom";
// import ShowUser from "../../pages/users/Show";


function refreshPage() {
    window.location.reload();
  }
  {setTimeout(function() {
    window.location.reload();
  }, 60000);
}
const ListUsers = ({ Races }) => {
    const {path} = useRouteMatch()
    return (
        <>
        <h3 id='timer'>TIMER :<Countdown date={Date.now() + 60000} >
            </Countdown></h3>
            
            {Races.map(race => (
                (race.category_id == '9daef0d7-bf3c-4f50-921d-8e818c60fe61' ?
                // const sortProperty = race.advertised_start;
                // const sorted = bands.sort((a, b) => b[sortProperty] - a[sortProperty]);
                // console.log(sorted)
                // setData(sorted)
                

                <div className="col-md-4" key={race.race_id}>
                    <div className="card">
                        <div className="card-header fw-bold">
                            <span >Race Name :
                                <a href={`${path}/${race.race_id}`}>{race.race_name}</a>           
                                </span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Metting Name : {race.meeting_name}</li>
                            <li className="list-group-item">Country : {race.venue_country}</li>
                            <li className="list-group-item">race_number : {race.race_number}</li>
                        </ul>
                    </div>
                </div>
                : '' )
            ))}
               
        </>
    )
}

export default ListUsers;