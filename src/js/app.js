// export default const Character = require('./character');
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(persona) {
    if (!this.members.has(persona)) {
      this.members.add(persona);
    } else {
      throw new Error('Персонаж уже добавлен');
    }
  }

  addAll(...personas) {
    personas.forEach((persona) => this.members.add(persona));
  }

  toArray() {
    return [...this.members];
  }
}
// const bowman = new Character('Andrei', 'Bowman', 100, 1, 25, 25);
// const swordsman = new Character('Andrei', 'Swordsman', 100, 1, 25, 25);
// const magician = new Character('Andrei', 'Magician', 100, 1, 25, 25);

// const team = new Team;
// console.log(team);
// console.log(team.members.size);
// team.add(bowman);

// console.log(team.members);
// let arr = team.toArray();
// console.log(arr);

// team.addAll(bowman, magician);
// console.log(team.members);
