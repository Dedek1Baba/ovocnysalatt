import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createSalad } from "../../models/people";

export default function CreateSalad() {
  const [formData, setFormData] = useState({});
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButton = async (e) => {
    e.preventDefault();
    setFeedback(null); // Reset zprávy
    try {
      const data = await createSalad(formData);
      console.log(data)
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
    <div className="max-w-md mx-auto p-6 text-center font-sans">
      <h1 className="text-3xl font-bold mb-6">Vytvoř si ovocný salát</h1>

      {feedback && (
        <div className={`alert mb-4 ${feedback.type === "success" ? "alert-success" : "alert-error"}`}>
          <span>{feedback.message}</span>
        </div>
      )}

      <form onSubmit={handleButton} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tvé jméno"
          value={formData.name || ""}
          onChange={handleInput}
          className="input input-bordered w-full"
        />

        <div>
          <h3 className="font-semibold mb-1">1. Vyber ovoce</h3>
          <select
            name="fruit"
            value={formData.fruit || ""}
            onChange={handleInput}
            className="select select-bordered w-full"
          >
            <option value="">-- vyber --</option>
            <option value="jahody">Jahody</option>
            <option value="banán">Banán</option>
            <option value="ananas">Ananas</option>
            <option value="borůvky">Borůvky</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-1">2. Dresink</h3>
          <select
            name="dressing"
            value={formData.dressing || ""}
            onChange={handleInput}
            className="select select-bordered w-full"
          >
            <option value="">-- vyber --</option>
            <option value="med">Med</option>
            <option value="jogurt">Jogurt</option>
            <option value="limetka">Limetková šťáva</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-1">3. Přílohy</h3>
          <select
            name="topping"
            value={formData.topping || ""}
            onChange={handleInput}
            className="select select-bordered w-full"
          >
            <option value="">-- vyber --</option>
            <option value="oříšky">Oříšky</option>
            <option value="kokos">Strouhaný kokos</option>
            <option value="čokoláda">Čokoládové vločky</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Odeslat salát 🍴
        </button>
      </form>
    </div>
  );
}
