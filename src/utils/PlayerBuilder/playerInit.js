class Player {
  constructor(name, hp, { slynes, connections, item, speedBonus } = {}) {
    this.name = name;
    this.hp = hp;
    this.slynes = slynes;
    this.connections = connections;
    this.item = item;
    this.speedBonus = speedBonus;
  }

  heal(val) {
    this.hp += val;
  }

  getInjure(val) {
    this.hp -= val;
    if (this.hp < 0) {
      // TODO gameOverFunc xor dispatch
    }
  }
}

export { Player };

/*
Example:

const playerOne = new Player('Zdzich', 120, { slynes: 10 });
playerOne.hp += 10;
playerOne.connections = 10;
playerOne.heal(4);
playerOne; // ?

*/
