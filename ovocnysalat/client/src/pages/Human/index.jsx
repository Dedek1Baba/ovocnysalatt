
 import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getSaladById, deleteSalad } from "../../models/people";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MainView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [salad, setSalad] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getSaladById(id);
    if (res.status === 200) {
      setSalad(res.data);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Opravdu chcete tuto objednávku stornovat?");
    if (!confirm) return;

    try {
      const res = await deleteSalad(id);
      if (res.status === 200) {
        navigate("/salads", { state: { message: "Objednávka byla úspěšně smazána." } });
      } else {
        toast.error("Nepodařilo se smazat objednávku.");
      }
    } catch (err) {
      toast.error("Chyba při mazání objednávky.");
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Objednávka nenalezena.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-green-800">
        <p>Načítání objednávky...</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto py-12 px-6 text-gray-900">
        <Link
          to="/salads"
          className="text-green-700 font-semibold mb-6 inline-block hover:underline"
        >
          ← Zpět na seznam salátů
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-green-800">Detail objednávky 🥗</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-green-200">
          <p className="mb-4"><strong>Jméno zákazníka:</strong> {salad.name || "Neuvedeno"}</p>
          <p className="mb-2"><strong>Ovoce:</strong> {salad.fruit || "nezadáno"}</p>
          <p className="mb-2"><strong>Dresink:</strong> {salad.dressing || "nezadáno"}</p>
          <p className="mb-2"><strong>Přílohy:</strong> {salad.topping || "nezadáno"}</p>
        </div>

        <div className="flex gap-4 mt-5">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            🗑️ Stornovat objednávku
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
