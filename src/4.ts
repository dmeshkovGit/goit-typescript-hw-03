// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Наприклад, ось так:

// ```ts

class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { };


    getKey(): Key["signature"] {
        return this.key.getSignature();
    };
}

abstract class House {

    door: boolean;
    tenants: Person[];
    key: Key["signature"];

    constructor(doorIsOpen: boolean, tenants: Person[], key: Key) {
        this.door = doorIsOpen;
        this.tenants = tenants;
        this.key = key.getSignature();
    }

    comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant)
            console.log("Welcome !"); 
        } else {
            console.log("You shall not pass!🧙");
        }
    };

    abstract openDoor(key: Key["signature"]);
}

class MyHouse extends House {

    constructor(key: Key) {
        super(false, [], key)
    }

    openDoor(key: Key["signature"]) {
        if (this.door === false) {
         if (key === this.key ) {
            this.door = true;
            console.log("door opened");
          } else {console.log("You have wrong key");}
        } else {
            console.log("door is already opened");
            
        }
    }


}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
house.openDoor(person.getKey());



export { };
