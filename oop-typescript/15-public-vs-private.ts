export class Animal {
    age: number;
    private legs: number;
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
}

const cat = new Cat({ age: 19, legs: 4, name: 'Baby' });
cat.age;
cat.legs;