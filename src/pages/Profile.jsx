import "../styles/profile.css";
import Banner from "../components/Banner";
import KeyData from "../components/KeyDataCard";
import ActivityGraph from "../components/ActivityGraph";
import SessionsGraph from "../components/SessionsGraph";
import PerformanceGraph from "../components/PerformanceGraph";
import ScoreGarph from "../components/ScoreGraph";
import { useEffect, useState } from "react";
import { getUserActivity, getUserData, getUserPerformance, getUserSessions } from "../services/apiManager";
import { useParams } from "react-router-dom";
import caloriesIcon from "../assets/images/calories-icon.svg";
import proteinIcon from "../assets/images/protein-icon.svg";
import carbsIcon from "../assets/images/carbs-icon.svg";
import fatIcon from "../assets/images/fat-icon.svg";

/**
 * Generates page with general layout, and calls data from "services" folder
 * @returns layout of the page consisting of react components
 */

export default function Profile(){

  const [userData, setUserData] = useState({userInfos: {}, todayScore: 0, score: 0, keyData: {calorieCount: 0}});
  const [userActivity, setUserActivity] = useState({sessions: [], kilogram: 0, calories: 0});
  const [userSessions, setUserSessions] = useState({sessions: [], sessionLength: 0});
  const [userPerformance, setUserPerformance] = useState({kind: {}, data: []});

  let {id} = useParams();
  useEffect( () => {
    getUserData(id)
    .then(data => setUserData(data))
    getUserActivity(id)
    .then(data => setUserActivity(data))
    getUserSessions(id)
    .then(data => setUserSessions(data))
    getUserPerformance(id)
    .then(data => setUserPerformance(data))
  }, [setUserData, id, setUserActivity, setUserSessions, setUserPerformance])

  return(
    <div className="profile-container">
      <Banner firstName={userData.userInfos.firstName} />
      <div className="profile-grid">
        <div className="profile-grid_first-col">
          <div className="profile-grid_first-row">
            <ActivityGraph sessions={userActivity.sessions} />
          </div>
          <div className="profile-grid_second-row">
            <SessionsGraph sessions={userSessions.sessions} />
            <PerformanceGraph data={userPerformance.data} />
            <ScoreGarph score={userData.todayScore || userData.score}/>
          </div>
        </div>
        <div className="profile-grid_second-col">
          <KeyData 
            image={caloriesIcon}
            number={userData.keyData.calorieCount.toLocaleString('en-US') + 'kCal'}
            description="Calories"
          />
          <KeyData 
            image={proteinIcon} 
            number={userData.keyData.proteinCount  + 'g'}
            description="Protéines"
          />
          <KeyData 
            image={carbsIcon} 
            number={userData.keyData.carbohydrateCount  + 'g'}
            description="Glucides"
          />
          <KeyData 
            image={fatIcon} 
            number={userData.keyData.lipidCount  + 'g'}
            description="Lipides"
          />
        </div>
      </div>
      
    </div>
  );
}

