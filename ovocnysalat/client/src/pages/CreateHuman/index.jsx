import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createSalad } from "../../models/people";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function CreateSalad() {
  const [formData, setFormData] = useState({});
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButton = async (e) => {
    e.preventDefault();
    setFeedback(null);
    try {
      const data = await createSalad(formData);
      if (data.status === 201) {
        setFormData({});
        setFeedback({ type: "success", message: "Salát byl úspěšně vytvořen!" });
        setTimeout(() => {
          navigate(`/created-salad/${data.data._id}`);
        }, 1500);
      } else {
        setFeedback({ type: "error", message: "Něco se pokazilo. Zkus to znovu." });
      }
    } catch (error) {
      setFeedback({ type: "error", message: "Chyba připojení k serveru." });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-grow flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-extrabold text-green-800 mb-8 text-center tracking-wide">
            Vytvoř si ovocný salát
          </h1>

          {feedback && (
            <div
              className={`mb-6 px-4 py-3 rounded ${
                feedback.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
              role="alert"
            >
              {feedback.message}
            </div>
          )}

          <form onSubmit={handleButton} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Tvé jméno"
              value={formData.name || ""}
              onChange={handleInput}
              className="border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />

            <div>
              <label htmlFor="fruit" className="block font-semibold mb-1 text-gray-700">
                1. Vyber ovoce
              </label>
              <select
                id="fruit"
                name="fruit"
                value={formData.fruit || ""}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              >
                <option value="">-- vyber --</option>
                <option value="jahody">Jahody</option>
                <option value="banán">Banán</option>
                <option value="ananas">Ananas</option>
                <option value="borůvky">Borůvky</option>
              </select>
            </div>

            <div>
              <label htmlFor="dressing" className="block font-semibold mb-1 text-gray-700">
                2. Dresink
              </label>
              <select
                id="dressing"
                name="dressing"
                value={formData.dressing || ""}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              >
                <option value="">-- vyber --</option>
                <option value="med">Med</option>
                <option value="jogurt">Jogurt</option>
                <option value="limetka">Limetková šťáva</option>
              </select>
            </div>

            <div>
              <label htmlFor="topping" className="block font-semibold mb-1 text-gray-700">
                3. Přílohy
              </label>
              <select
                id="topping"
                name="topping"
                value={formData.topping || ""}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              >
                <option value="">-- vyber --</option>
                <option value="oříšky">Oříšky</option>
                <option value="kokos">Strouhaný kokos</option>
                <option value="čokoláda">Čokoládové vločky</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-6 bg-green-700 text-white font-semibold rounded-md py-3 hover:bg-green-800 transition"
            >
              Odeslat salát 🍴
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
