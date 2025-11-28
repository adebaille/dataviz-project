function About () {
return(
    <>
    <h1 className="color: red"  >A propos</h1>
    <section className="Encadré1">
        <h2>Objectifs pédagogiques : </h2> 
        <p>
        Ce projet a été crée dans le cadre de notre formation pour explorer et visualiser les données sur les lieux de tournage à Paris.
        Nous utilisons l'API OpenData de la Ville de Paris pour collecter et analyser des informations sur des films, séries et autres productions audiovisuelles tournées dans la capitale.
        Notre objectif est de rendre ces données accessisbles et compréhensibles à travers des visualisations intéractives et des analyses statistiques pertinentes.
        </p>
    </section>
    <section className="Encadré2">
        <h2>Technologies utilisées :</h2>
        <p>
        Front End (React - TS- API) Outils : Git, Git Hub, Recharts, Postman.
        </p>
    </section>
    <section className="Encadré3">
        <h2>Brève présentation de l'équipe :</h2>
        <p>
        ....
        </p>
    </section>
    <section className="Encadré4">
        <h2>Sources des données analysées :</h2>
        <p>
        https://opendata.paris.fr
        </p>
    </section>
</>
)}

export default About;