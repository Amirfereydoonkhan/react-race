import { useEffect, useState } from "react";
import React from "react";
import ListUsers from "../../components/users/List";
import axios from "axios";

const IndexUser = () => {
//   const [users, setUsers] = useState([]);
  const [Races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const raceApi =
      "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10";
    const getraceData = axios.get(raceApi);
    axios.all([getraceData]).then(
      axios.spread((...allData) => {
        const allDataRaces = allData[0].data.data.race_summaries;
        const dataRace = Object.values(allDataRaces)
        setRaces(dataRace)
        setLoading(false)
         setError(null)
      })
    )
    .catch(err =>{
        setError(err.message)
        setLoading(false)
    })
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
     <>
               <div className="container mt-5">
           <div className="row g-3">
               <h2>Races :</h2>
               {error && <div>{error}</div>}
               {loading && <div className="spinner-border"></div>}
               {Races && <ListUsers Races={Races} key={Races.race_id}/>}
               {console.log(Races)}
               {/* {(Races && Races.map(race => <h3 key={race.race_id}>{race.race_name}</h3>)) } */}
           </div>
       </div>
     </>
   );

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {

//       fetch("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10")
//           .then(res => res.json())
//           .then(data => {
//               setUsers(data);
//               setLoading(false)
//               setError(null)
//           }).catch(err => {
//               setError(err.message)
//               setLoading(false)
//           })

//   }, []);

//   return (
//       <div className="container mt-5">
//           <div className="row g-3">
//               <h2>Users :</h2>
//               {error && <div>{error}</div>}
//               {loading && <div className="spinner-border"></div>}
//               {/* {users && <ListUsers users={users} />} */}
//               {console.log(users.data.race_summaries)}
//             {users && <h2>{users.data.map(user => <h3>{console.log(user.race_summaries)}</h3>)}</h2>}
//           </div>
//       </div>
//   )
};

export default IndexUser;
//comment 1.3