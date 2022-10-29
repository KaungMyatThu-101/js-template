'use strict';

// ------------------------------Scoping In Pritics II------------------------

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(firstName); // current scope chain and move to find perent scope and then global to find value
//   function printAge() {
//     // const age = 20; //variable can be same name when different scope

//     if (birthYear > 2000) {
//       var str = `oh, and you are a lucky person ${firstName}`; //var isn't block but function scope- don't own by if so can call it over if scope
//     }
//     console.log(str); //output bec: var
//     function add(a, b) {
//       return a + b;
//     }
//     // console.log(age);
//     output = 'over write the main variable';
//     console.log(output);
//   }
//   //   console.log(add(2, 5)); //can't call the blocl scope

//   let output = `${firstName}, Your age is ${age} and born in ${birthYear}`;
//   //   console.log(output);

//   printAge();
//   return age;
// } //global scope
// const firstName = 'Hachi';
// console.log(calcAge(2003));
// // printAge();

// ---------------Variable Environment Hoisting and TDZ Practice

// ----------------1

// console.log(fullName);
// // console.log(job);
// // console.log(birthYear);//can't call bec: it's in temporary dead zone(TDZ)

// var fullName = 'hachi';
// let job = 'swd';
// const birthYear = 2003;

//---------------- 2

// console.log(addDecl(2, 4));
// console.log(addExp(1, 2));
// console.log(addArr(3, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };
// var addArr = (a, b) => a + b;

// -------------------------this keyword-----------

// console.log(this); //it refer global object

// function calcAge(birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this); //undefine
// }
// console.log(2003);

// const calcAge = birthYear => {
//   console.log(this); //this,in arrow function, refer their parent function,but there's no parent function, so it refer global function
//   console.log(2022 - birthYear);
// };
// calcAge(2003);

// const mgmg = {
//   year: 2003,
//   calcAge: function () {
//     console.log(this); // this,in method, refer the object which calling this's parent mthod(calcAge) this--> calc-->mgmg(object)
//     console.log(2022 - this.year);
//   },
// };
// mgmg.calcAge();

// const koko = {
//   year: 1999,
// };

// koko.calcAge = mgmg.calcAge;
// console.log(koko);
// koko.calcAge(); //koko.calcAge()=== this(from mgmg)--> calc(parent method)-->koko(object that call this's parent method)

// const f = mgmg.calcAge;
// console.log(f);

//------------------Regular Function and Arrow Function for this KW------------------

// var firstName = 'hachi';

// const person1 = {
//   firstName: 'kelvin',
//   born: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.born);

//     // 1------------error

//     // const generation = function () {
//     //   console.log(this.born < 2010 && this.born > 1990);
//     // }; //generation is not a method, it's a function; this inside function reference undefined so this.born will show error
//     // generation(); //error

//     // 2-----------correct(solution1)\

//     // const self = this;
//     // const generation = function () {
//     //   console.log(self.born < 2010 && self.born > 1990);
//     // };
//     // generation(); //error

//     //3----------correct(solution2)

//     const generation = () => {
//       console.log(this.born < 2010 && this.born > 1990);
//     };
//     generation();
//   },
//   greet: () => console.log(`hey ${this.firstName}`), //arrow fiunction can't call this KW and refer to parent function but for object(person1) also don't have block scope so this refer the global scope and output undefined
// };

// console.log(person1.calcAge());
// person1.greet();
// person1.calcAge();

//------------------argument KW------------------

// const add = function (a, b) {
//   console.log(arguments);
//   console.log(a + b);
// };
// add(2, 5, 3, 8);

//------------------Pritimive and Objects In Practic------------------

// ----------1.Primitive type

let firstName = 'Mary';
let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'David';
console.log(oldLastName);
console.log(lastName);

// ----------2.Reference type

const jsMgMg = {
  firstName: 'javaScript',
  lastName: 'Mg Mg',
  language: ['Hmtl', 'CSS', 'Js'],
};
// const pythonMgMg = jsMgMg;
// pythonMgMg.firstName = 'Python';
// console.log(pythonMgMg);
console.log(jsMgMg);

const javaMgMg = Object.assign({}, jsMgMg); //objeect.asign can call only first upper objects and can't call nested object
javaMgMg.firstName = 'Jave';
javaMgMg.language[javaMgMg.firstName.length] = 'java';
javaMgMg.language.push('java');
console.log(javaMgMg);
