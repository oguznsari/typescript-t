export class Animal {
    protected age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    public get ourLegs(): number {
        return this.legs
    }
}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    get birthday(): number {
        return this.age + 1;
    }
}

const cat = new Cat({ age: 19, legs: 4, name: 'Baby' });
cat.age;
cat.legs;

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;
}