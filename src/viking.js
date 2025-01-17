// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    //custom behavior below
    this.name = name;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  randomSaxon() {
    return Math.floor(Math.random() * this.saxonArmy.length);
  }

  randomViking() {
    return Math.floor(Math.random() * this.vikingArmy.length);
  }

  vikingAttack() {
    let result = this.saxonArmy[this.randomSaxon()].receiveDamage(
      this.vikingArmy[this.randomViking()].strength
    );
    if (this.saxonArmy[this.randomSaxon()].health <= 0) {
      this.saxonArmy.splice(this.randomSaxon(), 1);
    }
    return result;
  }

  saxonAttack() {
    let result = this.vikingArmy[this.randomViking()].receiveDamage(
      this.saxonArmy[this.randomSaxon()].strength
    );
    if (this.vikingArmy[this.randomViking()].health <= 0) {
      this.vikingArmy.splice(this.randomViking(), 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
