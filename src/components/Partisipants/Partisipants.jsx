import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Partisipant({ name, email }) {
  return (
    <>
      <div>{name}</div>
      <div> {email}</div>
    </>
  );
}

function Partisipants() {
  const [partisipants, setPartisipants] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPartisipants = async () => {
      try {
        const res = await fetch(`http://localhost:3000/event?id=${id}`);
        const data = await res.json();
        setPartisipants(data.data);
      } catch (e) {}
    };
    getPartisipants();
  }, []);

  return (
    <>
      зф
      {partisipants.map((part) => (
        <li key={part.id}>
          <Partisipant {...part}></Partisipant>
        </li>
      ))}
    </>
  );
}

export default Partisipants;
