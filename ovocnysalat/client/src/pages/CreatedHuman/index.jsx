import { Link, useParams } from "react-router-dom";
export default function CreatedHuman() {
  const {id} = useParams();
    return (
    <div className="max-w-md mx-auto p-6 text-center font-sans">
      <h1 className="text-3xl font-bold mb-4">Salát byl vytvořen 🥗</h1>
      <p className="text-lg mb-6">
        Tvůj salát byl úspěšně vytvořen:{" "}
        <Link to={`/salad/${id}`} className="link link-primary break-all">
          {id}
        </Link>
      </p>

      <Link to="/">
        <button className="btn btn-secondary">Zpět na začátek 🏠</button>
      </Link>
    </div>
  );
}
