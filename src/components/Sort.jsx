import React, { useState } from "react";

const Sort = ({ setEvents, events }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    const sortedEvents = [...events].sort((a, b) => {
      switch (selectedOption) {
        case "titleAZ":
          return a.title.localeCompare(a.title);
        case "titleZA":
          return b.title.localeCompare(b.title);
        case "dateFirst":
          return new Date(a.date) - new Date(b.date);
        case "dateLast":
          return new Date(b.date) - new Date(a.date);
        case "orgAZ":
          return a.organizer.localeCompare(b.organizer);
        case "orgZA":
          return b.organizer.localeCompare(a.organizer);
        default:
          return 0;
      }
    });

    setEvents(sortedEvents);
  };

  return (
    <div>
      <label htmlFor="options">Select an option: </label>
      <select id="options" value={selectedOption} onChange={handleSelectChange}>
        <option value="">--Choose an option--</option>
        <option value="titleAZ">Title A-Z</option>
        <option value="titleZA">Title Z-A</option>
        <option value="dateFirst">Date first</option>
        <option value="dateLast">Date last</option>
        <option value="orgAZ">Organizer A-Z</option>
        <option value="orgZA">Organizer Z-A</option>
      </select>
    </div>
  );
};

export default Sort;
