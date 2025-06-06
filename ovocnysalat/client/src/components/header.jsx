import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar bg-green-800 shadow-lg px-6 py-4 text-green-50">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-extrabold hover:text-yellow-300 transition-colors">
          🍓 Miskujsi
        </Link>
      </div>
      <nav className="flex gap-4">
        <Link
          to="/create-salad"
          className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold transition"
        >
          Vytvořit salát
        </Link>
        <Link
          to="/aboutus"
          className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold transition"
        >
          O nás
        </Link>
         <Link
          to="/contact"
          className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold transition"
        >
          Kontakt
        </Link>
        
      </nav>
    </header>
  );
}
