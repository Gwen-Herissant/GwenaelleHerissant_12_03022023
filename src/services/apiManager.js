import { redirect } from "react-router-dom";
import Activity from "../models/Activity";
import Performance from "../models/Performance";
import Sessions from "../models/Sessions";

/**
 * Fetches data from API
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
    console.log(Promise.reject("Fichier non trouvé"));
    return redirect("/error-page")
  }
}

/**
 * Gets data for user's main informations
 * @param {int} id of user
 * @returns data
 */
export async function getUserData(id) {
  return await getData("", id);
}

/**
 * Gets formated data for user's activity
 * @param {int} id of user
 * @returns new object formating data
 */
export async function getUserActivity(id) {
  return new Activity(await getData('activity', id));
}

/**
 * Gets formated data for user's sessions
 * @param {int} id of user
 * @returns new object formating data
 */
export async function getUserSessions(id) {
 return new Sessions(await getData('average-sessions', id));
}

/**
 * Gets formated data for user's performances
 * @param {int} id of user
 * @returns new object formating data
 */
export async function getUserPerformance(id) {
 return new Performance(await getData('performance', id));
}