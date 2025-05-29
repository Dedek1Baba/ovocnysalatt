import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllSalads } from "../../models/people";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { toast } from "sonner";

export default function SaladList() {
  const [salads, setSalads] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const location = useLocation();

  const load = async () => {
    const data = await getAllSalads();
    if (data.status === 200) {
      setSalads(data.data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto p-6 font-sans">
        {!isLoaded ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <span className="loading loading-spinner loading-lg text-green-700"></span>
            <p className="mt-4 text-green-800 font-semibold">Načítání objednávek...</p>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-center text-green-800">
              Seznam objednávek salátů 🧾
            </h2>

            {salads.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">Zatím žádné objednávky nejsou 😢</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {salads.map((salad, index) => (
                  <Link
                    to={`/salad/${salad._id}`}
                    key={salad._id}
                    className="block border border-green-300 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 bg-white p-5"
                  >
                    <h3 className="text-xl font-semibold text-green-900 mb-2">
                      Objednávka #{index + 1}
                    </h3>
                    <p className="text-lg font-medium mb-3">{salad.name || "Bezejmenný zákazník"}</p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li><strong>Ovoce:</strong> {salad.fruit || "nezadáno"}</li>
                      <li><strong>Dresink:</strong> {salad.dressing || "nezadáno"}</li>
                      <li><strong>Přílohy:</strong> {salad.topping || "nezadáno"}</li>
                    </ul>
                  </Link>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Link to="/">
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md transition">
                  Zpět na domovskou stránku 🏠
                </button>
              </Link>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
