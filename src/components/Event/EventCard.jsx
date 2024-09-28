import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Registration from "../Registration/Registration";
import Partisipants from "../Partisipants/Partisipants";

function EventCard({ id: idEvent, title, description, event_date, organizer }) {
  return (
    <>
      <div>
        <strong>{title}</strong>
      </div>
      <div>{description}</div>
      <div>
        <strong>{event_date.slice(0, 10)}</strong>
      </div>
      <div>{organizer}</div>

      <div className="buttons">
        <Link to={`/event/${idEvent}/reg`}>Reginstration </Link>
        <Link to={`/event/${idEvent}/part`}>View</Link>{" "}
      </div>
    </>
  );
}

export default EventCard;
