// Base / Parent Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Derived / Child Class(s)
export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    constructor() {
        super();
    }

    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}
const dog = new Dog(2, 4, 'Gator');
dog.name;
dog.woof();

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}
const cat = new Cat({ age: 19, legs: 4, name: 'Baby' })
cat.name;
cat.meow();


console.log(dog instanceof Animal); // implements: false
console.log(cat instanceof Animal); // extends: true
