import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto p-8 sm:p-12">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-green-800 tracking-wide">
          O nás
        </h1>

        <p className="mb-6 text-lg leading-relaxed max-w-prose mx-auto">
          Věříme, že zdravé jídlo může být nejen prospěšné, ale i krásné a zábavné. Proto jsme vytvořili <strong>Ovocné saláty</strong> – místo, kde se snoubí chuť, výživa a radost v jedné misce.
        </p>

        <p className="mb-6 text-lg leading-relaxed max-w-prose mx-auto">
          Naše mise? Přinášet do každodenního života <strong>barevnost, energii a zdraví</strong>, a to formou jednoduchých, ale kvalitních snídaňových misek plných čerstvých ingrediencí.
        </p>

        <p className="mb-10 text-lg leading-relaxed max-w-prose mx-auto">
          Za každou recepturou stojí láska ke zdravému životnímu stylu a chuť tvořit. Ať už si zamilujete kombinaci jogurtu s ovocem a medem, nebo kokosovou variantu s borůvkami – vždy se můžete spolehnout na kvalitní, čerstvé a chutné suroviny.
        </p>

        <section className="mb-10 max-w-prose mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-green-700 border-b-2 border-green-200 pb-2">
            Co nás vystihuje?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-800">
            <li>🌱 <strong>Přírodní suroviny</strong> – bez zbytečné chemie</li>
            <li>🍓 <strong>Čerstvé ovoce a lokální produkty</strong></li>
            <li>💛 <strong>Radost z jídla i estetiky</strong></li>
            <li>👨‍👩‍👧 <strong>Komunita milovníků snídaní a zdravého života</strong></li>
          </ul>
        </section>

        <p className="text-center text-lg font-semibold text-green-700 max-w-prose mx-auto">
          Ať už si pochutnáš na misce doma, nebo ji sdílíš na Instagramu, jsme rádi, že jsi součástí našeho příběhu.
          <br />
          <span className="text-xl">#miskujse #radostvjednemisku</span>
        </p>
      </main>

      <Footer />
    </div>
  );
}
