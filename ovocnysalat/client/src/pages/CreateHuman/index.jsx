import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createSalad } from "../../models/people";
import Header from "../../components/header";
import Footer from "../../components/footer";

const prices = {
  fruit: {
    nic: 0,
    třešně: 35,
    jablka: 30,
    kiwi: 38,
    borůvky: 50,
    jahody: 40,
    broskve: 45,
    banány: 35,
  },
  dressing: {
    nic: 0,
    jogurt: 10,
    "agávový sirup": 12,
  },
  topping: {
    nic: 0,
    "kokosové kousky": 18,
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
    const f1 = prices.fruit[data.fruit1] || 0;
    const f2 = prices.fruit[data.fruit2] || 0;
    const f3 = prices.fruit[data.fruit3] || 0;
    const dressingPrice = prices.dressing[data.dressing] || 0;
    const toppingPrice = prices.topping[data.topping] || 0;
    setTotal(f1 + f2 + f3 + dressingPrice + toppingPrice);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    setFeedback(null);
    try {
      const fruitCombo = [formData.fruit1, formData.fruit2, formData.fruit3]
        .filter((f) => f && f !== "nic")
        .join(", ");
      const data = await createSalad({
        name: formData.name,
        fruit: fruitCombo || "nic",
        dressing: formData.dressing || "nic",
        topping: formData.topping || "nic",
        total,
      });

      if (data.status === 201) {
        setFormData({});
        setTotal(0);
        setFeedback({ type: "success", message: "Salát byl úspěšně vytvořen!" });
        setTimeout(() => navigate(`/created-salad/${data.data._id}`), 1500);
      } else {
        setFeedback({ type: "error", message: "Něco se pokazilo. Zkus to znovu." });
      }
    } catch {
      setFeedback({ type: "error", message: "Chyba připojení k serveru." });
    }
  };

  const fruitOptions = [
    "nic",
    "třešně",
    "jablka",
    "kiwi",
    "borůvky",
    "jahody",
    "broskve",
    "banány",
  ];

  const dressingOptions = ["nic", "jogurt", "agávový sirup"];
  const toppingOptions = ["nic", "kokosové kousky"];

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
              className="border border-gray-300 rounded-md px-4 py-3"
              required
            />

            {[1, 2, 3].map((num) => (
              <div key={num}>
                <label htmlFor={`fruit${num}`} className="block font-semibold mb-1">
                  {num}. Vyber ovoce
                </label>
                <select
                  id={`fruit${num}`}
                  name={`fruit${num}`}
                  value={formData[`fruit${num}`] || ""}
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md px-4 py-3"
                >
                  <option value="">-- vyber --</option>
                  {fruitOptions.map((fruit) => (
                    <option key={fruit} value={fruit}>
                      {fruit.charAt(0).toUpperCase() + fruit.slice(1)}{" "}
                      {fruit !== "nic" ? `(${prices.fruit[fruit]} Kč)` : "(nic)"}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div>
              <label htmlFor="dressing" className="block font-semibold mb-1">Dresink</label>
              <select
                id="dressing"
                name="dressing"
                value={formData.dressing || ""}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md px-4 py-3"
              >
                <option value="">-- vyber --</option>
                {dressingOptions.map((d) => (
                  <option key={d} value={d}>
                    {d.charAt(0).toUpperCase() + d.slice(1)}{" "}
                    {d !== "nic" ? `(${prices.dressing[d]} Kč)` : "(nic)"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="topping" className="block font-semibold mb-1">Přílohy</label>
              <select
                id="topping"
                name="topping"
                value={formData.topping || ""}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md px-4 py-3"
              >
                <option value="">-- vyber --</option>
                {toppingOptions.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}{" "}
                    {t !== "nic" ? `(${prices.topping[t]} Kč)` : "(nic)"}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-right text-lg font-semibold text-green-700">
              Celková cena: {total} Kč
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white font-semibold rounded-md py-3 hover:bg-green-800 transition"
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
