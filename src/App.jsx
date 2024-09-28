import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Registration from "./components/Registration/Registration";
import Partisipants from "./components/Partisipants/Partisipants";
import Mapevents from "./components/Event/MapEvents";
import Pagination from "./components/Pagination";
import Sort from "./components/Sort";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  // let indexOfLastRecord = 0;
  // let indexOfFirstRecord = 0;
  // let currentRecords = 0;
  // let nPages = 0;

  useEffect(() => {
    const getEvents = async () => {
      try {
        //const res = await fetch("http://localhost:3080/events");
        const res = await fetch("https://editech-backend.vercel.app/events");

        const data = await res.json();
        // indexOfLastRecord = currentPage * recordsPerPage;
        // indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        // currentRecords = events.slice(indexOfFirstRecord, indexOfLastRecord);
        // nPages = Math.ceil(events.length / recordsPerPage);
        setEvents(data);
      } catch (e) {}
    };
    getEvents();
  }, []);

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = events.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(events.length / recordsPerPage);

  const location = useLocation();

  const isEventDetailPage = location.pathname.includes("/event/");
  return (
    <>
      {!isEventDetailPage && (
        <>
          {/* <Sort setEvents={setEvents} events={events}></Sort> */}
          {/* <Mapevents events={currentRecords}></Mapevents> */}
          {console.log("events")}
          <Mapevents events={events}></Mapevents>
          {/* <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </>
      )}

      <Routes>
        <Route
          path="/event/:id/reg"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/event/:id/part"
          element={<Partisipants></Partisipants>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
