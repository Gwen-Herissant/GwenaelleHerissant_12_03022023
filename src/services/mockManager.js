import Activity from "../models/Activity";
import Performance from "../models/Performance";
import Sessions from "../models/Sessions";

/**
 * 
 * @returns data or error
 */
async function getData() {
  let results = await fetch('/data/sportsee.json');
  if(results.ok) {
    let data = await results.json();
    return data;
  } else {
    return Promise.reject("Fichier non trouvé");
  }
}

/**
 * 
 * @param {int} id of user
 * @returns user's data
 */
export async function getUserData(id) {
  return (await getData()).USER_MAIN_DATA.find(user => user.id === parseInt(id));
}

/**
 * 
 * @param {int} id 
 * @returns object formating user's data
 */
export async function getUserActivity(id) {
  let activity = (await getData()).USER_ACTIVITY.find(user => user.userId === parseInt(id));
  return new Activity(activity);
}

/**
 * 
 * @param {int} id 
 * @returns object formating user's data
 */
export async function getUserSessions(id) {
 let sessions = (await getData()).USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(id));
 return new Sessions(sessions);
}

/**
 * 
 * @param {int} id 
 * @returns object formating user's data
 */
export async function getUserPerformance(id) {
 let performanceKind = (await getData()).USER_PERFORMANCE.find(user => user.userId === parseInt(id));
 return new Performance(performanceKind);
}