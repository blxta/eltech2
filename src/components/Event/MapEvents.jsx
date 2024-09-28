import { useState } from "react";

import Event from "./Event";

function Mapevents({ events }) {
  return (
    <>
      <div>Events</div>
      <div>
        {!!events ? (
          events.map((eve) => (
            <div key={eve.id}>
              <Event {...eve}></Event>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}

export default Mapevents;
