import "../styles/banner.css"
import PropTypes from 'prop-types';

/**
 * Generates introductory text for the profile
 * @param {string} firstname 
 * @returns banner containing user's name and a line of text
 */

export default function Banner({firstName}){
  return(
    <div className="banner">
      <h1>Bonjour <span>{firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}


//PropTypes
Banner.propTypes = {
  firstName: PropTypes.string
}