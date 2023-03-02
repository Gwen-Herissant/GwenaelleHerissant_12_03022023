export default class Sessions{

  /**
   * 
   * @param {*} json 
   */
  constructor(json) {
    this.sessions = json.sessions;
    this.sessions = this.sessions.map(session => {return {...session, day: this.getDay(session.day)}})
  }
  
  /**
   * 
   * @param {number} day of session
   * @returns change number to string corresponding weekday
   */
  getDay(day) {
    switch(day) {
      case 1 : 
      return "L";
      case 2 : 
      return "M";
      case 3 : 
      return "M";
      case 4 : 
      return "J";
      case 5 : 
      return "V";
      case 6 : 
      return "S";
      case 7 : 
      return "D";
      default : 
      return "";    
    }
  }
}