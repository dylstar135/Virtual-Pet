const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MINIMUM_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return this.age <= 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 3;
  if (this.fitness - 3 >= MINIMUM_FITNESS) {
    this.fitness -= 3;
  } else {
    this.fitness = MINIMUM_FITNESS;
  }
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error(`Sadly ${this.name} has passed away`);
  }
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error(`Sadly ${this.name} has passed away`);
  }
  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};
Pet.prototype.checkup = function () {
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
};

module.exports = Pet;
