export default class Performance {
  /**
   * Generates data formatting for performances
   * @param {*} json 
   */
  constructor(json) {
    this.kind = Object.entries(json.kind).map(([key, value]) => ({
      id: parseInt(key),
      name: value
    }));
    // console.log(this.kind);

    this.data = json.data.map(entry => ({
      value: entry.value,
      kind: this.getKind(entry.kind)
    }));
    this.data = this.data.reverse();
    // console.log(this.data);
  }

  /**
   * Switches kinds of performances to french
   * @param {string} kind of performance
   * @returns change number to string
   */
  getKind(kind) {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return "";
    }
  }
}
