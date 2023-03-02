export default class Performance {
  /**
   * 
   * @param {*} json 
   */
  constructor(json) {
    this.kind = Object.entries(json.kind).map(([key, value]) => ({
      id: this.getId(parseInt(key)),
      name: value
    }));
    console.log(this.kind);

    this.data = json.data.map(entry => ({
      value: entry.value,
      kind: this.getKind(entry.kind)
    }));
    console.log(this.data);
  }

  /**
   * 
   * @param {number} id is the key for each child of "kind" object
   * @returns new id
   */
  getId(id) {
    switch (id) {
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      default:
        return "";
    }
  }
  
  /**
   * 
   * @param {string} kind of performance
   * @returns change number to string
   */
  getKind(kind) {
    switch (kind) {
      case 1:
        return "Intensité";
      case 2:
        return "Vitesse";
      case 3:
        return "Force";
      case 4:
        return "Endurance";
      case 5:
        return "Energie";
      case 6:
        return "Cardio";
      default:
        return "";
    }
  }
}
