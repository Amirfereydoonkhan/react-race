import axios from "axios";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useParams } from "react-router-dom";

const ShowUser = () => {
  const { raceID } = useParams();

  const [Race, setRace] = useState([]);
  const [RaceId, setRaceId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const raceApi = `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10`;
    const getraceData = axios.get(raceApi);
    axios
      .all([getraceData])
      .then(
        axios.spread((...allData) => {
          const allDataRaces = allData[0].data.data.race_summaries;
          const dataRace = Object.values(allDataRaces);
          setRace(dataRace);
          setLoading(false);
          setError(null);
        })
      )
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    setRaceId(Race.race_id);
  }, [RaceId]);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <h2>Race Details :</h2>
          {error && <div>{error}</div>}
          {loading && <div className="spinner-border"></div>}
          <h3>TIMER : <Countdown date={Date.now() + 60000} /></h3>
          {Race && Race.filter((race) => race.race_id == raceID).map((rc) => (
              <div className="col-md-8" key={rc.race_id}>
                <div className="card">
                  <div className="card-header">{rc.race_name}</div>
                  <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">TIMER : <Countdown date={Date.now() + 60000} /></li> */}
                    <li className="list-group-item">RACE ID : {raceID}</li>
                    <li className="list-group-item">name : {rc.race_name}</li>
                    <li className="list-group-item">meeting : {rc.meeting_name}</li>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default ShowUser;
//comment