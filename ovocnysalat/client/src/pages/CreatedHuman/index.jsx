import { Link, useParams } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function CreatedHuman() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-grow flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-green-200 text-center">
          <h1 className="text-4xl font-extrabold text-green-800 mb-6">
            Salát byl vytvořen 🥗
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Tvůj salát byl úspěšně vytvořen s ID:
          </p>
          <Link
            to={`/salad/${id}`}
            className="text-green-700 font-semibold underline break-all block mb-6"
          >
            {id}
          </Link>

          <Link to="/">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md transition">
              Zpět na domovskou stránku 🏠
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
