import Header from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";

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
          <p className="text-gray-700 leading-relaxed text-l">
            Ce projet a été créé dans le cadre de notre formation pour explorer
            et visualiser les données sur les lieux de tournage à Paris. Nous
            utilisons l'API OpenData de la ville de Paris pour collecter et
            analyser des informations sur les films, séries et autres
            productions audiovisuelles tournés dans la capitale.</p>
            <p className="text-gray-700 leading-relaxed text-l">Notre objectif
            est de rendre ces données accessibles et compréhensibles à travers
            des visualisations interactives et des analyses statistiques
            pertinentes.
          </p>
           <p className="text-gray-700 leading-relaxed text-l">Le projet Dataviz a pour ambition de développer des compétences
            avancées en React, Tailwind CSS, React Router et TypeScript, tout en
            explorant les meilleures pratiques pour la création et la
            présentation de graphiques interactifs.</p>
            <p className="text-gray-700 leading-relaxed text-l">Notre objectif est double :</p>
            <p className="text-gray-700 leading-relaxed text-l">
            • Maîtriser l’écosystème moderne du développement front-end en
            combinant performance, accessibilité et modularité. </p>
            <p className="text-gray-700 leading-relaxed text-l">
            • Transformer les données en visualisations claires et impactantes,
            capables de soutenir la prise de décision et l’apprentissage.
            </p>
        </section>

        {/* Technologie utilisée */}
         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Technologies utilisées</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-l">
            Front End : <FaReact /> React - <SiTypescript /> TS- <FaDatabase />API 
            Outils : <FaGithub /> Git Hub, <VscGraph /> Recharts, <SiPostman /> Postman.
          </p>
          
        </section>
        
        <section className="border border-gray-500 m-3">
          <h2 className="text-blue-800">
            Brève présentation de l'équipe projet :
          </h2>
          <p className="text-5 m-3">
            L’équipe projet : <br></br>• Alison Adebaille : experte en
            structuration et analyse de données, elle assure la pertinence des
            indicateurs et la cohérence des visualisations.<br></br>• Nasser
            Khélifi : consultant et formateur en développement web, il met
            l’accent sur la pédagogie, l’accessibilité et l’intégration
            technique des outils React et Tailwind.
          </p>
        </section>
        <br />
        <section className="border border-gray-500 m-3">
          <h2 className="text-blue-800">Sources des données analysées :</h2>
          <p className="text-5 m-3">
            https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?limit=20
          </p>
        </section>
      </div>
      </div>
    </>
  );
}

export default About;
