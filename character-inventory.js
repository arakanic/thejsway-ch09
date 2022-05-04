/*
CHARACTER INVENTORY
Improve the example RPG to add character inventory management according to the following rules:

- A character's inventory contains a number of gold and a number of keys.
- Each character begins with 10 gold and 1 key.
- The character description must show the inventory state.
- When a character slays another character, the victim's inventory goes to its vanquisher.
*/

class Character {
    constructor(name, health, strength) {
      this.name = name
      this.health = health
      this.strength = strength
      this.xp = 0
      this.gold = 10
      this.keys = 1
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        )
        target.health -= damage
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`)
        } else {
          target.health = 0
          const bonusXP = 10
          console.log(
            `${this.name} eliminated ${target.name} and wins ${target.gold} goldenthang, ${target.keys} keys, and ${bonusXP} experience points!`
          )
          this.gold += target.gold
          target.gold = 0
          this.keys += target.keys
          target.keys = 0
          this.xp += bonusXP
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`)
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points, in addition to ${this.gold} goldenthang and ${this.keys} ${this.keys === 1 ? 'key' : 'keys'}`
    }
  }
  
  console.log("Welcome to Iguanaworld! Enter characters: ")
  const anderson = new Character("Anderson", 150, 25)
  const schoolboy = new Character("Schoolboy Q", 125, 30)
  console.log(anderson.describe())
  console.log(schoolboy.describe())
  
  const monster = new Character("Spike 9", 45, 20)
  
  monster.attack(anderson)
  monster.attack(schoolboy)
  
  anderson.attack(monster)
  schoolboy.attack(monster)
  
  console.log(anderson.describe())
  console.log(schoolboy.describe())
  console.log(monster.describe())