export function About () {
return(
    <>
    <h1 className= "bg-blue-600 text-white text-center text-2xl p-4">A propos</h1>
    <br />
    <div className="grid">
    <section className=" border border-gray-500 w-screen m-3 ">
        <h2 className= "text-blue-800">Objectifs pédagogiques : </h2> 
        <p className="text-s m-3">
        Ce projet a été crée dans le cadre de notre formation pour explorer et visualiser les données sur les lieux de tournage à Paris.
        Nous utilisons l'API OpenData de la Ville de Paris pour collecter et analyser des informations sur des films, séries et autres productions audiovisuelles tournées dans la capitale.
        Notre objectif est de rendre ces données accessisbles et compréhensibles à travers des visualisations intéractives et des analyses statistiques pertinentes.
        </p>
    </section>
    <br />
    <section className="border border-gray-500 m-3">
        <h2 className= "text-blue-800">Technologies utilisées :</h2>
        <p className="text-5 m-3">
        Front End (React - TS- API) Outils : Git, Git Hub, Recharts, Postman.
        </p>
    </section>
    <br />
    <section className="border border-gray-500 m-3">
        <h2 className="text-blue-800">Brève présentation de l'équipe projet :</h2>
        <p className="text-5 m-3">
        Le projet Dataviz a pour ambition de développer des compétences avancées en React, Tailwind CSS, React Router et TypeScript, tout en explorant les meilleures pratiques pour la création et la présentation de graphiques interactifs.
Notre objectif est double :
<br></br>
• 	Maîtriser l’écosystème moderne du développement front-end en combinant performance, accessibilité et modularité. <br />
• 	Transformer les données en visualisations claires et impactantes, capables de soutenir la prise de décision et l’apprentissage. <br></br>
L’équipe projet : <br></br>
• 	Alison Adebaille : experte en structuration et analyse de données, elle assure la pertinence des indicateurs et la cohérence des visualisations.<br></br>
• 	Nasser Khélifi : consultant et formateur en développement web, il met l’accent sur la pédagogie, l’accessibilité et l’intégration technique des outils React et Tailwind.
        </p>
    </section>
    <br />
    <section className="border border-gray-500 m-3">
        <h2 className="text-blue-800">Sources des données analysées :</h2>
        <p className="text-5 m-3">
        https://opendata.paris.fr
        </p>
    </section>
    </div>
</>
)}

export default About;
