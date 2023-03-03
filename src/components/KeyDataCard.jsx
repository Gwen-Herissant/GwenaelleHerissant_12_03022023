import "../styles/keydata.css";

/**
 * Generates card's content for keydatas
 * @param {object} keydata contains user's key informations
 * @param {string} image prop gets src link
 * @param {number} number prop gets data from json
 * @param {string} description prop for what number stands for
 * @returns card with image and keydata
 */

export default function KeyData({image, number, description}){
  return(
    <div className="keydata">
      <img src={image} alt="" />
      <div className="keydata_text-container">
        <p className="keydata_text-data">{number}</p>
        <p className="keydata_text-description">{description}</p>
      </div>
    </div>
  );
}