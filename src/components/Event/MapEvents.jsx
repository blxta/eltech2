import { useState } from "react";

import Event from "./Event";

function Mapevents({ events }) {
  return (
    <>
      <div>Events</div>
      <div>
        {events.map((eve) => (
          <div key={eve.id}>
            <Event {...eve}></Event>
          </div>
        ))}
      </div>
    </>
  );
}

export default Mapevents;
