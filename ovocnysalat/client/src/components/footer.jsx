import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-green-900 text-green-100 mt-4 shadow-inner">
      <div>
        <p className="text-sm select-none">
          © {new Date().getFullYear()} Ovocné Saláty 🍍 | Vyrobeno s láskou a ovocem
        </p>
      </div>
    </footer>
  );
}
