// Declaration and examples of variables names convention

/* 
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Leo";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

/* 
Data Types

Number          Decimals and integers                         let age = 23
Strings         text                                          let firstName = "Leo"
Boolean         logical, true or false                        let fullAge = true
Undefined       variable not defined. an 'empty value'        let children
Null            also a 'empty value'
Symbol (ES2015) Unique value and cannot be changed
BigInt (ES2020) Larger integers than the Number type can hold
*/

/*
JS is dynamic typing: we do not have to manually define the data type of value
stored in a variable. Instead, data types are determined automatically.
Value has type, NOT variable.
*/

/* some examples of data types:
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Leo");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1985;
console.log(year);
console.log(typeof year);

console.log(typeof null); //return as an object, but it is not! its a bug from JS.
*/

/*
let, var and const

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; a 'const' can never change

var job = "programer";
job = "teacher";

lastName = "Dognani";
console.log(lastName);
*/

/*const ageLeo = 2022 - 1985;
const ageLeticia = 2022 - 1996;
console.log(ageLeo, ageLeticia);

const firstName = "Leo";
const lastName = "Dognani";
console.log(firstName + " " + lastName);
*/

/*assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
*/

/*comparison operators
console.log(ageLeo > ageLeticia);
console.log(ageLeticia >= 18);

const isFullAge = ageLeticia >= 18;

console.log(2022 - 1985 > 2022 - 1996);
*/

/* const now = 2022;
const ageLeo = now - 1985;
const ageLeh = now - 1996;

console.log(now - 1985 > now - 1996);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

const averageAge = (ageLeo + ageLeh) / 2;
console.log(ageLeo, ageLeh, averageAge); */

const firstName = "Leo";
const jopb = "";
