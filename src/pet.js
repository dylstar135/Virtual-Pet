const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MINIMUM_HUNGER = 0;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
  }

  get isAlive() {
    return this.age <= 30 && this.hunger < 10 && this.fitness > 0;
  }

  growUp() {
    this.age += 1;
    this.hunger += 3;
    this.fitness = Math.max(this.fitness - 3, MINIMUM_FITNESS);
  }

  walk() {
    if (!this.isAlive) {
      throw new Error(`Sadly ${this.name} has passed away`);
    }
    this.fitness = Math.min(this.fitness + 4, MAXIMUM_FITNESS);
  }

  feed() {
    if (!this.isAlive) {
      throw new Error(`Sadly ${this.name} has passed away`);
    }
    this.hunger = Math.max(this.hunger - 3, MINIMUM_HUNGER);
  }

  checkup() {
    const HUNGRY = "I am hungry";
    const UNFIT = "I need a walk";
    const HUNGRY_AND_UNFIT = `${HUNGRY} and ${UNFIT}`;
    const HAPPY = "I'm happy";

    const isHungry = this.hunger >= 5;
    const isUnfit = this.fitness <= 3;

    if (!this.isAlive) {
      throw new Error(`Sadly ${this.name} has passed away`);
    }

    if (isHungry && isUnfit) return HUNGRY_AND_UNFIT;
    if (isHungry) return HUNGRY;
    if (isUnfit) return UNFIT;
    return HAPPY;
  }
}

module.exports = Pet;
