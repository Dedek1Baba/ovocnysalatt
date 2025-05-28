import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-16 font-sans px-4">
      <h1 className="text-4xl font-bold mb-4">Ovocné Saláty </h1>
      <p className="text-lg mb-8">Namixuj si svůj vlastní salát podle chuti!</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/create-salad">
          <button className="btn btn-primary">Vytvoř si salát </button>
        </Link>
        <Link to="/salads">
          <button className="btn btn-outline">Zobraz vytvořené </button>
        </Link>
      </div>
    </div>
  );
}
