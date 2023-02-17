import Activity from "../models/Activity";

async function getData() {
  let results = await fetch('/data/sportsee.json');
  if(results.ok) {
    let data = await results.json();
    return data;
  } else {
    return Promise.reject("Fichier non trouvé");
  }
}

export async function getUserData(id) {
  return (await getData()).USER_MAIN_DATA.find(user => user.id === parseInt(id));
}

export async function getUserActivity(id) {
  let activity = (await getData()).USER_ACTIVITY.find(user => user.userId === parseInt(id));
  return new Activity(activity);
}