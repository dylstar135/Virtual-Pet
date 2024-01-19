const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MINIMUM_HUNGER = 0;
//sets maximum and minimum values for certain properties, allowing for easier readability.

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
  }
  // The Pet class, creates a new instance of Pet with the outlined attributes to start.

  get isAlive() {
    return this.age <= 30 && this.hunger < 10 && this.fitness > 0;
  }
  // getter function that returns a boolean based on the returns in the method, and tells user where there pet is alive true or false

  growUp() {
    this.age += 1;
    this.hunger += 3;
    this.fitness = Math.max(this.fitness - 3, MINIMUM_FITNESS);
  }
  // changes the state of Pet

  walk() {
    if (!this.isAlive) {
      throw new Error(`Sadly ${this.name} has passed away`);
    }
    this.fitness = Math.min(this.fitness + 4, MAXIMUM_FITNESS);
  }
  // changes the fitness state of the Pet, but throws an error is isAlive is false (unfortunatly we cant walk dead pets)

  feed() {
    if (!this.isAlive) {
      throw new Error(`Sadly ${this.name} has passed away`);
    }
    this.hunger = Math.max(this.hunger - 3, MINIMUM_HUNGER);
  }
  // changes the hunger state of the Pet, but throws an error is isAlive is false (unfortunatly we cant feed dead pets)

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
  // Checkup allows the user to check on theur pet, and will return a message instructing them what their pet needs to stay alive

  haveChild(babyname) {
    const Child = new Pet(babyname);
    this.children.push(Child);
  }
  // Your pet can know breed in abundance!
}

module.exports = Pet;
