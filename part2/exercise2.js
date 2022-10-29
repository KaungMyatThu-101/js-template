"use strict";

//-------------------- function//--------------------

// function logger() {
//   console.log("Heeyyo Woo");
// }

// console.log(logger());
// logger();

// function fruitProcessor(apples, oranges) {
//   //apple,orange is a function parameter
//   console.log(apples, oranges);
//   const juice = `This juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// // fruitProcessor(5, 0); //5,0 is argument(function argument)
// // console.log(fruitProcessor(5, 0));
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(3, 0));

//-------------------- Function Declaration and Function Expression//--------------------

// Function Declaration

// function calcAge1(birthYear) {
//   const age = 2022 - birthYear;
//   return age;
//   // return 2022-birthYear;
// }
// const age1 = calcAge1(2003);
// console.log(age1);

// // Function Expression

// const age2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// console.log(age2(1999));

//-------------------- arrow function//--------------------

// const myArrowFunction = (para1, para2) => {
//   return para1 * para2;
// };
// console.log(myArrowFunction(2, 3));

// // normal function
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1999);
// console.log(age2);

// // arrow function
// const calcAge1 = (birthYear) => 2022 - birthYear;
// const age = calcAge1(2003);
// console.log(age);

// const Retire = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // console.log(retirement);
//   return `${firstName} retire in ${retirement}`;
// };
// // Retire(2003);
// console.log(Retire(2000, "Kelvin"));

//--------------------  function calling other function//--------------------

// function fruitCutter(fruits) {
//   return fruits * 4;
// }

// function fruitProcessor(apples, oranges) {
//   //apple,orange is a function parameter
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);

//   // console.log(apples, oranges);

//   const juice = `This juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }
// // fruitProcessor(5, 0); //5,0 is argument(function argument)
// // console.log(fruitProcessor(5, 0));
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// console.log(fruitProcessor(3, 2));

// fruitProcessor(5, 3);

//---------- function summary

// const calcAge = (birthYear) => {
//   return 2022 - birthYear;
// };
// const retirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const leftYear = 60 - age;
//   console.log(leftYear);

//   if (leftYear > 0) {
//     return console.log(`${firstName} retire in ${leftYear}`);
//   } else {
//     return -1;
//   }
// };
// retirement(2003, "mk");

// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//       let ingredientAmount = amount * factor;
//       if (ingredientAmount > 3) {
//         unit += "s";
//       }
//       console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//   };
//   hummus(1);

//------------------ closure

//-------s 1

// let x = 1;
// const parentFunction = () => {
//   //local scope
//   let myValue = 2;
//   console.log(x);
//   console.log(`My value = ${myValue}`);

//   const childFunction = () => {
//     console.log((x += 5));
//     console.log((myValue += 1));
//     // console.log(x);
//   };
//   return childFunction;
// };
// const result = parentFunction();
// result();
// result();

//
// 1;
// My value = 2
// 6;
// 3;
// 11;
// 4;

// -------2

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));

//------------------ Recursion(function repeat itself)

// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 4));

//  2*power(2, 3)//2*8=16
//  2*power(2,2) //2*4
//  2*power(2,1) //2*2
//  2*power(2,0) = 1; //2

//--------------------  Data Structure- array,object//--------------------

////-------------------- array

// const Gender = "Male";
// const friends = ["Hachi", "David", Gender];
// const birthYear = new Array(2000, 2001, 2002);
// console.log(friends);
// console.log(friends[0]); //element no:0

// console.log(friends.length); //.length = property
// console.log(friends[friends.length - 1]);

// friends[2] = "Mg Mg";
// console.log(friends);

////-------------------- array methods

// const Gender = "Male";
// const friends = ["Hachi", "David", Gender];

// friends.push("Steve"); //.push = method
// console.log(friends);

// const resultPush = friends.push("Micky"); //these methods change the orignal array value
// console.log(resultPush);

// friends.unshift("Smit");
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);
// const resultShift = friends.shift();
// console.log(friends);
// console.log(resultShift);

