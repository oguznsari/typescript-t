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
    name: ContactName;
    birthDate: Date;
    status: ContactStatus
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
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
    region: "es",
    status: ContactStatus.Active
}

type ContactName = string;


type ContactFields = keyof Contact;

function getValue(source, propertyName: keyof Contact) {
    return source[propertyName];
}

const value = getValue(contact, "status");


// typeof short-cut
const myType = { min: 1, max: 200 };
function save(source: typeof myType) { }

// dynamic but limited types || any - unlimited types
let x2: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }
x2.number = 1234;
x2.active = true;
x2.log = () => console.log("awesome!")