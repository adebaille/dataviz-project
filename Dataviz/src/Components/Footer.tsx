import { IoInformationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 shadow-md">
      <div className="w-full px-4 py-2.5">
        <div className="flex items-center justify-between">
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
      
          {/* Mentions légales et crédits */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <IoInformationSharp className="text-white text-base" /> 
              <h2 className="text-white text-xs font-bold">Mentions légales</h2>
            </div>
            <p className="text-white text-xs">
              Site réalisé par Alison et Nasser
              <br />
              Promotion Grace Hopper - ADA TECH SCHOOL - Décembre 2025
            </p>
          </div>

          {/* Liens GitHub */}
          <div className="text-white text-xs">
          <a href="https://github.com/adebaille" className="flex items-center gap-1 mb-1">
              <FaGithub className="text-white text-base" /> 
              <p className="text-white text-xs font-bold">Github Alison</p>
            </a>
            <a href="https://github.com/Nasserk1" className="flex items-center gap-1">
              <FaGithub className="text-white text-base" /> 
              <p className="text-white text-xs font-bold">Github Nasser</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}