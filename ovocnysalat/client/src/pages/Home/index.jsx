import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import salatImage from "../../assets/salat.jpg";
import { Sparkles, Heart, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-50 text-green-900">
      <Header />

      <main className="flex-grow px-6 py-16">
        {/* Hlavní blok */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 p-10 flex flex-col justify-center animate-fade-in-up">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-green-800">
              Miskujsi 🍇
            </h1>
            <p className="text-lg mb-10 max-w-md">
              Namixuj si svůj vlastní salát podle chuti! Vyber si ovoce, dresink a přílohy a vytvoř si ideální kombinaci.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/create-salad">
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-md transition">
                  Vytvoř si salát 🥗
                </button>
              </Link>
              <Link to="/salads">
                <button className="border-2 border-green-700 text-green-700 hover:bg-green-100 font-semibold py-3 px-8 rounded-md transition">
                  Objednávky 📋
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={salatImage}
              alt="Ovocný salát"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Výhody */}
        <section className="mt-20 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Proč si u nás míchat salát?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 text-green-800">
            <div className="flex flex-col items-center">
              <Sparkles size={36} className="mb-3 text-green-600" />
              <h3 className="font-semibold text-lg">Čerstvé suroviny</h3>
              <p className="text-sm mt-1 text-gray-600">Používáme pouze čerstvé ovoce a dresinky.</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart size={36} className="mb-3 text-green-600" />
              <h3 className="font-semibold text-lg">S láskou připravené</h3>
              <p className="text-sm mt-1 text-gray-600">Každý salát připravujeme jako pro sebe.</p>
            </div>
            <div className="flex flex-col items-center">
              <Smile size={36} className="mb-3 text-green-600" />
              <h3 className="font-semibold text-lg">Spokojenost zaručena</h3>
              <p className="text-sm mt-1 text-gray-600">Rychlá, zábavná a chutná služba pro všechny.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
