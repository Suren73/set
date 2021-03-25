import Team from '../app';
import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Undead from '../undead';
import Character from '../character';

test('testing class Team', () => {
  const expected = [
    {
      name: 'Andrei',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ];
  const team = new Team();
  const bowman = new Bowerman('Andrei');
  team.add(bowman);
  expect([...team.members]).toEqual(expected);
});

test('testing class Team', () => {
  expect(() => {
    const team = new Team();
    const bowman = new Bowerman('Andrei');
    team.add(bowman);
    team.add(bowman);
  }).toThrow();
});

test('testing class Team', () => {
  const expected = [
    {
      name: 'Andrei',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Sergei',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Denis',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ];
  const team = new Team();
  const bowman = new Bowerman('Andrei');
  const daemon = new Daemon('Sergei');
  const undead = new Undead('Denis');
  team.addAll(bowman, daemon, undead, bowman);
  expect([...team.members]).toEqual(expected);
});

test('testing class Team', () => {
  const expected = [
    {
      name: 'Andrei',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ];
  const team = new Team();
  const bowman = new Bowerman('Andrei');
  team.add(bowman);
  expect(team.toArray()).toEqual(expected);
});

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  };
  const received = new Character('Andrei', 'Bowman');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Character('Andrei', 10)).toThrow('Ошибка типа игрока');
});

test('testing the player creation function', () => {
  expect(() => new Character('Andrei', 'Temp')).toThrow('Ошибка типа игрока');
});

test('testing the player creation function', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Ошибка имени');
});

test('testing the player creation function', () => {
  expect(() => new Character('Andreiiiiii', 'Bowman')).toThrow('Ошибка имени');
});
