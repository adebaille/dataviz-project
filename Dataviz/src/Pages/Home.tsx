import { PiFilmSlateDuotone } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-bold mb-6">
          Explorez les lieux de tournages à Paris
          <div className="flex flex-col items-center justify-center"><PiFilmSlateDuotone size={60} /></div>
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Découvrez les données fascinantes sur les films et séries tournés dans
          la capitale française. Analysez les tendances, les arrondissements
          populaires et bien plus encore.
        </p>
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Découvrir les analyses
        </button>
      </section>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 py-16 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-center text-xl font-semibold mb-2">
            <div className="flex flex-col items-center justify-center"><GoGraph size={30} /></div> Graphiques interactifs
          </h3>
          <p className="text-center text-gray-600">
            Visualisez les données avec des graphiques modernes et intuitifs
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-center text-xl font-semibold mb-2">
            <div className="flex flex-col items-center justify-center"><CiLocationOn size={30} /></div> Analyse géographique
          </h3>
          <p className="text-center text-gray-600">
            Explorez les arrondissements les plus filmés de Paris
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-center text-xl font-semibold mb-2">
            <div className="flex flex-col items-center justify-center"><FaRegCalendarAlt size={30} /></div> Tendances temporelles
          </h3>
          <p className="text-center text-gray-600">
            Découvrez l'évolution des tournages au fil des années
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-center text-xl font-semibold mb-2">
            <div className="flex flex-col items-center justify-center"><BsFillCameraReelsFill size={30} /></div> Types de production
          </h3>
          <p className="text-center text-gray-600">
            Comparez films, séries, téléfilms et autres productions
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl text-blue-600 mb-2">2500+</div>
              <div className="text-gray-600">Lieux de tournage</div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl text-blue-600 mb-2">20</div>
              <div className="text-gray-600">Arrondissements</div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Années de données</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
