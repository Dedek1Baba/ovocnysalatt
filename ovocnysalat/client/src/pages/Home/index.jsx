import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import salatImage from "../../assets/salat.jpg";
import salat1 from "../../assets/banan.jpg";
import salat2 from "../../assets/jablko.jpg";
import salat3 from "../../assets/hrozno.jpg";
import { Sparkles, Heart, Smile, Star } from "lucide-react";

export default function Home() {
 const salads = [
  {
    image: salat1,
    title: "Banán z Ekvádoru",
    description:
      "Dovezený přímo z tropických plantáží – banán, který ti zvedne náladu i v nejzamračenější den.",
    imageRight: false,
  },
  {
    image: salat2,
    title: "Jablko z moravského sadu",
    description:
      "Křupavé a šťavnaté jablko, které ti připomene babiččinu zahradu a pohodu venkovského rána.",
    imageRight: true,
  },
  {
    image: salat3,
    title: "Hrozno z jižní Francie",
    description:
      "Sladké hrozny s vůní slunce, které tě na chvíli přenesou do vinic Provence – ideální pauza v hektickém dni.",
    imageRight: false,
  },
];


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-50 text-green-900">
      <Header />

      <main className="flex-grow px-6 py-16">
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
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">Naše nejlepší suroviny</h2>
          <div className="flex flex-col gap-12">
            {salads.map(({ image, title, description, imageRight }, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row ${
                  imageRight ? "md:flex-row-reverse" : ""
                } items-center bg-white rounded-xl shadow-lg overflow-hidden`}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full md:w-1/2 h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-green-800">{title}</h3>
                  <p className="text-green-900">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/create-salad">
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-md transition">
                Vytvoř si vlastní salát 🥗
              </button>
            </Link>
          </div>
        </section>
        <section className="mt-20 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Co říkají naši zákazníci?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Anna K.",
                text: "Salát byl opravdu čerstvý a výborně chutnal! Rychlé dodání a skvělá komunikace.",
                stars: 5,
              },
              {
                name: "Petr M.",
                text: "Skvělý výběr surovin a možnost si salát namixovat podle sebe. Určitě objednám znovu!",
                stars: 4,
              },
              {
                name: "Lucie R.",
                text: "Milá obsluha a rychlá příprava. Doporučuji všem, kdo chtějí zdravě a chutně jíst.",
                stars: 5,
              },
            ].map(({ name, text, stars }, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-green-900"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) =>
                    idx < stars ? (
                      <Star key={idx} size={24} className="text-yellow-400" />
                    ) : (
                      <Star key={idx} size={24} className="text-gray-300" />
                    )
                  )}
                </div>
                <p className="italic mb-4 text-gray-700">"{text}"</p>
                <h4 className="font-semibold">{name}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
