import { useState } from "react";

import EventCard from "./EventCard";

function EventsBoard({ events }) {
  return (
    <>
      <h1>Events</h1>
      <div class="events-grid">
        {!!events ? (
          events.map((eve) => (
            <div key={eve.id}>
              <div class="event-card">
                <EventCard {...eve}></EventCard>
              </div>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}

export default EventsBoard;
