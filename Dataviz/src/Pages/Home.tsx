/*home : header comporte la navbar (liens vers accueil-analyse-à propos)
Body : Encart de description : Explorez les lieux de tournages à Paris
h2 : Fonctionnalités principales

4 cards : graphiques interactifs, analyse géographique, tendance temporelles, types de prod

3 cards : chiffres lieux de tournages, arrondissements, années de données*/

export default function Home() {
  return (
    <>
      <h1>Explorez les lieux de tournages à Paris</h1>
      <p>
        Découvrez les données fascinantes sur les films et séries tournés dans
        la capitale française. Analysez les tendances, les arrondissements
        populaires et bien plus encore.
      </p>
      <button>Découvrir les analyses</button>
      <h2>Fonctionnalités principales</h2>
      <h3>Graphiques interactifs</h3>
      <p>Visualisez les données avec des graphiques modernes et intuitifs</p>
      <h3>Analyse géographique</h3>
      <p>Explorez les arrondissements les plus filmés de Paris</p>
      <h3>Tendances temporelles</h3>
      <p>Découvrez l'évolution des tournages au fil des années</p>
      <h3>Types de production</h3>
      <p>Comparez films, séries, téléfilms et autres productions</p>
    </>
  );
}
