// Code Challenge 1-2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(
  `BMI for Johh is ${BMIJohn.toFixed(
    2
  )} and the BMI for Mark is ${BMIMark.toFixed(2)}`
);

if (BMIMark > BMIJohn) {
  console.log("In this case, BMI Mark is higher.");
} else if (BMIMark < BMIJohn) {
  console.log("In this case, BMI John is higher. ");
} else if (BMIMark == BMIJohn) {
  console.log("The BMI of John and Mark are equals.");
}
