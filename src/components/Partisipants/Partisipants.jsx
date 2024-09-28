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
      {console.log("wr here")}

      {partisipants.map((part) => (
        <li key={part.id}>
          <Partisipant {...part}></Partisipant>
        </li>
      ))}
    </>
  );
}

export default Partisipants;
