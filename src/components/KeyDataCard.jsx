import "../styles/keydata.css";

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