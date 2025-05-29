import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import salatImage from "../../assets/salat.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-green-900">
      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
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
      </main>

      <Footer />
    </div>
  );
}