// console.log(friends.indexOf("Male")); //find the array index

// console.log(friends.includes("Male")); //check the array element and return true or fale
// console.log(friends.includes("Hello"));

////-------------------- object

// const personalObject = {
//   firstName: "hello",
//   lastName: "world",
//   birthYear: 2003,
//   // age: 2022 - birthYear, //error
//   friends: ["steve", "mike"],
// };

// const nameKey = "Name";
// console.log(personalObject);
// console.log(personalObject.friends); // . operator (. notation) .friend = property
// console.log(personalObject["firstName"]); //bracket notation
// console.log(personalObject["last" + nameKey]);
// personalObject.location = "BKK"; //insert data into object

// const interestIn = prompt(
//   "choose one: firstName, lastName, birthYear or friends"
// );
// console.log(interestIn);
// console.log(personalObject[interestIn]);

// if (personalObject[interestIn]) {
//   console.log(personalObject[interestIn]);
// } else {
//   console.log(
//     `Wrong Requent ${interestIn} choose between firstName, lastName, birthYear or friends`
//   );
// }

//-------------------- object methods

// const boxData = {
//   firstName: "Thakhin",
//   lastName: "Hachi",
//   birthYear: 2003,
//   hasDriverLicense: true,
//   Location: "NYC", //propery
//   // caclAge: (birthYear) => 2022 - birthYear, //function becomes methid inside object
//   caclAge: function () {
//     // 1
//     // return 2002 - boxData.birthYear;

//     // or

//     // 2
//     // console.log(this);
//     // return 2022 - this.birthYear;

//     // or

//     // 3
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },

//   getSummery: function () {
//     return `${this.lastName} is ${this.caclAge()} years old and has ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver license`;
//   },
// };

// // console.log(boxData.caclAge(boxData.birthYear));
// // console.log(boxData["caclAge"](boxData.birthYear));
// console.log(boxData);
// console.log(boxData.caclAge());
// console.log(boxData.age);
// console.log(boxData.getSummery());

// ------------------------------loop ------------------------------

// for (let index = 0; index < 3; index++) {
//   console.log(`hello ${index}`);
// }

// ------------------------------ Looping Arrays, Breaking and Continuing ------------------------------

// // 1

// const gender1 = "Male";
// const function1 = (x) => {
//   // console.log(18);
// };
// function1();
// const friends = ["Hachi", 19, "David", ["hello", gender1], function1];

// // console.log(typeof friends);
// // console.log(1);

// // 2

// const collector = [];
// for (let index = 0; index < friends.length; index++) {
//   collector[index] = typeof friends[index];
//   // collector.push(18);
// }
// console.log(collector);
// console.log(2);

// // -----------------for loop and break

// // 3

// for (let index = 0; index < friends.length; index++) {
//   if (typeof friends[index] === "function") break;
//   console.log(friends[index], typeof friends[index]);
// }
// console.log(3);

// // -----------------for loop and continue

// // 4

// for (let index = 0; index < friends.length; index++) {
//   if (typeof friends[index] !== "string") continue;
//   console.log(friends[index], typeof friends[index]);
// }
// console.log(4);

// ------------------------------  Looping Backwards and Loops in Loop ------------------------------

// ----------------  Looping Backwards

// const gender1 = "Male";
// const function1 = (x) => {
//   return x;
// };
// const friends = ["Hachi", 19, "David", ["hello", gender1], function1];

// for (let index = friends.length - 1; index >= 0; index--) {
//   console.log(friends[index]);
// }

// // Loops in Loop ------------------------------

// for (let exercises = 1; exercises < 3; exercises++) {
//   console.log(`------exercises ${exercises}`);
//   for (let rep = 0; rep < 3; rep++) {
//     console.log(`exercises repeat ${rep}`);
//   }
// }

// ------------------------------The while loop------------------------------

// let rep = 1;
// while (rep < 3) {
//   //while loop accept only one condition in bracket
//   console.log(`exercises repeat ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 4) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  // break;
  if ((dice = 4)) {
    console.log("loop is stop coz is 4");
  }
}
