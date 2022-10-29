// -----------------templete lieral-----------------

// console.log("hello  \nworld");

// const name1 = "hachi";
// const born = 2003;
// let age = 2022 - born;
// // console.log`I'm haci and may age is {age} old`;

// const output1 = `I'm ${name1} and my age is ${age}.`;
// console.log(output1);

// const output2 = "I'm " + name1 + " and my age is " + age + ".";
// console.log(output2);

// -----------------If else(control struture-offical name)-----------------

// const age = 16;
// const isOldEnough = age >= 18; //isoldenouth variable will get boolean data type bec: comperision datatype '>' always output boolean data type
// if (isOldEnough) {
//   console.log("You can drive");
// } else {
//   const yearLeft = 18 - age;
//   console.log("You need to wait " + yearLeft + " years");
// }

//----------------  type conversion and coercion//----------------

//1. type conversion//manually

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(inputYear));
// console.log(typeof String(inputYear));

// console.log(Number("Mg Mg"));
// console.log(typeof Number("Mg Mg"));

//2. type coercion //autoo change datatype

// console.log("I am" + 19 + "years old"); //+ change number to string

// console.log(`23` - "10" - 3); // - change string to number
// console.log(`23` - "10" * 3); // * change string to number
// console.log(`23` - "10" / 3); // / change string to number

// let n = "1" + 1; //11
// n = n - 1;
// console.log(n);

//----------------  falsy and truly value//----------------

// let data = -11;

// if ((result = data + 11)) {
//   console.log("vale is not fase");
// } else {
//   console.log("value is false");
//   console.log(typeof result); //it'll show false bec: conduction is 0 and it's falsy value
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(""));
// console.log(Boolean({})); //it's empty but not false bec:{}is not empty value

//----------------  Boolean Login//----------------

////---------------- Logical operators//----------------

// const hasDriverLicense = false;
// const hasGoodVision = true;
// const isTried = true;

// // console.log(hasDriverLicense && hasGoodVision);
// // console.log(hasDriverLicense || hasGoodVision);
// // console.log(!hasDriverLicense && hasGoodVision);

// if (hasDriverLicense && hasGoodVision && !isTried) {
//   console.log("she should drive a car");
// } else {
//   console.log("she can't drive");
// }

////---------------- switch statement//----------------// sane as if else
// const day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     break;
//   case "tuesday":
//   case "wednesday":
//     console.log("Plan course structure");
//     break; //if no break the next conduction will also output
//   default:
//     console.log("no plan for this day");
//     break;
// }

// if (day === "wednesday") {
//   console.log("plan corse structure");
// } else if (day === monday) {
//   console.log("plan course structe");
// } else {
//   console.log("no plan for this day");
// }

//////---------------- theory: statements and Expressions----------------

// if (10 > 2) {
//   const str = "this is a 10 value"; // "this is a value is a expression and the whold sentense is a statements
// }
// console.log(`Hello I'am ${2022 - 2004} years old`); //templete literals accept only expression inside it, but not statements

//////---------------- theory: conditional(ternary) operator//it's a expression so can put inside template literals----------------

// const age = 19;
// age >= 18 ? console.log("You can drink") : console.log("No, You can't drink");

// const age = 16;
// const drinkPermit = age >= 18 ? "beer" : "water";
// console.log(drinkPermit);

// // or

// console.log(`I can only drink ${age >= 18 ? "beer" : "water"} `);

//

//////---------------- theory: statements and Expressions----------------
