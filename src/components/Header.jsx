import logo from "../assets/images/sportsee-logo.svg"
import '../styles/header.css'

/**
 * Generates site's header
 * @returns header with site nav (empty links for now)
 */

export default function Header(){
  return(
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="Sportsee Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              Accueil
            </a>
          </li>
          <li>
            <a href="#">
              Profil
            </a>
          </li>
          <li>
            <a href="#">
              Réglage
            </a>
          </li>
          <li>
            <a href="#">
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}