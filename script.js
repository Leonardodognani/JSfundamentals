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

// some examples of data types:
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
