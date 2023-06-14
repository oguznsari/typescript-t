let variable = "hello";
variable = "hi"; // can not be other datatypes

let age = 24;
// age = "eigteen"; not allowed

let ageWithType: number = 22;
// ageWithType = "eighteen";        // not valid
ageWithType = 10;                   // valid

let testString: string;
testString = "hello";

let testBoolean: boolean;
testBoolean = false;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = [10];


// Arrays
let names = ["john", "jane", "tom"];
// names.push(3);   // not-valid, should be string
names.push("mike");

let numbers = [11, 22, 35];
// numbers.push(true);
numbers.push(95);

let testStringArray: string[];
// testStringArray = [1, 2, 3];
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];
// testNumberArray = [true, "hi", 23];
testNumberArray = [44, 55, 23];


let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, "two", 3];


// Objects
let user = {
    username: "john",
    age: 22,
    isAdmin: false
}

user.username = "jane";
// user.age = "eighteen";
user.age = 18;
// user.isAdmin = 18;
user.isAdmin = true;

// user.phone = "+123456789";


let userObj: {
    username: string,
    age: number,
    isAdmin: boolean
}

userObj = {
    username: "john",
    age: 23,
    isAdmin: true,
    //    phone: "+12345679"
}


let userObj2: {
    username: string,
    age: number,
    isAdmin: boolean
    phone?: string
}

userObj2 = {
    username: "jane",
    age: 45,
    isAdmin: false,
    phone: "+123456798"
}


// ANY -- only when you are not sure about the type
let testAny;
// let testAny: any;

testAny = 12;
testAny = "12";
testAny = true;
testAny = { true: "true" };
testAny = [true];


let testAnyArray: any[];
testAnyArray = ["one", 2, false, []];



// Functions
let sayHi = () => {
    console.log("Hi, welcome!");
}

// sayHi = "hi";


let functionReturnString = (): string => {
    // console.log("hi");
    return "hi";
}


let multiple = (num: number): number => {
    return num * 2;
}
// same
let multiple2 = (num: number) => {
    return num * 2;
}

let multiple3 = (num: number): void => {
    // return num * 2;
    console.log(num);
    // do sth but don't return
}

let sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2;
}

sum(2, 3);


let func = (user: { username: string, age: number, phone?: string }) => {
    console.log(user.username);
};
// since it looks ugly -> use type aliases

// TYPE ALIASES
type UserType = {
    username: string,
    age: number,
    phone?: string
}

let betterFunc = (user: UserType) => {
    console.log(user.username);
}


type myFunc = (a: number, b: string) => void

let write: myFunc = (num, str) => {
    console.log(num + " time " + str);
}


type UserType2 = {
    username: string,
    age: number,
    phone?: string,
    theme: "dark" | "light";
}

const userWithTheme: UserType2 = {
    username: "john",
    age: 23,
    //    theme: "pink",
    theme: "dark"
}