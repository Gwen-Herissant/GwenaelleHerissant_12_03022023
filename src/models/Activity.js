export default class Activity{

  /**
   * 
   * @param {*} json 
   */

  constructor(json) {
    this.sessions = json.sessions;
    for(let i = 1; i <= this.sessions.length; i++) {
      this.sessions[i - 1].id = i;
    }
  }
}