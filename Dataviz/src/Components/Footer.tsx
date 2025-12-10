import { IoInformationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="shadow-md">
      <div className="container bg-blue-600 m-0 px-0 py-2.5">
        <div className="flex items-center justify-between">
          {/* Mentions légales */}
          <div className="flex items-center gap-1">
            <IoInformationSharp className="text-white text-3xl" /> 
            <h2 className="text-white text-xs font-bold">Mentions légales :</h2>
            <br></br>
            <p className="text-white text-xs">
                Site réalisé par Alisson et Nasser - Promotion Grace Hopper - ADA TECH SCHOOL - Décembre 2025
                <br></br>
                Liens vers Git Hub : 
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <Link to="/">
              <button className="px-2 py-1 bg-white text-blue-700 text-xs font-semibold rounded-lg shadow hover:bg-gray-300 transition-all duration-200 hover:scale-105">
                Accueil
              </button>
            </Link>

            <Link to="/Analyse">
              <button className="px-2 py-1 bg-white text-blue-700 text-xs font-semibold rounded-lg shadow hover:bg-gray-300 transition-all duration-200 hover:scale-105">
                Analyse
              </button>
            </Link>

            <Link to="/About">
              <button className="px-2 py-1 bg-white text-blue-700 text-xs font-semibold rounded-lg shadow hover:bg-gray-300 transition-all duration-200 hover:scale-105">
                À propos
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
