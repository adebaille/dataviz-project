import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo et titre */}
          <div className="flex items-center gap-3">
            <FaFilm className="text-blue-700 text-3xl" />
            <h2 className="text-gray-800 text-2xl font-bold">Ciné Paris</h2>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <Link to="/">
              <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-200 hover:scale-105">
                Accueil
              </button>
            </Link>

            <Link to="/Analyse">
              <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-200 hover:scale-105">
                Analyse
              </button>
            </Link>

            <Link to="/About">
              <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-200 hover:scale-105">
                À propos
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
