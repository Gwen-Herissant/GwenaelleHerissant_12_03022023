import Activity from "../models/Activity";
import Sessions from "../models/Sessions";

/**
 * 
 * @param {string} type API to call
 * @param {int} id of user
 * @returns data or error
 */
async function getData(type, id) {
  let results = await fetch(`http://localhost:3000/user/${id}/${type}`);
  if(results.ok) {
    let data = await results.json();
    return data.data;
  } else {
    return Promise.reject("Fichier non trouvé");
  }
}

/**
 * 
 * @param {int} id of user
 * @returns data
 */
export async function getUserData(id) {
  return await getData("", id);
}

/**
 * 
 * @param {int} id of user
 * @returns new object formating data
 */
export async function getUserActivity(id) {
  return new Activity(await getData('activity', id));
}

/**
 * 
 * @param {int} id of user
 * @returns new object formating data
 */
export async function getUserSessions(id) {
 return new Sessions (await getData('sessions', id));
}

/**
 * 
 * @param {int} id of user
 * @returns new object formating data
 */
export async function getUserPerformance(id) {
 return new Performance(await getData('performanceKind', id));
}