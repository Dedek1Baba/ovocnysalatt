import { Link } from "react-router-dom";

export default function SaladListCell({ _id, name }) {
  return (
    <Link
      to={`/salad/${_id}`}
      className="block border rounded-lg p-4 shadow hover:shadow-md hover:bg-base-200 transition duration-200"
    >
      <p className="text-lg font-medium text-primary">{name || "Bezejmenný salát"}</p>
    </Link>
  );
}
