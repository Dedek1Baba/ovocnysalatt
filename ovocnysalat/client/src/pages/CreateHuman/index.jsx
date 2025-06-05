import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSalad } from "../../models/people";
import Header from "../../components/header";
import Footer from "../../components/footer";

const prices = {
  fruit: {
    jahody: 40,
    "banán": 35,
    "ananas": 45,
    "borůvky": 50,
  },
  dressing: {
    med: 15,
    jogurt: 10,
    limetka: 12,
  },
  topping: {
    "oříšky": 20,
    "kokos": 18,
    "čokoláda": 25,
  },
};

export default function CreateSalad() {
  const [formData, setFormData] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const newForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(newForm);
    recalculateTotal(newForm);
  };

  const recalculateTotal = (data) => {
    const fruitPrice = prices.fruit[data.fruit] || 0;
    const dressingPrice = prices.dressing[data.dressing] || 0;
    const toppingPrice = prices.topping[data.topping] || 0;
    setTotal(fruitPrice + dressingPrice + toppingPrice);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    setFeedback(null);
    try {
      const data = await createSalad({ ...formData, total });
      if (data.status === 201) {
        setFormData({});
        setTotal(0);
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
                <option value="jahody">Jahody (40 Kč)</option>
                <option value="banán">Banán (35 Kč)</option>
                <option value="ananas">Ananas (45 Kč)</option>
                <option value="borůvky">Borůvky (50 Kč)</option>
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
                <option value="med">Med (15 Kč)</option>
                <option value="jogurt">Jogurt (10 Kč)</option>
                <option value="limetka">Limetková šťáva (12 Kč)</option>
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
                <option value="oříšky">Oříšky (20 Kč)</option>
                <option value="kokos">Strouhaný kokos (18 Kč)</option>
                <option value="čokoláda">Čokoládové vločky (25 Kč)</option>
              </select>
            </div>

            <div className="mt-1 text-right text-lg font-semibold text-green-700">
              Celková cena: {total} Kč
            </div>

            <button
              type="submit"
              className="mt-1 bg-green-700 text-white font-semibold rounded-md py-3 hover:bg-green-800 transition"
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
