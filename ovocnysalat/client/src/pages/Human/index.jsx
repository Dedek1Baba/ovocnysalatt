import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSaladById } from "../../models/people";

export default function SaladDetail() {
  const { id } = useParams();
  const [salad, setSalad] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getSaladById(id);
      if (data.status === 200) {
        setSalad(data.payload);
        setLoaded(true);
      }
    }
    load();
  }, [id]);

  if (!isLoaded) return <p>Načítání salátu...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Salát od {salad.name}</h2>
      <p><strong>Ovoce:</strong> {salad.fruit}</p>
      <p><strong>Dresink:</strong> {salad.dressing}</p>
      <p><strong>Příloha:</strong> {salad.topping}</p>
    </div>
  );
}
