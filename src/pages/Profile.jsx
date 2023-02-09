/**
 * Appel Banner.jsx
 * Appel GraphContainer.jsx
 * Appel KeyDataCard.jsx
 */
import "../styles/profile.css";
import Banner from "../components/Banner";
import KeyData from "../components/KeyDataCard";
import ActivityGraph from "../components/ActivityGraph";
import SessionsGraph from "../components/SessionsGraph";
import PerformanceGraph from "../components/PerformanceGraph";
import ScoreGarph from "../components/ScoreGraph";

export default function Profile(){
  return(
    <div className="profile-container">
      <Banner />
      <div className="profile-grid">
        <div className="profile-grid_first-col">
          <div className="profile-grid_first-row">
            <ActivityGraph />
          </div>
          <div className="profile-grid_second-row">
            <SessionsGraph />
            <PerformanceGraph />
            <ScoreGarph />
          </div>
        </div>
        <div className="profile-grid_second-col">
          <KeyData />
          <KeyData />
          <KeyData />
          <KeyData />
        </div>
      </div>
      
    </div>
  );
}

