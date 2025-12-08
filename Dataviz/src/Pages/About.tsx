import Header from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Header />
      <div className="w-full bg-gray-50 p-10 space-y-3">
        <h1 className="text-3xl font-bold text-center">A Propos</h1>

        <div className="max-w-7xl mx-auto px-4 py-12">
   {/* Objectifs pédagogiques */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Objectifs pédagogiques
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Ce projet a été créé dans le cadre de notre formation pour
                explorer et visualiser les données sur les lieux de tournage à
                Paris. Nous utilisons l'API OpenData de la ville de Paris pour
                collecter et analyser des informations sur les films, séries et
                autres productions audiovisuelles tournés dans la capitale.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Notre objectif est de rendre ces données accessibles et
                compréhensibles à travers des visualisations interactives et des
                analyses statistiques pertinentes.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Le projet Dataviz a pour ambition de développer des compétences
                avancées en <span className="font-semibold text-blue-700">React</span>, <span className="font-semibold text-blue-700">Tailwind CSS</span>, <span className="font-semibold text-blue-700">React Router</span> et <span className="font-semibold text-blue-700">TypeScript</span>, tout
                en explorant les meilleures pratiques pour la création et la
                présentation de graphiques interactifs.
              </p>
              <p className="text-gray-800 font-medium text-lg mt-6">
                Notre objectif est double :
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700 leading-relaxed text-lg flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <span>Maîtriser l'écosystème moderne du développement front-end en
                  combinant performance, accessibilité et modularité.</span>
                </li>
                <li className="text-gray-700 leading-relaxed text-lg flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <span>Transformer les données en visualisations claires et
                  impactantes, capables de soutenir la prise de décision et
                  l'apprentissage.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Technologie utilisée */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Technologies utilisées
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <span className="font-semibold text-gray-800">Front End :</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-lg">
                    <FaReact className="text-blue-500 text-xl" /> React
                  </span>
                  <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-lg">
                    <SiTypescript className="text-blue-600 text-xl" /> TypeScript
                  </span>
                  <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-lg">
                    <FaDatabase className="text-blue-700 text-xl" /> API
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <span className="font-semibold text-gray-800">Outils :</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                    <FaGithub className="text-gray-800 text-xl" /> GitHub
                  </span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                    <VscGraph className="text-purple-600 text-xl" /> Recharts
                  </span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                    <SiPostman className="text-orange-500 text-xl" /> Postman
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Présentation de l'équipe */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Présentation de l'équipe
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-lg">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  <span className="font-semibold text-gray-900">Alison</span> : Apprenante chez Ada Tech School
                </span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  <span className="font-semibold text-gray-900">Nasser</span> : Apprenant chez Ada Tech School
                </span>
              </div>
            </div>
          </section>

          {/* Source de l'API */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Sources des données analysées
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Les données utilisées dans ce projet proviennent de l'API OpenData de la ville de Paris :
            </p>
            <Link 
              to="https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?limit=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                API - Lieux de tournage à Paris
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
