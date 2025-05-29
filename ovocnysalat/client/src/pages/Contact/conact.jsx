import { useState } from "react";
import { Toaster, toast } from "sonner";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Prosím vyplňte všechna pole.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Zadejte platný email.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Děkujeme za zprávu, ozveme se co nejdříve!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-grow w-full px-3 py-8 font-sans">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-green-100">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-green-800">
            Kontaktujte nás
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Jméno</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Vaše jméno"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="vas@email.cz"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zpráva</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Napište nám zprávu..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Odesílám..." : "Odeslat zprávu"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
