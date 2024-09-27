import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Registration from "../Registration/Registration";
import Partisipants from "../Partisipants/Partisipants";

function Event({ id: idEvent, title, description, event_date, organizer }) {
  return (
    <>
      <div>
        <strong>{title}</strong>
      </div>
      <div>{description}</div>
      <div>{event_date}</div>
      <div>{organizer}</div>

      <Link to={`/event/${idEvent}/reg`}>Reg </Link>
      <br></br>
      <Link to={`/event/${idEvent}/part`}>View</Link>
    </>
  );
}

export default Event;
