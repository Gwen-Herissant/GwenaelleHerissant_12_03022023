import "../styles/banner.css"

export default function Banner({firstName}){
  return(
    <div className="banner">
      <h1>Bonjour <span>{firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}