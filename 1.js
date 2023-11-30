class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

function createMyRabbit() {
  const kelinci = new Rabbit("Labi", 2);
  return kelinci;
}

const kelinci = createMyRabbit();
console.log(kelinci);

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

function createMyEagle() {
  const burung = new Eagle("Elo", 4);
  return burung;
}

const burung = createMyEagle();
console.log(burung);
