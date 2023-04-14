import '../styles/error-page.css';

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div id="error-page" className="error-page">
        <h1>Une erreur est survenue</h1>
        <p>Les données n'ont pas été trouvées</p>
        <a href="#">Retourner sur la page d’accueil</a>
      </div>
    </div>
  )
}