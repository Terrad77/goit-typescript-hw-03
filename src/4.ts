// Клас ключа
class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}

// Клас людини
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас будинку
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected resident: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.resident = [];
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.resident.push(person);
      console.log("Welcome home!");
    } else {
      console.log("The door is closed.");
    }
  }
}

// Клас мого будинку
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("Invalid key.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
