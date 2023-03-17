import { useState, useEffect } from "react";
import axios from "axios";
// import Rooms from "../components/rooms";
import Rooms from "../components/Rooms";

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    try {
      (async () => {
        setloading(true);
        const response = (await axios.get("api/rooms/getallrooms")).data;
        setRooms(response);
        setloading(false);
      })();
    } catch (error) {
      setError(true);
      setloading(false);
    }
  }, []);

  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        rooms.map((room) => {
          return <div className="col-md-9 mt-2">
            <Rooms room={room}/>
          </div>
        })
      )}
    </div>
    </div>
  );
};

export default Homescreen;
