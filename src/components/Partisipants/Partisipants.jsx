import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Partisipants.css";

function Partisipant({ name, email }) {
  return (
    <>
      <div className="participant-name">{name}</div>
      <div className="participant-email">{email}</div>
    </>
  );
}

function Partisipants() {
  const [partisipants, setPartisipants] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPartisipants = async () => {
      try {
        const res = await fetch(
          `https://editech-backend.vercel.app/event?id=${id}`
        );
        const data = await res.json();
        console.log("part");
        console.log(data);
        setPartisipants(data);
      } catch (e) {}
    };
    getPartisipants();
  }, []);

  return (
    <>
      <div className="participants-container">
        <h2>"Awesome Event" participants</h2>
        <ul className="participants-list">
          {partisipants.map((part) => (
            <li key={part.id}>
              <Partisipant {...part}></Partisipant>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Partisipants;
