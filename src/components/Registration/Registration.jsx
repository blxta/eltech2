import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("social");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    source: "",
    eventId: -1,
  });
  const handleChange1 = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      source: selectedValue,
      eventId: id,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        `https://editech-backend.vercel.app/visitorr?id=${id}&email=${formData.email}`
      );
      const data = await res.json();
      if (data.data === 0) {
        const response = await fetch(
          "https://editech-backend.vercel.app/visitor",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Отправляем данные как JSON
          }
        );

        // const result = await response.json();
        if (!response.ok) {
          throw new Error("Error");
        }

        alert("Registred!");
        setFormData({
          name: "",
          email: "",
          dateOfBirth: "",
          source: "social", // или другое значение по умолчанию
          eventId: -1,
        });
        navigate(-1);
      } else {
        alert("Already registered at this event");
        navigate(-1);
      }
    } catch (err) {}
  };

  return (
    <>
      <div className="reg-container">
        <h1>Event registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text" // Добавьте type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email" // Добавьте type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <div className="radio-group">
            <input
              id="social"
              type="radio"
              name="source"
              value="social"
              checked={selectedValue === "social"}
              onChange={handleChange1}
            />
            <label htmlFor="social">Social media</label>

            <input
              id="friends"
              type="radio"
              name="source"
              value="friends"
              checked={selectedValue === "friends"}
              onChange={handleChange1}
            />
            <label htmlFor="friends">Friends</label>

            <input
              id="myself"
              type="radio"
              name="source"
              value="myself"
              checked={selectedValue === "myself"}
              onChange={handleChange1}
            />
            <label htmlFor="myself">Found myself</label>
          </div>
          <button type="submit">Registration</button>
        </form>
      </div>
    </>
  );
}

export default Registration;
