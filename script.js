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

// STRINGS
/* const firstName = "Leo";
const job = "Developer intern";
const birthYear = 1985;
const year = 2022;

const Leo =
  "Im " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(Leo);

const LeoNew = `My name is ${firstName}, im ${
  year - birthYear
} old, and i'm a ${job}.`;
console.log(LeoNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`ANother form of
write 
String
with
multiple
lines`);
*/

//MORE REAL EXAMPLES

/*
let age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Luna can start driving license.");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Luna is too young to start her driving license. Wait another ${yearsLeft} years ;)`
  );
}

const birthYear = 1985;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`You born on the ${century} century.`);
*/

// TYPE CONVERSION

/*
const inputYear = "1985";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Leo")); // print NaN = "Not a Number", but it is a number.
console.log(typeof NaN); // print the type, that it is a number.

console.log(String(23)); //convert the number into a string.

// TYPE COERCION
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old"); // JS will print the same.
console.log("23" - "10" - 3); // JS make the coercion nad transform string into number;
console.log("23" + "10" - 3); // But here, with "+", he doesn't do all the math;
console.log("23" / "2"); // here he will make a coercion and give us 11.5.

let n = "1" + 1; // here, JS will concatenate '1' with 1 = 11.
n = n - 1;
console.log(n); // Then, he will apply -1 to 11 = 10.
*/

// 5 falsy values: 0; '', undefined, null, NaN.

/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Leo")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;
if (money) {
  // JS will convert to boolean, in that case, 0, is false.
  console.log("Dont spend it all!");
} else {
  console.log("You should get a job!");
}

let height; //undefined is a false boolean value.
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED.");
}
*/

let age = "18";
if (age === 18) {
  console.log("You just became an adult. (strict equal)");
}

if (age == 18) {
  console.log("You just became an adult. (loose, just equal)");
}

const favourite = Number(prompt("What's yout favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 13) {
  console.log("Cool! 13 is an amazing number!");
}
