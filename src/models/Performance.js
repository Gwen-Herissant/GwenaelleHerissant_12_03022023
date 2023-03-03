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
    console.log(this.kind);

    this.data = json.data.map(entry => ({
      value: entry.value,
      kind: this.getKind(entry.kind)
    }));
    this.data = this.data.reverse();
    console.log(this.data);
  }

  /**
   * Switches kinds of performances to french
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
