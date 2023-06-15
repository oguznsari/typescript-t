// let x = 5; - type inference

let x: number;
let y: string;
let z: boolean;
let a: Date;
let b: string[];
let c: any;

b = "hello" as any;
// b = 1234;
b = ["correct"];


interface Contact extends Address {
    id: number;
    name: string;
    birthDate: Date;
}

interface Address {
    line1: string;
    line2?: string;
    province: string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact = {
    id: 4,
    birthDate: new Date("01-01-1980"),
    name: "Jamie johnson",
    postalCode: "34510",
    line1: "es",
    province: "es",
    region: "es"
}