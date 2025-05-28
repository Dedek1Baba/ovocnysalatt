import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllSalads } from "../../models/people";

export default function SaladList() {
  const [salads, setSalads] = useState([]);
  const [isLoaded, setLoaded] = useState(true);

  const load = async () => {
    const data = await getAllSalads();
    console.log(data);
    if (data.status === 200) {
      setSalads(data.data);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (!isLoaded) {
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4">Načítání salátů...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Vytvořené ovocné saláty 
      </h2>

      {salads.length === 0 ? (
        <p className="text-center text-gray-500">
          Zatím žádné saláty nejsou 
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {salads.map((salad) => (
            <Link
              to={`/salad/${salad._id}`}
              key={salad._id}
              className="card bg-base-100 shadow hover:shadow-lg transition duration-200"
            >
              <div className="card-body">
                <h3 className="card-title">
                  {salad.name || "Bezejmenný salát"}
                </h3>
                <ul className="text-sm text-gray-600">
                  <li>
                    <strong>Ovoce:</strong> {salad.fruit || "nezadáno"}
                  </li>
                  <li>
                    <strong>Dresink:</strong> {salad.dressing || "nezadáno"}
                  </li>
                  <li>
                    <strong>Přílohy:</strong> {salad.topping || "nezadáno"}
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link to="/">
          <button className="btn btn-secondary">
            Zpět na domovskou stránku 
          </button>
        </Link>
      </div>
    </div>
  );
}
