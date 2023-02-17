import Activity from "../models/Activity";

/**
 * 
 * @param {string} type API to call
 * @param {int} id 
 * @returns 
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

export async function getUserData(id) {
  return await getData("", id);
}

export async function getUserActivity(id) {
  return new Activity(await getData('activity', id));
}