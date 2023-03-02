import icon_01 from "../assets/images/sidenav-icon-01.svg"
import icon_02 from "../assets/images/sidenav-icon-02.svg"
import icon_03 from "../assets/images/sidenav-icon-03.svg"
import icon_04 from "../assets/images/sidenav-icon-04.svg"
import "../styles/sidenav.css"

/**
 * 
 * @returns side navigation (empty links for now)
 */

export default function SideNav(){
  return(
    <div className="sidenav">
      <nav className="sidenav_nav">
        <ul>
          <li>
            <a href="#">
              <img src={icon_01} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={icon_02} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={icon_03} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={icon_04} alt="" />
            </a>
          </li>
        </ul>
      </nav>
      <p className="sidenav_text">Copyright, SportSee 2020</p>
    </div>
  );
}



