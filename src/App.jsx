import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Registration from "./components/Registration/Registration";
import Partisipants from "./components/Partisipants/Partisipants";
import EventsBoard from "./components/Event/EventsBoard";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch("https://editech-backend.vercel.app/events");

        const data = await res.json();

        setEvents(data);
      } catch (e) {}
    };
    getEvents();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = events.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(events.length / recordsPerPage);

  const location = useLocation();

  const isEventDetailPage = location.pathname.includes("/event/");
  return (
    <>
      {!isEventDetailPage && events && (
        <>
          <div className="container">
            <EventsBoard events={currentRecords}></EventsBoard>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
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
